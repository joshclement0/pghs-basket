import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function AccordianButton({text}) {
    return (
        <Flex  direction='row' justify='left' align='center' p={1} _hover={{ bg: "gray.100", cursor:'pointer' }}>
            <Text  ml='3'  color='gray.400' fontWeight='bold' >{text}</Text>
        </Flex>
    )
}

export default AccordianButton
