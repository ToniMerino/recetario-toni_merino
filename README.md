# Recetario Toni Merino v1.4.1

Versión estable del Sprint 2.0. Mantiene el modelo funcional validado en v1.0.0 y amplía el catálogo sin modificar la arquitectura de la aplicación.

## Contenido

- 30 fichas verificadas.
- Recetas y técnicas culinarias diferenciadas visualmente.
- Buscador por título, familia, procedencia, autor, estado, ingredientes y etiquetas.
- Ficha rápida: Tipo, Familia culinaria, Raciones, Tiempo y Dificultad.
- Alta, edición y eliminación de fichas.
- Exportación e importación de copias JSON.
- Impresión o guardado de cada ficha como PDF.

## Sprint 2.0

Se incorporan 10 fichas nuevas, verificadas frente al catálogo previo para evitar duplicados. La versión visible queda actualizada a 1.3.0.


## Actualización segura de datos (v1.4.1)
La aplicación incorpora migración automática del catálogo base y conserva las fichas añadidas o modificadas localmente. Ya no es necesario borrar manualmente `localStorage` al publicar nuevas versiones.
