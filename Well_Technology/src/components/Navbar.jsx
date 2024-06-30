import React from 'react'
import { Box, Input, Button } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
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
import { color } from 'framer-motion';
import '../index.css'


function Navbar() {
    return (
        <>
            <Box bg='white' w='100%' h='60px' pl='10' pr='10' color='black' display='flex' justifyContent='space-between' alignItems='center' >
                <Box display='flex' gap='60px'>
                    <p style={{ fontSize: "22px", color: "#58a5df" }}><span id='headCol'>W彡LL</span> Technologies</p>
                    <Box display='flex' border='1px solid grey' borderRadius='5px' h='35px'>
                        <Input placeholder='Search Well' w='650px' h='33px' border='none' />
                        <IconButton aria-label='Search database' icon={<SearchIcon />} bg='none' h='33px' />
                    </Box>
                </Box>
                <Box display='flex' gap='10px' justifyContent='center' alignItems='center'>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='none'>
                            <Box display='flex' justifyContent='center' alignItems='center' textAlign='center' gap='2px' fontSize='14px' fontWeight='400'>
                                <svg height="20px" viewBox="0 0 21 21" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 2)" /></svg>
                                <p>Sign In</p>
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <Box p={"20px"} bg='#f5f2f2'>
                                <h1 style={{ fontWeight: "700", marginBottom: "10px" }}>Welcome to Well</h1>
                                <p>My Account</p>
                                <Box pl={"20px"}>

                                    <ul>
                                        <li>Place orders quickly and easily</li>
                                        <li>View orders and track your shipping status</li>
                                        <li>Create and access a list of your products</li>
                                    </ul>
                                </Box>
                                <Box display='flex' flexDirection='column' gap={"10px"} mt={"10px"}>
                                    <Button colorScheme='blue' variant='solid' bg={"blue"} color={"white"} >
                                        Sign In
                                    </Button>
                                    <Button colorScheme='blue' variant='outline'>
                                        Create an Account
                                    </Button>
                                    <Button colorScheme='blue' variant='outline'>
                                        Premier Sign In
                                    </Button>
                                    <Button colorScheme='blue' variant='outline'>
                                        Partner Program Sign In
                                    </Button>
                                </Box>

                            </Box>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} bg='none'>
                            <Box display='flex' justifyContent='center' alignItems='center' textAlign='center' gap='2px' fontSize='14px' fontWeight='400'>
                                <svg height="18" viewBox="0 0 359.095 384" width="18" xmlns="http://www.w3.org/2000/svg"><g data-name="Group 32" id="Group_32" transform="translate(1907.554 -311.64)"><path d="M-1752.75,695.64c-11.325-3.417-18.527-10.654-20.274-22.56-1.974-13.453,8.028-27.091,21.72-28.524a252.293,252.293,0,0,1,45.651-.12c9.742.752,16.672,6.392,20.528,15.37,1.136,2.644,2.579,3.461,5.328,3.438,14.123-.118,28.248.053,42.37-.089,24.976-.251,45.319-22.671,43.495-47.621-.2-2.781-1.7-2.859-3.725-2.855q-16.5.037-33,0c-13-.044-21.005-8.051-21.017-21.068-.026-28.622.039-57.244-.037-85.866-.023-8.467,3.133-15.038,10.546-19.332,1.434-.831,2.3-1.781,2.248-3.522-.5-15.71,1.143-31.465-1.491-47.133-6.073-36.125-38.1-66.927-74.54-71.472-39.519-4.929-73.655,12.534-92.375,47.5a81.44,81.44,0,0,0-9.7,37.379c-.192,10.745-.01,21.5-.107,32.245-.023,2.472.592,4.092,2.916,5.451,6.712,3.924,9.867,10.07,9.876,17.779q.048,43.683,0,87.366c-.023,12.542-8.145,20.634-20.661,20.669-15.124.043-30.248.115-45.37-.056-19.97-.225-36.935-17.306-37.088-37.336q-.2-26.621-.011-53.244a38.565,38.565,0,0,1,31.829-37.367c6.426-1.092,6.327-1.094,6.448-7.476.236-12.485-.5-24.973.619-37.461a137.4,137.4,0,0,1,27.989-72.413c22.6-29.644,52.509-47.472,89.115-54.163,3.3-.6,6.646-1.016,9.97-1.517h27a13.905,13.905,0,0,0,1.8.461c40.845,4.912,73.718,23.8,98.352,56.685,15.793,21.084,24.619,44.936,26.932,71.235,1.1,12.482.371,24.964.607,37.444.117,6.159.021,6.161,5.966,7.148a38.474,38.474,0,0,1,32.314,37.669q.14,26.235,0,52.471a38.039,38.039,0,0,1-27.072,36.125c-3.81,1.1-4.675,2.8-4.7,6.489-.143,18.769-7.057,34.541-21.718,46.567-10.644,8.732-23.061,12.824-36.713,13.016-13.74.193-27.484.044-41.226.053-1.868,0-3.71-.178-4.61,2.193-3.317,8.746-9.98,13.772-18.681,16.444Zm-102.674-234.192c0,5.874.189,11.756-.068,17.619-.162,3.681.861,5.225,4.8,4.969,4.854-.316,9.744-.069,14.618-.077,5.155-.007,5.083-.014,5.184-5.157.28-14.222-.709-28.459,1.353-42.655,7.932-54.593,62.2-94.388,116.756-85.464,51.35,8.4,87.535,50.815,87.687,102.8.026,9,.041,18-.014,27-.013,2.228.522,3.545,3.117,3.5,6.123-.1,12.249-.079,18.372-.011,2.3.026,3.094-1.053,3.045-3.205-.325-14.232.788-28.493-.781-42.7-3.295-29.833-15.612-55.548-37.055-76.333-31.022-30.071-68.487-42.1-111.069-34.779-44.6,7.665-76.245,33.229-95.26,74.18C-1853.6,420.207-1856.5,440.522-1855.424,461.448Zm-1.025,87.166c0-15.6-.066-31.206.055-46.808.024-3.107-1.011-4.27-4.1-4.072-3.109.2-6.24,0-9.359.08-12.793.321-23.55,10.5-23.778,23.292-.324,18.217-.287,36.448-.01,54.667.176,11.543,9.066,21.047,20.434,22.982,4.1.7,8.215.4,12.311.677,3.395.229,4.557-.862,4.518-4.384C-1856.546,579.572-1856.448,564.092-1856.449,548.614Zm256.9.059c0,15.6.049,31.205-.046,46.807-.017,2.824.711,4.21,3.8,3.938,2.477-.218,4.989-.01,7.485-.054,16.706-.3,26.488-12.768,26.188-26.271-.377-16.967.042-33.951-.174-50.924a24.121,24.121,0,0,0-20.2-23.957c-4.128-.73-8.469-.163-12.689-.487-3.524-.271-4.456,1.141-4.424,4.516C-1599.469,517.717-1599.552,533.2-1599.55,548.673Zm-243.093-.291q0,5.806,0,11.612,0,17.791,0,35.584c0,1.94-.1,3.851,2.762,3.8,5.118-.082,10.244.119,15.354-.107,4.041-.179,6.336-2.547,6.343-6.411q.073-44.387-.005-88.773c-.008-4.163-2.1-6.162-6.27-6.273-4.243-.112-8.49-.046-12.735-.043-5.435,0-5.447.01-5.449,5.283Q-1842.65,525.721-1842.643,548.382Zm229.285.429c0-15.607-.077-31.215.061-46.822.029-3.309-1.085-4.431-4.337-4.267-4.359.218-8.738.012-13.107.07-5.125.067-7.092,1.939-7.1,6.994q-.054,43.638-.005,87.277c.005,4.785,2.255,7.11,7.06,7.268,4.241.139,8.509-.214,12.729.119,3.953.311,4.814-1.284,4.772-4.941C-1613.459,579.278-1613.357,564.044-1613.358,548.811ZM-1728.1,657.62v.024c-6.491,0-12.988-.152-19.474.043a11.949,11.949,0,0,0-11.765,10.939c-.541,7.033,3.31,12.167,10.14,13.466a20.414,20.414,0,0,0,3.705.463c11.61.036,23.222.132,34.831-.011,8.893-.11,14.1-4.948,14.054-12.622-.052-7.69-5.361-12.278-14.262-12.3C-1716.617,657.608-1722.36,657.62-1728.1,657.62Z" data-name="Path 1054" id="Path_1054" /><path d="M-1727.848,529.549c-42.347.241-77.227-34.268-77.495-76.673-.266-42.247,34.489-77.488,76.6-77.675,42.917-.19,77.949,34.335,78.079,76.951C-1650.53,494.659-1685.082,529.3-1727.848,529.549Zm-.2-140.542a63.233,63.233,0,0,0-63.5,63.278c-.027,35.111,28.624,63.871,63.6,63.845a63.835,63.835,0,0,0,63.484-63.556A63.248,63.248,0,0,0-1728.049,389.007Z" data-name="Path 1055" id="Path_1055" /><path d="M-1721.095,460.9q0,12.369.005,24.739c.005,4.814.016,4.814,4.975,4.955,6.014.171,9.343,4.86,6.866,9.684a5.878,5.878,0,0,1-5.338,3.549c-8.87.067-17.743.126-26.612-.01a6.512,6.512,0,0,1-6.383-6.558,6.72,6.72,0,0,1,6.354-6.622c6.321-.589,6.322-.589,6.322-7.027,0-12.994-.08-25.989.055-38.983.033-3.238-.655-4.764-4.328-4.633-5.228.185-8.518-2.813-8.411-6.944.1-3.994,3.288-6.609,8.368-6.744,3.122-.083,6.248-.073,9.371-.007,6.1.129,8.684,2.661,8.735,8.737C-1721.045,443.66-1721.1,452.282-1721.095,460.9Z" data-name="Path 1056" id="Path_1056" /><path d="M-1721.192,407.657a7.122,7.122,0,0,1-6.641,6.794,7.107,7.107,0,0,1-6.98-6.832,7.09,7.09,0,0,1,7.015-6.792A7.121,7.121,0,0,1-1721.192,407.657Z" data-name="Path 1057" id="Path_1057" /></g></svg>
                                <p>Contact Us</p>
                            </Box>
                        </MenuButton>

                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='none' fontSize='14px'>
                            <Box display='flex' justifyContent='center' alignItems='center' textAlign='center' gap='2px' fontWeight='400'>
                                <svg height="17px" version="1.1" viewBox="0 0 20 20" width="17px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title /><desc /><defs /><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#000000" id="Core" transform="translate(-296.000000, -296.000000)"><g id="language" transform="translate(296.000000, 296.000000)"><path d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M16.9,6 L14,6 C13.7,4.7 13.2,3.6 12.6,2.4 C14.4,3.1 16,4.3 16.9,6 L16.9,6 Z M10,2 C10.8,3.2 11.5,4.5 11.9,6 L8.1,6 C8.5,4.6 9.2,3.2 10,2 L10,2 Z M2.3,12 C2.1,11.4 2,10.7 2,10 C2,9.3 2.1,8.6 2.3,8 L5.7,8 C5.6,8.7 5.6,9.3 5.6,10 C5.6,10.7 5.7,11.3 5.7,12 L2.3,12 L2.3,12 Z M3.1,14 L6,14 C6.3,15.3 6.8,16.4 7.4,17.6 C5.6,16.9 4,15.7 3.1,14 L3.1,14 Z M6,6 L3.1,6 C4.1,4.3 5.6,3.1 7.4,2.4 C6.8,3.6 6.3,4.7 6,6 L6,6 Z M10,18 C9.2,16.8 8.5,15.5 8.1,14 L11.9,14 C11.5,15.4 10.8,16.8 10,18 L10,18 Z M12.3,12 L7.7,12 C7.6,11.3 7.5,10.7 7.5,10 C7.5,9.3 7.6,8.7 7.7,8 L12.4,8 C12.5,8.7 12.6,9.3 12.6,10 C12.6,10.7 12.4,11.3 12.3,12 L12.3,12 Z M12.6,17.6 C13.2,16.5 13.7,15.3 14,14 L16.9,14 C16,15.7 14.4,16.9 12.6,17.6 L12.6,17.6 Z M14.4,12 C14.5,11.3 14.5,10.7 14.5,10 C14.5,9.3 14.4,8.7 14.4,8 L17.8,8 C18,8.6 18.1,9.3 18.1,10 C18.1,10.7 18,11.4 17.8,12 L14.4,12 L14.4,12 Z" id="Shape" /></g></g></g></svg>
                                <p>IN/EN</p>
                            </Box>
                        </MenuButton>
                        <MenuList p={"20px"} bg='#f5f2f2'>
                            <Box display={"flex"} gap={"20px"}>
                                <Button colorScheme='teal' variant='link'>
                                    Americas
                                </Button>
                                <Button colorScheme='teal' variant='link'>
                                    Asia Pacific & Japan
                                </Button>
                                <Button colorScheme='teal' variant='link'>
                                    Europe
                                </Button>
                                <Button colorScheme='teal' variant='link'>
                                    Middle East & Africa
                                </Button>
                            </Box>
                            <hr />
                            <Box display={"flex"}>
                                <Box display={"flex"} flexDirection={"column"}>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Anguilla/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Antigua & Barbuda/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Argentina/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>

                                        Aruba/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bahamas/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Barbados/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Belize/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bermuda/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bolivia/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Brazil/Português
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        British Virgin Islands/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Canada/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Canada/Français
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>

                                        Cayman Islands/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Chile/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Colombia/Español
                                    </Button>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"}>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Anguilla/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Antigua & Barbuda/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Argentina/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>

                                        Aruba/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bahamas/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Barbados/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Belize/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bermuda/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bolivia/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Brazil/Português
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        British Virgin Islands/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Canada/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Canada/Français
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>

                                        Cayman Islands/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Chile/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Colombia/Español
                                    </Button>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"}>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Anguilla/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Antigua & Barbuda/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Argentina/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>

                                        Aruba/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bahamas/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Barbados/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Belize/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bermuda/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Bolivia/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Brazil/Português
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        British Virgin Islands/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Canada/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Canada/Français
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>

                                        Cayman Islands/English
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Chile/Español
                                    </Button>
                                    <Button variant='ghost' color={"grey"} fontWeight={"400"} fontSize={"14px"}>
                                        Colombia/Español
                                    </Button>
                                </Box>
                            </Box>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='none'>
                            <Box display='flex' justifyContent='center' alignItems='center' textAlign='center' gap='2px' fontSize='14px' fontWeight='400'>
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="#707070" xmlns="http://www.w3.org/2000/svg"><path fill="#707070" d="M16 3.09H2.88L2 .32H0v1.07h1.17L4.48 12.8h8.85v-1.07h-8L4.8 9.92h9.81L16 3.09zM4.48 8.85L3.09 4.16h11.52l-1 4.69H4.48z"></path><path fill="#707070" d="M12.59 12.05c-.239-.001-.477.045-.698.136a1.81 1.81 0 0 0-1.122 1.684 1.74 1.74 0 0 0 .118.707c.088.225.222.429.393.599a1.74 1.74 0 0 0 1.309.504 1.74 1.74 0 0 0 1.81-1.81 1.8 1.8 0 0 0-1.81-1.82zm0 2.56a.75.75 0 0 1-.54-1.28.75.75 0 0 1 1.28.54.73.73 0 0 1-.74.74zm-7.47-2.56a1.8 1.8 0 0 0-1.81 1.82 1.73 1.73 0 0 0 1.81 1.81 1.73 1.73 0 0 0 1.81-1.81 1.8 1.8 0 0 0-1.81-1.82zm0 2.56a.75.75 0 0 1-.527-1.284.75.75 0 0 1 1.277.544.73.73 0 0 1-.75.74z"></path></svg>
                                <p>Cart</p>
                            </Box>
                        </MenuButton>
                        <MenuList textAlign='center' bg='#f5f2f2'>

                            <Box fontWeight='700' mt='5px'>
                                <h2>Your Well.com Carts</h2>
                            </Box>
                            <Box w='200px' h='100px' mt='20px'>
                                Your cart is empty
                            </Box>
                        </MenuList>
                    </Menu>
                </Box>

            </Box>

            <Box >
                <Box display={"flex"} gap={"10px"} pl='10' pr='10' >
                    <Menu>
                        <MenuButton as={Button} fontSize={"14px"} bg={"transparent"} p='5px' fontWeight={"400"} _hover={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}
                            _expanded={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}>
                            Artificial Intelligence
                        </MenuButton>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize={"14px"} bg={"transparent"} p='5px' fontWeight={"400"} _hover={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}
                            _expanded={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}>
                            Products
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize={"14px"} bg={"transparent"} p='5px' fontWeight={"400"} _hover={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}
                            _expanded={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}>
                            Solutions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize={"14px"} bg={"transparent"} p='5px' fontWeight={"400"} _hover={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}
                            _expanded={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}>
                            Services
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize={"14px"} bg={"transparent"} p='5px' fontWeight={"400"} _hover={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}
                            _expanded={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}>
                            Support
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize={"14px"} bg={"transparent"} p='5px' fontWeight={"400"} _hover={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}
                            _expanded={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}>
                            Deals
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} fontSize={"14px"} bg={"transparent"} p='5px' fontWeight={"400"} _hover={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}
                            _expanded={{ bg: '#f7f7f7', borderBottom: '2px solid black', borderRadius: '0px' }}>
                            Find a Store
                        </MenuButton>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}

export default Navbar
