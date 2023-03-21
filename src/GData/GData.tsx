import React from "react"
import { UrlObject } from "url"

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Style } from "util";

export interface Function {
    desplay: string
    id : string
    url:string
    function?: React.FC | null
}

export interface Menu_T {
    desplay: string
    id : string
    icon? : React.ReactNode
    style?: Style
    url:string
    children? : Menu_T | Menu_T[] | null
    functoinTBL: Function | Function[] | null
}

export const FunctionTBL : Function[] = [
    {
        desplay: "TOGGLE",
        id: "TOGGLE",
        url: "",
        function: null
    },
    {
        desplay: "SELECT",
        id: "SELECT",
        url: "",
        function: null
    },
    {
        desplay: "PULL DOWN",
        id: "PULL DOWN",
        url: "",
        function: null
    },
    {
        desplay: "SLIDER",
        id: "SLIDER",
        url: "",
        function: null
    },
    {
        desplay: "COLOR",
        id: "COLOR",
        url: "",
        function: null
    },
]

export const MenuChildrenTBL : Menu_T[] = [
    {
        desplay: "Function4_1",
        id: "Function4_1",
        url: "Function4_1",
        functoinTBL: null
    },
    {
        desplay: "Function4_2",
        id: "Function4_2",
        url: "Function4_2",
        functoinTBL: null
    },
]

export const MenuTBL : Menu_T[] = [
    {
        desplay: "Function1",
        id: "Function1",
        icon : <HomeOutlinedIcon />,
        url: "Function1",
        functoinTBL: FunctionTBL
    },
    {
        desplay: "Function2",
        id: "Function2",
        icon : <PeopleOutlinedIcon />,
        url: "Function2",
        functoinTBL: FunctionTBL
    },
    {
        desplay: "Function3",
        id: "Function3",
        icon : <ContactsOutlinedIcon />,
        url: "Function3",
        functoinTBL: FunctionTBL
    },
    {
        desplay: "Function4",
        id: "Function4",
        icon : <ReceiptOutlinedIcon />,
        url: "Function4",
        children: MenuChildrenTBL,
        functoinTBL: FunctionTBL
    }
]

