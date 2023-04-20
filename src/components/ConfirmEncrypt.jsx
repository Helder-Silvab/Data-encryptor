import { BottomPage } from "./BottomPage";
import { TopPage } from "./TopPage";

export function ConfirmEncrypt({encrypted, ivKey, publicKey}){
    return(
        <div className="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
            <TopPage />
            <div className="grid-flex-grow display-flex overflow-auto">
                <div className="content over-flow-auto padding-left-50 padding-right-50">
                    <div className="grid-1-1 margin-top-50">
                        <div className="grid-1-1 labelColorWhite label-size-16">Texto Encriptado</div>
                        <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10 margin-top-10">
                            <textarea name="preview" id="preview" cols="30" rows="30" className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="O seu documento" value={encrypted}></textarea>
                        </div>
                        <div className="grid-1-1 labelColorWhite label-size-16">Chave IV</div>
                        <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10 margin-top-10">
                            <textarea name="preview" id="preview" cols="30" rows="30" className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="O seu documento" value={ivKey}></textarea>
                        </div>
                        <div className="grid-1-1 labelColorWhite label-size-16">Chave Publica</div>
                        <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10 margin-top-10">
                            <textarea name="preview" id="preview" cols="30" rows="30" className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="O seu documento" value={publicKey}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <BottomPage />
        </div>
    )
}
