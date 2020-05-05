import React, { useState, Fragment } from 'react';
import Routes from './Router/routes';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

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
