'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6ec3d8289e1ea6fd143e58653116d93d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bbb4cc1c89b2c1c11a9a58fdecfceb13",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2a6102a4873976f9231eb2bfce2531e",
".git/logs/refs/heads/main": "91f3d8409f54729353db219e6550f76a",
".git/logs/refs/remotes/origin/main": "e980f235c6fd32985b0c5d95d96a95c2",
".git/objects/01/cf3cb5b66c676d3920d8f774a6d86fb37f23d9": "31fcdfaa64ab1f3a961ffd6710bd2f4f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/b48f5fa23539358af8d587ad3ac1300cc4a1ab": "09e9556454eb9f36285f391d98985f83",
".git/objects/0f/31b34ba36591a2f8f40cbf5ef237a7cf76d1b4": "32c992a5763f506cd65d4020826b557c",
".git/objects/10/f23780ef8f8cc808ba8a1007830691afe964f6": "55b1cd29f27f3974ac649d72cab9b3e7",
".git/objects/1a/97b36a6f44c300b6d156032219bac1617411b3": "a0a7f9861bbf0a2619b241589ec91f1a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/189e7eb1a7e4fa563d70039707c8129fc4035b": "96085a779ee77f51f318755c62a3ef38",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/31/5f27c45702ac2319cf250d6db661e0dfcc82dc": "18e16a3d6979ac3087392e1d06353a0a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/d0eed2f2ba3ce2d64c2001d8845bf276c80d64": "fa8d4f08ff271b9ee919e9c245443219",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/1432cd1f9018c31dc21f959511df90dd7c984c": "44908a73a5ab853b8242429720c6b530",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/8d1ae5709d12d1d8bd98463604366491d59c1f": "d43057db78cbac2112fc1c6069c98edb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/ab49d14cb65ac0d3f320152622b12a7e3d4a77": "010a428a83e48666f61ad18b12c64627",
".git/objects/4e/3a5d2f0a0eb241a5b2c01003472b798780d1e2": "5ca6d884446327d8e23b627763a59eca",
".git/objects/52/65766c3c22c1e63debac560c1276b5bb68fcd0": "d80259162aa1cade4a77a78a68625319",
".git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
".git/objects/5d/6a3934297750ae2f00556b0d7bb11254d0ad6e": "90c1e64b7161ca821218ac7a1837f4ca",
".git/objects/65/7b1aaf269abc3a5c65f10347e46e2ba46bd882": "d124d6d6d8df0262ddfb8fc484d58246",
".git/objects/66/d9e1e83cec1641ffe45f09e717b3026eb17d23": "6a137e33c585435acb07c5a54630f83f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/1ed08b5a382f25e83a60b398fede4a4f5ba941": "46b0b817b54be37e2923ee257bad8cec",
".git/objects/6f/f11258710ba4714e91895a3fcee3ee4d44fb5f": "d5ce843144d585401dac0bc950feefd0",
".git/objects/78/d2644b09d29e97f5e28dfc7b23d821575b4a6c": "3cdc46ae49b03f11cf688fa532026550",
".git/objects/7c/f619b3507fc0b255c3c6a897e15977da5b2b79": "e85a7b355e14cf84d7d1fc0f29534a7e",
".git/objects/7e/e51d3111a17f2dd06e7fd4e6b038a7e5c04bb9": "697606868592138e6fbd417355ea41bc",
".git/objects/80/713a5755b4d3a9958a27b8f81d2d9fd4d4f321": "17484cde4c3981837bbb5b1f2303c341",
".git/objects/80/a1c1af19609a7471c5835a81d932540889dc78": "263eb14592e9f4cee0004b0d3cc7f24e",
".git/objects/80/d76375b065e965bb0d458cd2dfc93573cbc0e5": "39f2ded15b64c6931757ba33a5619545",
".git/objects/81/5b4f5780827973f2363fe31168695b98dd8ef0": "01632a4eb0080568acf964b764c18c6c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8e/f25d29267125d87b3a104a8c0f27a75d06da36": "7660b7db8813af394a0f67903f3f9ab7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/e8b8fd609719656e4f1f2f3ce187b0d2b35549": "c4c45cb6a932d719764f6eaf7c4a578e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/690e21c4e8b83bede60c5d922cf6febe8d707f": "78c62eb2a5ae4ec8fb943468c68c0338",
".git/objects/9f/f080a415babff5d3102ed312bff35df48c20a7": "ba4546241ff63b9e26817c221432b78f",
".git/objects/a2/bb7f99049e9d9231638504a59c0e88b5d158a6": "9e43a2864b31b4467a55efc05eddc1e5",
".git/objects/a8/4cb1ca582f3b7352e1de8edd784b58bcf7340b": "231ec2a64c41fa6300cc1c3a04ca3afe",
".git/objects/b1/3244565058bb41e155115b139ecf9d37b44d63": "b04135dcabab7ccab1500113840042b4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/18d33b29bbf4da69d15d4b21038df55d02ea9e": "7e44e35489baae54a5e66c2a182d642f",
".git/objects/b3/bb8e813e9ec78e6ebc29c018084767f0d9e9d3": "cbfdc16301f60e6db305b066994d9d85",
".git/objects/b6/52fab6f79f6189371f3224f4885aa430e731a5": "095abdfb59e9b53302c3ca04f6823c1d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/3e2053c633493f33182e1abc6ef206a29227ea": "a80e84bfec9b2cd9f93c9ca7bc486e6d",
".git/objects/c1/0cecf1f189fba67fb2c45ddc34c34aa6fb0f5b": "fac2d6cc83d34b4e86d52dda3284ea73",
".git/objects/c8/712a6dc2fc60e22d412381f90c4c255c5d0d45": "460729a520e989e9865270aa96ea6159",
".git/objects/c9/59a284cf27c9337089c6a1d0f1a87d124edbb0": "7384d65b0ea35806dfaf6bdd23a31020",
".git/objects/cd/9b962d78dbaee9547940172ac659f45305cbb4": "d6607049236037e367359c7251996734",
".git/objects/ce/f50a77126cb7e4c85282d39304e2125fa2abca": "d83d44b0ffc14bef71c0051b215d22be",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/20bd4da308f2494f36a77e436ce1fff036b5fa": "316915a383b83a4dfbc78da378564db5",
".git/objects/d3/ba87e8fa9a4192c0ddafd481205bc45e34cca0": "3a85314077fe5f84eb0f6fde4d45ccb2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9c7c5d23e8708eb079e3d2246b64fc61754ee6": "ea2b4faa08c8eedf439bb11b53568e19",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/e0f6cacd422bc7f246193f3ce07b740bdcec4a": "01d9f52dc21710dbc85c2ee331694d81",
".git/objects/eb/fec2b7d0ce94b82eae3fc9518621d57aa56281": "dcbb721edf17f75eb6cf652aa19fd9f4",
".git/objects/ec/bb64ddb7f2dc5f249f41ad4fca00176141a8e1": "4ebbeea97e67b40f692cd49ff4f0439d",
".git/objects/ed/04226ed18b9772d64846643b2edf3c8467a3ef": "2a54107e37b5e6de2df66622f9098e18",
".git/objects/ee/97a9a85860c0d1e4db7f8741b2b6bb3d3a408e": "c1574f9a193f611af2870abc3e6f60e3",
".git/objects/f1/3d6f374d9e0c1be7cfeb1e2af965f74522a758": "c55480e28ef6e69d884721fc95374ac7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/466a77a4abfa8d8f62e2c93b899cf78e6175ee": "8b39063ded322fbf2ab1cf455e12e9f3",
".git/objects/f4/486ba90f67c7ad2c40ab1a546eeb969e57a4ad": "02395ce4993112f85d53cdb5d346f2b1",
".git/objects/f4/be6183e7e3143c638d094adc7df147dcabeda4": "db102fdf74d2a6fad3348bb88c544058",
".git/objects/f5/04d8548d64754d8b4d1ba62ddb7f358353c867": "b937b290fa1f42f0b56bb8e5cdd12aac",
".git/objects/f6/c7b7f3bcd0a22dce5d3d0992260ae64e0ce0cf": "7a8a638526b9a823e98ef59d5efc104d",
".git/objects/fb/08d1420c5224231cacbe5f1a0b0b7962ebac7a": "02609f6398a4b93990b92d6d48620e14",
".git/refs/heads/main": "0ad1116ee19a4f55fdce964dbb2cbf30",
".git/refs/remotes/origin/main": "0ad1116ee19a4f55fdce964dbb2cbf30",
"assets/AssetManifest.bin": "78bf21512adcc2703f0aee538eb5f9ab",
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
"assets/fonts/MaterialIcons-Regular.otf": "1143ba4b69412b9f800c4ce63e301d93",
"assets/NOTICES": "d08377e397d50a2d5b8c46a985275821",
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
"flutter_bootstrap.js": "a4156bd59b52e9f32a654c385094e958",
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
"main.dart.js": "365a5ce088a5fdbda415b69da28135f2",
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
