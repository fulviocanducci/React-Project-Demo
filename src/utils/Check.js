export function isInt(value) {
    const res = /^[0-9\b]+$/;
    return res.test(value);
}

export function isEmail(value) {
    var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(value);
}