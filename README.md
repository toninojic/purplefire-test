# PurpleFire — React Dev Test

A small React app built for a developer test at **PurpleFire**.  
It demonstrates client-side routing, a landing page composed of reusable layout components, a product detail page (PDP) powered by mocked data, and a lightweight Wishlist persisted in **localStorage**.  
**ESLint** is configured for code quality.

---

## ✨ Features

### Routing (`react-router-dom`)
- `/` – **Home** (links to other pages)  
- `/landing` – Landing page composed of **Header**, **Carousel**, **Main**, **Footer**  
- `/pdp` – Product Details Page using a local data file to simulate a fetch  

### Wishlist
- Stores liked product IDs in `localStorage`  
- Custom `useFavorites()` hook observes & syncs state → triggers UI re-renders  
- Badge counter in the header; popover lists selected items  
- Refresh-safe (items persist between sessions)

### Mocked Data
- `src/data/products.js` exports `PRODUCT` and `RELATED` objects to emulate an API response  

### Code Quality
- **ESLint** configured to scan and enforce standards across the codebase  

### Styling
- **CSS Modules** for encapsulated styles

---

## 🖤 Wishlist — How It Works

The `useFavorites()` hook (in `src/utils/favorites.js`) manages a Set of product IDs.

- **On mount** → reads IDs from `localStorage` into React state.  
- **On update** → writes changes back to `localStorage`.  
- Components subscribe to this state → UI updates automatically (e.g., header badge, wishlist popover).  

Popover resolves IDs → product objects via helpers (`getMany(...)`) → displays them.

**Try it out:**  
1. Open `/pdp`.  
2. Toggle the wishlist/heart icon located at Related Products section to add/remove a product.  
3. Refresh the page — selection persists.  
4. Open the header’s wishlist → preview items.  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Install
```bash
npm install
# or
yarn
# or
pnpm install
```

### Run (Development)
```bash
npm run dev
# or
npm start
```

The dev server URL will be printed in the terminal  
(commonly http://localhost:5173 for Vite or http://localhost:3000 for CRA).

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## 👩‍💻 Reviewer Guide
1. Start the dev server and open `/`.  
2. Navigate to `/landing` → verify Header, Carousel, Main, Footer.  
3. Navigate to `/pdp` → confirm product content comes from `src/data/products.js`.  
4. Add/remove items from the Wishlist → badge count & popover update.  
5. Refresh the page → items persist.  
6. Run `npm run lint` → check code quality.  

---

## 🔮 Assumptions & Next Steps
- Data is mocked locally → swapping to real APIs is straightforward  
- Minimal global state → local hooks are sufficient at this scope  

**Possible future extensions:**
- Search/autocomplete  
- Product list filters  
- Unit tests  
