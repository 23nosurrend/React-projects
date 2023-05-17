import Layout from "./Layout.jsx"
import Card from "./Card1.jsx"
import Card2 from "./Card2.jsx"
import image from "./assets/earth.jfif"
import image2 from "./assets/avengers.jfif"
import image3 from "./assets/earth.jfif"


function Page1(){
    return (
        <>
            <Layout/>
            <div>
            <Card
            img={image}
            date="2019"
            title="REVENGERS"
            
            />
            <Card
            img={image2}
            date="2018"
            title="TEENWOLF"
            />
            <Card
            img={image3}
            date="2017"
            title="SHAKA"
            />
            </div>

        </>
    )
}
export default Page1;