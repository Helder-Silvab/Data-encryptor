import CryptoJS from "crypto-js";

export function DecryptFile() {
  function decrypt() {
    const key = CryptoJS.enc.Hex.parse(document.getElementById("key").value);
    const iv = CryptoJS.enc.Hex.parse(document.getElementById("IVkey").value);

    const ciphertext = document.getElementById("cipherText").value;

    const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
      iv: iv,
    });

    const plaintext = bytes.toString(CryptoJS.enc.Utf8);

    console.log(plaintext);
  }
  return (
    <div id="ficheiro">
      <div className="grid-1-1 labelColorWhite label-size-16 margin-top-10">
        Coloque a chave IV
      </div>
      <div className="grid-1-1 height50 height-reset border-radius-15 borderWhite padding10 margin-top-5">
        <textarea
          name="IVkey"
          id="IVkey"
          cols="30"
          rows="30"
          className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite"
          placeholder="A sua chave IV"></textarea>
      </div>
      <div className="grid-1-1 labelColorWhite label-size-16 margin-top-10">
        Coloque a chave publica
      </div>
      <div className="grid-1-1 height50 height-reset border-radius-15 borderWhite padding10 margin-top-5">
        <textarea
          name="key"
          id="key"
          cols="30"
          rows="30"
          className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite"
          placeholder="A sua chave publica"></textarea>
      </div>
      <div className="grid-1-1 labelColorWhite label-size-16 margin-top-20">
        Texto Encriptado
      </div>
      <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10 margin-top-5">
        <textarea
          name="cipherText"
          id="cipherText"
          cols="30"
          rows="30"
          className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite"
          placeholder="O texto Encriptado"></textarea>
      </div>
      <div
        className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover"
        onClick={decrypt}>
        <div className="labelColorWhite label-size-16 label-weight-normal align-center">
          Desencriptar
        </div>
      </div>
    </div>
  );
}
