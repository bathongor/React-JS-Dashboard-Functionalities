import React from 'react';
import SideBar from './SideBar';
import NavigationBar from './NavigationBar';
import ContentRouter from './ContentRouter';
import Footer from './Footer';

const App = () => {
  return(
    <div id="App">
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <NavigationBar />
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <ContentRouter />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
