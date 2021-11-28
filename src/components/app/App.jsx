import Routes from "../../routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </main>
  );
}

export default App;
