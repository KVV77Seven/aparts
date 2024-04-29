import { useContext, useState } from 'react';
import Container from '../components/Container';
import { Context } from '..';
import LoginFrom from '../components/LoginFrom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { store } = useContext(Context);
  return (
    <header className="pt-[40px] w-[100vw] h-[180px] bg-[url('./images/header-bg.jpg')] bg-cover bg-no-repeat">
      <Container className="flex justify-between">
        <div className="flex justify-between w-[20%]"></div>
        <div className="flex items-center">
          <div className="w-[100px] h-[100px] bg-[url('./images/logo.png')] bg-cover bg-no-repeat"></div>
          <h1 className="ml-2 text-white font-montserrat text-4xl font-semibold">
            Digital Kazakhstan
          </h1>
        </div>
        <div className="flex justify-between items-center w-[20%] z-20">
          {!store.isAuth || !store.user.isActivated ? (
            <>
              <button
                className="px-8 py-3 md:text-base text-[3vw] bg-white"
                onClick={() => setIsOpen(true)}
              >
                Login
              </button>
              <LoginFrom isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
          ) : (
            <>
              <div
                className="bg-white px-8 py-3 cursor-pointer"
                onClick={() => {
                  store.logout();
                  setIsOpen(false);
                }}
              >
                <div>Выйти</div>
              </div>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
export default Header;
