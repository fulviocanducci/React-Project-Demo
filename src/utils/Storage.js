export function storageSet(key, value) {
    window.localStorage.setItem(key, value);
}

export function storageSetJSON(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function storageGet(key) {
    return window.localStorage.getItem(key);
}

export function storageGetJSON(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

export function storageDelete(key) {
    window.localStorage.removeItem(key);    
}

export function storageClear() {
    window.localStorage.clear();
}