import { Box, Button, Flex, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ShowTodo from '../components/ShowTodo';

const Todo = () => {
    const [add, Setadd] = useState('');
    const handleClick =() =>{
        console.log(add)
    }
    return (
        <Box >
            <VStack p={5}>

                <Text bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize="6xl"
                    fontWeight="extrabold">
                    Todo App
                </Text>
                <Flex>

                    <Input value={add} onChange={(e) => Setadd(e.target.value)} />
                    <Button colorScheme={'blue'} ms='2' onClick={handleClick}>Add</Button>
                </Flex>

                <ShowTodo />
                
            </VStack>

        </Box>
    )
}

export default Todo