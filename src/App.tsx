import React, { useContext, useEffect } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import Main from './pages/Main';

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    store.checkAuth();
  }, []);
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default observer(App);
