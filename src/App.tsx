import React, { useContext, useEffect } from 'react';
import LoginFrom from './components/LoginFrom';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    store.checkAuth();
  }, []);
  return (
    <div className="App">
      <h1>{store.isAuth ? store.user.email : 'please auth'}</h1>
      <LoginFrom />
    </div>
  );
}

export default observer(App);
