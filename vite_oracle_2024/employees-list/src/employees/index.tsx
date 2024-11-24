import axios from "axios";
import { useState, useEffect } from "react";
import css from "./style.module.css";
import employees from "./employees.json";

type Employee = (typeof employees)[0];

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getEmployees() {
      try {
        const { data } = await axios.get("http://localhost:4500/employees");
        setEmployees(data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    getEmployees();
    // return () => {
    //   second;
    // };
  }, []);

  if (isLoading) return <div className={css.loader}></div>;
  return (
    <div
      style={{ border: "solid 1px red" }}
      className={css.employeesBackGround}
    >
      {employees.map((c: Employee) => {
        return (
          <h2 key={c?.name?.first + c?.name?.last}>
            {c?.name?.first + c?.name?.last} | {c.gender}
          </h2>
        );
      })}
    </div>
  );
}
