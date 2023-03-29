var collectSeleniumString = function () {
  return [
    window["window"]["$cdc_asdjflasutopfhvcZLmcfl_"] ||
    window["document"]["$cdc_asdjflasutopfhvcZLmcfl_"]
      ? "1"
      : "0",
    null !=
    window["window"]["document"]["documentElement"]["getAttribute"]("webdriver")
      ? "1"
      : "0",
    window["navigator"]["webdriver"] !== undefined &&
    window["navigator"]["webdriver"]
      ? "1"
      : "0",
    window["window"]["webdriver"] !== undefined ? "1" : "0",
    window["window"]["XPathResult"] ||
    window["document"]["XPathResult"] !== undefined
      ? "1"
      : "0",
    null !=
    window["window"]["document"]["documentElement"]["getAttribute"]("driver")
      ? "1"
      : "0",
    null !=
    window["window"]["document"]["documentElement"]["getAttribute"]("selenium")
      ? "1"
      : "0",
  ].join(",");
};
