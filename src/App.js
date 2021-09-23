import "./App.css";
import Footer from "./Components/Footer";
import Heading from "./Components/Heading";
import Input from "./Components/Input";

function App() {
  return (
    <div className="App">
      <div className="page">
        <h2>Field Book</h2>
        <Heading />
        <Input />
        <Footer />
      </div>
      <div className="page">
        <h2>Field Book</h2>
        <Heading />
        {/* <Input /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
