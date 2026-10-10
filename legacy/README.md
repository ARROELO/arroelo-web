# Contenido legado de la web WordPress

Posts de espacioarroelo.es que **todavía no se han migrado** al blog nuevo.
Cada carpeta tiene `index.md` (texto original, fechas reales y SEO de Yoast) e `images/`
con las imágenes a máxima resolución disponible.

Mientras estén aquí, su URL vieja redirige con **302** a la página más cercana
(ver `public/_redirects`). Al migrar uno a `src/data/blog.ts`:

1. Cambiar su línea en `public/_redirects` a `301` hacia `/blog/<nuevo-slug>`.
2. Usar su fecha original de publicación.
3. Borrar su carpeta de aquí.

| Publicado | Slug (URL vieja) | Imágenes |
|---|---|---|
| 2021-12-11 | `/merchandising-con-proposito/` | 4 |
| 2023-11-21 | `/visitando-cru-coworking/` | 7 |
| 2024-02-21 | `/mario-iglesias-el-terapeuta-y-el-algoritmo/` | 3 |
| 2024-02-22 | `/reflexologia-con-isabel-ures/` | 2 |
| 2024-02-26 | `/carmen-iglesias-limeres-de-practicas-a-profesional/` | 5 |
| 2024-04-15 | `/intercambio-creativo-en-croacia/` | 8 |
| 2024-12-09 | `/un-puente-de-inspiracion-arroelo-en-blackburn/` | 9 |
| 2024-12-27 | `/inmersion-creativa-en-el-alentejo-con-la-european-creative-hubs-network/` | 5 |
| 2025-03-06 | `/una-semana-en-chateau-coliving/` | 9 |
