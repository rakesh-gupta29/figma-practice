import "./index.css"
import coverImg from "../assets/bladeA.svg"

const BladeA = () =>{
    return(
        <div className="bladeA flex align-end  justify-end  master-padding">
            <div className="wrapper bg-light flex flex-1"> 
                <div className="img-wrapper flex-center  ">
                    <img src={ coverImg } className="img-cover" />
                </div>
                <div className="text-wrapper flex flex-col gap-lg lh-large  ">
                    <a href="https://www.google.com"  target="_blank" className=" underline ">Read Article</a>
                    <span className=" fs-title bold lh-large fw-bold">The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own Consumer Data</span>
                    <span className="fs-larger">“ These are companies, like intellicam, that are actually working to get our data onto personal servers so we own it, not the companies ”</span>
                    <div className="m-left-auto flex-center master-padding action-wrapper">
                        <button className=" box-lg grid-center border circle bg-light-hover  ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button className=" bg-glass box-lg grid-center  circle dark-hover ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BladeA 