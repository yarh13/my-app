import React from 'react';
import Contador from './components/Contador.js';
import Jsx from './components/Jsx.js';
import Lista from './components/Lista.js';


function App() {
  return (
    <div>
      <h1>Hola Mundo React</h1>
      {/* improtacion del componente Contador */}
      <Contador />

      <h1>Hola JSX</h1>
      <Jsx />
      <Lista />
      
    </div>
  );
}

export default App;
