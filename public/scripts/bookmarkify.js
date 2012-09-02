function bookmarkify(script, options) {
    return 'javascript:' + script.replace(/\s+/, '%20');
}
