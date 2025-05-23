'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e402833f375f4b1b3166667c96a6b79d",
"version.json": "ec22d5adf7d7c439795ff3b57fda496d",
"index.html": "fab29c673fd0dc81403f7ac78dee2b4c",
"/": "fab29c673fd0dc81403f7ac78dee2b4c",
"main.dart.js": "24595c43399061e59dbf39836f152567",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a5a5bf2e397051bf1488c20a76ae9d47",
".git/config": "776317a6906802dd1c7af4d0827658ce",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/66ed30b41a7e13a02f2d85fce9758ad8135d87": "773662440f80ff8902b4c3ced47d7977",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/bd984d1e7979831900b48bc52ad409073f8547": "9b4334cdfb28cf249db588acf81d520d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/70/53905c05c5450405a43647d6317fc59afff18a": "b3e68cd1b2a4a575a88fd017e1313fb9",
".git/objects/12/a9e31142846841356d4e2772154840f977184b": "5daaf2b056c32c0bf15f6bc2eddb9439",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0007904c8352937b6cb2d7e2cebc57b",
".git/logs/refs/heads/gh-pages": "f0007904c8352937b6cb2d7e2cebc57b",
".git/logs/refs/remotes/origin/gh-pages": "02ae05889c7ad5e914cc98348865bdce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "81eb438b64bf48d8c43422c698210f61",
".git/refs/remotes/origin/gh-pages": "81eb438b64bf48d8c43422c698210f61",
".git/index": "7faff518502677b8e6c96828bc7242c5",
".git/COMMIT_EDITMSG": "0250b5083965303c919d137c28d78233",
"assets/AssetManifest.json": "84d62c464df2798d3a96dc3d40743507",
"assets/NOTICES": "2a9df084d82787b9ce19a7eb908a5502",
"assets/FontManifest.json": "0074d432a41eec0d28f8ed913062ba96",
"assets/AssetManifest.bin.json": "597ab210a1082583736d27c91b86b417",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ed14ba5cbf398ca8946714994ee1128e",
"assets/fonts/MaterialIcons-Regular.otf": "d8f2bc6f6dbf28a9c9ec7b9e413c568a",
"assets/assets/images/tit_ko2.svg": "da9302782f4bb6c359e6300884434731",
"assets/assets/images/2X_estilo.svg": "f4f9c7f53dc10f3ba1c991fcc83861ba",
"assets/assets/images/fundo_home.jpg": "e4ee11fbdeb9778791a1259bb86f2efd",
"assets/assets/images/bfg_manual_propri.pdf": "3ed5cb3e2eda1797d3e8d237c37709e1",
"assets/assets/images/bfg_historia.pdf": "4829a1b5edf28ba4ae735c71ea33b189",
"assets/assets/images/bfg_trail_terrain_corte.png": "4f260e0dc830e00114d0a8e140fa8fe5",
"assets/assets/images/tit_ko3.svg": "6945af8d029cbbf483686dc6a7b2690a",
"assets/assets/images/tit_nome_trail_terrain.svg": "af3885e3ce9c4be3ff84bc3c5ce1a55b",
"assets/assets/images/ss_ko3_45.png": "bdd369a927a6f306da1d34147b22afbc",
"assets/assets/images/ss_tt_frente.png": "458ff82e68434a6b8077e810b445a715",
"assets/assets/images/bullet_topico.svg": "c8e411c27fdc1555bbc21492cd314ded",
"assets/assets/images/2X_durabilidade.svg": "5d7700265ee11ba93d10b3c657ca226b",
"assets/assets/images/ss_tt_flanco.png": "e09f9f4eb529f1e668912513b32d8cfe",
"assets/assets/images/bfg_allterrain_ko2_corte.png": "3b4551d1ae2ef67e100cf1f35171a5a8",
"assets/assets/images/comparativo_pneus.jpg": "11145a0030d9064efb236a01975a0daa",
"assets/assets/images/ss_tt_45.png": "17be837669f541920de154d73fb48c8e",
"assets/assets/images/base_bfgoodrich.png": "057047bbf4eeb3cf7e4c34e744bfd34c",
"assets/assets/images/ss_ko3_invertido.png": "ae755a6cc03972f9295e666f614475d9",
"assets/assets/images/ss_ko3_veiculo.png": "6efd1f6df3f3145c912cc304161d322d",
"assets/assets/images/icon_historico.svg": "72567eb074112139687fc6d4a3bdb53a",
"assets/assets/images/comparativo_pneus.pdf": "6350e028d06c8e04adcdf06f79c002aa",
"assets/assets/images/ic_comparativo.svg": "10667221e4b9e4690cc7471fd4cb4a6e",
"assets/assets/images/icon_video.svg": "dfb992e0f11c05aed56e3fbe68a81409",
"assets/assets/images/ic_home.svg": "2e331bf013177cbdea12f7e7a21f1283",
"assets/assets/images/imagem_topo_pneus.png": "94d5208316151c3add6349c262584f39",
"assets/assets/images/trail_tec_tela01.jpg": "69078ef0b059715f99b7fdfa915e7ea9",
"assets/assets/images/tit_allterrain.svg": "3b8b3b2e11424f52e6b096b413bf1768",
"assets/assets/images/trail_tec_tela02.jpg": "23cb49f09790f9e40c1c161a634b3442",
"assets/assets/images/ss_km3_invertido.png": "a55f79daa9d763e34963580ba4d8d2bc",
"assets/assets/images/trail_tec_tela03.jpg": "ef7e10a04701dcf0a77a7bdc6598bad9",
"assets/assets/images/ic_pneus.svg": "e91da13e966cf45525942ee92a1e2b38",
"assets/assets/images/2X_durabilidade.png": "cca0cdfee534df06b6cc58797ef79ba6",
"assets/assets/images/bfg_allterrain_ko3_corte.png": "c5f6277b3dfc58946edec2acdd5f2194",
"assets/assets/images/mud_tec_tela01.jpg": "83563f744b5da5ba9739e8a097310f8e",
"assets/assets/images/ss_ko3_frente.png": "e8f8955fcc22ea9fa1fd76fe3b9484c1",
"assets/assets/images/tit_nome_mud_km3.svg": "c11c38de40780e7ad57b14fb99397caf",
"assets/assets/images/pneu_trail_Terrain.png": "0c4d62b6b63807572bbc17253ae6be62",
"assets/assets/images/mud_tec_tela02.jpg": "7b1bd1b93c295744108308e94c1985e5",
"assets/assets/images/pneu_mud_km3_flanco.png": "2822b3259a83fd622e250f5d64ab6f8d",
"assets/assets/images/ss_km3_45.png": "988f44152fd97b8dae3e377e1647636a",
"assets/assets/images/mud_tec_tela03.jpg": "ae35e4feaf38a2998a52b3ca8528dfce",
"assets/assets/images/2X_estilo.png": "0f5e1191d7095a0c03a4fa71b59d4117",
"assets/assets/images/icon_manual.svg": "cd7f9005feef90b3b435784dd487dfd8",
"assets/assets/images/logo_bfgoodrich.svg": "13efb6f1bd80c7c5d1d9725e6ac96222",
"assets/assets/images/icon_produtos.svg": "5cfea66c503f058ed639b1a97a306501",
"assets/assets/images/ss_ko2_50.png": "4732e04b92587d8ff6a4966d0d05e5ee",
"assets/assets/images/ss_ko2_45.png": "f17e7d001f3b1a7f66c57d02e73496ab",
"assets/assets/images/ss_ko2_veiculo.png": "35d96694676435aeb4de536b670fb2d3",
"assets/assets/images/tit_nome_all_ko3.svg": "7feba0a4c2109577d5f933d064cb560b",
"assets/assets/images/titulo_foll_digital.svg": "267fa5dc7b01f40534d88f73dc256d75",
"assets/assets/images/tit_nome_all_ko2.svg": "cefdb19a01fd34d259474e27924ab54f",
"assets/assets/images/bfg_manual.pdf": "b191898ef4ad52bcb767ed972b968be3",
"assets/assets/images/fundo_pneus.png": "87fe1158eb0484ead81ed09480106913",
"assets/assets/images/fundo_pneus.jpg": "82e7e867fb1166189b55844319155ba6",
"assets/assets/images/ss_km3_frente.png": "0299d4a947d6bb05ad7c41523fba7e57",
"assets/assets/images/2X_tracao.svg": "cb56dda10eb74c3461ee6ec0a0fd0c54",
"assets/assets/images/imagem_capa.jpg": "e4ee11fbdeb9778791a1259bb86f2efd",
"assets/assets/images/2X_resistencia.png": "fb468407bb6cf6a6e8e9f17331e6aa50",
"assets/assets/images/ss_ko2_frente2.png": "eabd06bc77e7cfedb6ae284d6c7334bd",
"assets/assets/images/ss_ko2_frente.png": "d40f7bc370dd487d5279d0b47033a21f",
"assets/assets/images/tit_km3.svg": "6ef963c594f8077ad6bb3ef155ac4291",
"assets/assets/images/plus_bullet.svg": "53dc6cabae92cc102d81bd38fb3c0f48",
"assets/assets/images/2X_resistencia.svg": "861f969d782f413c2220e3bc55588a77",
"assets/assets/images/2X_tracao.png": "7aa736111efaae6924d8f3caa6a93c55",
"assets/assets/images/ss_ko3_capa.png": "a717fe167166caebd673b4fe5837db2d",
"assets/assets/images/ss_tt_frente2.png": "9eadbd9d710baa0afdcf09923f8d7ffb",
"assets/assets/images/ss_km3_veiculo.png": "be9eac0c043b9aa6e417860bf099fefb",
"assets/assets/images/divisor_hor.png": "9a27ca85d44a7717b5bfa05a08e73e6b",
"assets/assets/images/bfg_mudterrain_km3_corte.png": "4d5d3f254c83607b03c044fe3f8b4056",
"assets/assets/images/codage_fundomdpi.png": "0f971cfc07ffc18d1741273253f2e9bd",
"assets/assets/images/pneu_all_ko2.png": "1c14264ed4e4237b390b8bd0df1c6c1c",
"assets/assets/images/codage_fundo.svg": "dc95549c699374da5767f3459ef4d93c",
"assets/assets/images/allko2_tec_tela01.jpg": "4c7382d2b74f6c1f0f03c5f3143061ae",
"assets/assets/images/pneu_all_ko3.png": "ac22e0882fce24aeabfa7f71370ee397",
"assets/assets/images/ss_tt_veiculo.png": "8096b2de1682e62406f84160dc9d36ea",
"assets/assets/images/allko2_tec_tela03.jpg": "3775a022fbf1186507461f1a3edc2d63",
"assets/assets/images/allko2_tec_tela02.jpg": "939c0842c4fe9c7f2ae06ee29954e2da",
"assets/assets/fonts/FrutigerLTStd-Black.otf": "35b65bf1bbc70a2a73d2aed4fd0e4a02",
"assets/assets/fonts/FrutigerLTStd-BlackCn.otf": "0ad904b662bd9ece8f93d0eb2c17dabb",
"assets/assets/fonts/Bliss2BI.otf": "07639cc908fe18eb328f69c91ef142bd",
"assets/assets/fonts/FrutigerLTStd-BoldCn.otf": "63a0917455f4bda890a9c952065e3f63",
"assets/assets/fonts/FrutigerLTStd-LightItalic.otf": "4a67e207ded11432a116ad3d40bdc381",
"assets/assets/fonts/FrutigerLTStd-Roman.otf": "1edd1a4dd9b2a441b39012ae04d93149",
"assets/assets/fonts/Bliss2R.otf": "d33b6e3df96f31b9d879938c0e036aed",
"assets/assets/fonts/Bliss2B.otf": "4a79f09e463d0b08111e8481aea28ab1",
"assets/assets/fonts/FrutigerLTStd-Light.otf": "57f6477d3f878af87307876a22d126af",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
