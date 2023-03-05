const gtag = (event, eventName ,params) => {
    if(!window.gtag) return;
    window.gtag(event, eventName ,params);
}

export default gtag;
