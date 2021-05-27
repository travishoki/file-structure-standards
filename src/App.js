import React from 'react';

// With index, Connected component
import ComponentA from './components/ComponentA';

// With index, Non-connected component
import ComponentB from './components/ComponentB';

// No index, Connected component
import ComponentC from './components/ComponentC/ComponentC';

// No index, Non-connected component
import ComponentD from './components/ComponentD/ComponentD';

const App = () => (
  <div className="App">
    <ComponentA />
    <ComponentB />
    <ComponentC />
    <ComponentD />
  </div>
);

export default App;
