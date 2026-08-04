const appContent = document.getElementById("appContent");

async function showScreen(screenName) {

    try {

        const response = await fetch(`assets/views/${screenName}.html`);

        if (!response.ok) {
            throw new Error("Screen not found.");
        }

        const html = await response.text();

        appContent.innerHTML = html;

    } catch (error) {

        appContent.innerHTML = `
            <h2>Error</h2>
            <p>Unable to load this screen.</p>
        `;

        console.error(error);
    }

}