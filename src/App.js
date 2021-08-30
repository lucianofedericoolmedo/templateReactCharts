import "./App.scss";
import { Homepage } from "./pages/homepage/Homepage";
import { Header } from "./pages/header/Header";

function App() {
  return (
    <div className="app">
      <Header className="gaia-app-header" />
      <Homepage className="gaia-app-content" />
    </div>
  );
}

export default App;
