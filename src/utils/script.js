import CryptoJS from "crypto-js";

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
