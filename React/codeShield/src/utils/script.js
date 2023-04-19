
//(AES)
function encrypt(){
    const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
    const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');

    const clientMsg = document.getElementById("msg").value;
    const plaintext = clientMsg;
    
    const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {
    iv: iv
    });
    const encrypted = ciphertext.toString();
    
}

//(AES)
function decrypt(){

    // Define the key and the initialization vector (IV)
    const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
    const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');

    // Define the ciphertext to be decrypted
    const ciphertext =  document.getElementById("result").value;

    // Decrypt the ciphertext with AES
    const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    iv: iv
    });

    // Convert the decrypted bytes to a plaintext string
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);

    document.getElementById("resultde").value = plaintext;

}
