const items = new Map();
items.set('howler.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/howler*')
items.set('game.js', 'https://krunker.io/js/game*');
items.set('oscillator.js', 'https://krunker.io/libs/oscillator*');
items.set('zip-ext.js', 'https://krunker.io/libs/zip-ext.*');
items.set("zip.js", 'https://krunker.io/libs/zip.*');

for (const [file, pattern] of items) {
    chrome.webRequest.onBeforeRequest.addListener(
        (requestDetails) => {
            console.log("Redirecting: " + requestDetails.url);
            return {
                redirectUrl: chrome.extension.getURL(file)
            };
        }, {
            urls: [pattern],
            types: ["script"]
        },
        ["blocking"]
    );
}