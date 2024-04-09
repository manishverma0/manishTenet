import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import './styles/font.css';
import AllRoutes from './routes/AllRoutes';

// Header 
import Navbar from './components/Navbar/Navbar';

// Footer
import Footer from './components/Navbar/Footer';

// Newsletter 
import NewsLetter from './components/Navbar/NewsLetter';

// Garnett Font
import "./fonts/Garnett-Semibold.ttf";
import "./fonts/Garnett-SemiboldItalic.ttf";
import "./fonts/Garnett-MediumItalic.ttf";
import "./fonts/Garnett-Medium.ttf";
import "./fonts/Garnett-LightItalic.ttf";
import "./fonts/Garnett-Light.ttf";
import "./fonts/Garnett-BoldItalic.ttf";
import "./fonts/Garnett-Bold.ttf";
import "./fonts/Garnett-BlackItalic.ttf";
import "./fonts/Garnett-Black.ttf";
import "./fonts/Garnett-RegularItalic.ttf";
import "./fonts/Garnett-Regular.ttf";

// Founders Grotesk Font 
import "./fonts/FoundersGrotesk-Bold.otf"
import "./fonts/FoundersGrotesk-BoldItalic.otf"
import "./fonts/FoundersGrotesk-Light.otf"
import "./fonts/FoundersGrotesk-LightItalic.otf"
import "./fonts/FoundersGrotesk-Medium.otf"
import "./fonts/FoundersGrotesk-MediumItalic.otf"
import "./fonts/FoundersGrotesk-Regular.otf"
import "./fonts/FoundersGrotesk-RegularItalic.otf"
import "./fonts/FoundersGrotesk-Semibold.otf"
import "./fonts/FoundersGrotesk-SemiboldItalic.otf"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0
      }
    }
  }
});

function App() {
  const isHomePage = window.location.pathname === '/';
  return (
    <ChakraProvider theme={theme}>
      <Navbar isHomePage={isHomePage} />
      <div>
        <AllRoutes/>
      </div>
      <NewsLetter />
      <Footer/>
    </ChakraProvider>
  );
}

export default App;