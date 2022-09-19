import React from 'react'
import AccordianButton from './components/AccordianButton';
import { useNavigate } from "react-router-dom";
import { Box, Flex,  Drawer, DrawerContent, IconButton, useDisclosure } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Image } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaBasketballBall, FaCalendar, FaHamburger, FaTshirt} from 'react-icons/fa'
import {GrGroup} from 'react-icons/gr'


// Local imports
import DrawerButton from './components/DrawerButton';

const Navbar = () => {
  let logo = require('./assets/vikinghead.png')
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex backgroundColor='white' h='10vh' align='center' borderWidth={2} direction='row' p={4} width='100%' position='fixed' top='0px' style={{zIndex:1000}}><>
      
      <Box p={10} pl={0} maxWidth='300px' padding={0} onClick={() => { navigate("") }}>
        <Image src={logo} height='8vh'></Image>
      </Box>
      <IconButton _hover={{ bg: "gray.50", }} backgroundColor='transparent' color='gray.500' icon={<HamburgerIcon />} onClick={onOpen} style={{position:'absolute', right:'18px'}}>Open Drawer</IconButton>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerContent  borderRight='solid' borderColor='gray.200' borderRightWidth={5} >
        <Box p={6} onClick={() => { onClose(); navigate("") }} >
          <Image src={logo} height='10vh'></Image>
        </Box>
          <Accordion allowToggle>

            {/* ROSTER*/}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <DrawerButton text='Roster' icon={FaTshirt}></DrawerButton>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Box onClick={() => { onClose(); navigate("/players#varsity") }}>
                  <AccordianButton text='Varsity'></AccordianButton>
                </Box>
                <Box onClick={() => { onClose(); navigate("/players#jv") }}>
                  <AccordianButton text='JV'></AccordianButton>
                </Box>
                <Box onClick={() => { onClose(); navigate("/players#soph") }}>
                  <AccordianButton text='Sophomore'></AccordianButton>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            {/* Coaches */}
            <AccordionItem>
              <h2>
              <AccordionButton>
              <Box onClick={() => { onClose(); navigate("/coaches") }}>
                  <DrawerButton text='Coaches' icon={GrGroup}></DrawerButton>
                </Box>
                </AccordionButton>
              </h2>
            </AccordionItem>

            {/* Calendar */}
            <AccordionItem>
              <h2>
              <AccordionButton>
              <Box onClick={() => { onClose(); navigate("/calendar") }}>
                  <DrawerButton text='Calendar' icon={FaCalendar}></DrawerButton>
                </Box>
                </AccordionButton>
              </h2>
            </AccordionItem>

            {/* Concessions */}
            <AccordionItem>
              <h2>
              <AccordionButton>
              <Box onClick={() => { onClose(); navigate("/calendar") }}>
                  <DrawerButton text='Concessions' icon={FaHamburger}></DrawerButton>
                </Box>
                </AccordionButton>
              </h2>
            </AccordionItem>

            {/* Support*/}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <DrawerButton text='Support' icon={FaBasketballBall} ></DrawerButton>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Box onClick={() => {onClose(); navigate("/support/team") }}>
                  <AccordianButton text='Team'></AccordianButton>
                </Box>
                <Box onClick={() => {onClose(); navigate("/support/sponsor") }}>
                  <AccordianButton text='Sponsors'></AccordianButton>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            
          </Accordion>
        </DrawerContent>
      </Drawer>
    </>
    </Flex>
  )
}

export default Navbar

