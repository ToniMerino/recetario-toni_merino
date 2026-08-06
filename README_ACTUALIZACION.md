# Actualización del Recetario Toni Merino

## Versión 0.2.2

Este paquete sustituye la versión anterior completa y evita que queden textos o cachés con números de versión antiguos.

## Archivos que debes sustituir en GitHub

- `index.html`
- `data.js`
- `app.js`
- `styles.css`
- `manifest.webmanifest`
- `sw.js`
- `README.md`

También puedes subir:

- `CHANGELOG.md`
- `README_ACTUALIZACION.md`

## Archivo que debes eliminar

- `datos.js`

La aplicación carga `data.js`. El archivo `datos.js` es un duplicado y no se utiliza.

## Procedimiento recomendado

1. Descomprime el ZIP.
2. En GitHub, elimina `datos.js`.
3. Pulsa **Añadir archivo → Subir archivos**.
4. Arrastra todos los archivos del paquete a la raíz del repositorio.
5. GitHub reconocerá los archivos existentes y los sustituirá.
6. Confirma los cambios.
7. Espera entre 2 y 5 minutos.
8. Recarga la aplicación con `Ctrl + F5` o abre una pestaña privada.

## Resultado esperado

- La cabecera muestra **Versión 0.2.2**.
- El catálogo muestra **20 fichas**.
- El README de GitHub muestra la información de la versión 0.2.2.
