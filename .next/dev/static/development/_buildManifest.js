self.__BUILD_MANIFEST = {
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
    "/_app",
    "/_error",
    "/events/example",
    "/events/template"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()