const appContent = document.getElementById("appContent");

const screens = {
    home: `
        <h2>Home</h2>

        <p>Welcome to DemoApp.</p>
    `,

    settings: `
        <h2>Settings</h2>

        <p>Settings screen coming soon.</p>
    `,

    about: `
        <h2>About</h2>

        <p>This app is built using HTML, CSS, JavaScript and Capacitor.</p>
    `
};

function showScreen(screenName){

    if(!screens[screenName]){
        return;
    }

    appContent.innerHTML = screens[screenName];
}