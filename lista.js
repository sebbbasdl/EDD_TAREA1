class nodo{
    contructor(dato){
        this.dato= dato
        this.siguiente= null
        this.anterior=null
    }
}

class listaCE{
    constructor(){
        this.primero= null
        this.ultimo= null
        this.size= 0
    }
    insertar(dato){
        let nuevo = new nodo(dato)

        if(this.primero == null){   
            this.primero= nuevo
            this.ultimo= nuevo
            this.size++

        }else{
            nuevo.siguiente =this.primero
            this.primero.anterior=nuevo
            nuevo.anterior=this.ultimo
            this.ultimo.siguiente=nuevo
            this.ultimo=nuevo
            this.size++
            

        }

    }

    mostrar(){
        console.log("hola"+this.primero.dato)
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
        while(aux != null){
            console.log("-> " + aux.dato);
            aux = aux.siguiente;
        }
    }    
}



