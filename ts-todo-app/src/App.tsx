
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Empty from './components/Empty';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <ChakraProvider>
     <Navbar/>
     <Empty/>
    <MainRoutes />
  </ChakraProvider>
  );
}

export default App;
