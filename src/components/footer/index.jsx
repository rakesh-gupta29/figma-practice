
import "./index.css"
import logo from "../assets/logo.svg"

const Footer = () =>{
    return(
    <footer className="flex   align-start justify-around master-padding">
        <div className=" footer-info flex flex-col gap-md align-start">
            <div className=" flex-center gap-sm fw-bold fs-xx-large uppercase ">
                <img src={ logo} className=" box px-sm  " alt="" />
                Merk
            </div>
            <span className="fs-large lh-large ">Copyright @2021</span>
            <span className="fs-large  lh-large ">Design By Merk Labs </span>
        </div> 

        <div className=" flex align-start gap-md flex-col">
            <span className=" fs-x-large  fw-bold uppercase py-md  ">Services</span>
            <a href="#">Web Development</a>
            <a href="#">App Development</a>
            <a href="#">UI Design</a>
            <a href="#">Consultation</a>
            <a href="#">Maintainence</a>
        </div>
        <div className=" flex align-start gap-md flex-col">
            <span className=" fs-x-large  fw-bold uppercase py-md">Company</span>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Get Quote</a>
            <a href="#">Privcay Policy</a>
            <a href="#">Terms Of Services</a>
            <a href="#">Jobs</a>
        </div>
        <div className=" flex align-start gap-md flex-col">
            <span className=" fs-x-large  fw-bold uppercase py-md">Resources</span>
            <a href="#">Support</a>
            <a href="#">Documentation</a>
            <a href="#">License</a>
            <a href="#">Sitemap</a>
        </div>
    </footer>
    )
}

export default Footer 