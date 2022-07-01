

import "./index.css"
import callIcon  from "../assets/phone.svg"
import messageIcon from "../assets/message.svg"

import { MasterBtn } from "../../../components"

const BladeH = () =>{
    const Field  = ( { text }) =>{
        return(
            <label htmlFor={ text} className="w-100 flex flex-col gap-sm flex-nowrap ">
                { text }
                <input type="text" size="1" className="w-100  border rounded-sm py-sm px-md " />
            </label>
        )

    } 

    const handleFormSubmit = event =>{
        event.preventDefault();
        alert("handle form submit")
    }
    return(
        <section className=" bladeH flex master-padding align-center justify-center  gap-x-lg">
            <div className="text-container flex flex-col gap-lg master-padding  flex-nowrap">
                <span className="uppercase  px-md fs-large master-text">Contact</span>
                <span className=" fs-title  text-spaced lh-large fw-bold">We love receiving messages from you, we are waiting for it.</span>
                <div className="my-lg flex flex-col gap-lg">
                    <div className="contact-item flex flex-nowrap gap-md my-sm  ">
                       <div className=" bg-glass icon-wrapper grid-center ">
                           <img src={ callIcon} alt="" />
                       </div>
                       <div className=" flex flex-col gap-sm align-start justify-start py-x-sm ">
                           <span className="text-light fw-bold   ">Phone</span>
                           <span className="fs-larger m-top-auto  ">+62 1234 8921</span>
                       </div>
                    </div>
                    <div className="contact-item flex flex-nowrap gap-md my-sm  ">
                       <div className="bg-glass icon-wrapper  grid-center">
                           <img src={ messageIcon} alt="" />
                       </div>
                       <div className=" flex flex-col gap-sm align-start justify-start py-x-sm">
                           <span className="fw-bold   text-light">Email</span>
                           <span className="fs-larger m-top-auto ">support@MerkLabs.ltd</span>
                       </div>
                    </div>
                </div>
            </div>
            <form className=" form-wrapper">
               <div className="form-data-wrapper  bg-light  flex flex-col gap-x-lg  ">
                    <div className=" flex-center gap-lg rounded-md ">
                        <Field text="Name" />
                        <Field text="Email" />
                    </div>
                    <Field  text="Subject" />
                    <label htmlFor="message" className="w-100 flex flex-col gap-sm flex-nowrap ">
                        <span>Message</span>
                        <textarea rows="7" size="1" className="w-100  border rounded-sm py-sm px-md " ></textarea>
                    </label>
                   <div className="mx-auto my-md ">
                        < MasterBtn  handler ={ handleFormSubmit } />
                   </div>
               </div>
            </form>
        </section>
    )
}

export default BladeH 