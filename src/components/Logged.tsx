import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '@/hooks/useAuth';

const Logged = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <h3>You are Logged!</h3>
      <Link to="/">
        <Button onClick={logOut}>Log Out</Button>
      </Link>
    </div>
  );
};

export { Logged };
