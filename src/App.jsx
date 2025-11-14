import "./App.css";
import "./index.css";

// COMPONENTE FORM

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <h2 className="form-titulo">Preencha para criar um evento:</h2>
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
          Data do evento
        </label>
        <input
          type="date"
          placeholder="Digite o nome do evento"
          className="form-input"
        />
      </fieldset>

      <fieldset className="form-campo">
        <label className="form-subtitulo" htmlFor="">
          Tema do evento
        </label>
        <select className="form-input" id="tema-evento">
          <option value="">Selecione uma opção</option>
          <option value="ia">IA</option>
          <option value="front-end">Front-End</option>
          <option value="backend">Backend</option>
          <option value="devops">DevOps</option>
          <option value="data-science">Data Science</option>
          <option value="Cloud">Cloud</option>
        </select>
      </fieldset>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img className="" src="/public/logo.png" alt="logo Tecboard" />
      </header>
      <section>
        <img
          src="/public/banner.png"
          alt="imagem de uma mulher com óculos VR em um fundo verde água"
        />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
