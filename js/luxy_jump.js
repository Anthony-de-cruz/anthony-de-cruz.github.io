// https://github.com/min30327/luxy.js/issues/21#issuecomment-877509973
jumpTo = (obj) => {
    scrollTo({
        top: document.querySelector(obj).offsetTop,
        left: 0,
        behavior: 'smooth'
    });
    window.location = `${obj}`;
};

