import { Helloworld } from "react-vite-library";
import { Products } from "mfs-products-build-time-v1";
import "./App.css";

function App() {
  return (
    <>
      <h1>
        <Helloworld text="test" />
        <Products products={[]} />
        Ecommerece client is working??
      </h1>
    </>
  );
}

export default App;
