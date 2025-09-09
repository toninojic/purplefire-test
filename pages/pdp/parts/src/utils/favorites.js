// src/utils/favorites.js
import { useEffect, useState, useCallback } from "react";

export const FAV_KEY = "fav:products";

const FAV_EVT = "fav:update";

const ls = () => (typeof window !== "undefined" ? window.localStorage : null);

export function readFavorites() {
  try {
    const raw = ls()?.getItem(FAV_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function writeFavorites(setOrArr) {
  try {
    const arr = Array.isArray(setOrArr) ? setOrArr : Array.from(setOrArr);
    ls()?.setItem(FAV_KEY, JSON.stringify(arr));

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(FAV_EVT));
    }
  } catch {
    // ignore write errors (quota, privacy mode, etc.)
  }
}

export function useFavorites() {
  const [favs, setFavs] = useState(() => readFavorites());

  // sync cross-tab (StorageEvent)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === FAV_KEY) setFavs(readFavorites());
    };
    const onFavUpdate = () => setFavs(readFavorites());
    window.addEventListener("storage", onStorage);
    window.addEventListener(FAV_EVT, onFavUpdate);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(FAV_EVT, onFavUpdate);
    }
  }, []);

  const add = useCallback((id) => {
    setFavs((prev) => {
      const next = new Set(prev);
      next.add(id);
      writeFavorites(next);
      return next;
    });
  }, []);

  const remove = useCallback((id) => {
    setFavs((prev) => {
      const next = new Set(prev);
      next.delete(id);
      writeFavorites(next);
      return next;
    });
  }, []);

  const toggle = useCallback((id) => {
    setFavs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      writeFavorites(next);
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    writeFavorites([]);
    setFavs(new Set());
  }, []);

  const isFav = useCallback((id) => favs.has(id), [favs]);

  return { favs, isFav, add, remove, toggle, clear };
}
