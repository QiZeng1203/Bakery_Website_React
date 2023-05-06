import './css/Home.css';

import Carousel from "./Carousel";
import carouselimg from './utility/carousel-img.js';

function Home() {
    
    return (
        <div className="home">
            <Carousel>
                <img className={`${carouselimg[0].name} carousel-img`} alt={carouselimg[0].description} src={carouselimg[0].path}/>
                <img className={`${carouselimg[1].name} carousel-img`} alt={carouselimg[1].description} src={carouselimg[1].path}/>
                <img className={`${carouselimg[2].name} carousel-img`} alt={carouselimg[2].description} src={carouselimg[2].path}/>
            </Carousel>
            <h2>Welcome to Pink House Bakery!</h2>
            <div className="home-content">
                <div className="content-item">
                    <h3 className="content-title">Fresh</h3>
                    <p>Our commitment to freshness is evident in everything we do. We source our ingredients locally whenever possible
                       and make everything from scratch in small batches to ensure that you're getting the best possible product. </p>
                </div>
                <div className="content-item">
                    <h3 className="content-title">Delicious</h3>
                    <p>Our desserts are made with love, passion, and a commitment to quality that you can taste in every bite. 
                        Whether you're looking for a healthy snack, a sweet treat, or a special dessert for a celebration, we have something for everyone.</p>
                </div>
                <div className="content-item">
                    <h3 className="content-title">Health</h3>
                    <p> Our mission is to provide you with desserts that satisfy your sweet tooth without compromising your health. 
                        We use only the finest and freshest ingredients to make our desserts, and we never compromise on taste.</p>
                </div>
            </div>
        </div> 
    );
}

export default Home;