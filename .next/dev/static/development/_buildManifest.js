self.__BUILD_MANIFEST = {
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/repo/upload": [
    "static/chunks/pages/repo/upload.js"
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
    "/events/listing",
    "/events/[title]",
    "/repo",
    "/repo/upload"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()