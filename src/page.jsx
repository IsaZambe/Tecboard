import "./styles/styles-page.css";
import "./styles/variables.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { TemaBanner } from "./components/TemaBanner";
import { CardEvento } from "./components/CardEvento";

function Tecboard() {
  //LISTA DE TEMAS PRO BANNER
  const temasConteudo = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 1,
      nome: "cloud",
    },
  ];

  const eventos = [
    {
      capa: "src/assets/img/Imagem_1.png",
      tag: temasConteudo[0].nome,
      data: new Date(),
      titulo: "Mulheres no Front",
      descricao:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ];

  //layout página
  return (
    <main>
      <header>
        <img className="" src="/public/logo.png" alt="logo Tecboard" />
      </header>
      <section className="conteudo-banner">
        <img
          src="/public/banner.png"
          alt="imagem de uma mulher com óculos VR em um fundo verde água"
        />
      </section>
      <section className="conteudo-body">
        <FormularioDeEvento />
      </section>
      <section className="conteudo-temas">
        {temasConteudo.map(function (item) {
          return (
            <section key={temasConteudo.id}>
              <TemaBanner temasConteudo={item} />
              <CardEvento evento={eventos[0]} />
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default Tecboard;
