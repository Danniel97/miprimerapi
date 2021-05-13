import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/todos' //url donde esta almacenada la API
  const [todos, setTodos] = useState() //funcion para modificar variable
  const fetchApi = async () => {  //funcion que
    const response = await fetch (url) //respuesta de funcion fetch a la url -- la que obtiene los datos
    //console.log(response.status)
    const responseJSON = await response.json()  //interpreta el JSON para que se muestre como lo queremos en pantalla
    setTodos(responseJSON) //funcion que almacena el JSON
  } 

  useEffect(() => { //ejecuta la funcion al inicio
    fetchApi();
  }, []) //arreglo vacio indica que no tiene dependencias

  return (
    <div className="App">
      <div style={{textAlign:"center"}}> Listado de tareas</div>
      <br>
      </br>
      <br>
      </br>
      { !todos ? 'Cargando...' : //si no detecta una tarea en el json, muestra el mensaje
        todos.map( (todo,index) =>{  //si hay tareas, las muestra con su descripcion
          return <li key={index}> {todo.title} {todo.completed ? '✔':'❌'} </li>
                  // dependiendo de si la tarea esta completa (true o false) muestra un ticket de positivo
                  //o en su defecto una X indicando que la tarea no esta completada

        })
      }
    </div>
  );
}

export default App;
