import React from 'react';
import './styles/styles.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from 'src/pages/Home';
import AppHeader from 'src/layout/AppHeader';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from './hooks/useAppSelector';
import { Loading } from './components/Loading';

function App() {
  const loading = useAppSelector((state) => state.viewState.loading);

  return (
    <div className='App'>
      <Router>
        <AppHeader />
        <div className='body-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          {loading && <Loading />}
        </div>
      </Router>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
