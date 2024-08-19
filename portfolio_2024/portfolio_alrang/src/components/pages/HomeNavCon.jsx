import { createContext } from 'react';

const HomeNavCon = createContext({
  isHome: true, 
  setIsHome: () => {}, 
});

export default HomeNavCon;