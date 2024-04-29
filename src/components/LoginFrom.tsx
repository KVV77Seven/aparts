import { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import Modal from './Modal';

interface LoginFormProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const LoginFrom = ({ isOpen, setIsOpen }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (store.isAuth) {
      setEmail(store.user.email);
    }
  }, [store.isAuth]);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'none');
  });
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2 className="text-[5vw] md:text-2x lg:text-3xl text-center">Login</h2>
      <div className="mt-24">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none p-4 rounded-md md:text-base text-[3vw] lg:text-lg w-full border-[1px] border-gray-300 focus:border-gray-400 transition-all duration-300"
        />
        {store.isAuth && !store.user.isActivated ? (
          <div className="text-red-500 text-sm mt-2">
            Активируйте аккаунт по почте
          </div>
        ) : (
          ''
        )}
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none p-4 rounded-md md:text-base text-[3vw] lg:text-lg w-full mt-2 border-[1px] border-gray-300 focus:border-gray-400 transition-all duration-300"
        />
        <div className="mt-2 flex gap-4">
          <input
            type="checkbox"
            checked={passwordVisible}
            onChange={() => setPasswordVisible(!passwordVisible)}
          />
          <span>Показывать пароль</span>
        </div>
        {store.error && (
          <div className="mt-2 text-sm text-red-500">{store.error}</div>
        )}
      </div>

      <div className="mt-16 flex justify-end gap-4">
        <button
          onClick={() => {
            store.login(email, password);
          }}
          className="md:text-base text-[3vw] lg:text-lg px-8 py-3 bg-white border-[1px] border-gray-500 hover:border-gray-400 transition-all duration-300"
        >
          Login
        </button>
        <button
          onClick={() => store.registration(email, password)}
          className="md:text-base text-[3vw] lg:text-lg px-8 py-3 bg-white border-[1px] border-gray-500 hover:border-gray-400 transition-all duration-300"
        >
          Registration
        </button>
      </div>
    </Modal>
  );
};
export default observer(LoginFrom);
