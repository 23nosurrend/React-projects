import "./Right.css"
import {MdMovie} from "react-icons/md"

import Icon1 from "./Icon1.jsx"
import Icon2 from "./Icon2.jsx"
import Icon3 from "./Icon3.jsx"
import Icon4 from "./Icon4.jsx"
import Icon0 from "./Icon0.jsx"
import { Link } from "react-router-dom"





function Right(){
    return(
        <div>
            <div id="right">
                <div id="right-middle">
                
                    <div>
                       <Link to="/home"><Icon0 id="icon1"/></Link> 
                    </div>
                    <div id="lower-part">
                        <div>
                            <div> <Link to="/page1"><Icon1 id="white-icon" className="icon2"/></Link></div>
                        </div>
                        <div>
                            <div> <Link to="/page2"><Icon2  className="icon2"/></Link></div>
                        </div>
                        <div>
                            <div> <Icon3  className="icon2" /></div>
                        </div>
                        <div>
                            <div> <Icon4 className="icon2"   /></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Right;