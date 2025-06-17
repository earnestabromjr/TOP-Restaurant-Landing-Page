export function load_menu() {
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.innerHTML = `<h1>Menu</h1>
    <p>Here is our menu</p>`;
    content.appendChild(menu);
}