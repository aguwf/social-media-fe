/** @format */

import { useMemo } from 'react';
import { useTheme } from '@emotion/react';

const useSx = (stylesElement) => {
  const theme = useTheme();
  return useMemo(() => {
    const rawClasses =
      typeof stylesElement === 'function'
        ? stylesElement(theme)
        : stylesElement;
    const prepared = {};

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      console.log(key);
      prepared[key] = value;
    });

    return prepared;
  }, [stylesElement, theme]);
};

export default useSx;
