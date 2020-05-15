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
import { imgs } from './assets/imgsArray';
import ToastBar from './components/ToastBar';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const authLoading = useSelector(state => state.auth.loading);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const authId = useSelector(state => state.auth.user.id);

  useEffect(() => {
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

  const closeSideDrawer = () => {
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
          <SideDrawer open={sideDrawerOpen} closeSideDrawer={closeSideDrawer} />
          {sideDrawerOpen
          ?
          <Fragment>
            <Backdrop backdropClickHandler={closeSideDrawer} />
          </Fragment>
          :
          null}
          <main className='main-page-content'>
            <Routes />
          </main>
          <ToastBar />
          <Footer />
        </Fragment>}
      </div>
    </Elements>
  );
}

export default App;