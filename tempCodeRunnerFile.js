function settimeoutpromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}
function callback() {
    console.log("wait for 5 seconds");
}
settimeoutpromisified(5000).then(callback);