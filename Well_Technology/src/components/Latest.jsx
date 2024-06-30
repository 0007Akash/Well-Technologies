import React from 'react'
import { wellLatest } from './db.json'
import { Box, Button } from '@chakra-ui/react'

function Latest() {
    return (
        <Box w={"100%"} bg={"#002a58 "} p={"0 132px"}>
            <Box w={"100%"} padding={"60px 0px"} color={"white"}>
                <Box className='latest-text'>
                    <h4>Latest from Dell Technologies</h4>
                    <p style={{ fontSize: "40px" }}>What's Happening</p>
                </Box>
                <Box display={"flex"} padding={"32px 0 40px"} gap={"20px"} w={"100%"} h={"430px"} >
                    {wellLatest.map((item, idx) => {
                        return (
                            <Box className='latest-card' key={idx} bg={"#001730 "}>
                                <img src={item.img} alt="" />
                                <Box p={"8px 8px 16px"}>
                                    <p style={{ fontSize: "20px" }}>{item.head}</p>
                                    <Button variant='link' style={{ margin: "28px 0 0", color: "white", fontSize: "16px" }}>{item.btnText}</Button>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default Latest
