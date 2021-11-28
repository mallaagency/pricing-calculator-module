import Routes from "../../routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main className="">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </main>
  );
}

export default App;
