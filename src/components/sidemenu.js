import {useState} from "react";
import "../App.css";

const SideMenu = (props) => {
    const [dropDown, setDropDown] = useState(1);

    const onMenu = () => {
        if(dropDown === 1){
          setDropDown(0);
        }else if(dropDown === 0){
          setDropDown(1);
        }
      }

    return(
        <div>
            <div className={dropDown === 1 ? "menuTitle-active" : "menuTitle"} onClick={onMenu}>{props.title}</div>
            <ul className={dropDown === 1 ? "menu" : "menu-hidden"}>
                {props.data}
            </ul>
        </div>
    );
}
export default SideMenu;