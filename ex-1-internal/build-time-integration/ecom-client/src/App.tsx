import { Helloworld } from "react-vite-library";
import { Products } from "mfs-products-build-time-v1";
import "./App.css";

function App() {
  return (
    <>
      <h1>HOST</h1>
      <div>
        <Helloworld text="Oracle Week" />
        <Products products={[]} />
        Ecommerece client is working??
      </div>
    </>
  );
}

export default App;
