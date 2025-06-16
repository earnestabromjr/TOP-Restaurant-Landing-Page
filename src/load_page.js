export function load_page() {
    const content = document.getElementById('content');

    // Create a h1 element
    const h1 = document.createElement('h1');
    h1.textContent = "Abrom's Steakhouse";
    content.appendChild(h1);

    const img = document.createElement('img');
    img.src = "./logo.jpg";
    img.height = "200px";
    content.appendChild(img);

    const about = document.createElement('section');
    about.id = "about";
    about.innerHTML = `
        <h2>About Us</h2>
        <p>
            Welcome to Abrom's Steakhouse, where every meal is a celebration of flavor and tradition. <br>
            Indulge in our succulent steaks, cooked to perfection and seasoned with passion. <br>
            Experience a culinary journey that tantalizes your taste buds and leaves you craving more. <br>
            At Abrom's, we believe in crafting memorable moments around exceptional food. <br>
        </p>
    `;
    content.appendChild(about);

    // Apply styles
    content.id = "content";
}