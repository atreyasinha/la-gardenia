## 2026-07-25 - [Frontend Performance: Native Lazy Loading]
**Learning:** Found several high-resolution image assets in components that were rendered below the fold (`About`, `Venues`, `EventTypes`, `CateringMenu`, `Gallery`) loading eagerly. Eager loading delays initial page load and consumes unnecessary bandwidth.
**Action:** Adding `loading="lazy"` attribute natively to `<img>` tags defers loading until the user scrolls near them. Apply this as a standard optimization for off-screen images.
