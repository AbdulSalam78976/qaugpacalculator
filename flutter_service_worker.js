'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "78bf21512adcc2703f0aee538eb5f9ab",
"assets/AssetManifest.bin.json": "6b0bafe6ac09ad62fbcc0d3104ecbdba",
"assets/AssetManifest.json": "21b80a0d3f26da436d646a6fe8529a19",
"assets/assets/fonts/Liter-Regular.ttf": "6ed1a97e0988a95baaf7aa7857bfaabd",
"assets/assets/images/1.png": "7999eceadd38a6c4387c2065b45990da",
"assets/assets/images/2.png": "493e93de2cb86b3161ca88c2664a2d7d",
"assets/assets/images/a.jpg": "3f4d4e96f6879a45c23aa968ad5febf7",
"assets/assets/images/book_icon.png": "fb8333dc5636e5f471e343a69660a5e0",
"assets/assets/images/cgpa_icon.png": "f932cfb399b231371781aff7d7adc0c6",
"assets/assets/images/collage1.jpg": "91a7be50e1d8f679caf65c8d13a6c979",
"assets/assets/images/credit_icon.png": "9137ef59d39bc23c2a916e34d2cf5a23",
"assets/assets/images/grade_icon.png": "63a1c3ffa34192829f61c6e378979025",
"assets/assets/images/loading1.gif": "09432c2ab069cfb88bedc1be6c3abea8",
"assets/assets/images/marks_icon.png": "02288b2a274caf31cc80a7cc4a6c12d0",
"assets/FontManifest.json": "13f4f2fcd7419746602d5da53a6bdd80",
"assets/fonts/MaterialIcons-Regular.otf": "cd1e552a77e880a5b90898e063283c32",
"assets/NOTICES": "20143c906b08392d095a0f90278d7958",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "94e4096add33c6c9017c3d4159a909c6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a19ce4ec256cda3145df5bced56073a1",
"icons/android-icon-144x144.png": "7b2a1d4739352a8e40c87f87be4b907a",
"icons/android-icon-192x192.png": "ef1ef483cd8b0a7c3e9b9c6359448771",
"icons/android-icon-36x36.png": "79e022d4ec1dceb5959e051359169f39",
"icons/android-icon-48x48.png": "dc35a930b9317c8178d0773b130e327c",
"icons/android-icon-72x72.png": "f8a38733d0fe928449b2784357cd37e0",
"icons/android-icon-96x96.png": "10ef46f990f1f5890c70284b9c56053a",
"icons/apple-icon-114x114.png": "a45fae25683ba1594f2a2f5e56a99c09",
"icons/apple-icon-120x120.png": "872b4efa5d30efde16110a36c73fd65b",
"icons/apple-icon-144x144.png": "7b2a1d4739352a8e40c87f87be4b907a",
"icons/apple-icon-152x152.png": "5700b81b648af027ad5a335cf2006997",
"icons/apple-icon-180x180.png": "dc66f47355e34719f4cd2c51fc5b3c50",
"icons/apple-icon-57x57.png": "6def7949111e425a5e31b9f08976e11d",
"icons/apple-icon-60x60.png": "5f724d3ab9800f7c9bcd52289e03a31c",
"icons/apple-icon-72x72.png": "f8a38733d0fe928449b2784357cd37e0",
"icons/apple-icon-76x76.png": "9efc5a3777b90fc81c5166531513cbd2",
"icons/apple-icon-precomposed.png": "2abfc766eeee2e0f8c9eba5d7bb91207",
"icons/apple-icon.png": "2abfc766eeee2e0f8c9eba5d7bb91207",
"icons/favicon-16x16.png": "658887b087375aed393cbc817d98903d",
"icons/favicon-32x32.png": "8057bd6c1108a714058aff9a52495e34",
"icons/favicon-96x96.png": "10ef46f990f1f5890c70284b9c56053a",
"icons/favicon.ico": "94e4096add33c6c9017c3d4159a909c6",
"icons/ms-icon-144x144.png": "7b2a1d4739352a8e40c87f87be4b907a",
"icons/ms-icon-150x150.png": "25fb44fecc83245e408128e0592f27f6",
"icons/ms-icon-310x310.png": "65c81833008427ae57025ee9fe87021a",
"icons/ms-icon-70x70.png": "3b607645cde4ac796f4971fceba33966",
"index.html": "fbe8a391c3f5248ec95ce71b7742dc79",
"/": "fbe8a391c3f5248ec95ce71b7742dc79",
"main.dart.js": "afe138099667bc6f3839cf6926f84c7b",
"manifest.json": "7b89e403420721e9c13d7051eb986715",
"version.json": "65496cac845d26f49228afacb0f30081"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
