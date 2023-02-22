import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />

      <Footer />
    </div>
  );
}

export default App;
