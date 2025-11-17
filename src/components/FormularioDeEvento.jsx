import { TituloDoFormulario } from "./TituloDoFormulario";
import { CampoFieldsetForm } from "./CampoFieldsetForm";
import { LabelForm } from "./LabelForm";
import { InputForm } from "./InputForm";
import { InputFormData } from "./InputFormData";
import { SelectForm } from "./SelectForm";
import { BotaoCriarEvento } from "./BotaoCriarEvento";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
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
          <SelectForm className="form-input" name="temaEvento"></SelectForm>
        </CampoFieldsetForm>
      </div>

      <BotaoCriarEvento>
        <span className="form-botao-texto">Criar Evento</span>
      </BotaoCriarEvento>
    </form>
  );
}
