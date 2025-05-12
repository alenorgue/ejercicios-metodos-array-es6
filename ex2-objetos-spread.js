// https://www.w3schools.com/react/react_es6_spread.asp

const perro = {
    nombre: "Toby",
    edadCanina: 5
};

// Tu tarea:
// 1. Calcula la edad humana del perro (edadCanina * 7).
// 2. Usa el operador spread para copiar el objeto `perro`.
// 3. Añade un nuevo campo `edadHumana` al nuevo objeto.
// 4. Guarda el resultado en una constante llamada `perroConEdadHumana` y muéstralo por consola
const copiaPerro = {
    ...perro,
    edadHumana: perro.edadCanina * 7,
};

console.log(copiaPerro)
// Esperado:
// {
//   nombre: "Toby",
//   edadCanina: 5,
//   edadHumana: 35
// }


