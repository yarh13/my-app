import React, {useState, Fragment} from 'react';
//Fragment eliminas las etiquetas html que no estemos utilizando

const Contador = () => {
    //lo que este antes del return sera logica de JS

    //el primer valor dentro de las llaves es el nombre y el segundo el que lo modifica
    //dentro del useState() se coloca el valor inicial de numero
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        
        console.log('me diste un click')
        setNumero(numero + 1)
    }

    return ( 
        //lo que este dentro de este return es lo que se va a mostrar en la vista
        //en el return solo se debe de devolver un elemento
        //Una alternativa es envolver todos los elementos dentro de un div padre para que puedan ser visualizados

    <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <button onClick={aumentar}>Aumentar</button>

    </Fragment>

     );
}
 
export default Contador;