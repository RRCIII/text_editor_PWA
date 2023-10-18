const butInstall = document.getElementById('buttonInstall');

// Variable for storing beforeinstallprompt event
let deferredPrompt;

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', async (event) => {
    deferredPrompt = event;
    butInstall.style.display = 'block';
});