export function SelectForm({ itens, ...rest }) {
  return (
    <select {...rest} className="form-input" id="temaEvento" defaultValue="">
      <option className="options-select" value="" disabled>
        Selecione uma opção:
      </option>
      {itens.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        );
      })}
    </select>
  );
}
