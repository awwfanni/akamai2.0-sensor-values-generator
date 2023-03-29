var getBrowserData = function () {
  return [
    window["navigator"]["productSub"] ? window["navigator"]["productSub"] : "L",
    window["navigator"]["language"] ? window["navigator"]["language"] : "L",
    window["navigator"]["product"] ? window["navigator"]["product"] : "L",
    window["navigator"]["plugins"] !== undefined
      ? window["navigator"]["plugins"]["length"]
      : -1,
  ];
};
