import "./App.css";
import Tasks from "./components/Tasks";
import Notes from "./components/Notes";
import Timer from "./components/Timer";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="container">
      <h1>🔥 React Dashboard</h1>

      <div className="grid">
        <Tasks />
        <Notes />
        <Timer />
        <Weather />
      </div>
    </div>
  );
}

export default App;