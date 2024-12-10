import React, { useContext } from 'react'
import AccordianButton from '../../components/AccordianButton';
import { useNavigate } from "react-router-dom";
import { Box, Flex,  Drawer, DrawerContent, IconButton, useDisclosure } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Image } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { getImageURL, getData } from './firbaseconfig'
import { useQuery } from '@tanstack/react-query'

import { FaCoins, FaCalendar, FaBookOpen, FaTshirt,FaChalkboardTeacher,FaRegImage} from 'react-icons/fa'
// import {GrGroup} from 'react-icons/gr'
//icons are found at https://react-icons.github.io/react-icons/

// Local imports
import DrawerButton from '../../components/DrawerButton';
import routeContext from './routecontext';

const Logo = (props) => {
  const logo = useQuery(
    [ "logo", props.logo, 'img'], 
    ()=>getImageURL(props.logo),
  )
return <>{logo.data && <Image src={logo.data} height={props.height}></Image>}</>
}
const Navbar = () => {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sport} = useContext(routeContext)

  const {isFetched, data} = useQuery(
    [ "config"],
    () => getData(`${process.env.REACT_APP_TAG}/config`),
    {staleTime: 1, cacheTime:0}
  )
  const importdata = useQuery(
    [ sport, "config"], 
    () => getData(`${process.env.REACT_APP_TAG}/${sport}/config`),
    {staleTime: 1.8e+6, cacheTime: Infinity}
  )
  const getIcon = (field)=> {
    switch (field){
      case '/players':
        return FaTshirt;
      case '/coaches':
        return FaChalkboardTeacher;
      case '/calendar':
        return FaCalendar;
      case '/support/team':
        return FaCoins;
      case '/support/sponsor':
        return FaCoins;
      case '/highlights':
        return FaRegImage;
    }
  }
  return (
    <Flex backgroundColor='white' h='6vh' align='center' borderWidth={2} direction='row' p={4} width='100%' position='fixed' top='0px' style={{zIndex:1000}}><>
      
      <Box p={10} pl={0} maxWidth='300px' padding={0} onClick={() => { sport ? navigate("/"+sport) : navigate("") }}>
        {isFetched && <Logo logo={data.logo} height='4vh'/>}
      </Box>
      <IconButton 
        _hover={{ bg: "gray.50", }} 
        backgroundColor='transparent' 
        color='gray.500' 
        icon={<HamburgerIcon />} 
        onClick={sport?onOpen:()=>{}} 
        style={{position:'absolute', right:'18px'}}>
          Open Drawer
      </IconButton>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerContent  borderRight='solid' borderColor='gray.200' borderRightWidth={5} >
        <Box p={6} onClick={() => { onClose(); navigate("") }} >
          {isFetched && <Logo logo={data.logo} height='10vh'/>}
        </Box>
          <Accordion allowToggle>
            {importdata.isFetched && importdata.data && importdata.data.fields.map(field => <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box onClick={() => { onClose(); navigate("/"+sport+field.route) }}>
                      <DrawerButton text={field.name} icon={getIcon(field.route)} ></DrawerButton>
                    </Box>
                </AccordionButton>
              </h2>
            </AccordionItem>)}

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

