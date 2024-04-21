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
    <main>
      <header className="pt-[40px] w-[100vw] h-[1000px] bg-[url('./images/header-bg.jpg')] bg-cover bg-no-repeat">
        <Container className="flex justify-between">
          <div className="flex justify-between w-[20%]">

          </div>
          <div className="flex items-center">
            <div className="w-[100px] h-[100px] bg-[url('./images/logo.png')] bg-cover bg-no-repeat"></div>
            <h1 className="ml-2 text-white font-montserrat text-4xl font-semibold">Digital Kazakhstan</h1>
          </div>
          <div className="flex justify-between items-center w-[20%] z-20">
            <button type="button" className="w-[48%] h-[50%] border-2 border-gra rounded-md"></button>
            <button type="button" className="w-[48%] h-[50%] border-2 border-red-100 rounded-md"></button>
          </div>
        </Container>
      </header>
    </main>
  );
}

export default observer(App);
