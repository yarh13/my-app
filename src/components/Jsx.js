import React, {Fragment} from 'react';

const Jsx = () => {

    // const saludo = 'Hola JSX'
    const temperatura = 21;
    return (
        //JXS es la combinacion de html con logica JS
        <Fragment>
            <h2>Frío o Calor?</h2>
        <h4>
            {
                temperatura > 20 ? 'Calor' :'Frío' //condicional if
            }
        </h4>
        </Fragment>
        
    );
}
 
export default Jsx;