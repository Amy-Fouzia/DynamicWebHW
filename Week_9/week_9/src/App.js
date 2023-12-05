import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DatePage from './DatePage';

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Link to="/button">Go to Button Page</Link> <br></br>
          <Link to="/accordion">Go to Accordion Page</Link> <br></br>
          <Link to="/date">Go to Date Page</Link> <br></br>
        </div>
        <Routes>
          <Route path="/date" element={<DatePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
