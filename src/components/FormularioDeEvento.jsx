import { TituloDoFormulario } from "./TituloDoFormulario";
import { CampoFieldsetForm } from "./CampoFieldsetForm";
import { LabelForm } from "./LabelForm";
import { InputForm } from "./InputForm";
import { InputFormData } from "./InputFormData";
import { SelectForm } from "./SelectForm";
import { BotaoCriarEvento } from "./BotaoCriarEvento";

export function FormularioDeEvento({ temasConteudo, aoSubmeter }) {
  //FUNÇÃO CRIAR EVENTO
  function criarEvento(formData) {
    console.log("Evento criado!", formData);

    const evento = {
      capa: formData.get("capaEvento"),
      tag: temasConteudo.find(function (item) {
        return item.id == formData.get("temaEvento");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };

    //chama a função do pai
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={criarEvento}>
      <TituloDoFormulario>Preencha para criar um evento:</TituloDoFormulario>

      <div className="campos">
        <CampoFieldsetForm>
          <LabelForm htmlFor="nomeEvento">Qual o nome do evento?</LabelForm>
          <InputForm
            type="text"
            placeholder="Digite o nome do evento"
            className="form-input"
            name="nomeEvento"
          ></InputForm>
        </CampoFieldsetForm>

        <CampoFieldsetForm>
          <LabelForm htmlFor="capaEvento">
            Qual a capa do evento desejado?
          </LabelForm>
          <InputForm
            type="text"
            placeholder="http://..."
            className="form-input"
            name="capaEvento"
          ></InputForm>
        </CampoFieldsetForm>

        <CampoFieldsetForm>
          <LabelForm htmlFor="dataEvento">Data do evento:</LabelForm>
          <InputFormData
            type="date"
            placeholder="XX/XX/XXXX"
            className="form-input"
            name="dataEvento"
          ></InputFormData>
        </CampoFieldsetForm>

        <CampoFieldsetForm>
          <LabelForm htmlFor="temaEvento">Tema do evento:</LabelForm>
          <SelectForm
            id="temaEvento"
            className="form-input"
            name="temaEvento"
            itens={temasConteudo}
          ></SelectForm>
        </CampoFieldsetForm>
      </div>
      <div className="acoes">
        <BotaoCriarEvento>
          <span className="form-botao-texto">Criar Evento</span>
        </BotaoCriarEvento>
      </div>
    </form>
  );
}
