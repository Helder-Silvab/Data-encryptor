import { useState } from "react"
import CryptoJS from "crypto-js";

export function EncryptFile({encrypted, setEncrypted}){
    const [filePreview, setFilePreview] = useState()

    function encryptFile(){
        //definir as chaves
        const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
        const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
    
        //obter o texto que estava no file
        const clientMsg = document.getElementById("preview").value;
        const plaintext = clientMsg;
        
        //ciptografar a string que contem o texto
        const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {
        iv: iv
        });
    
        //guardar a string
        const encrypted = ciphertext.toString();
    
        setEncrypted(encrypted)
        
    }

    return(
        <div id="ficheiro">
            <div className="grid-1-1 grid-flex">
                <div className="grid-1-1">
                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover">
                        <div className="labelColorWhite label-size-16 label-weight-normal align-center">Carregar ficheiro</div>
                    </div>
                    <div className="width350 height20 labelColorWhite label-size-12 label-weight-normal">DOC,TXT</div>
                    <input type="file" id="file-input" accept=".txt, .docx"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onload = (ev) => setFilePreview(ev.target.result)
                        reader.readAsText(file);
                    }}/>
                </div>
                <div className="grid-1-1">
                    <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10">
                      <textarea name="preview" id="preview" cols="30" rows="30"
                        className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="O seu documento" value={filePreview}></textarea>
                    </div>
                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover" onClick={encryptFile}>
                      <div className="labelColorWhite label-size-16 label-weight-normal align-center">Encriptar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}