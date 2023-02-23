const fbq = (method, eventName, options) => {
    if (typeof window !== "undefined") {
        window.fbq(method, eventName, options);
    }
}

export default fbq;
