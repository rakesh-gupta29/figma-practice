
import "./index.css"
import { MasterBtn } from "../../../components"

const BladeD  = () =>{
    return(
        <div className=" master-padding bladeD ">

            <div className=" upper-wrapper flex justify-center my-x-lg align-center ">
               <div className=" placeholder  flex flex-col gap-x-lg   text-center align-center  ">
                    <div className="placeholder-view my-lg flex flex-col align-center ">
                        <div className=" upper-big"></div>
                        <div className=" lower-small"></div>
                        <div className="bottom-big"></div>
                    </div>
                    <span className=" text-light fs-large ">The desktop landing page </span>
                    <span className= "fs-x-large  text-spaced  uppercase ">The landing page for desktop app</span> 
                    < MasterBtn />   
                </div>
                <div className=" placeholder  flex flex-col gap-lg text-center  align-center    ">
                    <div className="placeholder-view my-lg flex flex-col align-center ">
                        <div className=" upper-big"></div>
                        <div className=" lower-small"></div>
                        <div className="bottom-big"></div>
                    </div>
                    <span className=" text-light   fs-large">The desktop landing page </span>
                    <span className= "fs-x-large  text-spaced  uppercase ">The landing page for desktop app</span>
                    < MasterBtn />
                </div>
            </div>

            <div className=" lower-wrapper  flex justify-center align-center  text-center ">
                <div className="placeholder flex flex-col gap-x-lg align-center   ">
                    <div className="placeholder-view my-lg flex flex-col align-center  ">
                        <div className=" upper-big"></div>
                        <div className=" lower-small"></div>
                        <div className="bottom-big"></div>
                    </div>
                    <span className=" text-light fs-large  ">The desktop landing page </span>
                    <span className= "fs-x-large  text-spaced  uppercase ">The landing page for desktop app</span>       
                    < MasterBtn />        
                </div>
                <div className=" placeholder flex flex-col gap-x-lg align-center">
                    <div className="placeholder-view my-lg flex flex-col align-center text-center  ">
                        <div className=" upper-big"></div>
                        <div className=" lower-small"></div>
                        <div className="bottom-big"></div>
                    </div>
                    <span className=" text-light fs-large ">The desktop landing page </span>
                    <span className= "fs-x-large  text-spaced  uppercase ">The landing page for desktop app</span> 
                    < MasterBtn />               
                </div>
            </div>
        </div>
    )
}

export default BladeD  