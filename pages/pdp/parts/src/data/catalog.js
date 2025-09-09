// src/data/catalog.js
import { PRODUCT, RELATED } from "./products.js";

const ALL = [PRODUCT, ...RELATED];

const INDEX = ALL.reduce((m, p) => (m.set(p.id, p), m), new Map());

export function getById(id) {
  return INDEX.get(id) || null;
}

export function getMany(ids = []) {
  return ids.map((id) => getById(id)).filter(Boolean);
}
