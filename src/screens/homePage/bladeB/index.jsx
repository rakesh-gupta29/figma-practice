import "./index.css"
import bladeBbg from "../assets/bladeB.png"
import { MasterBtn  } from "../../../components"

const BladeB = ()=>{
    const btnHandler = () => alert("this will handle the button")
    return(
        <section className=" bladeB  master-padding flex align-center justify-around ">
            <div className="text-wrapper master-padding  flex flex-col gap-md align-start">
                <span className=" title fw-bold fs-large text-spaced px-lg  ">OUR TEAM</span>
                <span className="fs-title  lh-large  uppercase fw-bold">MEET THE TEAM OF BEST  DEVELOPERS:</span>
                <span className="text-light fs-larger lh-large ">We have a team of skilled veteran developers who exhibit amazing efficiency in their performance. With MerkLabs, you are in safe hands.  We understand your needs and give out a performance that matches your expectations.</span>
                <div className="px-md py-lg ">
                    <MasterBtn handler={btnHandler} />
                </div>
            </div>
            <div className="img-container ">
                <img src={ bladeBbg } alt="" />
            </div>
        </section>
    )
}

export default BladeB 