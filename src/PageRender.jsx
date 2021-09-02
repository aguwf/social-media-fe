/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './components/NotFound';
import * as Pages from './pages';

const generatePage = (pageName) => {
  try {
    const component = () => Pages[pageName];

    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};

function PageRender() {
  const { page, id } = useParams();
  let pageName = id ? `${page}/[id]` : `${page}`;

  console.log(pageName);

  if (Pages[`${page}`]) {
    return generatePage(`${page}`);
  } else {
    return <NotFound />;
  }
}

export default PageRender;
