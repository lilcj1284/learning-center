// splash screen timer
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("app").style.display = "block";
  }, 5000);
};

// tabs system
let tabs = [];

function openTab(name) {
  tabs.push(name);
  render();
}

function render() {
  document.getElementById("views").innerHTML =
    tabs.map(t => `<h2>${t}</h2>`).join("");
}