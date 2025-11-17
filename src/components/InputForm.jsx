export function InputForm(props) {
  return (
    <input
      type="text"
      placeholder="Digite o nome do evento"
      className="form-input"
      {...props}
    />
  );
}
