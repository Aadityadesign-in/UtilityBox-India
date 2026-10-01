const CACHE_NAME = "utilitybox-india-v3";

const APP_SHELL = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.webmanifest"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(async cache => {

                for (const url of APP_SHELL) {

                    try {

                        await cache.add(url);

                    } catch (error) {

                        console.warn(
                            "UtilityBox cache skipped:",
                            url,
                            error
                        );

                    }

                }

            })

            .then(() => self.skipWaiting())

    );

});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(cacheNames => {

                return Promise.all(

                    cacheNames
                        .filter(
                            name =>
                                name.startsWith(
                                    "utilitybox-india-"
                                ) &&
                                name !== CACHE_NAME
                        )
                        .map(
                            name =>
                                caches.delete(name)
                        )

                );

            })
            .then(() =>
                self.clients.claim()
            )

    );

});


self.addEventListener("fetch", event => {

    const request =
        event.request;

    if (
        request.method !== "GET" ||
        !request.url.startsWith("http")
    ) {
        return;
    }

    event.respondWith(

        caches.match(request)
            .then(cachedResponse => {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(request)
                    .then(response => {

                        if (
                            response &&
                            response.status === 200 &&
                            response.type === "basic"
                        ) {

                            const responseClone =
                                response.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(
                                        request,
                                        responseClone
                                    );
                                });

                        }

                        return response;

                    })
                    .catch(() => {

                        return caches.match(
                            "./index.html"
                        );

                    });

            })

    );

});


self.addEventListener("message", event => {

    if (
        event.data &&
        event.data.type ===
            "SKIP_WAITING"
    ) {

        self.skipWaiting();

    }

});
