import img from "./assets/Teen.jfif"
import "./Card2.css"
import {MdOutlineMovie} from "react-icons/md"
import Icon4 from "./Icon4.jsx"

function Card2(props){
    return(
        <>
        <div>
            <div>
            <img id="img2" src={props.img}/>
            </div>
            <div id="words">
                    <div className="text">{props.date}</div>
                    <div className="text"><MdOutlineMovie/>.Movies</div>
                    <div className="text">.PG</div>

                </div>
                <div className="text1">{props.title}</div>
                <div className="bookmark"> <Icon4 className="icon2"   /></div>


        </div>
         
        </>

    )
}

export default Card2;