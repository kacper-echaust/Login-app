import type { Login, User, Register } from '@/types';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));

    const users2 = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as User),
      id: doc.id,
    }));
    setUsers(users2);
  };
  const loginUser = (data: Login) => {
    const existingUser = users?.find(
      (user) =>
        user.password === data.password &&
        user.username.toLowerCase() === data.username.toLowerCase(),
    );
    if (existingUser) {
      localStorage.setItem('IDToken', existingUser.id);
      setIsAuth(true);
      navigate('/logged');
      setError('');
      return;
    } else {
      setIsAuth(false);
      setError('Incorrect username or password');
      return;
    }
  };
  const registerUser = async (data: Register) => {
    const checkUsername = users?.find(
      (user) => user.username.toLowerCase() === data.username.toLowerCase(),
    );
    if (checkUsername) {
      setError('Username is already exist');
      return;
    }
    await addDoc(collection(db, 'users'), {
      ...data,
    });
    await getUsers();
    navigate('/login');
  };
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('IDToken');
  };
  return { loginUser, registerUser, error, logOut };
};

export { useAuth };
