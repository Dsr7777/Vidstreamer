import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />  
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
{/*when we click on video,we move to Videodetail component*/}
{/*when we click on channel,we move to channeldetail component*/}
{/*when we click on search ,we move to searchfeed component */}
{/*We can give any name to folder instead of 'components' and we have to import these files in App.js from that folder */}
{/*We are using components from @muimaterial like icons,buttons thst's why we are importing @muimaterial */}
{/*We defin icons and logos in utils file and we can use these in our whole project */}