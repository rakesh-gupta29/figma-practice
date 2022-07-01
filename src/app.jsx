

import { HomePage } from "./screens"
import { Footer } from "./components"
import { BrowserRouter , Route , Routes , Outlet  } from "react-router-dom"
import "./styles/globals.css"
import "./app.css"


const RoutesWithNav = () =>{
    return(
        <>
        <Outlet />
        </>
    )
}


const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoutesWithNav />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
        
    )
}
export default App