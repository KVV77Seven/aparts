import { ReactNode, useEffect } from 'react';
import clsx from 'clsx';

interface LoginFormProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: LoginFormProps) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'none');
  });

  return (
    <div
      className={clsx(
        'z-10 fixed flex justify-center items-center top-0 bottom-0 right-0 left-0 transition-all duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div className="-z-10 fixed pointer-events-none top-0 bottom-0 right-0 left-0 bg-black opacity-30"></div>
      <div
        className="bg-white p-8 max-w-[425px] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
