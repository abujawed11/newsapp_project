import Navbar from './components/Navbar'
import './App.css';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  let pageSize = 6;
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress] = useState(0)
  // let apiKey = '76a2ec1eb09e4f699ad1a67aa88e9f9c'
  return (
    <div>
      {<Router>
        <Navbar />

        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
          style={{marginTop: '3.5rem'}}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="general" />}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="business" />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="entertainment" />}></Route>
          <Route exact path="/general" element={<News key="general" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="general" />}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="health" />}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="science" />}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="sports" />}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} country='in' category="technology" />}></Route>
        </Routes>
      </Router>}
    </div>
  );
}

export default App;
