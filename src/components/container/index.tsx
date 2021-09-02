import React, { useEffect, useRef } from 'react';
import { useWindowSize } from '@/hooks';

interface Config {
  width: number;
  height: number;
}
interface Props {
  config?: Config;
  className: string;
}


const Container: React.FC<Props> = (props) => {
  const { config = { width: 1920 }, children, className } = props;
  const { currentWidth } = useWindowSize<number | undefined>();
  const container = useRef<any>();

  useEffect(() => {
    let absScale: number = currentWidth / config.width;

    container.current.style.transform = `scale(${absScale})`;
  }, [currentWidth, config.width]);
  return (
    <div
      ref={container}
      className={className}
      style={{
        width: `${config.width}px`,
        transformOrigin: `center top`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
