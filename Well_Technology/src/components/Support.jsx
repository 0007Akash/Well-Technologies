import React from 'react'
import { supportItem } from './db.json'
import { Box, Button } from '@chakra-ui/react'
import './support.css'

const Support = () => {

    return (
        <Box w={'100%'} h={"auto"} bg={"#1d2c3b"} color={"white"}>
            <Box className='support-text-box'>
                <h2>Dell Support</h2>
                <p id='support-head'>We're Here to Help</p>
                <h3>From offering expert advice to solving complex problems, we've got you covered.</h3>
            </Box>
            <Box w={"100%"} h={"139px"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} p={"0 32px"}>
                {supportItem.map((item, idx) => {
                    return (
                        <Box className='card' key={idx}>
                            <Box w={"60px"} h={"60px"}>
                                <img src={item.icon} alt="" />
                            </Box>
                            <p>{item.text}</p>
                        </Box>
                    )
                })}
            </Box>
            <Box w={"100%"} h={"600px"} p={"0 32px"}>
                <Box w={"100%"} h={"100%"} className='sign-in-main-box'>
                    <Box className='sign-in-container'>
                        <h2>My Account</h2>
                        <h3>Create a Dell account and enroll in Dell Rewards to unlock an array of special perks.</h3>
                        <Box className='create-signin'>
                            <Button colorScheme='white' variant='solid' borderRadius={"0"} border={"1px solid white"} width={"50%"} bg={"white"} color={"black"}>
                                Sign In
                            </Button>
                            <Button colorScheme='white' variant='outline' borderRadius={"0"} width={"50%"}>
                                Create An Account
                            </Button>
                        </Box>
                        <Box className='sign-in-services'>
                            <Box>
                                <img width="45" height="45" src="https://img.icons8.com/ios/50/000000/order-on-the-way.png" alt="order-on-the-way" />
                                <p>Order Tracking</p>
                            </Box>
                            <Box>
                                <img width="45" height="45" src="https://img.icons8.com/ios/50/star--v1.png" alt="star--v1" />
                                <p>Easy Ordering</p>
                            </Box>
                            <Box>
                                <img width="45" height="45" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1" />
                                <p>Profile Setting</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='sign-in-img-box'>
                        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-account-desktop-pan-dell-bulk-0455.jpg?wid=1200&hei=675" alt="" />
                    </Box>

                </Box>
            </Box>
            <Box w={"100%"} h={"50px"}></Box>
        </Box>
    )
}

export default Support
