import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IButtonProps } from './Empty'

const TodoList = (props:IButtonProps ) => {
    const {todos} = props
    console.log(todos)
    return (
        <VStack>
            {todos?.map((todo) => (
                <HStack spacing="24px" w="320px">
                    <Flex p={6} w="300px" h="50px" justifyContent="space-between">
                        <Text>{todo.text}</Text>

                        <Flex w="10px" >

                            <DeleteIcon color="red.500" mr="2" />
                            <EditIcon />

                        </Flex>


                    </Flex>
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList