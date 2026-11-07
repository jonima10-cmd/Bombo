export const WHATSAPP_NUMBER = "523323425707";
export const BLOCKS_KEY = "bombo-blocked-slots-v1";

export type BlockMap = Record<string, string[]>;

export function slotsForDate(date: string) {
  if (!date) return [];
  const day = new Date(`${date}T12:00:00`).getDay();
  const close = day === 5 || day === 6 ? 24 : day === 0 ? 22 : 23;
  const slots: string[] = [];
  for (let minutes = 13 * 60; minutes + 90 <= close * 60; minutes += 30) {
    slots.push(`${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`);
  }
  return slots;
}

export function readBlocks(): BlockMap {
  try { return JSON.parse(localStorage.getItem(BLOCKS_KEY) || "{}"); }
  catch { return {}; }
}

export function saveBlocks(value: BlockMap) {
  localStorage.setItem(BLOCKS_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event("bombo-blocks-updated"));
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

