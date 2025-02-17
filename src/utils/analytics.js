import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-J7CP3N9FV8");
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
