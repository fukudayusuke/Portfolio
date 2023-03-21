// import { SidebarPro } from "./sidebar";
import { Header } from "./header";
import { MainContents } from "./maincontents";
import { Footer } from "./footer";

export const Layout = () => (
    <>
        {/* <div id="app" style={{ height: "100vh" ,  display: "flex-=" }}> */}
        <Header/>
        <MainContents />
        <Footer/>
        {/* </div> */}
    </>
)