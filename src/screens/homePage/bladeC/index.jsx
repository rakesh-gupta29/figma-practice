

import "./index.css"

const BladeC = () =>{
    return(
        <div className="bladeC flex justify-around align-center master-padding  ">
            <div className="  text-wrapper flex flex-col gap-md master-padding ">
                <span className=" title uppercase fs-larger ">PROJECTS</span>
                <span className="  fw-bold text-spaced fs-title lh-large ">We have completed many amazing projects that you will not believe</span>
            </div>
            <div className=" action-wrapper flex-center py-x-lg">
                <label className="select">
                    <select className="select-master">
                        <option value=""  selected="selected">Select option</option>
                        <option value="#">One</option>
                        <option value="#">Two</option>
                        <option value="#">Three</option>
                        <option value="#">Four</option>
                        <option value="#">Five</option>
                        <option value="#">Six</option>
                        <option value="#">Seven</option>
                    </select>
                </label>
            </div>
     </div>
    )
}
export default BladeC 