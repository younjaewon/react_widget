import { useState } from "react";
import "./App.css";
import SideMenu from "./components/sidemenu";

const menuData = [
  { id: 1, name: "재고현황", type: "DATA" },
  { id: 2, name: "판매현황", type: "CHART" },
  { id: 3, name: "미판매현황", type: "CALENDER" },
  { id: 4, name: "구매현황", type: "DATA" },
  { id: 5, name: "입고현황", type: "DATA" },
];

let posX = 0;
let posY = 0;

let originalX = 0;
let originalY = 0;

function App() {

  const [dragMenu, setDragMenu] = useState(null);

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDragStart = (e) => {
    posX = e.clientX;
    posY = e.clientY;

    originalX = e.target.offsetLeft;
    originalY = e.target.offsetTop;

    let nodeCopy = e.target.cloneNode(true);
    nodeCopy.style.left = posX;
    nodeCopy.style.height = posY;
    nodeCopy.style.position = "relative";
    setDragMenu(nodeCopy);
  };
  
  const handleOnDrag = (e) => {
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    posX = e.clientX;
    posY = e.clientY;
  };

  const handleOnDragEnd = (e) => {};

  const handleOnDrop = (e) => {
    const dropContent = e.target;

    dropContent.append(dragMenu);
  };

  return (
    <div style={{}}>
      <div style={{position: "relative", width: "10%",height: "600px", border: "1px solid", float:"left"}}>

          <SideMenu 
          title={"재고"} 
          data={
            menuData.map((menu) => (
            <li>
              <div
                key={menu.id}
                draggable
                onDragStart={handleOnDragStart}
                onDrag={handleOnDrag}
                onDragEnd={handleOnDragEnd}
              >
                {menu.name}
              </div>
            </li>
            ))} />

        </div>
        <div
        onDragOver={handleOnDragOver}
        onDrop={handleOnDrop}
        style={{
          width: "89.7%",
          height: "600px",
          border: "1px solid",
          position: "relative",
          float: "left"
        }}>
        
      </div>
    </div>
  );
}

export default App;
