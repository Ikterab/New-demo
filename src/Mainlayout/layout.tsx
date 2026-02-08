import { Outlet } from "react-router-dom";
import Footer from "../Component/Componet/Footer";
import Navbar from "../Component/Componet/Navbar";
const Mainlayout = () => {
    return(
        <main>
            {/* <Navbar/> */}
            <Outlet />
            {/* <Footer/> */}
</main>
    )
}
export default Mainlayout