import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <Card></Card>
    </ChakraProvider>
  );
}

export default App;
