import Product from './Product'
import mario from './images/super-mario-odyssey.png'
import codww from './images/call-of-duty-wwii.png'
import codwarfare from './images/call-of-duty-infinite-warfare.png'
import fifa from './images/fifa-18.png'
import horizon from './images/horizon-zero-dawn.png'
import mortal from './images/mortal-kombat-xl.png'
import shards from './images/shards-of-darkness.png'
import terra from './images/terra-media-sombras-de-mordor.png'
import witcher from './images/the-witcher-iii-wild-hunt.png'
import back from './images/back.jpg'
import './Home.css'


function Home() {
    return (
        <div className="home">
            <div className="home-product">
                <Product
                    id="312"
                    name="Super Mario Odyssey"
                    price={197.88}
                    score={100}
                    image={mario}
                />
                <Product
                    id="201"
                    name="Call Of Duty Infinite Warfare"
                    price={49.99}
                    score={80}
                    image={codwarfare}
                />
                <Product
                    id="102"
                    name="The Witcher III Wild Hunt"
                    price={119.5}
                    score={250}
                    image={witcher}
                />
                <Product
                    id="99"
                    name="Call Of Duty WWII"
                    price={249.99}
                    score={205}
                    image={codww}
                />
                <Product
                    id="12"
                    name="Mortal Kombat Xl"
                    price={69.99}
                    score={150}
                    image={mortal}
                />
                <Product
                    id="74"
                    name="Shards Of Darkness"
                    price={71.94}
                    score={400}
                    image={shards}
                />
                <Product
                    id="31"
                    name="Middle Earth: Shadow of Mordor"
                    price={79.99}
                    score={50}
                    image={terra}
                />
                <Product
                    id="420"
                    name="FIFA 18"
                    price={195.39}
                    score={325}
                    image={fifa}
                />
                <Product
                    id="501"
                    name="Horizon Zero Dawn"
                    price={115.80}
                    score={290}
                    image={horizon}
                />
            </div>
        </div>
    )
}

export default Home