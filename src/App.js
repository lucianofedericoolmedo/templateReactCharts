import "./App.scss";
import { OptimizationAndPrediction } from "./pages/optimizationAndPrediction/OptimizationAndPrediction";
import { Header } from "./pages/header/Header";

function App() {
  return (
    <div className="app">
      <Header className="app-header" />
      <OptimizationAndPrediction className="gaia-app-content" />
    </div>
  );
}

export default App;
