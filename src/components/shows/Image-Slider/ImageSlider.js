import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Images } from './ImageSlider.styled';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const { length } = slides;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const SliderData = slides.map(val => val.resolutions.original.url);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <Images>
            <section className="slider">
                <FaArrowAltCircleLeft
                    className="left-arrow"
                    onClick={prevSlide}
                />
                <FaArrowAltCircleRight
                    className="right-arrow"
                    onClick={nextSlide}
                />
                {SliderData.map((slide, index) => (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img alt="Posters" src={slide} className="image" />
                        )}
                    </div>
                ))}
            </section>
        </Images>
    );
};

export default ImageSlider;
