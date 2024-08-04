export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("de", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function formatTime(t) {
  const min = Math.floor(t / 60);
  const secRemain = Math.floor(t % 60);
  const time = `${min < 10 ? "0" + String(min) : min}:${
    secRemain < 10 ? "0" + secRemain : secRemain
  }`;

  return time;
}
