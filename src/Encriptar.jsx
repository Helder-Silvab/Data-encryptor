import { useState } from "react"
import {encrypt, viewPreviewFile, encryptFile, viewPreviewImg, encryptImg} from "./utils/script"

function Encriptar(){
    const [activeItem, setActiveItem] = useState("")
    return(
        <div className="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
        <div className="top-menu-holder">
            <div className="grid-1-1 height50 padding-left-50 padding-right-50">
                <div className="grid-1-1 grid-flex height80 border-bottom-header">
                    <a href="/"><div className="logo width150 height-100-percent icon-align-center cursor-pointer"></div></a>
                    <div className="grid-flex-grow"></div>
                    <div className="display-flex">
                        <div className="width60 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer"><a href="/">Home</a></div>
                        <div className="width80 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer"><a href="encriptar">Encriptar</a></div>
                        <div className="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">Desencriptar</div>
                        <div className="dropdownHover-profile">
                            <div className="width40 icon-profile height80 icon-size-30 icon-align-center cursor-pointer"></div>
                            <div className="dropdown-profile">
                                <div className="width150 height100 height-reset colorAzulEscuro padding10 border-radius-15">
                                    <a href="login"><div className="grid-1-1 height50 labelColorWhite label-size-16 label-weight-normal cursor-pointer">Login</div></a>
                                    <a href="signUp"><div className="grid-1-1 height50 labelColorWhite label-size-16 label-weight-normal cursor-pointer">Criar Conta</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid-flex-grow display-flex overflow-auto">
            <div className="content over-flow-auto padding-left-50 padding-right-50">
                <div className="grid-1-1 margin-top-50">
                    <div className="width300 dropdownHover">
                        <div className="width300 display-flex height30 borderWhite border-radius-15 padding10 cursor-pointer">
                            <div id="selectText" className="grid-flex-grow height30 labelColorGray label-size-16">{!!activeItem ? activeItem:"Escolha a opção"}</div>
                            <div className="arrow-yellow-down icon-align-center icon-size-20 width30 height30"></div>
                        </div>
                        <div className="dropdown">
                            <div className="width300 height150 height-reset colorAzulEscuro padding10 border-radius-15">
                                <div className="grid-1-1 grid-flex height50 border-bottom-header cursor-pointer" onClick={() => setActiveItem("Dados")}>
                                    <div className="icon-data icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                                    <div className="grid-flex-grow labelColorWhite label-size-16">Dados</div>
                                </div>
                                <div className="grid-1-1 grid-flex height50 border-bottom-header cursor-pointer" onClick={() => setActiveItem("Ficheiro")}>
                                    <div className="icon-file icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                                    <div className="grid-flex-grow labelColorWhite label-size-16">Ficheiro</div>
                                </div>
                                <div className="grid-1-1 grid-flex height50 cursor-pointer" onClick={() => setActiveItem("Imagem")}>
                                    <div className="icon-img icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                                    <div className="grid-flex-grow labelColorWhite label-size-16">Imagens</div>
                                </div>
                            </div>
                        </div>
                    </div>
                   { activeItem === "Dados" && 
                        <div id="dados">
                            <div className="grid-1-1 borderWhite height200 border-radius-15 padding10 margin-top-20">
                                <textarea name="msg" id="msg" cols="30" rows="30" className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="Escreva os dados para encriptar"></textarea>
                            </div>
                            <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover" onClick={encrypt}>
                                <div className="labelColorWhite label-size-16 label-weight-normal align-center">Encriptar</div>
                            </div>
                        </div>
                    }
                    {activeItem === "Ficheiro" &&
                        <div id="ficheiro">
                            <div className="grid-1-1 grid-flex">
                                <div className="grid-1-1">
                                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover">
                                        <div className="labelColorWhite label-size-16 label-weight-normal align-center">Carregar ficheiro</div>
                                    </div>
                                    <div className="width350 height20 labelColorWhite label-size-12 label-weight-normal">DOC,TXT,PDF</div>
                                    <input type="file" id="file-input" onChange={viewPreviewFile}/>
                                </div>
                                <div className="grid-1-1">
                                    <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10">
                                        <textarea name="preview" id="preview" cols="30" rows="30" className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="O seu documento"></textarea>
                                    </div>
                                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover" onClick={encryptFile}>
                                        <div className="labelColorWhite label-size-16 label-weight-normal align-center">Encriptar</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    }
                    {activeItem === "Imagem" &&
                        <div id="ficheiro">
                           <div className="grid-1-1 grid-flex">
                                <div className="grid-1-1">
                                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover">
                                        <div className="labelColorWhite label-size-16 label-weight-normal align-center">Carregar Imagem</div>
                                    </div>
                                    <div className="width350 height20 labelColorWhite label-size-12 label-weight-normal"> PNG , JPG, JPFG</div>
                                    <input type="file" id="img-input" onChange={viewPreviewImg}/>
                                </div>
                                <div className="grid-1-1">
                                    <div >
                                        <img id="preview" src="#" className="grid-1-1 height300 objectFitContain padding10 border-none"/>
                                    </div>
                                    <div className="width300 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover" onClick={encryptImg}>
                                        <div className="labelColorWhite label-size-16 label-weight-normal align-center">Encriptar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className="position-absolute bottom0 height100 height-reset width-100-percent">
            <div className="grid-1-1">
                <div className="grid-1-2 height-100-percent margin-auto">
                    <div className="grid-1-1 grid-flex border-top-footer">
                       <div className="grid-1-1 grid-flex margin-top-20">
                            <div className="grid-flex-grow"></div>
                            <div className="display-flex">
                                <div className="width60 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer"><a href="/">Home</a></div>
                                <div className="width80 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer"><a href="encriptar">Encriptar</a></div>
                                <div className="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">Desencriptar</div>
                            </div>
                            <div className="grid-flex-grow"></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Encriptar