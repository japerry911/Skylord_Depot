import React, { useState, Fragment } from 'react';
import Routes from './Router/Routes';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div className='App'>
      <Toolbar drawerClickHandler={drawerClickHandler} />
      <SideDrawer open={sideDrawerOpen} />
      {sideDrawerOpen
      ?
      <Fragment>
        <Backdrop backdropClickHandler={backdropClickHandler} />
      </Fragment>
      :
      null}
      <main className='main-page-content'>
        <Routes />
      </main>
    </div>
  );
}

export default App;
