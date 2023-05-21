import { Button } from '@chakra-ui/react';

export const ButtonLogin = (props: any) => {
  return (
    <Button onClick={props.login} 
            colorScheme='purple'
            borderColor='green.500' 
            size='sm' width='100%' 
            marginTop='5px'
            >
      Login
    </Button>
  );
}