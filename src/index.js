import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => alert('🌻 If you are HAPPY and you know it...clap your hands')} />
  </div>,
  document.getElementById('root')
);