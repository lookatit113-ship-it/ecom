// app.js

// Check for service worker support
if ('serviceWorker' in navigator) {
    // Register the service worker after the page has loaded
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}