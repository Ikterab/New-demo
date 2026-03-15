import { Outlet } from "react-router-dom";
import Footer from "../Component/Componet/Footer";
import Navbar from "../Component/Componet/Navbar";
import Footer2 from "../Component/footer2";
const Mainlayout = () => {
    return(
        <main>
            <Navbar/>
            
                <Outlet />
<Footer/>
</main>
    )
}
export default Mainlayout