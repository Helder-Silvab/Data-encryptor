import { Link } from "react-router-dom"

function App() {
  return (
    <div className="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
      <div className="top-menu-holder">
        <div className="grid-1-1 height50 padding-left-50 padding-right-50">
          <div className="grid-1-1 grid-flex height80 border-bottom-header">
            <Link to="/">
              <div className="logo width150 height-100-percent icon-align-center cursor-pointer"></div>
            </Link>
            <div className="grid-flex-grow"></div>
            <div className="display-flex">
              <div className="width60 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer">
                <Link to="/">Home</Link>
              </div>
              <div className="width80 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                <Link to="encriptar">Encriptar</Link>
              </div>
              <div className="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                Desencriptar
              </div>
              <div className="dropdownHover-profile">
                <div className="width40 icon-profile height80 icon-size-30 icon-align-center cursor-pointer"></div>
                <div className="dropdown-profile">
                  <div className="width150 height100 height-reset colorAzulEscuro padding10 border-radius-15">
                    <Link to="/login">
                      <div className="grid-1-1 height50 labelColorWhite label-size-16 label-weight-normal cursor-pointer">
                        Login
                      </div>
                    </Link>
                    <Link to="/signUp">
                      <div className="grid-1-1 height50 labelColorWhite label-size-16 label-weight-normal cursor-pointer">
                        Criar Conta
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-flex-grow display-flex overflow-auto">
        <div className="content over-flow-auto padding-left-50 padding-right-50">
          <div className="grid-1-1 grid-flex margin-top-80">
            <div className="width700">
              <div className="label-size-40 labelColorGradient label-weight-bold">
                A codeShield ira encriptar os seus dados com a maior segurança
                possivel
              </div>
            </div>
            <div className="grid-flex-grow"></div>
          </div>
          <div className="grid-1-1 grid-flex margin-top-80">
            <div className="grid-1-1">
              <div className="grid-1-1 label-size-18 labelColorWhite label-weight-normal">
                O que fazemos?
              </div>
              <div className="width330 label-size-16 labelColorWhite margin-top-20">
                Encriptamos e desencriptamos{" "}
                <span className="labelColorRed label-weight-normal">
                  dados, ficheiros e imagens
                </span>{" "}
                para conseguir aumentar a sua{" "}
                <span className="labelColorYellow label-weight-normal">
                  segurança
                </span>
              </div>
            </div>
            <div className="grid-1-1">
              <div className="width230 height180 height-reset colorAzulEscuro border-radius-20 padding20 card">
                <div className="icon-data-card icon-size-70 width70 height70 position-absolute card-image"></div>
                <div className="grid-1-1 label-size-18 labelColorWhite label-weight-normal align-center margin-top-40">
                  Dados
                </div>
                <div className="grid-1-1 label-size-16 labelColorGray align-center margin-top-20">
                  Encripte os seus dados sensiveis
                </div>
              </div>
            </div>
            <div className="grid-1-1">
              <div className="width230 height180 height-reset colorAzulEscuro border-radius-20 padding20">
                <div className="icon-file-card icon-size-70 width70 height70 position-absolute card-image"></div>
                <div className="grid-1-1 label-size-18 labelColorWhite label-weight-normal align-center margin-top-40">
                  Ficheiros
                </div>
                <div className="grid-1-1 label-size-16 labelColorGray align-center margin-top-20">
                  Encripte os seus ficheiros importantes
                </div>
              </div>
            </div>
            <div className="grid-1-1">
              <div className="width230 height180 height-reset colorAzulEscuro border-radius-20 padding20">
                <div className="icon-img-card icon-size-70 width70 height70 position-absolute card-image"></div>
                <div className="grid-1-1 label-size-18 labelColorWhite label-weight-normal align-center margin-top-40">
                  Imagens
                </div>
                <div className="grid-1-1 label-size-16 labelColorGray align-center margin-top-20">
                  Encripte as suas imagens signficantes
                </div>
              </div>
            </div>
            <div className="width40 height180 icon-size-40 icon-align-center arrow-white-right margin-right-20"></div>
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
                  <div className="width60 labelColorWhite label-size-16 margin-right-20 label-weight-normal hover-label cursor-pointer">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="width80 labelColorWhite label-size-16 margin-right-20 hover-labe cursor-pointerl">
                    <Link to="/encriptar">Encriptar</Link>
                  </div>
                  <div className="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                    Desencriptar
                  </div>
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

export default App
