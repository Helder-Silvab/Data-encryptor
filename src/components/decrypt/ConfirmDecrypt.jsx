import { BottomPage } from "../BottomPage";
import { TopPage } from "../TopPage";

export function ConfirmDecrypt({ decrypted }) {
  return (
    <div className="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
      <TopPage />
      <div className="grid-flex-grow display-flex overflow-auto">
        <div className="content over-flow-auto padding-left-50 padding-right-50">
          <div className="grid-1-1 margin-top-50">
            <div className="grid-1-1 grid-flex">
              <div className="icon-confirm icon-size-60 width60 height60 icon-align-center"></div>
              <div className="grid-flex-grow labelColorWhite label-size-16 height60 label-weight-normal">
                Dados desencriptados com sucesso
              </div>
            </div>
            <div className="grid-1-1 labelColorWhite label-size-16 margin-top-20">
              Texto desencriptado
            </div>
            <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10 margin-top-5">
              <textarea
                name="preview"
                id="preview"
                cols="30"
                rows="30"
                className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite"
                placeholder="O seu documento"
                value={decrypted}></textarea>
            </div>
          </div>
        </div>
      </div>
      <BottomPage />
    </div>
  );
}
