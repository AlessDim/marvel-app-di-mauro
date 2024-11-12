import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
// src/script.js

function getCharacters() {
  fetch('data/characters.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          const charactersList = document.getElementById('characters');
          
          // Vide la liste avant de la remplir
          charactersList.innerHTML = '';

          // Ajoute un élément li pour chaque personnage
          data.forEach(character => {
              const li = document.createElement('li');
              li.textContent = character.name; // Ou un autre attribut de personnage
              charactersList.appendChild(li);
          });
      })
      .catch(error => {
          console.error('Il y a eu un problème avec l\'opération fetch :', error);
      });
}

getCharacters();

export default App
