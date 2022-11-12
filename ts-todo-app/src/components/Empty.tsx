import { Badge } from '@chakra-ui/react';
import * as React from 'react';

export interface IButtonProps {
  todos?: { id:number, text:string}[]
}

export default function Empty(props: IButtonProps) {
  return (
    <Badge
      colorScheme="pink"
      variant="outline"
      borderRadius="4"
      p='4' m='5'
    >No todos for Today!!</Badge>
  );
}
