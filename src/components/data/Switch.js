import { useTheme } from "../Theme";
import "./Switch.css" 
export const Switch=()=>{
    const {theme,toggleTheme}=useTheme();
    return (
        <div>
            <label className="switch">

            <input type="checkbox" checked={theme==="dark"} onChange={()=>{toggleTheme()}}/>
            <span className="slider round"></span>
            </label>

        </div>
    )
}