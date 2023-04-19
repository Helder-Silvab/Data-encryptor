function App() {

  return (
    <div class="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
    <div class="top-menu-holder">
        <div class="grid-1-1 height50 padding-left-50 padding-right-50">
            <div class="grid-1-1 grid-flex height80 border-bottom-header">
                <div class="logo width150 height-100-percent icon-align-center"></div>
                <div class="grid-flex-grow"></div>
                <div class="display-flex">
                    <div class="width60 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer"><a href="/">Home</a></div>
                    <div class="width80 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer"><a href="encriptar">Encriptar</a></div>
                    <div class="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">Desencriptar</div>
                    <div class="width40 icon-profile icon-size-30 icon-align-center cursor-pointer"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid-flex-grow display-flex overflow-auto">
        <div class="content over-flow-auto padding-left-50 padding-right-50">
            <div class="grid-1-1 grid-flex margin-top-80">
                <div class="width700">
                    <div class="label-size-40 labelColorGradient label-weight-bold">A codeShield ira encriptar os seus  dados com a maior segurança possivel</div>
                </div>
                <div class="grid-flex-grow"></div>
            </div>
            <div class="grid-1-1 grid-flex margin-top-80">
                <div class="grid-1-1">
                    <div class="grid-1-1 label-size-18 labelColorWhite label-weight-normal">O que fazemos?</div>
                    <div class="width330 label-size-16 labelColorWhite margin-top-20">Encriptamos e desencriptamos <span class="labelColorRed label-weight-normal">dados, ficheiros e imagens</span> para conseguir aumentar a sua <span class="labelColorYellow label-weight-normal">segurança</span></div>
                </div>
                <div class="grid-1-1">
                    <div class="width230 height180 height-reset colorAzulEscuro border-radius-20 padding20 card">
                        <div class="icon-data-card icon-size-70 width70 height70 position-absolute card-image"></div>
                        <div class="grid-1-1 label-size-18 labelColorWhite label-weight-normal align-center margin-top-40">Dados</div>
                        <div class="grid-1-1 label-size-16 labelColorGray align-center margin-top-20">Encripte os seus dados sensiveis</div>
                    </div>
                </div>
                <div class="grid-1-1">
                    <div class="width230 height180 height-reset colorAzulEscuro border-radius-20 padding20">
                        <div class="icon-file-card icon-size-70 width70 height70 position-absolute card-image"></div>
                        <div class="grid-1-1 label-size-18 labelColorWhite label-weight-normal align-center margin-top-40">Ficheiros</div>
                        <div class="grid-1-1 label-size-16 labelColorGray align-center margin-top-20">Encripte os seus ficheiros importantes</div>
                    </div>
                </div>
                <div class="grid-1-1">
                    <div class="width230 height180 height-reset colorAzulEscuro border-radius-20 padding20">
                        <div class="icon-img-card icon-size-70 width70 height70 position-absolute card-image"></div>
                        <div class="grid-1-1 label-size-18 labelColorWhite label-weight-normal align-center margin-top-40">Imagens</div>
                        <div class="grid-1-1 label-size-16 labelColorGray align-center margin-top-20">Encripte as suas imagens signficantes</div>
                    </div>
                </div>
                <div class="width40 height180 icon-size-40 icon-align-center arrow-white-right margin-right-20"></div>
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
                            <div class="width60 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer"><a href="/">Home</a></div>
                            <div class="width80 labelColorWhite label-size-16 margin-right-20 hover-labe cursor-pointerl"><a href="encriptar">Encriptar</a></div>
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

export default App
