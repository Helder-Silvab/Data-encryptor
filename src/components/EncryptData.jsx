import CryptoJS from "crypto-js";
export function EncryptData({encrypted, setEncrypted}){

    function encrypt(){
        //definir as chaves
        const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
        const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');

        //obter o texto escrito
        const clientMsg = document.getElementById("msg").value;
        const plaintext = clientMsg;
        
        //ciptografar a string que contem o texto
        const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {
        iv: iv
        });
        const encrypted = ciphertext.toString();

        //guardar a string
        setEncrypted(encrypted)
    }
    return(
        <div id="dados">
                <div className="grid-1-1 borderWhite height200 border-radius-15 padding10 margin-top-20">
                  <textarea name="msg" id="msg"  cols="30"  rows="30" 
                  className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="Escreva os dados para encriptar"></textarea>
                </div>
                <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover" onClick={encrypt}>
                <div className="labelColorWhite label-size-16 label-weight-normal align-center">Encriptar</div>
            </div>
        </div>
    )
}