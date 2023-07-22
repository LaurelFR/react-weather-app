import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <WeatherSearch />
      <br />
      <footer>
        <a
          href="https://github.com/LaurelFR/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by <span>Laurel Rubel</span>
      </footer>
    </div>
  );
}

export default App;
