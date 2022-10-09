import React, { useContext } from 'react'
import AccordianButton from '../../components/AccordianButton';
import { useNavigate } from "react-router-dom";
import { Box, Flex,  Drawer, DrawerContent, IconButton, useDisclosure } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Image } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { FaCoins, FaCalendar, FaBookOpen, FaTshirt,FaChalkboardTeacher} from 'react-icons/fa'
// import {GrGroup} from 'react-icons/gr'
//icons are found at https://react-icons.github.io/react-icons/

// Local imports
import DrawerButton from '../../components/DrawerButton';
import routeContext from './routecontext';

const Navbar = () => {
  let logo = require('../../assets/vikinghead.png')
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sport} = useContext(routeContext)
  return (
    <Flex backgroundColor='white' h='10vh' align='center' borderWidth={2} direction='row' p={4} width='100%' position='fixed' top='0px' style={{zIndex:1000}}><>
      
      <Box p={10} pl={0} maxWidth='300px' padding={0} onClick={() => { sport?navigate("/"+sport):navigate("") }}>
        <Image src={logo} height='8vh'></Image>
      </Box>
      <IconButton _hover={{ bg: "gray.50", }} backgroundColor='transparent' color='gray.500' icon={<HamburgerIcon />} onClick={sport?onOpen:()=>{}} style={{position:'absolute', right:'18px'}}>Open Drawer</IconButton>
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
                <Box onClick={() => { onClose(); navigate("/"+sport+"/players#varsity") }}>
                  <AccordianButton text='Varsity'></AccordianButton>
                </Box>
                <Box onClick={() => { onClose(); navigate("/"+sport+"/players#jv") }}>
                  <AccordianButton text='JV'></AccordianButton>
                </Box>
                <Box onClick={() => { onClose(); navigate("/"+sport+"/players#soph") }}>
                  <AccordianButton text='Sophomore'></AccordianButton>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            {/* Coaches */}
            <AccordionItem>
              <h2>
              <AccordionButton>
                <DrawerButton text='Coaches' icon={FaChalkboardTeacher}></DrawerButton>
              </AccordionButton>
              </h2>
              <AccordionPanel>
                <Box onClick={() => { onClose(); navigate("/"+sport+"/coaches#varsity") }}>
                  <AccordianButton text='Varsity'></AccordianButton>
                </Box>
                <Box onClick={() => { onClose(); navigate("/"+sport+"/coaches#jv") }}>
                  <AccordianButton text='JV'></AccordianButton>
                </Box>
                <Box onClick={() => { onClose(); navigate("/"+sport+"/coaches#soph") }}>
                  <AccordianButton text='Sophomore'></AccordianButton>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            {/* Calendar */}
            <AccordionItem>
              <h2>
              <AccordionButton>
              <Box onClick={() => { onClose(); navigate("/"+sport+"/calendar") }}>
                  <DrawerButton text='Calendar' icon={FaCalendar}></DrawerButton>
                </Box>
                </AccordionButton>
              </h2>
            </AccordionItem>

            {/* Support*/}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <DrawerButton text='Support' icon={FaCoins} ></DrawerButton>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Box onClick={() => {onClose(); navigate("/"+sport+"/support/team") }}>
                  <AccordianButton text='Team'></AccordianButton>
                </Box>
                <Box onClick={() => {onClose(); navigate("/"+sport+"/support/sponsor") }}>
                  <AccordianButton text='Sponsors'></AccordianButton>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            {/* FanGuides*/}
            <AccordionItem>
              <AccordionButton>
                <Box onClick={() => { onClose(); navigate(""); }}>
                  <DrawerButton text='Fan Guides' icon={FaBookOpen}></DrawerButton>
                </Box>
              </AccordionButton>
            </AccordionItem>
            
          </Accordion>
        </DrawerContent>
      </Drawer>
    </>
    </Flex>
  )
}

export default Navbar

