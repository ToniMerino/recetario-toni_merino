# Recetario Toni Merino v1.5.0

Versión estable candidata del Sprint 6.0, construida sobre RTM v1.4.1.

## Contenido

- 40 fichas verificadas: 30 existentes sin cambios + 10 nuevas.
- Recetas y técnicas culinarias diferenciadas visualmente.
- Buscador y filtros por familia y características.
- Clasificación dietética cuando está documentada.
- Favoritos persistentes, visibles en catálogo y cabecera de ficha.
- Alta, edición y eliminación de fichas.
- Exportación e importación de copias JSON.
- Impresión o guardado de cada ficha como PDF.

## Sprint 6.0

Se incorporan 10 fichas normalizadas, verificadas frente al catálogo de v1.4.1 para evitar duplicados. Las 30 fichas anteriores se mantienen sin cambios.

## Actualización segura de datos

La aplicación conserva las fichas añadidas o modificadas localmente y añade las nuevas fichas del catálogo base. No es necesario borrar `localStorage` al publicar la actualización.
