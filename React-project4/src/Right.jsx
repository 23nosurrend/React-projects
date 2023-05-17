import "./Right.css"
import {MdMovie} from "react-icons/md"

import Icon1 from "./Icon1.jsx"
import Icon2 from "./Icon2.jsx"
import Icon3 from "./Icon3.jsx"
import Icon4 from "./Icon4.jsx"
import Icon0 from "./Icon0.jsx"





function Right(){
    return(
        <div>
            <div id="right">
                <div id="right-middle">
                
                    <div>
                        <Icon0 id="icon1"/>
                    </div>
                    <div id="lower-part">
                        <div>
                            <div> <Icon1 id="white-icon" className="icon2"/></div>
                        </div>
                        <div>
                            <div> <Icon2  className="icon2"/></div>
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