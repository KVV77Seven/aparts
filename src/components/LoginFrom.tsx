import { useContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const LoginFrom = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => store.login(email, password)}>Login</button>
      <button onClick={() => store.registration(email, password)}>
        Registration
      </button>
    </div>
  );
};
export default observer(LoginFrom);
