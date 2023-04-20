import { viewPreviewFile, encryptFile } from "../utils/script"

export function EncryptFile(){
    return(
        <div id="ficheiro">
            <div className="grid-1-1 grid-flex">
                <div className="grid-1-1">
                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover">
                        <div className="labelColorWhite label-size-16 label-weight-normal align-center">Carregar ficheiro</div>
                    </div>
                    <div className="width350 height20 labelColorWhite label-size-12 label-weight-normal">DOC,TXT,PDF</div>
                    <input type="file" id="file-input" onChange={viewPreviewFile}/>
                </div>
                <div className="grid-1-1">
                    <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10">
                      <textarea name="preview" id="preview" cols="30" rows="30"
                        className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="O seu documento"></textarea>
                    </div>
                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover" onClick={encryptFile}>
                      <div className="labelColorWhite label-size-16 label-weight-normal align-center">Encriptar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}