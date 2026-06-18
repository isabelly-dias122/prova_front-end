
const cursos = [
  ["Engenharia Civil", "Exatas"],
  ["Ciência da Computação", "Exatas"],
  ["Matemática", "Exatas"],

  ["Direito", "Humanas"],
  ["História", "Humanas"],
  ["Geografia", "Humanas"],

  ["Medicina", "Natureza"],
  ["Biologia", "Natureza"],
  ["Enfermagem", "Natureza"],

  ["Letras", "Linguagens"],
  ["Jornalismo", "Linguagens"],
  ["Publicidade", "Linguagens"]
];

const select = document.getElementById("area");
const resultado = document.getElementById("resultado");

select.addEventListener("change", function () {

  resultado.innerHTML = "";

  const filtrados = cursos.filter(function (curso) {
    return curso[1] === select.value;
  });

  if (select.value === "") {
    return;
  }

  if (filtrados.length === 0) {
    resultado.innerHTML = "Nenhum curso encontrado";
    return;
  }

  filtrados.forEach(function (curso) {
    const div = document.createElement("div");
    div.textContent = curso[0];
    resultado.appendChild(div);
  });

});