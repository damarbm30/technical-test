import { useRef } from "react";
import FormPenilaian from "./components/FormPenilaian";

function App() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const nestedObject = {};

    for (let [key, value] of formData.entries()) {
      const [parentKey, nestedKey] = key.split(".");
      // check if nestedKey exist
      if (nestedKey !== undefined) {
        // create empty object with parent key
        if (!nestedObject[parentKey]) nestedObject[parentKey] = {};
        // insert value nestedKey and its value to parentKey if exists
        nestedObject[parentKey][nestedKey] = value;
      }
      // create key directly if there is no nested key
      else nestedObject[key] = value;
    }

    console.log(nestedObject);
  };

  return (
    <main>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Aplikasi Penilaian Mahasiswa</h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2em",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[0, 1, 2, 3, 4].map((type) => {
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p style={{}}>{type > 0 ? `Aspek penilaian ${type}` : "Daftar mahasiswa"}</p>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                    return <FormPenilaian num={num} type={type} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="submit"
          style={{
            maxWidth: "fit-content",
            color: "white",
            backgroundColor: "black",
            outline: "none",
            border: "none",
            padding: "0.5em 1em",
            borderRadius: "4px",
            margin: "0 auto",
            marginTop: "2rem",
          }}
        >
          Simpan
        </button>
      </form>
    </main>
  );
}

export default App;
