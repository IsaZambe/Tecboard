import "./styles/styles-page.css";
import "./styles/variables.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { BannerConteudo } from "./components/BannerConteudo";

function Tecboard() {
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
        <BannerConteudo />
      </section>
    </main>
  );
}

export default Tecboard;
