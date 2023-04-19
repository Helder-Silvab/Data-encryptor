import { useState } from "react"

function Encriptar(){
    const [activeItem, setActiveItem] = useState("dados")
    return(
        <div class="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
        <div class="top-menu-holder">
            <div class="grid-1-1 height50 padding-left-50 padding-right-50">
                <div class="grid-1-1 grid-flex height80 border-bottom-header">
                    <div class="logo width150 height-100-percent icon-align-center"></div>
                    <div class="grid-flex-grow"></div>
                    <div class="display-flex">
                        <div class="width60 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer"><a href="/">Home</a></div>
                        <div class="width80 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer"><a href="encriptar">Encriptar</a></div>
                        <div class="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">Desencriptar</div>
                        <div class="width40 icon-profile icon-size-30 icon-align-center cursor-pointer"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-flex-grow display-flex overflow-auto">
            <div class="content over-flow-auto padding-left-50 padding-right-50">
               {/*<div class="grid-1-1">
                    <div class="labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">Texto</div>
                    <input type="text" name="msg" id="msg">
                    <div class="labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">encriptado</div>
                    <input type="text" name="result" id="result">
                    <div class="labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">Desencriptado</div>
                    <input type="text" name="resultde" id="resultde">
                    <div class="labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer" onclick="encrpyt()">encriptar</div>
                    <div class="labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer" onclick="decrpyt()">desencriptar</div>
    </div> */}

                <div class="grid-1-1 margin-top-50">
                    <div class="width300 dropdownHover">
                        <div class="width300 display-flex height30 borderWhite border-radius-15 padding10 cursor-pointer">
                            <div id="selectText" class="grid-flex-grow height30 labelColorGray label-size-16">Escolha a opção</div>
                            <div class="arrow-yellow-down icon-align-center icon-size-20 width30 height30"></div>
                        </div>
                        <div class="dropdown">
                            <div class="width300 height150 height-reset colorAzulEscuro padding10 border-radius-15">
                                <div class="grid-1-1 grid-flex height50 border-bottom-header cursor-pointer">
                                    <div class="icon-data icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                                    <div class="grid-flex-grow labelColorWhite label-size-16">Dados</div>
                                </div>
                                <div class="grid-1-1 grid-flex height50 border-bottom-header cursor-pointer">
                                    <div class="icon-file icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                                    <div class="grid-flex-grow labelColorWhite label-size-16">Ficheiro</div>
                                </div>
                                <div class="grid-1-1 grid-flex height50 cursor-pointer">
                                    <div class="icon-img icon-align-center icon-size-30 width30 height50 margin-right-10"></div>
                                    <div class="grid-flex-grow labelColorWhite label-size-16">Imagens</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="data" class="display-none">
                        <div class="grid-1-1 borderWhite height200 border-radius-15 padding10 margin-top-20">
                            <textarea name="msg" id="msg" cols="30" rows="30" class="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite" placeholder="Escreva os dados para encriptar"></textarea>
                        </div>
                        <div class="grid-1-3 height20 border-radius-15 colorRed padding10 margin-top-20 buttonHover" onclick="encrpyt()">
                            <div class="labelColorWhite label-size-16 label-weight-normal align-center">Encriptar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-absolute bottom0 height100 height-reset width-100-percent">
            <div class="grid-1-1">
                <div class="grid-1-2 height-100-percent margin-auto">
                    <div class="grid-1-1 grid-flex border-top-footer">
                       <div class="grid-1-1 grid-flex margin-top-20">
                            <div class="grid-flex-grow"></div>
                            <div class="display-flex">
                                <div class="width60 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer"><a href="/">Home</a></div>
                                <div class="width80 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer"><a href="encriptar">Encriptar</a></div>
                                <div class="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">Desencriptar</div>
                            </div>
                            <div class="grid-flex-grow"></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Encriptar