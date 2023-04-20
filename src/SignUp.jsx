import React from "react"
import { Link } from "react-router-dom"

function SignUp() {
  return (
    <div className="grid-1-1 height-100vh grid-flex-column overflow-x-hidden overflow-y-hidden colorBackground">
      <div className="top-menu-holder">
        <div className="grid-1-1 height50 padding-left-50 padding-right-50">
          <div className="grid-1-1 grid-flex height80">
            <Link to="/">
              <div className="logo width150 height-100-percent icon-align-center cursor-pointer"></div>
            </Link>
            <div className="grid-flex-grow"></div>
            <div className="display-flex width300">
              <div className="grid-1-1 grid-flex height50 colorWhite border-radius-50 margin-top-15">
                <div className="grid-1-2 labelColorBlack label-weight-normal label-size-16 padding-left-10 align-center cursor-pointer">
                  <Link to="/login">Login</Link>
                </div>
                <div className="grid-1-2 labelColorWhite label-weight-normal label-size-16 colorGradient border-radius-50 align-center padding-right-10 cursor-pointer">
                  <Link to="/signUp">SignUp</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-flex-grow display-flex overflow-auto">
        <div className="content over-flow-auto padding-left-50 padding-right-50">
          <div className="grid-1-1 grid-flex">
            <div className="grid-flex-grow"></div>
            <div className="width600 height650 colorBackgroundLogin loginSquare border-radius-15 padding10">
              <div className="grid-1-1 height350 icon-align-center logoBig"></div>
              <div className="grid-1-1 height50 height-reset labelColorWhite label-size-40 label-weight-bold align-center">
                Criar Conta
              </div>
              <div className="grid-1-1 grid-flex margin-top-30">
                <div className="grid-flex-grow"></div>
                <div className="width300 display-flex colorWhite height30 borderWhite border-radius-15 padding10 cursor-pointer">
                  <div className="grid-flex-grow height30 labelColorBlack label-size-16 label-weight-normal">
                    Criar com GitHub
                  </div>
                  <div className="icon-github icon-align-center icon-size-20 width30 height30"></div>
                </div>
                <div className="grid-flex-grow"></div>
              </div>
              <div className="grid-1-1 grid-flex margin-top-30">
                <div className="grid-flex-grow"></div>
                <div className="width300 display-flex height30 colorWhite borderWhite border-radius-15 padding10 cursor-pointer">
                  <div className="grid-flex-grow height30 labelColorBlack label-size-16 label-weight-normal">
                    Criar com Google
                  </div>
                  <div className="icon-google icon-align-center icon-size-20 width30 height30"></div>
                </div>
                <div className="grid-flex-grow"></div>
              </div>
            </div>
            <div className="grid-flex-grow"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom0 height500 height-reset width-100-percent">
        <div className="grid-1-1">
          <div className="grid-1-1 height600 objectFitContain loginBackground"></div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
