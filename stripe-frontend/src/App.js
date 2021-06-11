import { useState } from "react";
import "./App.css";
import StripeContainer from "./components/StripeContainer";

function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App">
      <h1>MY STORE</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>2.00kn </h3>
          <img
            src="https://www.robin.hr/uploads/cunga-lunga-zvakaca-guma-robin-marketi.jpg"
            alt="product"
          />
          <button onClick={() => setShowItem(true)}>Purchase gum</button>
        </>
      )}
    </div>
  );
}

export default App;
