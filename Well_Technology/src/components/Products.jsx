import React from 'react'
import { products } from './db.json'
import './products.css'
import { Box, Button } from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

function Products() {

    return (
        <Box className='mainDiv' w={"100%"} h={"500px"} bg={"black"}>
            {products.map((item, id) => {
                return (
                    <Box w={"291px"} h='218px' key={id} bg={"#afbac4"} id='card' >
                        <Menu>
                            <MenuButton as={Button} rightIcon={id === 4 || id === 6 || id === 7 ? "" : <ChevronDownIcon />} zIndex={2} borderRadius={"0"} bg={"black"} color={"white"}
                                position="relative" _hover={{ bg: '#313454' }}
                                _expanded={{ bg: '#313454' }}
                                _focus={{ boxShadow: 'none' }}>
                                {item.btnText}
                            </MenuButton>
                            {id === 4 || id === 6 || id === 7 ? "" : <MenuList zIndex={2}
                                position="relative" bg={'black'} color={'white'} borderRadius={"0"} border={"none"} outline={"none"} mt={"-10px"}>
                                {id === 5 ?
                                    <>
                                        <MenuItem bg={'black'} _hover={{ textDecoration: 'underline' }}>{`${item.drop.text1}`}</MenuItem>
                                        <MenuItem bg={'black'} _hover={{ textDecoration: 'underline' }}>{`${item.drop.text2}`}</MenuItem>
                                        <MenuItem bg={'black'} _hover={{ textDecoration: 'underline' }}>{`${item.drop.text3}`}</MenuItem>
                                        <MenuItem bg={'black'} _hover={{ textDecoration: 'underline' }}>{`${item.drop.text4}`}</MenuItem>
                                    </>
                                    :
                                    <>
                                        <MenuItem bg={'black'} _hover={{ textDecoration: 'underline' }}>{`${item.drop.text1}`}</MenuItem>
                                        <MenuItem bg={'black'} _hover={{ textDecoration: 'underline' }}>{`${item.drop.text2}`}</MenuItem>
                                    </>

                                }
                            </MenuList>}


                        </Menu>
                        <img src={item.img} alt="" style={{ width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "1" }} />
                    </Box>
                )
            })}
        </Box>
    )
}

export default Products
