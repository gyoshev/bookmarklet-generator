function bookmarkify(script, options) {
    if (options.uglify) {
        script = uglify(script);
    }

    return 'javascript:' + script.replace(/\s+/, '%20');
}
