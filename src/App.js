import { Flex } from '@chakra-ui/react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from './Pages/Login';
import ConvertePage from './Pages/Converter';


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/converter" element={<ConvertePage/>} />
        
    </Routes>
    </Router>
  )
}

export default App;
