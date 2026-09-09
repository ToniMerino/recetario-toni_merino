const fs=require('fs'),vm=require('vm');
const p='/mnt/data/audit5/data.js';
const code=fs.readFileSync(p,'utf8'); const sb={window:{}}; vm.createContext(sb); vm.runInContext(code,sb); const rs=sb.window.RECIPES;
function R(id){const r=rs.find(x=>x.id===id); if(!r) throw new Error(id); return r;}
// rtm-0056: remove non-ingredient editorial residue
R('rtm-0056').ingredients = R('rtm-0056').ingredients.filter(x=>!/^Para El Glaseado: Puedes prorratear/i.test(x));
// rtm-0059: remove duplicated hummus step, preserving full first occurrence
let d=R('rtm-0059').steps; R('rtm-0059').steps=d.filter((x,i,a)=>a.indexOf(x)===i);
// rtm-0077: split long phases for web readability without content loss
R('rtm-0077').steps = [
  'Salsa brava: calienta un buen chorro de AOVE en un cazo grande y dora a fuego medio-bajo los 2 ajos muy picados.',
  'Añade 300 g de cebolla de Figueres o cebolla morada muy picada, sala ligeramente y sofríe a fuego medio-bajo unos 30 min, removiendo. Que se agarre ligeramente al fondo ayudará a intensificar el sabor.',
  'Incorpora 2 g de pimentón dulce y 3 g de pimentón picante; remueve solo unos segundos para que no se quemen y añade unos 50 ml de agua para desglasar el fondo.',
  'Añade las cayenas troceadas al gusto, 2 cucharadas de carne de ñora o pimiento choricero y 100 g de tomate concentrado. Salpimienta y mezcla bien.',
  'Incorpora 1 kg de tomate picado y 10 ml de salsa Perrins. Tapa y cocina a fuego medio-bajo durante 2 h, controlando y removiendo cada 15 min.',
  'Pasa la salsa por el pasapurés para retirar pieles y pepitas. Reserva hasta el montaje.',
  'Mayonesa: retira el germen del ajo y blanquéalo 20 s en agua hirviendo para suavizarlo.',
  'Pon en el vaso de la batidora el ajo, 2 huevos L y sal. Añade una parte de los 175 ml de aceite de girasol y 175 ml de AOVE arbequina y empieza a triturar. Cuando emulsione, incorpora el resto en hilo sin dejar de batir.',
  'Añade zumo de limón al gusto, termina de integrar con una espátula y pasa la mayonesa al sifón. Coloca dos cargas siguiendo las instrucciones del fabricante, agita y deja reposar en nevera un mínimo de 30 min.',
  'Patatas: pela y lava las patatas medianas. Córtalas por la mitad a lo largo y divide cada mitad en 3 gajos. Déjalas en agua fría 15 min.',
  'Seca muy bien los gajos y colócalos en una bandeja de horno cubiertos de AOVE, sin amontonarlos.',
  'Confita en horno precalentado a 120 °C durante aproximadamente 1 h. El tiempo es orientativo: comprueba con un palillo que estén tiernas.',
  'Retira las patatas del aceite y déjalas escurrir en un colador. Aprovecha el mismo aceite para freírlas después.',
  'Calienta bien el aceite y fríe las patatas entre 2 y 5 min, según el dorado deseado. Escúrrelas sobre papel de cocina y sala al gusto.',
  'Monta el plato colocando los gajos en forma de flor. Añade un par de cucharadas generosas de salsa brava, termina con la mayonesa del sifón y espolvorea pimentón dulce o picante.'
];
// rtm-0087: break giant migration paragraph into executable steps, preserving stated params
R('rtm-0087').steps = [
  'Pela los langostinos y reserva las colas.',
  'Prepara el fumet: calienta parte del aceite, añade las cabezas de los langostinos y sofríelas 4-5 min.',
  'Añade 500 g de agua y cocina 10 min · Varoma · velocidad 1. Cuela y reserva el fumet.',
  'Pon en el vaso la chalota, la cebolla, el ajo y el aceite. Pica 8 s · velocidad 6. Baja los restos de las paredes con la espátula.',
  'Sofríe 12 min · Varoma · velocidad cuchara.',
  'Añade las anillas de calamar y programa 10 min · Varoma · giro inverso · velocidad cuchara.',
  'Incorpora el vino blanco y cocina 5 min · Varoma · giro inverso · velocidad cuchara, sin cubilete para favorecer la evaporación del alcohol.',
  'Pasa el contenido a una paella y deja reducir el líquido entre 5 y 10 min, según la cantidad que quede.',
  'Añade el tomate, el perejil, la hoja de laurel y la pimienta. Sofríe con paciencia hasta que el tomate quede bien cocinado.',
  'Incorpora los fideos de fideuà y el azafrán. Remueve para que se impregnen del sofrito y tomen algo de color.',
  'Añade el caldo de pescado y el fumet de langostinos. Cocina el tiempo indicado por el fabricante de los fideos.',
  'Incorpora los langostinos reservados al final, ajustando su cocción para que queden hechos sin pasarse.'
];
// rtm-0094: remove HTML/navigation pollution only
R('rtm-0094').ingredients = R('rtm-0094').ingredients.filter(x=>x.trim()!=='HTML Content');
R('rtm-0094').steps = R('rtm-0094').steps.filter(x=>!/^HTML Content MÉS RECEPTES/i.test(x)).map(x=>x.replace(/^HTML Content\s*/,'').trim());
// rtm-0127: preserve culinary details while removing blog/social chatter and image placeholders
R('rtm-0127').steps = [
  'Pela los guisantes y resérvalos.',
  'Limpia bien la sepia, córtala en dados y reserva la melsa o bolsa marrón si vas a utilizarla en el sofrito.',
  'Prepara la picada: pon en un mortero las almendras tostadas y las rebanadas de pan frito o tostado. Májalo todo bien y reserva.',
  'Ralla los tomates; si utilizas la melsa de la sepia, mézclala con el tomate rallado.',
  'Pica la cebolla y corta los ajos en láminas.',
  'Pon un buen chorro de aceite en una cazuela y dora ligeramente la sepia.',
  'Añade la cebolla y el ajo. Cocina unos 10 min y después incorpora el tomate rallado. Deja reducir unos 20 min para que el sofrito se haga bien y la sepia avance en su cocción.',
  'Añade fumet de pescado —preferentemente— o agua, unos 4 cucharones o la cantidad necesaria para que el conjunto quede bien cubierto.',
  'Cuando el caldo empiece a hervir, incorpora los guisantes. Sala y cocina unos 25 min, hasta que estén tiernos.',
  'Deslíe la picada con un poco de caldo del guiso, incorpórala a la cazuela, tapa y deja que termine de cocinarse. Prueba y rectifica de sal si hace falta.',
  'Deja reposar el guiso antes de servir. La fuente indica que gana sabor de un día para otro.'
];
R('rtm-0127').tips = 'Variantes de la fuente: se puede añadir una rama de canela al sofrito; incorporar la melsa de la sepia; añadir un poco de chocolate negro a la picada; o acompañar con patatas u otras verduras.';
// update version metadata
const ver='2.1.10';
let out='// Recetario Toni Merino · Versión '+ver+' · '+rs.length+' fichas verificadas · Lote 6 + auditoría de fidelidad 5\n';
out+='window.RTM_DATA_VERSION = '+JSON.stringify(ver)+';\n';
out+='window.RECIPES = '+JSON.stringify(rs,null,2)+';\n';
fs.writeFileSync(p,out);
