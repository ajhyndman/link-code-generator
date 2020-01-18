import React, { useEffect, useState } from 'react';
import { MdRefresh } from 'react-icons/md';

import { generateCode } from './utils/generateCode';
import { isTouchscreen } from './utils/isTouchscreen';
import { pageview } from './utils/pageview';
import { useBackground } from './utils/useBackground';

const WHITE = 'white';

const IS_TOUCHSCREEN = isTouchscreen();

const Root: React.FC = ({ children }) => (
  <div
    style={{
      alignItems: 'center',
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

  const handleDocumentClick = () => {
    if (code == null) {
      handleRefresh();
    }
  };

  // Log pageview to Google Analytics
  useEffect(pageview, []);

  // Set a random background color
  useBackground();

  // mount document event listeners
  useEffect(() => {
    if (IS_TOUCHSCREEN) {
      document.addEventListener('click', handleDocumentClick);
      return () => document.removeEventListener('click', handleDocumentClick);
    } else {
      document.addEventListener('keypress', handleRefresh);
      return () => document.removeEventListener('keypress', handleRefresh);
    }
  }, [handleRefresh, handleDocumentClick]);

  return (
    <Root>
      {code ? (
        <>
          <span style={{ fontSize: 128 }}>{code}</span>
          {IS_TOUCHSCREEN && (
            <div role="button" tabIndex={0}>
              <MdRefresh color={WHITE} size={48} onClick={handleRefresh} />
            </div>
          )}
        </>
      ) : (
        <span style={{ fontSize: 64 }}>
          {IS_TOUCHSCREEN ? 'Tap Here' : 'Press Spacebar'}
        </span>
      )}
    </Root>
  );
};

export default App;
