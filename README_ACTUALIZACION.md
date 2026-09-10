# Actualización recomendada · v2.1.16

Sustituir los archivos de la web por los incluidos en este paquete. La versión incorpora el Lote 6 y todas las correcciones acumuladas de fidelidad.

**Control de identidad:** `rtm-0110` queda como «Hummus de lentejas – Hogarmania» y se elimina `rtm-0120`, que era un registro erróneo con título «Lentejas guisadas» pero contenido duplicado del hummus de Hogarmania. La versión de Directo al Paladar se mantiene como receta distinta en `rtm-0157`.

## Actualización a RTM v2.0.0

Sustituye los archivos del repositorio por los de este paquete. La versión añade soporte de imagen principal sin alterar el catálogo. Los datos locales existentes se migran incorporando el nuevo campo `image` del catálogo base cuando corresponda.

# Actualización RTM v1.8.0 · Sprint 7.0

1. Copiar estos archivos sobre la carpeta local del repositorio, reemplazando los existentes.
2. Abrir GitHub Desktop y revisar los cambios.
3. Commit recomendado: `RTM v1.8.0 - Sprint 7.0`.
4. Push origin.
5. Validar en GitHub Pages: versión 1.7.0, 45 fichas, apertura de las cinco nuevas, favoritos y contraste Receta/Técnica.


## Sprint 12A · Consulta / Administración
Modo consulta por defecto y separación funcional del área de administración. Candidata 2: cabecera compacta, versión 2.1.0 coherente y controles adaptados a escritorio y móvil. No incorpora todavía autenticación real.

## Publicación corregida v2.1.16 (2026-09-10)
- Subir los archivos de este paquete directamente a la raíz del repositorio, no dentro de una subcarpeta.
- `index.html`, `data.js`, `app.js`, `styles.css`, `manifest.webmanifest` y `sw.js` deben sustituir los homónimos existentes.
- Se usa el token de caché `2.1.16-20260910` para forzar la recarga de recursos.
- El manifest y el service worker quedan alineados con v2.1.16.
