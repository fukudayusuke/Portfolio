import { SidebarPro } from "./sidebar";


// MainContentsの内容は今は機能一覧だけとする
export const MainContents = () => {

    
    return(
        <>
            <div id="app" style={{ height: "100vh" ,  display: "flex" }}>
            <SidebarPro/>
            </div>
        </>
    );
}