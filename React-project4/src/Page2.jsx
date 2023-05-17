import image4 from "./assets/punisher.jfif"
import image5 from "./assets/punisher2.jfif"
import image6 from "./assets/women.jfif"
import image2 from "./assets/avengers.jfif"
import Card2 from "./Card2.jsx"
import Layout from "./Layout.jsx"

function Page2(){
    return(
        <> <div>
                    <Layout/>
                <div className="page">
                    <Card2
                    img={image4}
                    date="2000"
                    title="SHAKA"
                    />
                    <Card2
                    img={image5}
                    date="2010"
                    title="PUNISHER"
                    />
                    <Card2
                    img={image2}
                    date="2019"
                    title="THE MIST"
                    />
                    <Card2
                    img={image6}
                    date="2003"
                    title="THE WAR"
                    />
                </div>
          </div>
        </>

    )
}

export default Page2;