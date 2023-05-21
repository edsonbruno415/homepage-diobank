import { 
  Center,
  Input,
  Box,
} from '@chakra-ui/react'
import { login } from '../../services/login';
import { ButtonLogin } from '../Button';
import { useState } from 'react';

export const Card = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword] = useState<string>('');
  return(
    <Box minHeight='100vh' backgroundColor='#1E192C' padding='25px'>
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" type="email" onChange={(event)=> setEmail(event.target.value)}/>
      <Input placeholder="password" type="password" onChange={(event)=> setPassword(event.target.value)}/>
      <Center>
        <ButtonLogin login={()=> login({ email, password })}></ButtonLogin>
      </Center>
    </Box>
  </Box>
  )
}