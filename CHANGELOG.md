# Registro de cambios

## v1.4.0 · Sprint 5.0 · Favoritos

- Añadida la preferencia personal Favorita.
- Magdalenas caseras de Puente Genil parte como favorita por constar documentada como receta favorita.
- Añadido control para marcar y desmarcar favoritas desde la ficha.
- Añadido filtro Favoritas en Características.
- La preferencia se conserva en localStorage y durante futuras migraciones del catálogo.
- Se mantienen las 30 fichas y el modelo normalizado existente.

## v1.3.0 · Sprint 4.0 · Clasificación y búsqueda avanzada
- Se mantienen las 30 fichas de la v1.2.0 sin modificar su contenido culinario.
- Se incorpora clasificación estructurada vegetariana/vegana y observación dietética.
- 12 fichas se clasifican como vegetarianas; 1 de ellas también como vegana.
- La leche de almendras incorpora el matiz: puede ser vegana si se utilizan dátiles en lugar de miel.
- Se añaden filtros por familia y características: Thermomix, Air Fryer, probadas, excelente, vegetarianas y veganas.
- El buscador incorpora autor, procedencia y clasificación dietética.
- La migración conserva las ediciones locales y enriquece las fichas con los nuevos campos dietéticos.
- Versión visible actualizada a 1.3.0.

# Changelog

## v1.2.0 · Sprint 3.0
- Migración automática del catálogo al publicar nuevas versiones.
- Conservación de fichas creadas o modificadas desde la aplicación.
- En futuras actualizaciones, conservación de eliminaciones locales mediante comparación con la instantánea del catálogo base anterior.
- Se elimina la necesidad de borrar manualmente `localStorage` para recibir nuevas fichas.
- Sin cambios en el modelo de ficha, diseño ni catálogo: se mantienen 30 fichas.

# Registro de cambios

## v1.1.0 · Sprint 2.0

- Catálogo ampliado de 20 a 30 fichas verificadas.
- Incorporadas: Coca de verduras (Thermomix), Crema fría de melón (Thermomix), Risotto con setas (Thermomix), Capipota de Ada Parellada, Mayonesa casera y variaciones sencillas, Kebab casero en brocheta con salsa de yogur (Air fryer), Bunyols de bacallà, Pollo en pepitoria, Bacalao dorado o Bacalhau à Brás y Yogur de avellana (Thermomix).
- Control de duplicados realizado antes del cierre.
- Corregida la estructura interna de etiquetas/notas de seis fichas incorporadas en la RC1.
- Versión visible actualizada a 1.1.0.
- Se mantiene la arquitectura y el modelo funcional de v1.0.0.

## v1.0.0 · Sprint 1.0

- Línea base estable del proyecto.
- 20 fichas.
- Publicación mediante GitHub Desktop y GitHub Pages validada.
