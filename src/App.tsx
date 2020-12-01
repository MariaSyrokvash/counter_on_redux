import React from 'react';
import './App.css';
import SettingsContainer from './components/Settings/SettingsContainer';
import CounterContainer from './components/Counter/CounterContainer';

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <div className='app__settings'>
        <SettingsContainer/>
      </div>

      <div className='app__counter'>
        <CounterContainer />
      </div>
    </div>
  );
}

export default App;
