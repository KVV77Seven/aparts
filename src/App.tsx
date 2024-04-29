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
    <div className="App overflow-hidden">
      <Main></Main>
      <footer className="p-4 mt-8 bg-slate-100">DIGITALKZ</footer>
    </div>
  );
}

export default observer(App);
