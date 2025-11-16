import "./App.css";
import "./index.css";

// COMPONENTE FORM

function TituloDoFormulario(props) {
  return (
    <h2 className="form-titulo">
      {props.children}
    </h2>
  )
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>

      <fieldset className="form-campo">
        <label className="form-subtitulo" htmlFor="">
          Qual o nome do evento?
        </label>
        <input
          type="text"
          placeholder="Digite o nome do evento"
          className="form-input"
        />
      </fieldset>

      <fieldset className="form-campo">
        <label className="form-subtitulo" htmlFor="">
          Data do evento:
        </label>
        <input type="date" placeholder="XX/XX/XXXX" className="form-input" />
      </fieldset>

      <fieldset className="form-campo">
        <label className="form-subtitulo" htmlFor="">
          Tema do evento:
        </label>
        <select className="form-input" id="tema-evento">
          <option value="">Selecione uma opção:</option>
          <option value="ia">IA</option>
          <option value="front-end">Front-End</option>
          <option value="backend">Backend</option>
          <option value="devops">DevOps</option>
          <option value="data-science">Data Science</option>
          <option value="Cloud">Cloud</option>
        </select>
      </fieldset>

      <button className="form-botao">
        <span className="form-botao-texto">Criar Evento</span>
      </button>
    </form>
  );
}

function App() {
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
    </main>
  );
}

export default App;
