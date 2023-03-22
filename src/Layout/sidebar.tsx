import React, { Key, ReactNode } from 'react';
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

import { Menu_T, MenuTBL } from 'GData/GData';
import { MenuChildrenTBL } from 'GData/GData';

// import styled from 'styled-components';

/**
 * 
 * @returns 
 */
export const  SidebarPro = () => {

    const Build_Sidebar = () => {

        /**
         * Sidebar
         */
        const SidebarProps = {
            image: "https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg",
            style: { height: "100vh" },
            backgroundColor: "rgb(0, 249, 249, 0.3)",
        };

        /**
         * Menu
         */
        const MenuProps = {
            // menuItemStyles: {
                menuitemstyles: {
                // button: ({ level, active, disabled }) => {
                button: ({  }) => {
                  // only apply styles on first level elements of the tree
                  return {
                    color: "#000000",
                  };
                },
            },
        };

        /**
         * MenuItem_Button
         */
        const MenuItemProps = {
            icon: <MenuOutlinedIcon />,
            onClick: () => {
              //   collapseSidebar();
              toggle();
            },
            style: { textAlign: "center" } as any,  // type change?
        };

        /**
         * 
         */
        const MenuItemProps_item = {
            component: <Link to="/1"/>,
            icon: <HomeOutlinedIcon/>,
        };

        /**
         *  MenuItems
         * @param link 
         * @param label 
         * @param icon 
         * @returns 
         */
        function GenerateMenuItem(link: string, label: string, icon: React.ReactNode, keyindex? : Key) {
            return (
              <MenuItem component={<Link to={link} />} icon={icon} key={keyindex} >
                {label}
              </MenuItem>
            );
        }

        const GenerateMenuItemChildren = ( id: string , icon: React.ReactNode, table: Menu_T ) => {
            const newItems: JSX.Element[] = [];
            table.map((item, index) => {
              newItems.push(GenerateMenuItem(item.id, item.id, item.icon, index ));
            });
            return (
              <SubMenu label={id} icon={icon} >
                {newItems}
              </SubMenu>
            );
          };

        function MenuItemsFunction( table : Menu_T[] ) {
            const newItems: JSX.Element[] = [];
            table.map((item, index) => {
                if( item.children ) {
                  newItems.push( GenerateMenuItemChildren( item.id, item.icon, item.children ) );
                } else {
                    newItems.push( GenerateMenuItem( item.id, item.id, item.icon, index ));
                }
            });
            return newItems;
        };


        /**
         * Var
         */
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
            <>
                <Sidebar {...SidebarProps}>
                    <Menu {...MenuProps}>
                        <MenuItem {...MenuItemProps}>
                        {" "}
                        <h2>Admin</h2>
                        </MenuItem>
                        {/* {MenuTBL.map((item, index) => GenerateMenuItem( item.id, item.id, item.icon) ) } */}
                        {MenuItemsFunction( MenuTBL )}
                        {/* <MenuItem component={<Link to="/1"/>} icon={<HomeOutlinedIcon />}>Home</MenuItem> */}
                        {/* {GenerateMenuItem("/1", "Home", <HomeOutlinedIcon />)} */}
                        {/* <MenuItem component={<Link to="/2"/>} icon={<PeopleOutlinedIcon />} style={{height:100}}>Team</MenuItem> */}
                        {/* <MenuItem component={<Link to="/3"/>} icon={<ContactsOutlinedIcon />}>Contacts</MenuItem> */}
                        {/* <MenuItem component={<Link to="/4"/>} icon={<ReceiptOutlinedIcon />}>Profile</MenuItem> */}
                        {/* <MenuItem component={<Link to="/5"/>} icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem> */}
                        {/* <MenuItem component={<Link to="/6"/>} icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem> */}
                        {/* <SubMenu {...MenuProps} label="Charts">
                            <MenuItem component={<Link to="/6"/>} icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                            <MenuItem component={<Link to="/6"/>} icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                            <MenuItem component={<Link to="/6"/>} icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                        </SubMenu> */}
                    </Menu>
              </Sidebar>
              <main>
              <h1
                onClick={() => {
                    toggle();
                  }}
                  style={{ color: "black", marginLeft: "5rem" }}
                >
                  React-Pro-Sidebar
                </h1>
                {toggled ? (
                  <h1 style={{ color: "black", marginLeft: "5rem" }}>Toggled</h1>
                ) : (
                  <h1 style={{ color: "black", marginLeft: "5rem" }}>Not Toggled</h1>
                )}
              </main>
            </>
          );
    }

    // Provider
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

    return(
        <>
            <Prosidebar/>
        </>
    );
}

