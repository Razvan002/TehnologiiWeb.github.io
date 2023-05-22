function dismissCookiePopup() {
    var cookiePopup = document.getElementById('cookie-popup');
    cookiePopup.parentNode.removeChild(cookiePopup);
    document.cookie = 'cookieConsent=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
}

function checkCookieConsent() {
    if (document.cookie.indexOf('cookieConsent=true') !== -1) {
        var cookiePopup = document.getElementById('cookie-popup');
        cookiePopup.parentNode.removeChild(cookiePopup);
    }
}
window.onload = function() {
    checkCookieConsent();
};