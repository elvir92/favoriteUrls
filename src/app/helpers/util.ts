export const isUrlValid = (value: string) => {
    try {
        const url = new URL(value);
        return url ? true : false;
    } catch (TypeError) {
        return false;
    }
}

export const isUrlValidRegex = (url: string) => {
    const regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const res = regexp.test(url);
    return res;
}
