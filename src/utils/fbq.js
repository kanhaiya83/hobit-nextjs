const fbq = (method, eventName, options) => {
    if (typeof window !== "undefined") {
        if(!window.fbq) return;
        window.fbq(method, eventName, options);
    }
}

export default fbq;
