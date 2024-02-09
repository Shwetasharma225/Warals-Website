import './App.css';

import Institute from './components/Institute';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import School from './components/School';
import Learning from './components/Learning';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Contact from './components/contact';
import Home from './components/Home';


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Montserrat', 'poppins'].join(','),
    },
  });

  return (
    <div>
    
      {/* <Home/> */}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            
            <Route path="/products" element={<Products />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/school" element={<School />} />
            <Route path="/" element={<Home/>} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>  
      {/* {/* <Contact/> */}
    </div>
  );
}

export default App;
