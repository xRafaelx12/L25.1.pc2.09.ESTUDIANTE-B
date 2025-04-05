import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_deportista extends Cl_estudiante {
    constructor(nombre, acNotas, cntMaterias, deporte, edad) {
        super(nombre, acNotas, cntMaterias);
        this.deporte = deporte;
        this.edad = edad;
    }

    calcularPromedio() {
        return this.acNotas / this.cntMaterias;
    }

    esAceptado() {
        if (this.deporte === 1 && this.edad >= 21 && this.calcularPromedio() > 14) {
            return " es admitido en ";
        } else if (this.deporte === 2 && this.edad >= 19 && this.calcularPromedio() > 12) {
            return " es admitido en ";
        } else {
            return " no es admitido ";
        }
    }
    convertirStringDeporte() {
        switch (this.deporte) {
            case 1:
                return "beisbol";
            case 2:
                return "fútbol";
        }
    }
}
