'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c957ff413b2d3cb0bc07bae5a9ab37eb",
"assets/AssetManifest.bin.json": "397970c3363b28e24c59ee4fae813de2",
"assets/AssetManifest.json": "6edf97fdc365819df2f55ab313ef0277",
"assets/assets/fonts/Inter/Inter_Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter/Inter_ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter/Inter_Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter/Inter_Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter/Inter_Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter/Inter_SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Inter/Inter_Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/lottie/no_data.json": "729b33c9112cf65f9ab63a2ea826b174",
"assets/assets/lottie/no_data_after_search.json": "d15d6b1e7dccc0a19d87bd58cc7fa5cc",
"assets/assets/lottie/order.json": "72e62197b3007713fe3738e05fcdabbe",
"assets/assets/lottie/reports.json": "3167871d6bd98e3f522e6ae17ce207b2",
"assets/assets/lottie/something_went_wrong.json": "6eff73174f79d85d7dc61631d52e47a7",
"assets/assets/svgs/all.svg": "f7e8631b36e0ada10323a761f64c2b5d",
"assets/assets/svgs/apartment.svg": "75125e28402915002ebca5ff008527b2",
"assets/assets/svgs/apps-add.svg": "dd6c64be20542bff07e903be0789450b",
"assets/assets/svgs/arrow-fill-left.svg": "134872d3a7e7ba32a936803b633158b1",
"assets/assets/svgs/arrow-fill-right.svg": "4f09b3748520476abb67fc266f7251a9",
"assets/assets/svgs/arrow_left.svg": "80262e2a5a70ce1704f7b1b657a113a4",
"assets/assets/svgs/arrow_right.svg": "8c81936a4fec65aa27b670c4f5a0492f",
"assets/assets/svgs/background.svg": "eeb4f0b90f16d0f4d3085ae52ceb39ee",
"assets/assets/svgs/ballot.svg": "897d16875764247f0608e189c42211ad",
"assets/assets/svgs/box_circle_check.svg": "0f0adc15cd9579193456e6079efcdab6",
"assets/assets/svgs/box_open.svg": "a2f44c5e064e0f478a159d8d9b254682",
"assets/assets/svgs/chart.svg": "611837fd674a6d6c43cbc2c4e657fcce",
"assets/assets/svgs/check_circle.svg": "f7a0436645b1179b23f16199da34b96e",
"assets/assets/svgs/chemistry.svg": "bea7d58189fd417cab22176f09d47cdd",
"assets/assets/svgs/city.svg": "6eaae87a45bc430bc5b9da68a484e299",
"assets/assets/svgs/close.svg": "197b4ea46e0fcf6d254e560a68fcef00",
"assets/assets/svgs/edit.svg": "33337aecf9f1123ef00f100d1506a8f5",
"assets/assets/svgs/email.svg": "b989679a13a51fc7de068c8cdd6371ee",
"assets/assets/svgs/exit.svg": "fd5e1a2e10bf647c917baa3e12beed4f",
"assets/assets/svgs/eye.svg": "2529934c4b0f1f7564ec5503ef355609",
"assets/assets/svgs/eye_close.svg": "6a469bd31a12ba06db1a4f644a12a3b0",
"assets/assets/svgs/facebook.svg": "beab2463641202a160fa8b286ad8576a",
"assets/assets/svgs/google.svg": "e1bdef298ee6480f1d1eb3401c3b8125",
"assets/assets/svgs/heart.svg": "44a87c16967d972cc93ddc65813045b2",
"assets/assets/svgs/heart_fill.svg": "83de9731b970d1ac1e9994cbbcd7ae79",
"assets/assets/svgs/lock.svg": "6e3cafd079a9633acd731926cca0e04b",
"assets/assets/svgs/logo.svg": "ab9bb423c427330793809fa519123bcd",
"assets/assets/svgs/marker.svg": "226705fc3e9f50c82203a1a57f0055e8",
"assets/assets/svgs/minus.svg": "a60c5fe4f5b742c44fb30f0276c668df",
"assets/assets/svgs/options.svg": "ba56c778af50e945f2ce6bc3dfe97662",
"assets/assets/svgs/order.svg": "cf9aca2a327e064f303d16079b8332b5",
"assets/assets/svgs/percentage.svg": "770a6b34c9f33db357b15d65d9427513",
"assets/assets/svgs/phone.svg": "ccaf43710231546e8b1b311aefaed8eb",
"assets/assets/svgs/picture.svg": "b150bdd8a4b0f030b5332de32cc9c0a3",
"assets/assets/svgs/pie.svg": "914c8921136463fc6bf9cc358c20ec54",
"assets/assets/svgs/plus.svg": "f281afe243e304d3cc85713886a246b6",
"assets/assets/svgs/quantity.svg": "83ed9594d54779353ed3d5f2821e2be8",
"assets/assets/svgs/report.svg": "071794db51d518e950d8616000872762",
"assets/assets/svgs/rotate-left.svg": "6b2da586f2bdc49f74ed6c4f20351576",
"assets/assets/svgs/search.svg": "529a97cf968261d15bcf3984df05489b",
"assets/assets/svgs/sent.svg": "1a6f59756bdf6644782edc0d7e8e1822",
"assets/assets/svgs/shipping-fast-left.svg": "15017e2cdbf77dda8341e4f6a663b72c",
"assets/assets/svgs/shipping_fast.svg": "846bbaed891a9e02d1ebf2484ec80210",
"assets/assets/svgs/sort.svg": "f8d93a4a8909ce7f48cea4a2dc80c4b6",
"assets/assets/svgs/text.svg": "87f4d463252ffba46386be7dc8608411",
"assets/assets/svgs/time-delete.svg": "9b9a53165e6749f1e7a88c45a2573378",
"assets/assets/svgs/time_past.svg": "920721526c19877c547632cfce38a964",
"assets/assets/svgs/trash.svg": "d0b123804640dc2104b0b6a9a41d2193",
"assets/assets/svgs/user-pen.svg": "176a52a2ffc3d9274f7d84d24916ba15",
"assets/assets/svgs/user.svg": "10680ae00f845e650907ea8322fbc840",
"assets/FontManifest.json": "871aae37562614c8a64dd304893f05eb",
"assets/fonts/MaterialIcons-Regular.otf": "b2c8e9b15ea85e6942df350ba94b45f1",
"assets/NOTICES": "98f35260806730e924c27672cda76e9b",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "95987bb1ab378f80e52f7d3f12d792cc",
"firebase-messaging-sw.js": "e62a9662b22c2301df0c545b2587fc14",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "a4e0333b84e906cf63faceb5e570bab7",
"icons/Icon-512.png": "c550ca3fdb77e408058c1a01f359f302",
"icons/Icon-maskable-192.png": "a4e0333b84e906cf63faceb5e570bab7",
"icons/Icon-maskable-512.png": "c550ca3fdb77e408058c1a01f359f302",
"index.html": "3b35ea864bb9efc77a1dbb6a6d2b98a3",
"/": "3b35ea864bb9efc77a1dbb6a6d2b98a3",
"main.dart.js": "97d5a326ee0f6bf8336260e33fb8568c",
"manifest.json": "6444c5e51dbd0bd03e4c5108d34f7dc8",
"version.json": "0d2d287e98af14f479a68a306ebc4d03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
