import { TopPage } from "./components/TopPage";
import { BottomPage } from "./components/BottomPage";
import { useState } from "react";
import { DecryptData } from "./components/decrypt/DecryptData";
import { DecryptFile } from "./components/decrypt/DecryptFile";
import { DecryptImg } from "./components/decrypt/DecryptImg";
import { ConfirmDecrypt } from "./components/decrypt/ConfirmDecrypt";

function Desencriptar() {
  const [activeItem, setActiveItem] = useState("");
  const [decrypted, setDecrypted] = useState();
  return decrypted ? (
    <ConfirmDecrypt decrypted={decrypted} />
  ) : (
    <div className="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
      <TopPage />
      <div className="grid-flex-grow display-flex overflow-auto">
        <div className="content over-flow-auto padding-left-50 padding-right-50">
          <div className="grid-1-1 margin-top-50">
            <div className="width300 dropdownHover">
              <div className="width300 display-flex height30 borderWhite border-radius-15 padding10 cursor-pointer">
                <div
                  id="selectText"
                  className="grid-flex-grow height30 labelColorGray label-size-16">
                  {!!activeItem ? activeItem : "Choose the option"}
                </div>
                <div className="arrow-yellow-down icon-align-center icon-size-20 width30 height30"></div>
              </div>
              <div className="dropdown">
                <div className="width300 height150 height-reset colorAzulEscuro padding10 border-radius-15">
                  <div
                    className="grid-1-1 grid-flex height50 border-bottom-header cursor-pointer"
                    onClick={() => setActiveItem("Dados")}>
                    <div className="icon-data icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                    <div className="grid-flex-grow labelColorWhite label-size-16">
                      Dados
                    </div>
                  </div>
                  <div
                    className="grid-1-1 grid-flex height50 border-bottom-header cursor-pointer"
                    onClick={() => setActiveItem("Ficheiro")}>
                    <div className="icon-file icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                    <div className="grid-flex-grow labelColorWhite label-size-16">
                      Ficheiro
                    </div>
                  </div>
                  <div
                    className="grid-1-1 grid-flex height50 cursor-pointer"
                    onClick={() => setActiveItem("Imagem")}>
                    <div className="icon-img icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                    <div className="grid-flex-grow labelColorWhite label-size-16">
                      Imagens
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {activeItem === "Dados" && (
              <DecryptData decrypted={decrypted} setDecrypted={setDecrypted} />
            )}
            {activeItem === "Ficheiro" && (
              <DecryptFile decrypted={decrypted} setDecrypted={setDecrypted} />
            )}
            {activeItem === "Imagem" && (
              <DecryptImg decrypted={decrypted} setDecrypted={setDecrypted} />
            )}
          </div>
        </div>
      </div>
      <BottomPage />
    </div>
  );
}

export default Desencriptar;
