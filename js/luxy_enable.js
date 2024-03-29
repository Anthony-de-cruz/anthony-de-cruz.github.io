// Code from https://github.com/min30327/luxy.js/issues/3#issuecomment-465860795
// Get device
var _ua = (function(u) {
    return {
        Tablet:
            (u.indexOf("windows") != -1 &&
                u.indexOf("touch") != -1 &&
                u.indexOf("tablet pc") == -1) ||
            u.indexOf("ipad") != -1 ||
            (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
            (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
            u.indexOf("kindle") != -1 ||
            u.indexOf("silk") != -1 ||
            u.indexOf("playbook") != -1,
        Mobile:
            (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
            u.indexOf("iphone") != -1 ||
            u.indexOf("ipod") != -1 ||
            (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
            (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
            u.indexOf("blackberry") != -1,
    };
})(window.navigator.userAgent.toLowerCase());

// Enable if not mobile or tablet
var luxyEl = document.getElementById("luxy");
if (luxyEl) {
    if (!_ua.Mobile && !_ua.Tablet) {
        luxy.init();
    }
}
