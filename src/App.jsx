import "./App.css";
import { MyComponent } from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent value={{ title: "React", description: "Learn React" }} />
    </div>
  );
}

export default App;
