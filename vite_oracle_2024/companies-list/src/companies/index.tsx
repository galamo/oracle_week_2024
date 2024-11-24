import "./index.css";
export default function Companies() {
  const companies = [
    "Refael",
    "Clalit",
    "Sapiens",
    "IDF",
    "Direct Insurance!!",
  ];
  return (
    <div style={{ border: "solid 1px black" }}>
      {companies.map((c) => {
        return <h2 key={c}>{c}</h2>;
      })}
    </div>
  );
}
