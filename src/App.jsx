import { TopPage } from "./components/TopPage"
import { BottomPage } from "./components/BottomPage"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
      <TopPage />
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
            <Link to="encriptar"><div className="width40 height180 icon-size-40 icon-align-center arrow-white-right margin-right-20 cursor-pointer"></div></Link>
          </div>
        </div>
      </div>
      <BottomPage />
    </div>
  )
}

export default App
