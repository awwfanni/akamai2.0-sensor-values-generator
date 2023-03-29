function getFingerPrintObject() {

  var getSupportedPlugins = function () {
    var pluginList = [
      "WebEx64 General Plugin Container",
      "YouTube Plug-in",
      "Java Applet Plug-in",
      "Shockwave Flash",
      "iPhotoPhotocast",
      "SharePoint Browser Plug-in",
      "Chrome Remote Desktop Viewer",
      "Chrome PDF Viewer",
      "Native Client",
      "Unity Player",
      "WebKit-integrierte PDF",
      "QuickTime Plug-in",
      "RealPlayer Version Plugin",
      "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)",
      "Mozilla Default Plug-in",
      "Adobe Acrobat",
      "AdobeAAMDetect",
      "Google Earth Plug-in",
      "Java Plug-in 2 for NPAPI Browsers",
      "Widevine Content Decryption Module",
      "Microsoft Office Live Plug-in",
      "Windows Media Player Plug-in Dynamic Link Library",
      "Google Talk Plugin Video Renderer",
      "Edge PDF Viewer",
      "Shockwave for Director",
      "Default Browser Helper",
      "Silverlight Plug-In",
    ];

    if (window["navigator"]["plugins"] == undefined) {
      return null;
    }

    for (
      var pluginListLength = pluginList["length"], pluginStr = "", it = 0;
      it < pluginListLength;
      it++
    ) {
      var p = pluginList[it];
      window["navigator"]["plugins"][p] !== undefined &&
        (pluginStr = "".concat(pluginStr, ",").concat(it));
    }

    return pluginStr;
  };

  try {
    var timestampBeforeFingerprinting = window.Date.now(),
      canvasFPObj = (function getcanvasFPObj() {
        var canvasFingerprint = (function vEm(fingerPrintPassword) {
          var VEm = -1;
          var PEm = -1;
          var QEm = -1;

          try {
            //true on Firefox
            var myCanvas = window["document"]["createElement"]("canvas");
            //true on firefox
            if (
              ((myCanvas["width"] = 280),
              (myCanvas["height"] = 60),
              (myCanvas["style"]["display"] = "none"),
              typeof myCanvas["getContext"] == "function")
            ) {
              var myCanvasContext = myCanvas["getContext"]("2d");
              (myCanvasContext["fillStyle"] = "rgb(102, 204, 0)"),
                myCanvasContext["fillRect"](100, 5, 80, 50),
                (myCanvasContext["fillStyle"] = "#f60"),
                (myCanvasContext["font"] = "16pt Arial"),
                myCanvasContext["fillText"](fingerPrintPassword, 10, 40),
                (myCanvasContext["strokeStyle"] = "rgb(120, 186, 176)"),
                myCanvasContext["arc"](
                  80,
                  10,
                  20,
                  0,
                  window["Math"]["PI"],
                  false
                ),
                myCanvasContext["stroke"]();
              var canvasDataUrl = myCanvas["toDataURL"]();
              VEm = 0;

              for (var iter = 0; iter < canvasDataUrl["length"]; iter++) {
                (VEm = (VEm << 5) - VEm + canvasDataUrl["charCodeAt"](iter)),
                  (VEm &= VEm);
              }

              VEm = VEm["toString"]();
              var secondCanvas = window["document"]["createElement"]("canvas");
              (secondCanvas["width"] = 16), (secondCanvas["height"] = 16);
              var secondCanvasCtx = secondCanvas["getContext"]("2d");
              (secondCanvasCtx["font"] = "6pt Arial"),
                (PEm = window["Math"]
                  ["floor"](1000 * window["Math"]["random"]())
                  ["toString"]()),
                secondCanvasCtx["fillText"](PEm, 1, 12);

              for (
                var zKm = secondCanvas["toDataURL"](), HKm = 0, RKm = 0;
                RKm < zKm["length"];
                RKm++
              ) {
                (HKm = (HKm << 5) - HKm + zKm["charCodeAt"](RKm)), (HKm &= HKm);
              }

              QEm = HKm["toString"]();
            }

            var lKm;
            return [VEm, PEm, QEm];
          } catch (ex) {
            return ["exception", PEm, QEm];
          }
        })("<@nv45. F1n63r,Pr1n71n6!"); //FINGERPRINT PASSWORD
        return [
          [
            canvasFingerprint[0],
            -1,
            "dis",
            getSupportedPlugins(),
            !!window["window"]["sessionStorage"],
            !!window["window"]["localStorage"],
            !!window["window"]["indexedDB"],
            new window["Date"]()["getTimezoneOffset"](),
            typeof window["window"]["RTCPeerConnection"] === "function",
            window["screen"]["colorDepth"],
            window["screen"]["pixelDepth"],
            window["navigator"]["cookieEnabled"]
              ? window["navigator"]["cookieEnabled"]
              : -1,
            window["navigator"]["javaEnabled"]
              ? window["navigator"]["javaEnabled"]()
              : -1,
            window["navigator"]["doNotTrack"]
              ? window["navigator"]["doNotTrack"]
              : -1,
          ]["join"](";"),
          canvasFingerprint[1],
          canvasFingerprint[2],
        ];
      })();

    return {
      fpValStr: canvasFPObj[0]["replace"](/"/g, "\u000f\u0008"),
      td: timestampBeforeFingerprinting - window.Date.now(),
      rVal: canvasFPObj[1],
      rCFP: canvasFPObj[2],
    };
  } catch (ex) {}
}
