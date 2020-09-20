// Clases
// FIXME - Modularizar cada clase para no tener problema
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

class Estacion{
    constructor(apiLink){
        this.__link = apiLink;

    }

    get datosEstacion(){
        let datos;
        fetch(link)
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(data => datos = data);

        return data;
    }
}


// NOTE - Instanciando clases.
// Instanciando alumnos
const bryan = new Alumno('Bryan Arévalo', 201945176);
const luis = new Alumno('Luis Pinzón', 5213581);

console.log(bryan.datos.nombre);

// Instanciando estaciones
let linkBryan = 'https://api.thingspeak.com/channels/1147595/feeds.json?results=2';


    
