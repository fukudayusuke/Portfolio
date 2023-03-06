import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

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
                <ProSidebarProvider>
                    <Build_Sidebar/>
                </ProSidebarProvider>
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
              <Sidebar style={{ height: "100vh" }}>
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
        
                  <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                  <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
                  <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                  <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                  <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                  <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
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
