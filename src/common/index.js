const checkEmptyObject = (obj) => {
    for (var i in obj) return false;
    return true;
};

const randomUid = () => {
    var uid = '', i = 0;
    while (i++ < 36) {
        var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i - 1], r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        uid += (c == '-' || c == '4') ? c : v.toString(16)
    }
    return uid;
}

export {
    checkEmptyObject,
    randomUid,
}
