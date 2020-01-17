import ReactGA from 'react-ga';

const PROPERTY_ID = 'UA-97182834-2';

export const pageview = () => {
  if (window.location.hostname !== 'localhost') {
    ReactGA.initialize(PROPERTY_ID);
    ReactGA.pageview(window.location.pathname);
  }
};
