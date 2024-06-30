import { React, useState } from 'react'
import { hero } from './db.json'
import { Box, Button } from '@chakra-ui/react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './hero.css'

function Hero() {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === hero.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? hero.length - 1 : slide - 1);
    }

    return (
        <>
            <div className='carousel'>
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                {hero.map((item, idx) => {
                    return (

                        <div key={idx} className={slide === idx ? "corousel" : "corousel corousel-hidden"}>
                            <div className={"corousel-text"} style={{ backgroundColor: item.background }}>
                                <div id='inner'>
                                    <p style={{ fontSize: "20px", padding: "0 0 8px 0" }}>{item.shead}</p>
                                    <p style={{ fontSize: "40px", padding: "8px 0" }}>{item.head}</p>
                                    <h3>{item.desc}</h3>
                                    <div id='btnDiv'>
                                        <Button colorScheme='blue' variant='solid'>
                                            {item.btn1}
                                        </Button>
                                        <Button colorScheme='blue' variant='outline'>
                                            {item.btn2}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className='corousel-img'>
                                <img src={item.img} alt="img1" />
                            </div>
                        </div >

                    )
                })}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                <span className="indicators">
                    {hero.map((_, idx) => {
                        return (
                            <button className={slide === idx ? "indicator" : "indicator indicator-inactive"} key={idx} onClick={() => setSlide(idx)} ></button>
                        )
                    })}
                </span>
            </div>

        </>
    )
}

export default Hero
