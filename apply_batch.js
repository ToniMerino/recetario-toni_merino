const fs=require('fs'),vm=require('vm'),path=require('path');
const dir='/mnt/data/audit_batch2';
const p=path.join(dir,'data.js');
const src=fs.readFileSync(p,'utf8');const sb={window:{}};vm.createContext(sb);vm.runInContext(src,sb);const rs=sb.window.RECIPES;
const ids=new Set(['rtm-0056','rtm-0124','rtm-0141','rtm-0095','rtm-0005','rtm-0160','rtm-0159','rtm-0099','rtm-0084','rtm-0109','rtm-0113','rtm-0080','rtm-0102','rtm-0077','rtm-0093','rtm-0057','rtm-0081','rtm-0076','rtm-0137','rtm-0088','rtm-0115','rtm-0125','rtm-0104','rtm-0162']);
function splitStep(s){
  s=String(s).trim();
  if(s.length<165) return [s];
  // Conservative segmentation: sentence boundaries; then semicolon only when both chunks remain meaningful.
  let parts=s.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÜÑ0-9])/u).map(x=>x.trim()).filter(Boolean);
  let out=[];
  for(const part of parts){
    if(part.length>220 && part.includes('; ')){
      const subs=part.split(/;\s+/).map(x=>x.trim()).filter(Boolean);
      if(subs.length>1 && subs.every(x=>x.length>25)) out.push(...subs.map((x,i)=> i<subs.length-1 && !/[.!?]$/.test(x)?x+';':x));
      else out.push(part);
    } else out.push(part);
  }
  return out;
}
let report=[];
for(const r of rs){if(!ids.has(r.id))continue;const before=(r.steps||[]).length;let after=[];for(const st of (r.steps||[])){after.push(...splitStep(st));}r.steps=after;report.push([r.id,r.title,before,after.length]);}
// explicit cleanup: only obvious non-recipe editorial sentence in Fideua, retain cooking advice by moving to notes if desired
let r=rs.find(x=>x.id==='rtm-0088'); if(r){r.steps=r.steps.filter(s=>!s.includes('mil vegades més bo que l\'industrial'));}
// Version
let out='// Recetario Toni Merino · Base v2.1.17 · lote amplio de legibilidad 2\nwindow.RTM_DATA_VERSION = "2.1.17";\nwindow.RECIPES = '+JSON.stringify(rs,null,2)+';\n';fs.writeFileSync(p,out);
// update text files/version refs
for(const f of ['index.html','README.md','README_ACTUALIZACION.md','INVENTARIO_RECETARIO.md','manifest.webmanifest','sw.js','app.js','CHANGELOG.md']){
 const fp=path.join(dir,f); if(!fs.existsSync(fp)) continue; let t=fs.readFileSync(fp,'utf8'); t=t.replace(/2\.1\.16/g,'2.1.17').replace(/2\.1\.16-20260910/g,'2.1.17-20260910'); fs.writeFileSync(fp,t);
}
// prepend changelog note if file exists
const ch=path.join(dir,'CHANGELOG.md'); if(fs.existsSync(ch)){let t=fs.readFileSync(ch,'utf8'); const note='## v2.1.17 · Auditoría de legibilidad · lote amplio 2\n\n- Reestructuración conservadora de 24 fichas con pasos densos: se divide la preparación en acciones más manejables sin resumir ni alterar el contenido culinario.\n- Limpieza de una frase editorial no culinaria en Fideuà amb cloïsses.\n- Validación de 163 recetas e IDs únicos.\n\n'; if(!t.includes('## v2.1.17 · Auditoría')) fs.writeFileSync(ch,note+t);}
console.log(JSON.stringify(report,null,2));
