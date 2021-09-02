import React, { useEffect } from 'react';
import './index.less';
import Container from '@/components/Container';

import { useAppSelector, useAppDispatch } from '@/hooks/index';

import {
  updateInputValue,
  selectInputValue,
  submitAsync,
} from './index.slice';

interface props {}

const Login: React.FunctionComponent<props> = () => {
  const value = useAppSelector(selectInputValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(submitAsync())
  }, [])

  return (
    <div className="wrap">
      <Container className="container">
        <input onChange={(e) => dispatch(updateInputValue(e.target.value))}/>
        <div>{value}</div>
      </Container>
    </div>
  );
};
export default Login;
