export function capitalizeWords(str: string) {
   return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
}

export function SanitizeIdForHtml(id: string) {
   return id.toLowerCase().replace(/\s+/g, '-');
}