function formatDateTime(date) {
  const payload = new Date(date);

  return new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(payload);
}

export { formatDateTime };
