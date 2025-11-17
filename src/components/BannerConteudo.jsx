export function BannerConteudo(props) {
  return (
    <div className="front-end-conteudo">
      <h2 className="categoria-conteudo">FRONT-END</h2>
      <section className="banner-conteudo">
        <div className="card-conteudo">
          <img src="???" alt="" />
          <p className="tag-conteudo">FRONT-END</p>
          <p className="data-conteudo">20/05/2025</p>
          <h3 className="titulo-conteudo">Mulheres no Front</h3>
          <p className="conteudo-resumo">
            Valorizando e impulsionando a participação feminina no
            desenvolvimento front-end.
          </p>
        </div>
      </section>
      {props.children}
    </div>
  );
}
