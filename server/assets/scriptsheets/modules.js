import base from './modules/base';
import header from './modules/header';
import footer from './modules/footer';
import cookies from './modules/cookies';
import starter from './modules/starter';
import flashMessage from './modules/flashMessage';

const modules = (() => {

    if (document.querySelector('body.base')) { base.init(); }
    
    if (document.querySelector('header')) { header.init(); }

    if (document.querySelector('footer')) { footer.init(); }

    if (document.querySelector('#cookies-module')) { cookies.init(); }

    if (document.querySelector('#starter-theme')) { starter.init(); }

    if (document.querySelector('#flash-message')) { flashMessage.init(); }

})();

export default modules;
