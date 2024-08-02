export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("de", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function formatTime(time) {
  const sec = time / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const t = `${min < 10 ? "0" + min : min}:${
    secRemain < 10 ? "0" + secRemain : secRemain
  }`;

  return t;
}
