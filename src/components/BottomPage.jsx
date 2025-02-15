import { Link } from "react-router-dom"

export function BottomPage(){
    return(
        <div className="position-absolute bottom0 height100 height-reset width-100-percent">
        <div className="grid-1-1">
          <div className="grid-1-2 height-100-percent margin-auto">
            <div className="grid-1-1 grid-flex border-top-footer">
              <div className="grid-1-1 grid-flex margin-top-20">
                <div className="grid-flex-grow"></div>
                <div className="display-flex">
                  <div className="width60 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="width80 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                    <Link to="/encriptar">Encrypt</Link>
                  </div>
                  <div className="width100 labelColorWhite label-size-16 margin-right-20 hover-label cursor-pointer">
                    Decrypt
                  </div>
                </div>
                <div className="grid-flex-grow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
