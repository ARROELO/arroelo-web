# Evaluación SEO — `/blog/historia-espacio-arroelo-pontevedra`

> Evaluación on-page y de higiene del blog (octubre 2026).  
> **No incluye rankings inventados ni posiciones en SERP.** Solo checklist, huecos y siguientes pasos observables en el código y en el contenido publicado.

---

## Resumen

La entrada de historia está en buena forma para indexación: H1 único, H2 claros, meta title/description, imagen con alt, enlaces internos y externos, Open Graph, canonical y JSON-LD `BlogPosting`. El sitio es export estático (`output: "export"`), con `sitemap.xml` y `robots.txt` generados en build. Quedan mejoras de E-E-A-T (autoría nominativa), medición real de CWV y consolidación del dominio canónico en producción.

---

## 1. On-page (entrada historia)

| Elemento | Estado | Notas |
|----------|--------|--------|
| **Title SEO** | Hecho | `De LinkedIn a coworking en Pontevedra — Blog \| Arroelo` (~55–60 caracteres útiles). Keyword principal «coworking Pontevedra» presente. |
| **Meta description** | Hecho | Excerpt ~155 caracteres: fundadoras, 2013, LinkedIn, coworking Pontevedra. |
| **H1** | Hecho | Un solo H1: título editorial completo. |
| **H2** | Hecho | Cuatro H2 coherentes con el arco narrativo (apertura 2013 → familia → crisis/mudanza → hoy). |
| **Keywords** | Aceptable | Principal y secundarias aparecen de forma natural (Espacio Arroelo, coworking Pontevedra, María Pierres, África Rodríguez). Sin stuffing. |
| **Enlaces internos** | Mejorado | `/`, `/espacio`, `/coworkers`, `/blog`, `/#tarifa`, `/#contacto` en contexto narrativo. |
| **Enlaces externos** | Mejorado | El País, Faro de Vigo, Anceu, Rural Hackers, ECHN, espacioarroelo.es — `target="_blank"` + `rel="noopener noreferrer"`. |
| **Imagen destacada** | Hecho | Alt descriptivo con nombres de fundadoras y contexto; hero full-bleed. |
| **Fecha legible** | Hecho | `<time dateTime>` + formato es-ES. |
| **Idioma** | Hecho | `lang="es"` en layout raíz. |

### Checklist on-page

- [x] Title único y orientado a intención de búsqueda
- [x] Meta description orientada a clic (sin promesas falsas)
- [x] Un H1; H2 sin saltos de nivel
- [x] Enlaces internos a páginas de conversión / descubrimiento
- [x] Enlaces externos a fuentes reputadas cuando se citan
- [x] Alt en imagen destacada
- [ ] Autoría visible en página (firma «África / María / equipo Arroelo») — **pendiente**
- [ ] FAQ o schema adicional — no necesario ahora

---

## 2. Técnico

| Elemento | Estado | Notas |
|----------|--------|--------|
| **Metadata API (Next.js)** | Hecho | `generateMetadata` con title, description, `alternates.canonical`, Open Graph (`article`), Twitter card. |
| **`metadataBase`** | Hecho | En `layout.tsx` → `SITE_URL` (`NEXT_PUBLIC_SITE_URL` o `https://espacioarroelo.es`). Revisar que el dominio de producción coincida. |
| **JSON-LD BlogPosting** | Hecho | `headline`, `description`, `image`, fechas, `author`/`publisher` Organization, `mainEntityOfPage`. |
| **Rutas estáticas** | Hecho | `generateStaticParams` para todos los slugs; export HTML en `out/blog/...`. |
| **Sitemap** | Hecho | `src/app/sitemap.ts` → home, espacio, coworkers, blog + posts. |
| **robots.txt** | Hecho | Allow `/` + URL del sitemap. |
| **Imágenes** | Aceptable | `images.unoptimized: true` (export estático). Prioridad en hero del post. Sin srcset dinámico de Next Image Optimizer. |
| **Core Web Vitals** | Sin medición | Notas cualitativas abajo; no hay Lighthouse/CrUX en este informe. |

### Notas CWV (cualitativas, sin scores inventados)

- **LCP:** el hero full-bleed con `priority` ayuda; el archivo de foto debe mantenerse razonable en peso (revisar WebP/AVIF en `public/photos` si LCP real falla).
- **CLS:** hero con `fill` + min-height fijo reduce saltos; vigilar fuentes Switzer (FOUT).
- **INP:** página de artículo casi estática; bajo riesgo.
- Export estático favorece TTFB de CDN, pero el dominio final y la CDN importan más que el framework.

### Checklist técnico

- [x] Canonical por post
- [x] og:title / og:description / og:image
- [x] JSON-LD BlogPosting
- [x] sitemap.xml + robots.txt en el patrón App Router
- [ ] Confirmar `NEXT_PUBLIC_SITE_URL` en el entorno de deploy
- [ ] Validar rich results (Google Rich Results Test) tras publicar
- [ ] Medir LCP/CLS en producción (PageSpeed / CrUX)

---

## 3. Calidad de contenido / E-E-A-T

| Señal | Valoración | Comentario |
|-------|------------|------------|
| **Experience** | Alta | Narración en primera persona del plural; hitos concretos (2012–2023, Michelena → Cobián Roffignac). |
| **Expertise** | Alta | Vocabulario de comunidad/coworking sin jerga vacía; cifras acotadas («unas doscientas», «alrededor de setenta»). |
| **Authoritativeness** | Media-alta | Citas a El País / Faro con enlaces; falta página «Sobre nosotras» o bio de autoras enlazada. |
| **Trust** | Media-alta | Datos alineados con fuentes públicas conocidas; no se inventan premios. Contacto y tarifa enlazados. |

### Huecos E-E-A-T

1. Firma o byline en el artículo (quién escribe / quién edita).
2. Página sobre las fundadoras con enlaces cruzados desde el post.
3. Posible `sameAs` en Organization (Instagram, LinkedIn) cuando el schema se amplíe en el sitio.

---

## 4. Enlazado interno (blog y sitio)

| Desde → hacia | Estado |
|---------------|--------|
| Historia → home, espacio, coworkers, blog, tarifa, contacto | Hecho |
| Índice `/blog` → posts | Hecho (cards) |
| Home /espacio /coworkers → blog | Parcial — conviene CTA «Lee nuestra historia» hacia este slug en home o espacio |
| Posts cortos del grid → historia / páginas pilar | Pendiente (los otros posts aún no tienen enlaces internos) |

**Recomendación:** tratar esta entrada como pilar de marca y enlazarla desde home (bloque historia) y desde `/espacio`.

---

## 5. Higiene SEO del blog (resto de entradas)

| Ítem | Estado |
|------|--------|
| Metadata por post (title + description) | Sí (todas vía `generateMetadata`) |
| OG / Twitter / canonical por post | Sí (genérico para todas) |
| JSON-LD por post | Sí (mismo patrón) |
| Alt en listado e imagen | Sí |
| Enlaces internos/externos en body | Solo la entrada historia está enriquecida |
| Slugs estables | Sí; evitar cambiar `historia-espacio-arroelo-pontevedra` |
| Contenido duplicado vs espacioarroelo.es | Riesgo leve: misma historia en el sitio legado; canonical de la nueva web debe ser el URL definitivo |

---

## 6. Gaps y siguientes pasos (prioridad)

### Alta

1. Fijar dominio canónico de producción (`NEXT_PUBLIC_SITE_URL`) y verificar sitemap/robots en el host real.
2. Enlace entrante desde home y/o `/espacio` hacia esta historia.
3. Validar HTML generado (title, og:image absolutas, JSON-LD) tras el próximo deploy.

### Media

4. Byline / autoría en la plantilla del post.
5. Enriquecer 2–3 posts del grid con 1–2 enlaces internos cada uno.
6. Comprimir o servir la foto destacada en formato moderno si el LCP lo pide.

### Baja

7. BreadcrumbList schema (Blog → entrada).
8. `article:author` / perfiles sociales cuando existan URLs estables.
9. Monitorizar Search Console (cobertura, consultas, CWV) — fuera del alcance de este repo.

---

## 7. Score interno (checklist, no ranking)

| Bloque | Puntos (máx.) | Obtenido |
|--------|---------------|----------|
| On-page historia | 10 | 9 |
| Técnico / metadata | 10 | 9 |
| Contenido / E-E-A-T | 10 | 8 |
| Enlazado interno sitio | 10 | 7 |
| Higiene blog restante | 10 | 7 |
| **Total orientativo** | **50** | **40** |

Interpretación: base sólida para una entrada pilar recién publicada. El salto siguiente no es «más keywords», sino señales de confianza (autoría), enlaces entrantes internos y confirmación del dominio/CWV en producción.

---

*Documento vivo. Actualizar tras deploy y tras medición real en Search Console / PageSpeed.*
