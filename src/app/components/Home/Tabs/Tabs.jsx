"use client"
import { useState } from "react";
import TabPropiedades from "./TabPropiedades";
import TabServicios from "./TabServicios";
import "./Tabs.css"

function Tabs() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  return (
    <div className="container-fluid" >
        <div className="tab">
            <button className={activeTab === "tab1" ? "tabItem tabSelected" : "tabItem"} onClick={() => handleTabClick('tab1')}>Propiedades</button>
            <button className={activeTab === "tab2" ? "tabItem tabSelected" : "tabItem"} onClick={() => handleTabClick('tab2')}>Servicios</button>
        
        </div>
        {activeTab === 'tab1' ? <TabPropiedades /> : null}
        {activeTab === 'tab2' ? <TabServicios /> : null}
    </div>
  )
}

export default Tabs