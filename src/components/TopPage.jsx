import { Link } from "react-router-dom"

export function TopPage(){
    return(
    <div className="top-menu-holder">
        <div className="grid-1-1 height50 padding-left-50 padding-right-50">
          <div className="grid-1-1 grid-flex height80 border-bottom-header">
            <Link to="/">
              <div className="logo width150 height-100-percent icon-align-center cursor-pointer"></div>
            </Link>
            <div className="grid-flex-grow"></div>
            <div className="display-flex">
              <div className="width60 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                <Link to="/">Home</Link>
              </div>
              <div className="width80 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                <Link to="/encriptar">Encriptar</Link>
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
    )
}