import React from 'react'
import './successStory.css'
import { Box, Button } from '@chakra-ui/react'
import Support from './Support.jsx'


function SuccessStory() {
    return (
        <>
            <Box w={"100%"} h={"633px"} position={"relative"}>
                <video src="https://cdn.pixabay.com/video/2016/05/01/2946-164933125_tiny.mp4" className='video' autoPlay muted loop></video>
                <Box className='overlay'>
                    <h2 style={{ margin: "0 0 8px" }}>CUSTOMER SUCCESS STORIES</h2>
                    <p style={{ margin: "0 0 8px", fontSize: "40px" }}>PhonePe: Empowering Financial Inclusion</p>
                    <p style={{ fontSize: "16px", margin: "4px 0 24pxs" }}>Accelerating India's digitization efforts with greater access to digital payments.</p>
                    <Button colorScheme='blue' variant='solid' borderRadius={"0"} marginTop={"20px"}>
                        Play Video
                    </Button>
                    <Box id='link' display={"flex"} justifyContent={"center"} gap={"30px"} margin={"20px"}>
                        <a href="#">Learn more about PhonePe {"->"}
                        </a>
                        <a href="#">View more customer stories{"->"}</a>
                    </Box>
                </Box>
            </Box >
            <Support />
            <Box w={"100%"} h={"633px"} position={"relative"}>
                <video src="https://cdn.pixabay.com/video/2016/05/01/2946-164933125_tiny.mp4" className='video' autoPlay muted loop></video>
                <Box className='overlay'>
                    <h2 style={{ margin: "0 0 8px" }}>CUSTOMER SUCCESS STORIES</h2>
                    <p style={{ margin: "0 0 8px", fontSize: "40px" }}>PhonePe: Empowering Financial Inclusion</p>
                    <p style={{ fontSize: "16px", margin: "4px 0 24pxs" }}>Accelerating India's digitization efforts with greater access to digital payments.</p>
                    <Button colorScheme='blue' variant='solid' borderRadius={"0"} marginTop={"20px"}>
                        Play Video
                    </Button>
                    <Box id='link' display={"flex"} justifyContent={"center"} gap={"30px"} margin={"20px"}>
                        <a href="#">Learn more about PhonePe {"->"}
                        </a>
                        <a href="#">View more customer stories{"->"}</a>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default SuccessStory
