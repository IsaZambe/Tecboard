export function CardEvento({ evento }) {
  return (
    <div className="card-evento">
      <img className="card-img" src={evento.capa} alt={evento.titulo} />
      <div className="card-corpo">
        <p className="card-tag">{evento.tag}</p>
        <p className="card-data">{evento.data.toLocaleDateString("pt-BR")}</p>
        <h4 className="card-titulo">{evento.titulo}</h4>
        <p className="card-descricao">{evento.descricao}</p>
      </div>
    </div>
  );
}
