import React from "react";
import { createRoot } from 'react-dom/client';
// components
import EmployeeList from "./components/EmployeeList";
//data
//import data from "./_data/eployeesList.json";
//style
import './app.scss'

const url = "/web/SavinovaAV/vkr/eployeesList.json"


const container = document.getElementById(window.point);
const root = createRoot(container);
root.render(<EmployeeList url={url} />);
