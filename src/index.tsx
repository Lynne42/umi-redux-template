import React from 'react';
import './index.css';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

interface props {
  children: React.ReactChildren;
}

const Root: React.FunctionComponent<props> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
export default Root;
