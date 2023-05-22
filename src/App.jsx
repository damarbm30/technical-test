import { useRef } from "react";
import FormPenilaian from "./components/FormPenilaian";

function App() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const score = {};

    for (let [key, value] of formData.entries()) {
      const [parentKey, nestedKey] = key.split(".");
      // check if nestedKey exist
      if (nestedKey !== undefined) {
        // create empty object with parent key
        if (!score[parentKey]) score[parentKey] = {};
        // insert value nestedKey and its value to parentKey if exists
        score[parentKey][nestedKey] = value;
      }
      // create key directly if there is no nested key
      else score[key] = value;
    }

    console.log("Nilai mahasiswa: ", score);
  };

  return (
    <main>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Aplikasi Penilaian Mahasiswa</h1>
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
        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "135px 135px 135px 135px 135px", gap: "1rem" }}>
            {[0, 1, 2, 3, 4].map((num) => {
              return (
                <h2 style={{ wordWrap: "break-word", fontSize: "16px", fontWeight: "normal" }}>
                  {num > 0 ? `Aspek penilaian ${num}` : "Daftar mahasiswa"}
                </h2>
              );
            })}
          </div>
          <ul style={{ display: "grid", gap: "1.5rem" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
              return (
                <li
                  style={{
                    display: "grid",
                    gridTemplateColumns: "135px 135px 135px 135px 135px",
                    gap: "1rem",
                    boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)",
                    padding: "0.5em",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <img
                      src="https://i.pravatar.cc/25"
                      alt="avatar"
                      width={25}
                      height={25}
                      style={{ borderRadius: "50%" }}
                    />
                    <p>Mahasiswa {num}</p>
                  </div>
                  {[1, 2, 3, 4].map((type) => {
                    return <FormPenilaian num={num} type={type} />;
                  })}
                </li>
              );
            })}
          </ul>
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
            marginLeft: "auto",
            marginTop: "1rem",
          }}
        >
          Simpan
        </button>
      </form>
    </main>
  );
}

export default App;
