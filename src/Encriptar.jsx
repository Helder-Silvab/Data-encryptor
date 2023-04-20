import { useState } from "react"
import { Link } from "react-router-dom"
import { TopPage } from "./components/TopPage"
import { BottomPage } from "./components/BottomPage"
import { EncryptData } from "./components/EncryptData"
import { EncryptFile } from "./components/EncryptFile"
import { EncryptImg } from "./components/EncryptImg"
import { ConfirmEncrypt } from "./components/ConfirmEncrypt"

function Encriptar() {
  const [activeItem, setActiveItem] = useState("")
  const [encrypted, setEncrypted] = useState()
  return encrypted ? <ConfirmEncrypt encrypted={encrypted} />:(
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
                  {!!activeItem ? activeItem : "Escolha a opção"}
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
              <EncryptData encrypted={encrypted} setEncrypted={setEncrypted} />
            )}
            {activeItem === "Ficheiro" && (
              <EncryptFile />
            )}
            {activeItem === "Imagem" && (
              <EncryptImg encrypted={encrypted} setEncrypted={setEncrypted} />
            )}
          </div>
        </div>
      </div>
      <BottomPage />
    </div>
  )
}

export default Encriptar
