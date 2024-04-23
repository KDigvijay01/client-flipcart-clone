import Header from './components/header/Header';
import Home from './components/home/Home';

import {Box} from "@mui/material";
import DataProvider from './context/DataProvider';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

// const 




function App() {





  return (
      <DataProvider>
      <Router>
        <Header/>
          <Box style={{marginTop: "54px"}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:id" element={<DetailView/>} />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </Box>
        </Router>
      </DataProvider>
  );
}

export default App;





