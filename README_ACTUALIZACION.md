# Actualización RTM v1.2.0 · Sprint 3.0

## Objetivo
Actualizar de v1.1.0 a v1.2.0 incorporando migración segura de datos locales.

## Instalación
1. Copiar el contenido de este paquete sobre la carpeta local `recetario-toni_merino`.
2. Reemplazar los archivos existentes.
3. Abrir GitHub Desktop y revisar los cambios.
4. Commit: `Publicar RTM v1.2.0 - Sprint 3`.
5. Push origin.
6. Esperar al despliegue de GitHub Pages y abrir la aplicación normalmente.

## Validación
- Debe mostrarse Versión 1.2.0.
- Deben seguir apareciendo 30 fichas.
- No debe ser necesario borrar `localStorage`.
- Las fichas locales creadas o editadas se conservan.

## Nota de migración inicial
La primera ejecución de v1.2.0 migra el almacenamiento heredado de v1.1.0 y crea una instantánea del catálogo base para que las siguientes actualizaciones puedan distinguir entre datos base y cambios personales.
