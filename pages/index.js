import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add todo to the list
    setList([...list, newTodo]);

    // clear input
    setInput('');
  };
  return (
    <div className={styles.container}>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={input} // the code is going to bind the input variable, with this input field
        onChange={(e) => setInput(e.target.value)} // the onChange event handler will listen for any
        // character that are typed-in and we'll set the value of hte input state variable, to those character.
      />
      <button onClick={() => addTodo(input)}>Add</button>
    </div>
  );
}
