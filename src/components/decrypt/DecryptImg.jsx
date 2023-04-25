import CryptoJS from "crypto-js";

export function DecryptImg() {
  function decrypt() {
    // convert the base64 string back to a CryptoJS WordArray
    const encryptedImage = document.getElementById("cipherText").value;
    const ciphertext = CryptoJS.enc.Base64.parse(encryptedImage);

    // define the key and IV
    const key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
    const iv = CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");

    // decrypt the ciphertext using AES
    const decrypted = CryptoJS.AES.decrypt({ ciphertext }, key, {
      iv,
      padding: CryptoJS.pad.NoPadding,
    });

    // remove any padding added during encryption
    const binaryStr = decrypted
      .toString(CryptoJS.enc.Utf8)
      .replace(/\0+$/g, "");

    // create a blob from the binary string
    const blob = new Blob([binaryStr], { type: image.type });

    // create an object URL from the blob
    const imageUrl = URL.createObjectURL(blob);

    document.getElementById("preview").src = imageUrl;
  }
  return (
    <div id="imagem">
      <img
        id="preview"
        src="#"
        className="grid-1-1 height300 objectFitContain padding10 border-none"
      />
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
