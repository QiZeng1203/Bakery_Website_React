import { useState, useEffect } from 'react';

import './css/Carousel.css';

function Carousel(props) {
    const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }

    useEffect(() => {
        setLength(children.length);
    }, [children])

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                { currentIndex > 0 && <button onClick={prev} className="left-arrow" aria-label="Click here to show previous image"> &lt; </button> }
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                { currentIndex < (length - 1) && <button onClick={next} className="right-arrow" aria-label="Click here to show next image"> &gt; </button>}
            </div>
        </div>
    )
}

export default Carousel;