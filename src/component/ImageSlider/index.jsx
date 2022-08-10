import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DataContext } from '../../helper';

const ImageSlider = ({ images }) => {

    const { Items } = useContext(DataContext);
    // const images = Items.map(x => x.ImgUrl);

    return (
        <div>
            <Carousel className='Container'>
                {images.map(x => <div>
                    <img src={x} />
                </div>)}


            </Carousel>
        </div>
    )
}

export default ImageSlider
