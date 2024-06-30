import React from 'react'
import { businessRewards } from './db.json'
import { Box, Button } from '@chakra-ui/react'
import './businessRewards.css'

function BusinessRewards() {
    return (
        <Box className='outer'>
            {businessRewards.map((item, idx) => {
                return (
                    <>
                        <Box>
                            <h2>{item.shead}</h2>
                            <p id='rewardsHead'>{item.head}</p>
                            <p id='desc'>{item.desc}</p>
                            <Button id='btn' colorScheme='blue' variant='solid'>Learn More</Button>
                        </Box>
                        <Box>
                            <img src={item.img} alt="" />
                        </Box>
                    </>
                )

            })}

        </Box>
    )
}

export default BusinessRewards
