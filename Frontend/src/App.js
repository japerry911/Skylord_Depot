import React, { useState, Fragment, useEffect } from 'react';
import Routes from './Router/Routes';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const imgs = [
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Home/golden-retreiver-usa-landscape.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/andre-boysen-GWWHCY3K-U0-unsplash.jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/jamie-street-uNNCs5kL70Q-unsplash.jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/sarah-brown-ubRoy09Y9Gw-unsplash.jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/marek-szturc-GokBcmdOI6I-unsplash.jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/About/john-salzarulo-b1ABAIbQLOQ-unsplash.jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/christian-bowen-OYUzC-h1glg-unsplash.jpg'
      ];

      cacheImages(imgs);
  }, []);

  const cacheImages = srcArray => {
      srcArray.forEach(src => {
        new Promise(function(resolve, reject) {
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });

      setTimeout(() => setIsLoading(false), 1000);
  };

  const drawerClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div className='App'>
      {isLoading
      ?
      <div className='spinner-div'>
        <Spinner />
      </div>
      :
      <Fragment>
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
        <Footer />
      </Fragment>}
    </div>
  );
}

export default App;
