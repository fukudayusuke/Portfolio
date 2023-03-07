import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Layout() {

    const Prosidebar = () => {
        return(
            <>
                <BrowserRouter>
                <ProSidebarProvider>
                    <Build_Sidebar/>
                </ProSidebarProvider>
                </BrowserRouter>
            </>
        );
    };

    const Build_Sidebar = () => {
        const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
            const toggle = () => {
                toggleSidebar();
            if (toggled) {
              console.log(true);
              collapseSidebar();
            } else {
              console.log(false);
              collapseSidebar();
            }
        };

        return (
            <div id="app" style={{ height: "100vh" ,  display: "flex" }}>
              <Sidebar image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg" 
                       style={{ height: "100vh" }}
                       backgroundColor="rgb(0, 249, 249, 0.7)"
              >
                <Menu>
                  <MenuItem
                    icon={<MenuOutlinedIcon />}
                    onClick={() => {
                    //   collapseSidebar();
                        toggle();
                    }}
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    <h2>Admin</h2>
                  </MenuItem>
        
                  <MenuItem component={<Link to="/1"/>} icon={<HomeOutlinedIcon />}>Home</MenuItem>
                  <MenuItem component={<Link to="/2"/>} icon={<PeopleOutlinedIcon />}>Team</MenuItem>
                  <MenuItem component={<Link to="/3"/>} icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                  <MenuItem component={<Link to="/4"/>} icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                  <MenuItem component={<Link to="/5"/>} icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                  <MenuItem component={<Link to="/6"/>} icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                </Menu>
              </Sidebar>
              <main>
              <h1
                onClick={() => {
                    toggle();
                  }}
                  style={{ color: "white", marginLeft: "5rem" }}
                >
                  React-Pro-Sidebar
                </h1>
                {toggled ? (
                  <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
                ) : (
                  <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
                )}
              </main>
            </div>
          );
    }

    return(
        <>
            <Prosidebar/>
        </>
    );
}

export default Layout
