export function LabelForm(props) {
  return (
    <label className="form-subtitulo" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
}
