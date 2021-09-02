import * as React from 'react';
import Header from '@/components/header';
import Container from '@/components/Container';
import './index.less';

interface props {
  children: React.ReactChildren;
}

const layout: React.FunctionComponent<props> = ({ children }) => {
  return (
    <div className="wrap">
      <Container className="container">
        <Header />
        <div className="container">{children}</div>
      </Container>
    </div>
  );
};

export default layout;
