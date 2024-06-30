import React from 'react'
import { businessRewards } from './db.json'
import { Box, Button } from '@chakra-ui/react'
import './businessRewards.css'

function Footer() {
    return (
        <>
            <Box w={"100%"} bg={"#f0f0f0"} display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"} p={"44px 40px"} lineHeight={"35px"}>
                <Box>
                    <p style={{ fontWeight: "600", fontSize: "17px" }}>Account</p>
                    <p>My Account</p>
                    <p>Order Status</p>
                    <p>My Products</p>
                </Box>
                <Box>
                    <p style={{ fontWeight: "600", fontSize: "17px" }}>Support</p>
                    <p>Support Home</p>
                    <p>Contact Technical Support
                    </p>
                    <p>Returns</p>
                </Box>
                <Box>
                    <p style={{ fontWeight: "600", fontSize: "17px" }}>Connect with Us</p>
                    <p>Community</p>
                    <p>Contact Us</p>
                </Box>
                <Box>
                    <p style={{ fontWeight: "600", fontSize: "17px" }}>Our Offerings</p>
                    <p>Artificial Intelligence</p>
                    <p>Products</p>
                    <p>Solutions</p>
                    <p>Services</p>
                    <p>Deals</p>
                </Box>
                <Box>
                    <p style={{ fontWeight: "600", fontSize: "17px" }}>Our Company</p>
                    <p>Who We Are</p>
                    <p>Careers</p>
                    <p>Dell Technologies Capital</p>
                    <p>Investors</p>
                    <p>Newsroom</p>
                    <p>Perspectives</p>
                    <p>Recycling</p>
                    <p>ESG & Impact</p>
                    <p>Customer Stories</p>
                </Box>
                <Box>
                    <p style={{ fontWeight: "600", fontSize: "17px" }}>Our Partners</p>
                    <p>Find a Partner</p>
                    <p>OEM Solutions</p>
                    <p>Partner Program</p>
                </Box>
                <Box>
                    <p style={{ fontWeight: "600", fontSize: "17px" }}>Resources</p>
                    <p>Blog</p>
                    <p>Dell Rewards</p>
                    <p>Events</p>
                    <p>Dell Learning Centre</p>
                    <p>Privacy Centre</p>
                    <p>Resource Library</p>
                    <p>Security & Trust Centre</p>
                    <p>Trial Software Downloads</p>
                </Box>
            </Box>
            <Box w={"100%"} bg={"#f0f0f0"} p={"44px 40px"}>
                <Box display={"flex"} gap={"60px"}>
                    <p style={{ fontWeight: "600" }}>Dell Technologies</p>
                    <p style={{ fontWeight: "600" }}>Dell Premier</p>
                </Box>
                <Box display={"flex"} gap={"60px"} mt={"20px"}>
                    <p>Copyright © 2024 Dell Inc.</p>
                    <p>Terms of Sale</p>
                    <p>Privacy Statement</p>
                    <p>Legal & Regulatory</p>
                    <p>Accessibility</p>
                </Box>
                <Box w={"100%"} mt={"20px"} textAlign={"center"}>
                    <p>Made with <span style={{ color: "red" }}>♡</span> by <span style={{ color: "purple" }}>Akash Yadav</span></p>
                </Box>
            </Box>
        </>
    )
}

export default Footer
