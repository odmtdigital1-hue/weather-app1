const C="weather-v2",F=["./","index.html","manifest.json","icon.svg","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.origin===location.origin){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }else{
    e.respondWith(fetch(e.request).catch(()=>new Response("{}",{headers:{"Content-Type":"application/json"}})));
  }
});
