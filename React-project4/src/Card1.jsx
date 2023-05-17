
import {MdOutlineMovie} from "react-icons/md"
import Icon4 from "./Icon4.jsx"

import "./Card1.css"
function Card(props){
    return(
        <>
           <div>
               <div>
                 <img id="img1" src={props.img}/>
               </div>
               
                <div id="words" className="card1-words">
                    <div>{props.date}</div>
                    <div><MdOutlineMovie/>.Movies</div>
                    <div>.PG</div>

                </div>
                <div className="text1" id="card1-text">{props.title}</div>
                <div className="bookmark"> <Icon4 className="icon2"   /></div>
            </div>
            


        </>
        
    )
}

export default Card;