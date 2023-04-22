// import { useSearchParams } from 'react-router-dom';

// const [searchParams] = useSearchParams();

// const params = useMemo(
//   () => Object.fromEntries([...searchParams]),
//   [searchParams]
// );
// const { name, maxPrice, inStock } = params;

import { useNavigate } from 'react-router-dom';

const URL = 'https://pokeapi.co/api/v2';

const LoginForm = () => {
  return (
    <form>
      <input type="text" name="login" value="Login">
      <button type="submit">enter</button>
    </form>
  );
};

const FetchPokemon = async pokemon => {
  const res = await fetch(`${URL}/pokemon/${pokemon}`);
  console.log(res);
  return JSON.parse(res);
};

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async name => {
    const response = await FakeAPI(name);
    if (response.success) {
      navigate('/profile', { replace: true });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};
