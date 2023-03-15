import { async } from '@firebase/util';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { getUser, setUser, toggleLoading } from './features/auth/authSlice';
import auth from './firebase/firebase.config';
import routes from './routes/routes';

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    const run = async () => {
      setLoading(true)
      try {

        onAuthStateChanged(auth, (user) => {
          console.log(user)
          if (user) {
            dispatch(setUser(user.email));
            dispatch(getUser(user.email));
          } else {
            dispatch(toggleLoading())
          }
        })
      }
      catch (e) {

      }
      finally {
        setLoading(false);
      }
    }
    run();

  }, [dispatch])


  return (
    <>
      {!loading && <RouterProvider router={routes} />}
    </>
  );
}

export default App;
