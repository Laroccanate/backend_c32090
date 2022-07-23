class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
            this.apellido = apellido;
            this.libros = libros;
            this.mascotas = mascotas;
    }
    getFullName(){
        return `nombre : ${this.nombre},  apellido: ${this.apellido} `
    }
    addMascota(mascotaNueva){
        this.mascotas.push(mascotaNueva)
        return this.mascotas
    }
    countMascotas(){
        return `El numero total de mascotas es: ${this.mascotas.length}`;
    }
    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
        return this.libros
    }
    getBookNames(){
        return this.libros.map(nombres=>nombres.nombre)
        
    }

}


let miObject = new Usuario ('Elon', 'Musk', [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}], ['perro', 'gato'] )
console.log(miObject)
console.log(miObject.getFullName());
console.log(miObject.addMascota('buho'));
console.log(miObject.countMascotas());
console.log(miObject.addBook('A Clockwork Orange', 'Anthony Burgess'))
console.log(miObject.getBookNames());
