const JSX = <div>
    <h1></h1>
    <p></p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>

// Agrgar comentarios en JSX

const JSX = (
    <div>
        {/*  */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
);

// Renderiza elementos HTML al DOM
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
);
// Agrega tu código debajo de esta línea
ReactDOM.render(JSX, document.getElementById('challenge-node'));

// Define una clase HTML en JSX
const JSX = (
    <div className='myDiv'>
      <h1>Add a class to this div</h1>
    </div>
);

// Aprende sobre las etiquetas JSX auto-cerradas
const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
);

// Crea un componente funcional sin estado
const MyComponent = function() {
    // Cambia el código debajo de esta línea
    return (
      <div>Hello</div>
    );
  
  
    // Cambia el código encima de esta línea
}

// Crea un componente de React
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Cambia el código debajo de esta línea
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
      // Cambia el código encima de esta línea
    }
};

// Crear un componente con composición
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Cambia el código debajo de esta línea */ }
            <ChildComponent />
          { /* Cambia el código encima de esta línea */ }
        </div>
      );
    }
};