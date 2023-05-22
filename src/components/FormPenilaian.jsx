const FormPenilaian = ({ num, type }) => {
  return type === 0 ? (
    <p style={{ lineHeight: "18px" }}>Mahasiswa {num}</p>
  ) : (
    <select name={`aspek_penilaian_${type}.mahasiswa_${num}`} style={{ width: "100px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
        return (
          <>
            <option value={score}>{score}</option>;
          </>
        );
      })}
    </select>
  );
};
export default FormPenilaian;
