import json from "@/data/shop.json";

export function getItemById(id) {
  for (const item of json) {
    if (item.id == id) {
      return item;
    }
  }
  return {};
}
