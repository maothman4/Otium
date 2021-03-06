import './App.css';
import OtuimHeader from "./header"
import SearchBar from "./search"
import Post from "./post"
import PublishPost from "./PublishPost"
import { ThemeProvider } from '@mui/material/styles';
import{theme} from './theme'
import { Divider } from '@mui/material';
import Profile from './Profile'
import Navigation from './Navigation'
 
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';


 

function App() {
  return (
  
    <div className="App">
 
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <> 
            <OtuimHeader />
            <SearchBar />
            <Divider />
            <Post />  
            <Divider />
            <Post />  
            <Divider />
            <Post />  
            <Navigation />  
          </>
        } />
        <Route path="/createPost" element={<PublishPost />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>
    
  );
}

export default App;
