import CryptoJS from "crypto-js";

//(AES)
export function encrypt(){

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
    console.log(encrypted)
}

export function viewPreviewFile(){
    const fileInput = document.getElementById('file-input');
    const preview = document.getElementById('preview');

    fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        preview.textContent = reader.result;
    });

    reader.readAsText(file);
    });
}

export function encryptFile(){
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

    console.log(encrypted)
}

export function viewPreviewImg(){
    const fileInput = document.getElementById('img-input');
    const preview = document.getElementById('preview');

    fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        preview.src = reader.result;
    });

    reader.readAsDataURL(file);

    });
}

export function encryptImg(){
    const fileInput = document.getElementById('img-input');
    const file = fileInput.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    
    fileReader.onload = function() {
        //criar uma padded binary string e preencher com 0 ate atingir 16 (tamanho necessario para o AES)
        let binaryStr = this.result;
        const paddingLength = 16 - (binaryStr.length % 16);
        binaryStr += '\0'.repeat(paddingLength);

        //definir as chaves
        const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
        const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
        
        //ciptograficar a string binaria com as chaves
        const ciphertext = CryptoJS.AES.encrypt(binaryStr, key, {
            iv: iv,
            padding: CryptoJS.pad.NoPadding
        });
        
        //converter a string ciptografada em uma string codificada em base64
        const encryptedImage = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(ciphertext.ciphertext.toString()));
        
        console.log(encryptedImage);
    }
}