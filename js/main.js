const plantillas = {
  boda: [
    { nombre: "Boda Rosa", imagen: "assets/img/boda-rosa1.jpg" },
    { nombre: "Boda Clásica", imagen: "assets/img/boda-clasica1.jpg" },
  ],
  15: [
    { nombre: "Fiesta Glam", imagen: "assets/images/15_1.jpg" },
    { nombre: "Estilo Princesa", imagen: "assets/images/15_2.jpg" },
    { nombre: "Estilo Princesa", imagen: "assets/images/15_2.jpg" },
    { nombre: "Estilo Princesa", imagen: "assets/images/15_2.jpg" },
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
const botones = document.querySelectorAll(".container button");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoria = btn.getAttribute("data-categoria");
    mostrarPlantillas(categoria);
  });
});

function mostrarPlantillas(categoria) {
  inicio.style.display = "none";
  seccionPlantillas.innerHTML = "";
  plantillas[categoria].forEach((p) => {
    const div = document.createElement("div");
    div.className = "plantilla";
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
    `;
    seccionPlantillas.appendChild(div);
  });
}

const logo = document.querySelector(".navbar-brand");

logo.addEventListener("click", () => {
  inicio.style.display = "block";
  seccionPlantillas.innerHTML = "";
});
