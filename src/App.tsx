import React, { useEffect, useState } from 'react';

import { generateCode } from './utils/generateCode';
import { useTitle } from './utils/useTitle';

const App = () => {
  useTitle('Generate a random link code for Pokemon Sword / Shield');

  const [code, setCode] = useState<string | undefined>(undefined);

  const handleRefresh = () => {
    const nextCode = generateCode();
    setCode(nextCode);
  };

  useEffect(() => {
    document.addEventListener('keypress', handleRefresh);
    return () => document.removeEventListener('keypress', handleRefresh);
  });

  return <div>{code || 'Press Spacebar'}</div>;
};

export default App;
