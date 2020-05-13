import React, { useState, Fragment, useEffect } from 'react';
import Routes from './Router/Routes';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { authIsLoggedIn, authCheckCart } from './redux/actions/authActions';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const authLoading = useSelector(state => state.auth.loading);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const authId = useSelector(state => state.auth.user.id);

  useEffect(() => {
      const imgs = [
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Home/golden-retreiver-usa-landscape.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/andre-boysen-GWWHCY3K-U0-unsplash+(1).jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/jamie-street-uNNCs5kL70Q-unsplash+(2).jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/sarah-brown-ubRoy09Y9Gw-unsplash+(1).jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/marek-szturc-GokBcmdOI6I-unsplash+(1).jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/About/john-salzarulo-b1ABAIbQLOQ-unsplash+(1).jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Treats/christian-bowen-OYUzC-h1glg-unsplash.jpg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Food/photo-1585846888147-3fe14c130048.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Shop/Toys/photo-1576686271442-c10befe0b77c.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1581125919695-e481e2c98386.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588413453099-f1acf8009661.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588533588400-9e6b9daadecf.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588645143016-8648469d9af3.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588738190182-ba91e4bca6a6.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588789214771-16bc2b2b5bb9.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588833946439-df4d22cbca1e.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588849538136-93dcb143d025.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588870995846-f4ffbc3d03f5.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1588931726309-8e8c4069216f.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Random_Photos/photo-1589015745591-29c9d40e7ebb.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/SignUp/photo-1541952137766-40b2244d0a5b.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/SignIn/photo-1588833945832-a888b6a03c2d.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/Cart/photo-1505623776320-7edecf5f0771.jpeg',
          'https://skylord-depot.s3.us-east-2.amazonaws.com/OrderReview/jasser-gomez-Nxorq1UB6fg-unsplash.jpg'
    ];

    cacheImages(imgs);

    dispatch(authIsLoggedIn());
  }, [dispatch]);

  useEffect(() => {
    if (loggedIn) {
      dispatch(authCheckCart(authId));
    }
  }, [loggedIn, authId, dispatch])

  const cacheImages = srcArray => {
      srcArray.forEach(src => {
        new Promise(function(resolve, reject) {
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });

      setIsLoading(false);
  };

  const drawerClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className='App'>
        {isLoading || authLoading
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
    </Elements>
  );
}

export default App;