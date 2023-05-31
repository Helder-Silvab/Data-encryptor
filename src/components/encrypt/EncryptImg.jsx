import CryptoJS from "crypto-js";
import { useState } from "react";

export function EncryptImg({
  encrypted,
  setEncrypted,
  iv,
  setIv,
  key,
  setKey,
}) {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState();
  function encryptImg() {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(image);

    fileReader.onload = function () {
      
      let binaryStr = this.result;
      const paddingLength = 16 - (binaryStr.length % 16);
      binaryStr += "\0".repeat(paddingLength);

      //definir as chaves
      const key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
      const iv = CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");

      setIv(iv);
      setKey(key);
     
      const ciphertext = CryptoJS.AES.encrypt(binaryStr, key, {
        iv: iv,
        padding: CryptoJS.pad.NoPadding,
      });

      const encryptedImage = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Hex.parse(ciphertext.ciphertext.toString())
      );

      setEncrypted(encryptedImage);
    };
  }

  return (
    <div id="ficheiro">
      <div className="grid-1-1 grid-flex">
        <div className="grid-1-1">
          <label htmlFor="img-input">
            <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover">
              <div className="labelColorWhite label-size-16 label-weight-normal align-center">
                Carregar Imagem
              </div>
              <input
                type="file"
                id="img-input"
                accept=".png, .jpg"
                className="display-none"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(file);
                  const reader = new FileReader();
                  reader.onload = (ev) => setImagePreview(ev.target.result);
                  reader.readAsDataURL(file);
                }}
              />
            </div>
          </label>
          <div className="width350 height20 labelColorWhite label-size-12 label-weight-normal">
            {" "}
            PNG , JPG{" "}
          </div>
        </div>
        <div className="grid-1-1">
          <div>
            <img
              id="preview"
              src={imagePreview}
              className="grid-1-1 height300 objectFitContain padding10 border-none"
            />
          </div>
          <div
            className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover"
            onClick={encryptImg}>
            <div className="labelColorWhite label-size-16 label-weight-normal align-center">
              Encriptar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
