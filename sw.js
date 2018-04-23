//This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

//Install stage sets up the offline page in the cahche and opens a new cache
self.addEventListener('install', function(event) {
  event.waitUntil(preLoad());
});
var preLoad = function(){
  console.log('[PWA Builder] Install Event processing');
  return caches.open('pwabuilder-offline').then(function(cache) {
    console.log('[PWA Builder] Cached index and offline page during Install');
    return cache.addAll(['/library2/','/library2/index.html','/library2/friends.html','/library2/library.html','/library2/offline.html','/library2/profile.html','/library2/singin.html','/library2/store.html','/library2/css/friends.css','/library2/css/library.css','/library2/css/login.css','/library2/css/navbar.css','/library2/css/profile.css','/library2/css/store.css','/library2/js/login.js','/library2/js/navbar.js','/library2/js/singin.js','/library2/images/game-icon.png','/library2/images/icon.jpg','/library2/images/logo.png','/library2/images/manifest-icon.png']);
  });
}
self.addEventListener('fetch', function(event) {
  console.log('The service worker is serving the asset.');
  event.respondWith(checkResponse(event.request).catch(function() {
    return returnFromCache(event.request)}
  ));
  event.waitUntil(addToCache(event.request));
});
var checkResponse = function(request){
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response)
      } else {
        reject()
      }
    }, reject)
  });
};
var addToCache = function(request){
  return caches.open('pwabuilder-offline').then(function (cache) {
    return fetch(request).then(function (response) {
      console.log('[PWA Builder] add page to offline'+response.url)
      return cache.put(request, response);
    });
  });
};
var returnFromCache = function(request){
  return caches.open('pwabuilder-offline').then(function (cache) {
    return cache.match(request).then(function (matching) {
     if(!matching || matching.status == 404) {
       return cache.match('offline.html')
     } else {
       return matching
     }
    });
  });
};