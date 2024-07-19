import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header>
          <h1>
          Dictionary App
          </h1>
        </header>
        <main>
          <Dictionary/>
        </main>
        <footer>
          <small>
          Coded by Saba and it is open-sourced on {" "}
          <a href='https://github.com/SabaKD/dictionary-react-project'>Github</a>
          </small>
        </footer>
      </div>
      
    </div>
  );
}


