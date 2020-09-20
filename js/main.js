// Clases

// ANCHOR - clase de alumno
class Alumno{
    constructor(nombre, carnet){
        this.nombre = nombre;
        this.carnet = carnet;
    }

    get datos(){
        return({
            nombre: this.nombre,
            carnet: this.carnet
        });
    }
}

// ANCHOR - clase de las gráficas




const bryan = new Alumno('Bryan Arévalo', 201945176);
const luis = new Alumno('Luis Pinzón', 5213581);

console.log(bryan.datos.nombre);

