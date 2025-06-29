// 1.js (simpan & commit ke main)
(async () => {
  alert('🔥 1.js ter-load!');   // langsung muncul di HP
  const hook = "https://webhook.site/…";
  await fetch(hook, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({ url: location.href })
  }).catch(()=>{});
})();
