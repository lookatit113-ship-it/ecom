// app.js

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Change '/sw.js' to 'sw.js' or './sw.js'
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}
