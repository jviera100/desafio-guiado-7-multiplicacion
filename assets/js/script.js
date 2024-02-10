// Crear una función que reciba un número y muestre una tabla de multipicación y factorial.
const showTable = () => {
    // Obtener el valor del campo de entrada del número
  const numberInput = document.getElementById("numberInput").value;
  // Obtener el contenedor de la tabla
  const tableContainer = document.getElementById("tableContainer");

  // Validar el número ingresado
  if (validateNumber(numberInput)) {
    tableContainer.innerHTML = "";

    // Mostrar resultado en consola
    console.log(`Número ingresado: ${numberInput}`);

    // Crear una tabla HTML
    const table = document.createElement("table");
    // Agregar una fila de encabezado a la tabla:  n° | multiplicación | factorial
    table.innerHTML = "<tr><th>Multiplicación</th><th>Factorial</th></tr>";

    // Llenar tabla con datos
    for (let i = 1; i <= numberInput; i++) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);

     // Agregar datos a las celdas
      cell1.textContent = `${i} * ${numberInput} = ${i * numberInput}`;
      cell2.textContent = `${calculateFactorial(i)}`;

      // Mostrar fila en la consola
      console.log(
        `${i} * ${numberInput} = ${i * numberInput} | ${calculateFactorial(i)}`
      );
    }

    // Una vez finalizado el ciclo agregar tabla al contenedor
    tableContainer.appendChild(table);

    // Si el numero no es válido mostrar mensaje en consola
  } else {
    console.log("Número fuera del rango (1-20)");
  }
};

// Validar que el número sea un entero entre 1 y 20
const validateNumber = (number) => {
  const parsedNumber = parseInt(number, 10);
  return !isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 20;
};

// Calcular el factorial de un número
const calculateFactorial = (num) => {
  let factorial = 1;
  let factorialString = `${num}! = `;

   for (let i = 1; i <= num; i++) {
    factorial *= i;
    factorialString += `${i}${i !== num ? ' * ' : ' = '}`;
  }

  // Formatear el resultado con puntos
  factorialString += formatNumberWithPoints(factorial);

  return factorialString;
};

// Función para formatear un número con puntos
const formatNumberWithPoints = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  showTable();
});
