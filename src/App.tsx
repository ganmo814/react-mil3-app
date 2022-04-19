import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from "./theme/theme";
import { Router } from './router/Router';

import { HeaderOnly } from './components/templates/HeaderOnly';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderOnly>
        <div>

        </div>
        </HeaderOnly>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;