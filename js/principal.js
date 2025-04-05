
import Cl_deportista from "./Cl_deportista.js";

let estud1 = new Cl_deportista("Juan", 132, 8, 1, 21);
let estud2 = new Cl_deportista("Félix", 110, 10, 2, 20);

let salida = document.getElementById("salida");
salida.innerHTML = `REPORTE:<br>
<br> Nombre del estudiante: ${estud1.nombre}
<br> Acumulado de notas: ${estud1.acNotas}
<br> Cantidad de materias: ${estud1.cntMaterias}
<br> Deporte (1=beisbol - 2=fútbol): ${estud1.deporte}
<br> Edad: ${estud1.edad}
<br> Nota promedio: ${estud1.calcularPromedio().toFixed(2)}
<br> ${estud1.nombre}${estud1.esAdmitido()}${estud1.convertirStringDeporte()}<br>
<br> Nombre del estudiante: ${estud2.nombre}
<br> Acumulado de notas: ${estud2.acNotas}
<br> Cantidad de materias: ${estud2.cntMaterias}
<br> Deporte (1=beisbol - 2=fútbol): ${estud2.deporte}
<br> Edad: ${estud2.edad}
<br> Nota promedio: ${estud2.calcularPromedio().toFixed(2)}
<br> ${estud2.nombre}${estud2.esAdmitido()}${estud2.convertirStringDeporte()}`;