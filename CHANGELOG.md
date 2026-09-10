# v2.1.15 · Auditoría transversal 10

- `rtm-0121` Llagostins amb gavardina: corregida migración grave; elaboración trasladada desde Ingredientes, eliminados maridaje y texto editorial, y preparación reorganizada en 14 pasos.
- `rtm-0108` Hummus de calabaza: limpiados encabezados y texto operativo incrustado en Ingredientes; tahina casera trasladada a Consejos; preparación reorganizada.
- `rtm-0142` Guiso de garbanzos rápido (Thermomix): recompuestos parámetros Thermomix que estaban partidos en pasos independientes y eliminados pasos residuales de puntuación.
- Control: 163 fichas / 163 IDs únicos.

## v2.1.14 · Auditoría transversal 9

- `rtm-0139` Caramelos de goma – Webos Fritos: eliminados comentarios, navegación y contenido editorial incrustado en la preparación. Recuperados y separados los métodos tradicional y Thermomix, con sus parámetros documentados.
- `rtm-0056` Donuts de Dan Lepard: divididos los dos pasos más densos de formado y fritura para mejorar la legibilidad en cocina sin eliminar información.
- Barrido transversal de las 163 fichas: no quedan coincidencias de los patrones de contaminación editorial revisados (comentarios, publicación, publicidad, HTML, formularios).

## v2.1.14 · Auditoría de fidelidad 8 · Falafel

- `rtm-0085 Falafel (Thermomix)`: restaurados los parámetros Thermomix truncados documentados (15 s · vel. 5; 5 s · vel. 6; 10 s · vel. 5; salsa 15 s · vel. 4) y dividida la elaboración en 15 pasos operativos. Se mantiene la cantidad histórica RTM de 250 g de garbanzos para el falafel porque la versión actual de la fuente difiere en ese dato y no se sustituye silenciosamente el contenido maestro.
- `rtm-0086 Falafel con salsa de yogur`: restaurados los parámetros truncados mediante una copia contemporánea que atribuye la receta a De Camino a Mi Cocina (25 s · vel. 5; 10 s · vel. 6; 10 s · vel. 5). Elaboración reorganizada en 18 pasos, separando falafel y salsa de yogur.
- Criterio: completar solo datos respaldados por fuente; cuando una versión web actual difiere de la transcripción histórica, conservar el contenido RTM y documentar la discrepancia.

## v2.1.12 · Auditoría de legibilidad 7

- rtm-0106 Hummus de alubias blancas y calabaza: separados ingredientes, preparación, presentación y consejos; eliminados textos promocionales y editoriales.
- rtm-0144 Hamburguesa de salmón: eliminados metadatos incrustados y preparación dividida en pasos operativos.
- rtm-0146 Hamburguesas de lentejas y quinoa (Thermomix): eliminados textos del blog, recuperados los dos primeros pasos desplazados a Ingredientes y preparación reestructurada conservando parámetros Thermomix.
- rtm-0138 Gofres al horno (Thermomix): eliminados metadatos editoriales y preparación normalizada en pasos breves.
- rtm-0061 Ensaladilla de merluza y patatas paja: eliminada llamada promocional y preparación dividida para uso en cocina.
- Criterio: cada paso contiene una acción principal o una secuencia corta coherente, sin perder información culinaria.

# v2.1.12 · Mejora de legibilidad · 2026-09-09

- `rtm-0059 · Dürüm turco de pollo`: preparación reestructurada de 4 bloques densos a 21 pasos operativos.
- No se modifica la receta ni se añaden ingredientes: se conserva el contenido culinario de la fuente y se separan macerado, formado y congelación del pollo, salsas, cocción, montaje y hummus de acompañamiento.
- Criterio editorial adoptado: cuando un paso acumule varias acciones independientes, dividirlo para facilitar la ejecución durante la cocina sin perder detalle.

# v2.1.9 · Auditoría de fidelidad 5 · 2026-09-09

- `rtm-0056` Donuts de Dan Lepard: eliminado un residuo editorial que había quedado dentro de Ingredientes.
- `rtm-0059` Dürüm turco de pollo: eliminada la duplicación exacta del paso del hummus de acompañamiento.
- `rtm-0077` Patatas bravas de Jordi Cruz: preparación reestructurada en pasos más legibles sin reducir el detalle culinario.
- `rtm-0087` Fideuà de langostinos y calamares (Thermomix): descompuesto un bloque único en pasos operativos, preservando tiempos, Varoma, velocidades, giro inverso y ausencia de cubilete.
- `rtm-0094` Fricandó de vedella amb bolets: eliminados restos `HTML Content` y navegación/promociones incrustadas.
- `rtm-0127` Sípia amb pèsols: eliminados marcadores de imagen, texto social/editorial y enlaces; preparación reconstruida en 11 pasos culinarios conservando tiempos, picada, melsa, fumet y reposo.
- Se mantiene la regla: la web puede adaptar estructura y legibilidad, pero no resumir contenido culinario sustantivo respecto de la fuente/ficha maestra.

# v2.1.8 · Lote 6 + auditoría de fidelidad · 2026-09-09

- Publicación consolidada de todas las correcciones de fidelidad realizadas sobre la base v2.1.7.
- Catálogo verificado: **163 recetas/fichas válidas** y IDs únicos.
- Resuelta la incidencia de identidad de `rtm-0120`: el registro «Lentejas guisadas» contenía en realidad el hummus de lentejas de Hogarmania.
- `rtm-0110` queda consolidado como **Hummus de lentejas – Hogarmania**.
- `rtm-0120` se retira de la web hasta disponer de una fuente auténtica de «Lentejas guisadas».
- `rtm-0157` se mantiene como **Hummus de lentejas – Directo al Paladar**, receta distinta por contenido.
- Se mantienen acumuladas las auditorías de fidelidad 1–4: restauración de pasos, parámetros Thermomix, separación ingredientes/preparación y limpieza de HTML/prosa editorial sin síntesis culinaria indebida.


### Auditoría de fidelidad 4 · 2026-09-09
- `rtm-0125` Helado de vainilla (Thermomix): restaurados parámetros truncados y normalizada la secuencia completa de elaboración y mantecado.
- Limpieza de residuos editoriales/HTML y reestructuración fiel de pasos en `rtm-0066`, `rtm-0082`, `rtm-0090`, `rtm-0098`, `rtm-0104`, `rtm-0105`, `rtm-0107`, `rtm-0115`, `rtm-0117`, `rtm-0126`, `rtm-0133`, `rtm-0134`, `rtm-0145`, `rtm-0147` y `rtm-0148`.
- Se mantiene abierta una incidencia de identidad en `rtm-0120`: el título «Lentejas guisadas» no coincide con el contenido, que corresponde a hummus de lentejas; no se corrige automáticamente hasta reconciliarlo con el Inventario Maestro.


## Corrección de calidad de contenido · 2026-09-09
- `rtm-0005` Helado de vainilla y nueces (Thermomix): restaurada la preparación detallada a partir de la fuente documental.
- Criterio web: la preparación no se sintetiza eliminando información operativa; se conservan fases, tiempos, temperaturas, velocidades, accesorios, reposos y señales culinarias.
- Esta receta se adopta como patrón para la auditoría progresiva de fidelidad ficha maestra → web.

# v2.1.7 · Lote 6

- Catálogo: 154 → 164 fichas.
- Altas: `rtm-0155` a `rtm-0164`.
- Se consolida el título «Crema de zanahoria, naranja y jengibre (La soupe des amoureux)» para la receta de Imma Oliveras.
- Se mantiene `rtm-0073` como identidad única del Hummus de garbanzo (Thermomix), evitando duplicidad.
- Incorporadas las recetas recientes del proyecto: crema de zanahoria, bizcocho de limón, hummus de lentejas DAP, pollo al curry, risotto, arroz meloso, secreto ibérico, costillas, salmón marinado y pan de cristal.

# v2.1.6 · Lote 4

- 25 nuevas fichas normalizadas.
- Catálogo: 104 → 154 fichas.
- 23 fuentes Evernote D-L y 2 recetas trabajadas en el proyecto Recetario.
- Inventario maestro actualizado.

# v2.1.4 · Evernote D-L Lote 3

- 25 nuevas fichas normalizadas.
- Catálogo: 79 → 104 fichas.
- Taxonomía ampliada solo con tipos necesarios, sin crear nuevas familias.
- Conservación de trazabilidad de las fuentes Evernote.

## v2.1.3 — Migración Evernote D-L · Lote 2
- Incorporación incremental de 24 recetas normalizadas.
- Catálogo: 55 → 79 fichas.
- Se mantiene la taxonomía RTM v2.1.2 y la migración local preservando favoritos y cambios del usuario.

# CHANGELOG

## v2.1.1 · Migración piloto Evernote D–L
- Incorporadas 10 recetas recuperadas y normalizadas desde el archivo histórico Evernote.
- Catálogo ampliado de 45 a 55 fichas.
- Se conservan procedencia, autoría y señales históricas de recetas probadas/excelentes.
- Corregidas con validación de Toni las cantidades de la empanada de zamburiñas, la pastilla de caldo de la fideuà y la receta de Judías blancas – Iaia Pilar.

# Recetario Toni Merino — Changelog

## v2.0.0 · Sprint 10.0 — Imágenes I
- Soporte opcional de imagen principal.
- Miniaturas fotográficas en catálogo con fallback al icono actual.
- Imagen ampliable en la ficha.
- Imagen discreta en Modo Cocina y compatible con impresión/PDF.
- Prueba inicial en Bisqué de langostinos, Pollo en pepitoria y Coca de Llavaneres.
- Se preservan las 45 fichas y su contenido culinario.

# Changelog

## v1.8.1 · Ajuste documental Sprint 9.0
- La impresión/PDF identifica claramente **Recetario Toni Merino**.
- Se muestra el tipo de ficha (Receta o Técnica culinaria / base) y la versión RTM v1.8.1.
- Se conserva en la ficha el autor y la procedencia ya existentes.
- Sin cambios en las 45 fichas ni en el Modo Cocina.

## v1.7.0 · Sprint 8.0
- Acceso directo ★ Favoritas junto a Todas / Recetas / Técnicas.
- Ordenación del catálogo: A–Z, Z–A, favoritas primero, familia y tipo de ficha.
- Contadores dinámicos de fichas, recetas, técnicas, vegetarianas, veganas y favoritas.
- Navegación de detalle mejorada con barra superior persistente para volver al catálogo e imprimir/guardar PDF.
- Se conservan las 45 fichas y todas las funciones de búsqueda, filtros, favoritos y persistencia local.

## v1.6.0 · Sprint 7.0
- Catálogo ampliado de 40 a 45 fichas verificadas.
- Nuevas: Rape en romesco; Vacherin de avellanas; Chalota de espárragos y cangrejo; Lubina sobre pimientos confitados; Coca de Llavaneres.
- Mayor diferenciación cromática entre Receta (terracota) y Técnica culinaria (verde azulado), en tarjetas y cabecera de detalle.
- Se conservan las 40 fichas anteriores y la persistencia de cambios/favoritos.


## v2.0.0 — Sprint 11 · Imágenes II
- Galería visual opcional por ficha.
- Caso piloto: Iaia Pilar - Calamares rellenos.
- Imagen principal del plato y dos páginas del manuscrito original.
- Documentos ampliables y conservados como archivos independientes.


## Sprint 12A · Consulta / Administración
Modo consulta por defecto y separación funcional del área de administración. Candidata 2: cabecera compacta, versión 2.1.0 coherente y controles adaptados a escritorio y móvil. No incorpora todavía autenticación real.

## v2.1.2 - Normalización taxonómica
- Normalizadas Familia y Tipo de las 55 fichas según la taxonomía RTM aprobada.
- Separados los postres helados de la pastelería/repostería y de las bebidas.
- Incorporada la familia Postres fríos y de cuchara.
- El formulario de administración restringe Familia y Tipo a valores controlados.
- La migración fuerza la taxonomía oficial preservando favoritos y otros datos locales.


## 2.1.6
- Lote 5: 25 nuevas fichas desde Evernote D–L.
- Total: 154 fichas.

### Auditoría de fidelidad web · pasada estructural
- `rtm-0140 Granizado de cava (Thermomix)`: corregida una incidencia de migración que había colocado la preparación dentro de Ingredientes; se recuperan los pasos completos disponibles, incluidos Turbo, cestillo, colado, limpieza del vaso y 30 s · velocidad 5.
- `rtm-0122 Lomo a la naranja con pimientos verdes`: eliminada de Ingredientes la preparación duplicada y trasladado el consejo de congelación a Consejos.
- Se mantiene como regla que la web adapta el formato, pero no resume ni elimina información culinaria sustantiva de la ficha/fuente maestra.

### Auditoría de fidelidad 2 · 2026-09-09
- rtm-0101 Helado de fresas: eliminada prosa editorial de Ingredientes y restaurada la secuencia completa de elaboración disponible.
- rtm-0132 Garbanzos con arroz y sofrito de pimentón: separados ingredientes y preparación; recuperados remojo, olla rápida, majada, sofrito de pimentón y cocción final del arroz.
- rtm-0141 Guiso de garbanzos a la asturiana: separado el proceso que estaba incrustado en Ingredientes; se señala expresamente que el detalle del sofrito no está completo en la fuente disponible.
- rtm-0143 Hamburguesa de bolets: trasladada a Preparación toda la secuencia recuperada que estaba incrustada en Ingredientes; no se inventan los pasos posteriores ausentes.

### Auditoría de fidelidad 3 · 2026-09-09
- `rtm-0112 Hummus de piquillos (Thermomix)`: limpiados ingredientes y prosa editorial; restaurados 30 s · vel. 10, 10 s · vel. 9 y los dos ciclos de 15 s · vel. 9, contrastados con la receta oficial equivalente de Thermomix/Cookidoo.
- `rtm-0123 Lomo con salsa de almendras y ciruelas pasas`: eliminado contenido de navegación/blog incrustado; recuperados ingredientes, 4 raciones y seis pasos culinarios completos a partir de la fuente histórica conservada.
- `rtm-0124 Helado de vainilla con cookies de chocolate`: restaurada la velocidad 4 de la crema inglesa (8 min · 90 °C · vel. 4) y completada la presentación.
- `rtm-0135 Garbanzos salteados con chorizo y pimentón`: dividido el bloque único de preparación en siete pasos operativos sin resumir contenido.
- `rtm-0150 Garbanzos con gambas y arroz (Thermomix)`: eliminada basura de imágenes/HTML y restaurados los parámetros Thermomix completos desde la fuente original publicada.
- `rtm-0151 Judías blancas con chorizo (Thermomix)`: separados ingredientes y preparación, eliminados metadatos residuales y normalizados raciones, tiempo y parámetros Thermomix.
- `rtm-0152 Fondo de verduras concentrado`: eliminados HTML e imágenes incrustadas; restauradas cantidades, autora, tiempo, dificultad y secuencia completa desde la fuente original de Directo al Paladar.

### v2.1.12 · Auditoría de legibilidad en cocina
- Reestructuración sin pérdida de contenido de rtm-0034 Cocción de legumbres (Thermomix).
- Reestructuración de rtm-0037 Cinta de lomo con sorpresa (Thermomix).
- Reestructuración por elaboraciones de rtm-0038 Risotto de boletus.
- Mayor granularidad de pasos en rtm-0041 Rape en romesco y rtm-0044 Lubina sobre pimientos confitados.
- Normalización profunda de rtm-0092 Fondo claro de pollo: ingredientes separados de comentarios explicativos y preparación dividida en acciones operativas.
- Criterio: conservar toda la información culinaria disponible, pero evitar párrafos densos durante la ejecución de la receta.

### v2.1.16 · Lote amplio de auditoría de legibilidad
- Lote consolidado: 25 fichas revisadas desde v2.1.15.
- Reestructuración de pasos densos sin eliminar ni añadir contenido culinario.
- Se prioriza una acción o secuencia corta por paso para facilitar el uso en cocina.
- Revisadas en este lote: rtm-0051, rtm-0058, rtm-0070, rtm-0079, rtm-0129, rtm-0130, rtm-0145, rtm-0048, rtm-0057, rtm-0060, rtm-0062, rtm-0066, rtm-0067, rtm-0072, rtm-0074, rtm-0075, rtm-0076, rtm-0080, rtm-0089, rtm-0091, rtm-0099, rtm-0113, rtm-0117, rtm-0137 y rtm-0147.
- rtm-0083 Escudella i carn d'olla de Nadal se mantiene señalada para recuperación de la fuente completa; no se inventa el tramo ausente.
