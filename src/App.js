import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import CardContainer from "./components/CardContainer";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />

      <Footer />
    </div>
  );
}

export default App;
