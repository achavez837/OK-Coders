import "./app.css";
import Navbar from "./navbar";
import Products from "./products";
import Banner from "./banner";
import SignInForm from "./input";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Banner />
        <SignInForm />
        <Products />
      </div>
    </div>
  );
}

export default App;
