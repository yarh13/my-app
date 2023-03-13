import React, {useState, Fragment} from 'react';

const Lista  = () => {

    const [arrayNumero, setarrayNumero] = useState([1,2,3,4,5])

    const [numero, setNumero] = useState(6)
 
    const agregarElemento = () =>{

        setNumero(numero + 1)
       // console.log('click')
        setarrayNumero([...arrayNumero, numero])//le concatenamos el numero  al array
    }
    return (  
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {/* recorrer el array */}
            <ul>
                    {
                        arrayNumero.map((item, index) => 
                            <li key={index}>{item} - {index}</li>
                        )
                    }
            </ul>
        </Fragment>
    );
}
 
export default Lista ;