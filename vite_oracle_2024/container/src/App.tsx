// @ts-nocheck
import Companies from "RemoteA/Companies";
import Employees from "RemoteB/Employees";
function App() {
  return (
    <>
      <div style={{ background: "lightblue" }}>
        <h1>Container App | Home | About | Contact</h1>
      </div>
      <div>
        <Employees />
      </div>
      <div>
        <Companies />
      </div>
    </>
  );
}

export default App;
