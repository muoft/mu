self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/events": [
    "static/chunks/pages/events.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/",
        "destination": "/index.html"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/FAQs",
    "/_app",
    "/_error",
    "/about/about-us",
    "/about/execs",
    "/api/repo",
    "/api/repo/upload",
    "/api/repo/[path]",
    "/events",
    "/events/[title]",
    "/repo",
    "/repo/upload"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()