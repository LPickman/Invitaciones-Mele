const plantillas = {
  boda: [
    { nombre: "Boda Rosa", imagen: "assets/img/boda12jpg" },
    { nombre: "Boda Clásica", imagen: "assets/img/boda1.jpg" },
  ],
  15: [
    { nombre: "Fiesta Glam", imagen: "assets/images/15_1.jpg" },
    { nombre: "Estilo Princesa", imagen: "assets/images/15_2.jpg" },
  ],
  aniversario: [
    { nombre: "Aniversario 25", imagen: "assets/images/aniv1.jpg" },
    { nombre: "Amor eterno", imagen: "assets/images/aniv2.jpg" },
  ],
  baby: [
    { nombre: "Baby Azul", imagen: "assets/images/baby1.jpg" },
    { nombre: "Baby Rosa", imagen: "assets/images/baby2.jpg" },
  ],
};

const inicio = document.getElementById("inicio");
const seccionPlantillas = document.getElementById("plantillas");
const logo = document.querySelector(".navbar-brand");
const botones = document.querySelectorAll("[data-categoria]");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoria = btn.getAttribute("data-categoria");
    mostrarVista("plantillas");
    mostrarPlantillas(categoria);
  });
});

logo.addEventListener("click", () => {
  mostrarVista("inicio");
});

function mostrarVista(id) {
  document
    .querySelectorAll(".vista")
    .forEach((v) => v.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}

function mostrarPlantillas(categoria) {
  seccionPlantillas.innerHTML = "";
  plantillas[categoria].forEach((p) => {
    const div = document.createElement("div");
    div.className = "plantilla vista activa";
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
    `;
    seccionPlantillas.appendChild(div);
  });
}
