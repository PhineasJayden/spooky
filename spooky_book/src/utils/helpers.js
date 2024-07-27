export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("de", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}
