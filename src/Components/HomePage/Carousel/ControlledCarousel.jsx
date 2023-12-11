import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='carousel' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='item'>
                <div>
                    <h1>edandoa kco acoinso ci sakcn csan</h1>
                    <p>sacnckjasn lsankcl sacjsa ckasnjksan ckajs</p>
                    {<button>Shop Now</button>}
                </div>
                <img src='https://pngimg.com/d/iphone_13_PNG19.png'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://pngimg.com/d/iphone_13_PNG19.png'></img>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://pngimg.com/d/iphone_13_PNG19.png'></img>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;