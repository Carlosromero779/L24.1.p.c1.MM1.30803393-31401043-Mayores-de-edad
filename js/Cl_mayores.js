export default class Cl_mayores{
    constructor(){
        this.contMayEdad=0
        this.contPersonas=0
    }
    procesar(personas){
        if(personas.edad>=18){
            this.contMayEdad++
        }
        this.contPersonas++
    }
    porcentaje(){
        return (this.contMayEdad*100)/this.contPersonas
    }
    cantidadPersonas(){
        return this.contPersonas;
    }
    cantidadMayEdad(){
        return this.contMayEdad;
}
}