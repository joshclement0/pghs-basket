import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'

function DrawerButton({icon, text}) {
    return (
        <Flex  direction='row' justify='left' align='center' p={3} >
            <Icon as={icon} color='blue.500' boxSize = '10' ></Icon>
            <Text  ml='3'  color='blue.500' fontWeight='bold' >{text}</Text>
        </Flex>
    )
}

export default DrawerButton
