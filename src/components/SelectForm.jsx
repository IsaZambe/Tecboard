export function SelectForm(props) {
  return (
    <select className="form-input" id="temaEvento">
      <option className="options-select" value="" disabled selected hidden>
        Selecione uma opção:
      </option>
      {props.children}
    </select>
  );
}
