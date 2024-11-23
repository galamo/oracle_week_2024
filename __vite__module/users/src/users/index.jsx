export default function Users() {
  const companies = ["IBM", "Amdocs", "MS", "Google", "Monday"];

  return (
    <div style={{ border: "1px solid black" }}>
      {companies.map((c) => {
        return <h2 key={c}>{c} </h2>;
      })}
    </div>
  );
}
