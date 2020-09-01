// BOM - browser object model

// object window
window.sctollTo(0, 150); // переместит на 150 px вниз и остановится 
window.scrollBy(0, 150); // переместит на 150 px вниз, и при следующем вызове снова переместит на 150 px вниз

window.outherWidth();
window.outerHeight();
window.pageXOffset();
window.pageYOffset();

// object Screen
screen.width();
screen.height();
screen.availWidth();
screen.availHeight();

// object Location
location.href();
location.origin();
location.hostname();

// object History
history.go(3); // попадём на 3 страницы назад

// Cookie - user data
localStorage();
sessionStorage();