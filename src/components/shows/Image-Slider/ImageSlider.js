import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Images } from './ImageSlider.styled';

import NO_IMAGE from '../../../images/no_results - sad.png';

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
        return (
            <div>
                <div
                    style={{
                        fontFamily: 'monospace',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    OOPS!! No Images Found
                </div>
                <br />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img src={NO_IMAGE} alt="noimage" />
                </div>
            </div>
        );
    }

    return (
        <Images>
            <section className="slider">
                {length !== 1 ? (
                    <FaArrowAltCircleLeft
                        className="left-arrow"
                        onClick={prevSlide}
                    />
                ) : null}
                {length !== 1 ? (
                    <FaArrowAltCircleRight
                        className="right-arrow"
                        onClick={nextSlide}
                    />
                ) : null}
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
