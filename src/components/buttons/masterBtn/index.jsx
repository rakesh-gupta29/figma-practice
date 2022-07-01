
import "./index.css"

const MasterBtn = ( { text , handler}) =>{
    return(
       <button className="master-btn bg-light-hover  danger " onClick={handler?handler:() => { }}> 
            { text || "Explore More"  } 
       </button>
    )
}

export default MasterBtn 