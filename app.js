const STORAGE_KEY="rtm_v01_records";
const BASE_SNAPSHOT_KEY="rtm_base_snapshot";
const DATA_VERSION_KEY="rtm_data_version";
const CURRENT_DATA_VERSION=window.RTM_DATA_VERSION||"2.1.1";
let adminMode=false;
let records=loadRecords(),activeFilter="all",activeFamily="all",activeFeature="all",activeSort="az";const $=id=>document.getElementById(id);
function clone(v){return JSON.parse(JSON.stringify(v))}
function sameRecord(a,b){return JSON.stringify(a)===JSON.stringify(b)}
function loadRecords(){
  const base=clone(window.RECIPES||[]);
  let saved=null,previousBase=null;
  try{saved=JSON.parse(localStorage.getItem(STORAGE_KEY))}catch(e){}
  try{previousBase=JSON.parse(localStorage.getItem(BASE_SNAPSHOT_KEY))}catch(e){}
  if(!Array.isArray(saved)||!saved.length){
    localStorage.setItem(BASE_SNAPSHOT_KEY,JSON.stringify(base));
    localStorage.setItem(DATA_VERSION_KEY,CURRENT_DATA_VERSION);
    return base;
  }
  // Primera migración desde las versiones 1.0/1.1: conserva las fichas locales
  // y añade automáticamente las nuevas fichas del catálogo base.
  if(!Array.isArray(previousBase)){
    const byId=new Map(base.map(r=>[r.id,r]));
    saved.forEach(r=>byId.set(r.id,r));
    const merged=[...byId.values()];
    localStorage.setItem(STORAGE_KEY,JSON.stringify(merged));
    localStorage.setItem(BASE_SNAPSHOT_KEY,JSON.stringify(base));
    localStorage.setItem(DATA_VERSION_KEY,CURRENT_DATA_VERSION);
    return merged;
  }
  // En actualizaciones posteriores solo preserva cambios realmente hechos por el usuario.
  const savedById=new Map(saved.map(r=>[r.id,r]));
  const oldBaseById=new Map(previousBase.map(r=>[r.id,r]));
  const deletedIds=new Set(previousBase.filter(r=>!savedById.has(r.id)).map(r=>r.id));
  const localOverrides=new Map();
  saved.forEach(r=>{
    const old=oldBaseById.get(r.id);
    if(!old||!sameRecord(r,old)) localOverrides.set(r.id,r);
  });
  const merged=base.filter(r=>!deletedIds.has(r.id)).map(r=>{
    const local=localOverrides.get(r.id);
    if(!local)return r;
    // Conserva la edición local, pero incorpora campos nuevos del modelo que no existían antes.
    return {...r,...local,vegetarian:local.vegetarian??r.vegetarian,vegan:local.vegan??r.vegan,dietary_note:local.dietary_note??r.dietary_note,favorite:local.favorite??r.favorite,image:local.image??r.image,gallery:local.gallery??r.gallery};
  });
  localOverrides.forEach((r,id)=>{if(!base.some(b=>b.id===id))merged.push(r)});
  localStorage.setItem(STORAGE_KEY,JSON.stringify(merged));
  localStorage.setItem(BASE_SNAPSHOT_KEY,JSON.stringify(base));
  localStorage.setItem(DATA_VERSION_KEY,CURRENT_DATA_VERSION);
  return merged;
}
function saveRecords(){localStorage.setItem(STORAGE_KEY,JSON.stringify(records))}
function esc(v=""){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function show(view){["catalogView","detailView","formView"].forEach(id=>$(id).classList.toggle("hidden",id!==view));window.scrollTo({top:0,behavior:"smooth"})}
function dietaryTerms(r){return [r.vegetarian?"vegetariana vegetariano":"",r.vegan?"vegana vegano":"",r.dietary_note||""]}
function matches(r,q){return [r.title,r.origin,r.author,r.type,r.family,r.status,...(r.ingredients||[]),...(r.tags||[]),...dietaryTerms(r)].join(" ").toLowerCase().includes(q)}
function hasTagLike(r,term){return (r.tags||[]).some(t=>t.toLowerCase().replace(/[^a-z0-9áéíóúüñ]/g,"").includes(term))||[r.title,r.origin,r.type].join(" ").toLowerCase().includes(term)}
function featureMatches(r){if(activeFeature==="all")return true;if(activeFeature==="thermomix")return hasTagLike(r,"thermomix");if(activeFeature==="airfryer")return hasTagLike(r,"airfryer")||hasTagLike(r,"air fryer");if(activeFeature==="tested")return /probada|excelente|muy buena|buena/i.test(r.status||"");if(activeFeature==="excellent")return /excelente/i.test(r.status||"");if(activeFeature==="vegetarian")return r.vegetarian===true;if(activeFeature==="vegan")return r.vegan===true;if(activeFeature==="favorite")return r.favorite===true;return true}
function populateFamilyFilter(){const sel=$("familyFilter");const current=activeFamily;const families=[...new Set(records.map(r=>r.family).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es"));sel.innerHTML='<option value="all">Todas las familias</option>'+families.map(f=>`<option value="${esc(f)}">${esc(f)}</option>`).join("");sel.value=families.includes(current)?current:"all";activeFamily=sel.value}
function sortRecords(items){const coll=(a,b)=>String(a||"").localeCompare(String(b||""),"es");return items.sort((a,b)=>{if(activeSort==="za")return coll(b.title,a.title);if(activeSort==="favorites")return Number(Boolean(b.favorite))-Number(Boolean(a.favorite))||coll(a.title,b.title);if(activeSort==="family")return coll(a.family,b.family)||coll(a.title,b.title);if(activeSort==="kind")return coll(a.record_type,b.record_type)||coll(a.title,b.title);return coll(a.title,b.title)})}
function renderStats(){const recipes=records.filter(r=>r.record_type==="recipe").length,techniques=records.filter(r=>r.record_type==="technique").length,vegetarian=records.filter(r=>r.vegetarian===true).length,vegan=records.filter(r=>r.vegan===true).length,favorites=records.filter(r=>r.favorite===true).length;$("stats").innerHTML=`<span><b>${records.length}</b> fichas</span><span><b>${recipes}</b> recetas</span><span><b>${techniques}</b> técnicas</span><span><b>${vegetarian}</b> vegetarianas</span><span><b>${vegan}</b> veganas</span><span><b>${favorites}</b> favoritas</span>`}
function renderCatalog(){const q=$("searchInput").value.trim().toLowerCase();const filtered=sortRecords(records.filter(r=>activeFilter==="all"||(activeFilter==="favorite"?r.favorite===true:r.record_type===activeFilter)).filter(r=>activeFamily==="all"||r.family===activeFamily).filter(featureMatches).filter(r=>!q||matches(r,q)));renderStats();$("count").textContent=`${filtered.length} ${filtered.length===1?"ficha":"fichas"}`;$("catalog").innerHTML=filtered.map(r=>`<article class="card ${r.record_type==="technique"?"technique":""}" data-id="${esc(r.id)}"><div class="card-bar"></div><div class="card-image ${imageData(r)?"has-photo":""}">${r.favorite?`<span class="card-favorite" title="Favorita" aria-label="Favorita">★</span>`:""}${imageData(r)?`<img src="${esc(r.image.file)}" alt="${imageAlt(r)}" loading="lazy">`:esc(r.emoji||(r.record_type==="technique"?"🥣":"🍽️"))}</div><div class="card-body"><span class="kind">${r.record_type==="technique"?"Técnica culinaria":"Receta"}</span><h2>${esc(r.title)}</h2><p>${esc(r.family||r.origin||"")}</p></div></article>`).join("")||`<p class="count">No se han encontrado fichas.</p>`;document.querySelectorAll(".card").forEach(c=>c.addEventListener("click",()=>openRecord(c.dataset.id)))}
function quick(l,v){return `<div><b>${l}</b>${esc(v||"No indicado")}</div>`}
function imageData(r){return r&&r.image&&r.image.file?r.image:null}
function imageAlt(r){const img=imageData(r);return esc((img&&img.caption)||r.title||"Imagen de la receta")}
function imageFigure(r,context="detail"){const img=imageData(r);if(!img)return "";return `<figure class="recipe-image recipe-image-${context}"><img src="${esc(img.file)}" alt="${imageAlt(r)}" loading="lazy" onclick="openImageViewer('${esc(img.file)}','${imageAlt(r)}')"><figcaption>${esc(img.caption||r.title||"")}</figcaption></figure>`}
function openImageViewer(src,alt){let viewer=document.getElementById("imageViewer");if(!viewer){viewer=document.createElement("div");viewer.id="imageViewer";viewer.className="image-viewer";viewer.addEventListener("click",e=>{if(e.target===viewer||e.target.closest(".image-viewer-close"))viewer.remove()});document.body.appendChild(viewer)}viewer.innerHTML=`<button class="image-viewer-close" aria-label="Cerrar">×</button><img src="${esc(src)}" alt="${esc(alt)}">`;}

function galleryFigure(r){const items=(r.gallery||[]).filter(x=>x&&x.file);if(!items.length)return "";return `<section class="recipe-gallery"><h2>📜 Documento original</h2><p class="gallery-intro">Documentación original conservada junto a la ficha normalizada.</p><div class="gallery-grid">${items.map((img,i)=>`<figure class="gallery-item"><button type="button" onclick="openImageViewer('${esc(img.file)}','${esc(img.caption||`Documento ${i+1}`)}')"><img src="${esc(img.file)}" alt="${esc(img.caption||`Documento ${i+1}`)}" loading="lazy"></button><figcaption><strong>${esc(img.caption||`Documento ${i+1}`)}</strong>${img.author?`<span>${esc(img.author)}</span>`:""}</figcaption></figure>`).join("")}</div></section>`}
function openRecord(id){const r=records.find(x=>x.id===id);if(!r)return;$("detail").innerHTML=`<div class="print-identity"><strong>Recetario Toni Merino</strong><span>Ficha normalizada · ${r.record_type==="technique"?"Técnica culinaria / base":"Receta"}</span><span>RTM v2.1.1</span></div><header class="detail-head ${r.record_type==="technique"?"technique":""}"><div class="detail-head-top"><span class="kind">${r.record_type==="technique"?"Técnica culinaria":"Receta"}</span><button class="favorite-btn detail-favorite ${r.favorite?"active":""}" onclick="toggleFavorite('${esc(r.id)}')" aria-pressed="${r.favorite?"true":"false"}">${r.favorite?"★ Favorita":"☆ Marcar favorita"}</button><button class="cook-btn" onclick="startCookMode('${esc(r.id)}')">🍳 Modo cocina</button></div><h1>${esc(r.title)}</h1><p class="detail-sub">${esc([r.author,r.origin].filter(Boolean).join(" · "))}</p></header>${imageFigure(r,"detail")}<div class="detail-body"><div class="quick">${quick("Tipo",r.type)}${quick("Familia culinaria",r.family)}${quick("Raciones",r.servings)}${quick("Tiempo",r.time)}${quick("Dificultad",r.difficulty)}</div><div class="dietary">${r.vegetarian?`<span class="diet-badge">Vegetariana</span>`:""}${r.vegan?`<span class="diet-badge">Vegana</span>`:""}${r.dietary_note?`<p>${esc(r.dietary_note)}</p>`:""}</div><h2>Ingredientes</h2><ul>${(r.ingredients||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul><h2>Preparación</h2><ol>${(r.steps||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ol>${r.presentation?`<h2>Presentación</h2><p>${esc(r.presentation)}</p>`:""}${r.tips?`<h2>Consejos</h2><div class="note">${esc(r.tips)}</div>`:""}${galleryFigure(r)}${r.status||r.notes?`<h2>Mi valoración</h2><p><b>Estado:</b> ${esc(r.status||"—")}</p>${r.notes?`<p>${esc(r.notes)}</p>`:""}`:""}<div class="tags">${(r.tags||[]).map(t=>`<span class="tag">#${esc(t.replace(/^#/,""))}</span>`).join("")}</div><div class="detail-actions">${adminMode?`<button class="primary" onclick="editRecord('${esc(r.id)}')">Editar</button>`:""}<button onclick="window.print()">Guardar PDF</button>${adminMode?`<button onclick="deleteRecord('${esc(r.id)}')">Eliminar</button>`:""}</div></div>`;show("detailView")}

let cookState={recordId:null,index:0,done:new Set(),wakeLock:null};
async function requestWakeLock(){try{if("wakeLock" in navigator){cookState.wakeLock=await navigator.wakeLock.request("screen")}}catch(e){console.warn("Wake Lock no disponible:",e)}}
async function releaseWakeLock(){try{if(cookState.wakeLock){await cookState.wakeLock.release();cookState.wakeLock=null}}catch(e){}}
function startCookMode(id){const r=records.find(x=>x.id===id);if(!r||!(r.steps||[]).length)return;cookState={recordId:id,index:0,done:new Set(),wakeLock:null};document.body.classList.add("cooking");let overlay=document.getElementById("cookOverlay");if(!overlay){overlay=document.createElement("section");overlay.id="cookOverlay";overlay.className="cook-overlay";document.body.appendChild(overlay)}renderCookMode();requestWakeLock()}
function renderCookMode(){const r=records.find(x=>x.id===cookState.recordId),overlay=document.getElementById("cookOverlay");if(!r||!overlay)return;const steps=r.steps||[],i=Math.max(0,Math.min(cookState.index,steps.length-1));cookState.index=i;const done=cookState.done.has(i);overlay.innerHTML=`<div class="cook-shell"><header class="cook-top"><h1>${esc(r.title)}</h1><button class="cook-exit" onclick="exitCookMode()">Salir</button></header>${imageFigure(r,"cook")}<div class="cook-layout"><aside id="cookIngredients" class="cook-panel cook-ingredients"><h2>Ingredientes</h2><ul>${(r.ingredients||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul></aside><main class="cook-panel"><div class="cook-step-meta"><span>Paso ${i+1} de ${steps.length}</span><span>${cookState.done.size} completados</span></div><p class="cook-step ${done?"done":""}">${esc(steps[i])}</p><div class="cook-progress"><span style="width:${((i+1)/steps.length)*100}%"></span></div><div class="cook-controls"><button class="cook-ingredients-toggle" onclick="toggleCookIngredients()">Ingredientes</button><button onclick="cookPrev()" ${i===0?"disabled":""}>← Anterior</button><button onclick="toggleCookDone()">${done?"↩ Desmarcar":"✓ Hecho"}</button><button class="primary" onclick="cookNext()" ${i===steps.length-1?"disabled":""}>Siguiente →</button></div></main></div></div>`}
function cookPrev(){if(cookState.index>0){cookState.index--;renderCookMode()}}
function cookNext(){const r=records.find(x=>x.id===cookState.recordId);if(r&&cookState.index<(r.steps||[]).length-1){cookState.index++;renderCookMode()}}
function toggleCookDone(){cookState.done.has(cookState.index)?cookState.done.delete(cookState.index):cookState.done.add(cookState.index);renderCookMode()}
function toggleCookIngredients(){const el=document.getElementById("cookIngredients");if(el)el.classList.toggle("open")}
async function exitCookMode(){await releaseWakeLock();const overlay=document.getElementById("cookOverlay");if(overlay)overlay.remove();document.body.classList.remove("cooking");cookState={recordId:null,index:0,done:new Set(),wakeLock:null}}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&document.body.classList.contains("cooking")&&!cookState.wakeLock)requestWakeLock()});

function requireAdmin(){if(adminMode)return true;alert("Esta acción solo está disponible en modo administración.");return false}
function setAdminMode(value){adminMode=Boolean(value);const badge=$("modeBadge"),btn=$("adminBtn"),notice=$("adminNotice"),add=$("addBtn"),form=$("formView");badge.textContent=adminMode?"Administración":"Consulta";badge.classList.toggle("admin",adminMode);btn.textContent=adminMode?"🔓 Salir":"🔐 Administración";btn.classList.toggle("active",adminMode);notice.classList.toggle("hidden",!adminMode);add.classList.toggle("hidden",!adminMode);if(!adminMode&&form&&!form.classList.contains("hidden"))show("catalogView");const detail=$("detailView");if(detail&&!detail.classList.contains("hidden")){const id=cookState.recordId||null; /* el detalle se refresca al volver a abrirlo */}}
function emptyForm(){const f=$("recipeForm");f.reset();f.elements.id.value="";$("formTitle").textContent="Añadir ficha"}
function editRecord(id){if(!requireAdmin())return;const r=records.find(x=>x.id===id);if(!r)return;const f=$("recipeForm");const values={id:r.id,record_type:r.record_type,title:r.title,origin:r.origin,author:r.author,type:r.type,family:r.family,servings:r.servings,time:r.time,difficulty:r.difficulty,status:r.status,ingredients:(r.ingredients||[]).join("\n"),steps:(r.steps||[]).join("\n"),presentation:r.presentation,tips:r.tips,notes:r.notes,tags:(r.tags||[]).join(", "),vegetarian:String(r.vegetarian===true),vegan:String(r.vegan===true),dietary_note:r.dietary_note||""};Object.entries(values).forEach(([k,v])=>{if(f.elements[k])f.elements[k].value=v||""});$("formTitle").textContent="Editar ficha";show("formView")}
function toggleFavorite(id){const r=records.find(x=>x.id===id);if(!r)return;r.favorite=!r.favorite;saveRecords();renderCatalog();openRecord(id)}
function deleteRecord(id){if(!requireAdmin())return;if(!confirm("¿Eliminar esta ficha?"))return;records=records.filter(r=>r.id!==id);saveRecords();renderCatalog();show("catalogView")}
$("recipeForm").addEventListener("submit",e=>{e.preventDefault();if(!requireAdmin())return;const o=Object.fromEntries(new FormData(e.target).entries());const data={record_type:o.record_type,title:o.title.trim(),origin:o.origin.trim(),author:o.author.trim(),type:o.type.trim(),family:o.family.trim(),servings:o.servings.trim(),time:o.time.trim(),difficulty:o.difficulty.trim(),status:o.status.trim(),ingredients:o.ingredients.split(/\n+/).map(x=>x.trim()).filter(Boolean),steps:o.steps.split(/\n+/).map(x=>x.replace(/^\d+[\.\-\)]\s*/,"").trim()).filter(Boolean),presentation:o.presentation.trim(),tips:o.tips.trim(),notes:o.notes.trim(),tags:o.tags.split(",").map(x=>x.trim().replace(/^#/,"")).filter(Boolean),vegetarian:o.vegetarian==="true",vegan:o.vegan==="true",dietary_note:o.dietary_note.trim(),emoji:o.record_type==="technique"?"🥣":"🍽️"};if(o.id){const i=records.findIndex(r=>r.id===o.id);records[i]={...records[i],...data}}else{data.id=`rtm-${Date.now()}`;records.push(data)}saveRecords();populateFamilyFilter();renderCatalog();show("catalogView")});
$("searchInput").addEventListener("input",renderCatalog);$("sortFilter").addEventListener("change",e=>{activeSort=e.target.value;renderCatalog()});$("familyFilter").addEventListener("change",e=>{activeFamily=e.target.value;renderCatalog()});$("featureFilter").addEventListener("change",e=>{activeFeature=e.target.value;renderCatalog()});document.querySelector(".chips").addEventListener("click",e=>{if(!e.target.matches(".chip"))return;activeFilter=e.target.dataset.filter;document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active",c===e.target));renderCatalog()});$("adminBtn").addEventListener("click",()=>{setAdminMode(!adminMode);show("catalogView")});$("addBtn").addEventListener("click",()=>{if(!requireAdmin())return;emptyForm();show("formView")});$("backBtn").addEventListener("click",()=>show("catalogView"));$("topPrintBtn").addEventListener("click",()=>window.print());$("cancelBtn").addEventListener("click",()=>show("catalogView"));$("exportBtn").addEventListener("click",()=>{if(!requireAdmin())return;const blob=new Blob([JSON.stringify(records,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="recetario_toni_merino.json";a.click();URL.revokeObjectURL(a.href)});$("importInput").addEventListener("change",async e=>{if(!requireAdmin()){e.target.value="";return;}const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data))throw new Error();records=data;saveRecords();populateFamilyFilter();renderCatalog();show("catalogView")}catch(err){alert("El archivo no es una copia válida.")}});
// Estabilización: elimina service workers y cachés antiguos que puedan servir versiones obsoletas.
(async function stabiliseVersion(){
  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(registration => registration.unregister()));
    }
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.filter(key => key.startsWith("rtm-")).map(key => caches.delete(key)));
    }
  } catch (error) {
    console.warn("No se pudieron limpiar cachés antiguas:", error);
  }
})();
setAdminMode(false);populateFamilyFilter();renderCatalog();
