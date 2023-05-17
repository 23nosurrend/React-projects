import Search from "./Search.jsx"
import Right from "./Right.jsx"

function Layout(props){
    return(
        <div>
            <Search/>
            <Right/>
            {props.children}
        </div>

    )
}
export default Layout;