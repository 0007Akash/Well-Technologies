import { useState } from 'react'
import React from 'react'
import { solutions } from './db.json'
import './solution.css'
import { Box, Button } from '@chakra-ui/react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


function Solution() {
    const [slider, setSlider] = useState(0);

    const nextSlide = () => {
        setSlider(slider === solutions.length - 1 ? 0 : slider + 1);
    }
    const prevSlide = () => {
        setSlider(slider === 0 ? solutions.length - 1 : slider - 1);
    }

    return (
        <>

            <div className='main'>
                <div style={{ color: "white", padding: "50px 32px", marginLeft: "120px", marginRight: "120px" }}>
                    <h3>Dell Technologies Showcase</h3>
                    <p style={{ fontSize: "40px" }}>Featured Products and Solutions</p>
                </div>
                <div className='main-container'>
                    <BsArrowLeftCircleFill className="Arrow ArrowLeft" onClick={prevSlide} />
                    {solutions.map((item, idx) => {
                        return (
                            <Box className={slider === idx ? "innerBox" : "innerBox innerBox-hidden"} key={idx}>
                                <Box w={"366px"} bg={"white"} zIndex={"1"} p={"15px"} boxShadow={"0 0 10px #555"} position={"absolute"} left={"-10%"}>
                                    <p id='shead'>{item.shead}</p>
                                    <p id='head'>{item.head}</p>
                                    <p id='desc'>{item.desc}</p>
                                    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} >
                                        <Button colorScheme='blue' variant='link' fontSize={"16px"} margin={"0 8px 0 0"} padding={"8px 0"}>
                                            Shop Now
                                        </Button>
                                        <Button colorScheme='blue' variant='link'>
                                            Learn More
                                        </Button>
                                    </Box>
                                </Box>
                                <Box w={"950px"} height={"539px"}>
                                    <img src={item.img} alt="" style={{ width: "100%", height: "100%" }} />
                                </Box>
                            </Box>
                        )
                    })}
                    <BsArrowRightCircleFill className="Arrow ArrowRight" onClick={nextSlide} />
                </div>
            </div >
        </>
    )
}

export default Solution
