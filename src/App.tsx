import React, { useEffect, useState } from 'react';

import { generateCode } from './utils/generateCode';
import { useTitle } from './utils/useTitle';

const BLUE = '#04A0ED';
const RED = '#E60C5B';
const WHITE = 'white';

const BACKGROUND = Math.random() < 0.5 ? RED : BLUE;

const Root: React.FC = ({ children }) => (
  <div
    style={{
      alignItems: 'center',
      background: BACKGROUND,
      color: WHITE,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

const App = () => {
  const [code, setCode] = useState<string | undefined>(undefined);

  const handleRefresh = () => {
    const nextCode = generateCode();
    setCode(nextCode);
  };

  useEffect(() => {
    document.addEventListener('keypress', handleRefresh);
    return () => document.removeEventListener('keypress', handleRefresh);
  });

  return (
    <Root>
      {code ? (
        <span style={{ fontSize: 128 }}>{code}</span>
      ) : (
        <span style={{ fontSize: 64 }}>Press Spacebar</span>
      )}
    </Root>
  );
};

export default App;
