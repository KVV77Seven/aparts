import { useContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

interface LoginFormProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const LoginFrom = ({isOpen, setIsOpen}: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context);
  return (
    
    <div className={clsx("z-10 absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 transition-all duration-300", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={() => {console.log("click")
     setIsOpen(false)}}>
      <div className='-z-10 absolute pointer-events-none top-0 bottom-0 right-0 left-0 bg-black opacity-30'></div>
        <div className='bg-white p-8 max-w-[425px] rounded-lg' onClick={e => e.stopPropagation()}>
          <h2 className='text-[5vw] md:text-2x lg:text-3xl text-center'>Login</h2>
          <div className='mt-24'>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='outline-none p-4 rounded-md md:text-base text-[3vw] lg:text-lg w-full border-[1px] border-gray-300 focus:border-gray-400 transition-all duration-300'
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='outline-none p-4 rounded-md md:text-base text-[3vw] lg:text-lg w-full mt-2 border-[1px] border-gray-300 focus:border-gray-400 transition-all duration-300'
            />
          </div>

          <div className='mt-16 flex justify-end gap-4'>
          <button 
          onClick={() => {store.login(email, password)}} 
          className='md:text-base text-[3vw] lg:text-lg px-8 py-3 bg-white border-[1px] border-gray-500 hover:border-gray-400 transition-all duration-300'>Login</button>
          <button 
          onClick={() => store.registration(email, password)} 
          className='md:text-base text-[3vw] lg:text-lg px-8 py-3 bg-white border-[1px] border-gray-500 hover:border-gray-400 transition-all duration-300'>
            Registration
          </button>
          </div>

        </div>

    </div>
  );
};
export default observer(LoginFrom);
