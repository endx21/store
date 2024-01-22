import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import NewPassword from '@pages/NewPassword'
import RecoveryPassword from '@pages/PasswordRecovery';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';
import NewAccount from '@pages/NewAccount';
import MyAccount from '@pages/MyAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import SendEmail from '@pages/SendEmail';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

const App = () => {
    const InitialState = useInitialState(AppContext);
    return(
    <AppContext.Provider value={InitialState}>
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/new-account" element={<NewAccount />}/>
                <Route exact path="/new-password" element={<NewPassword />}/>
                <Route exact path="/my-account" element={<MyAccount />}/>
                <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
                <Route exact path="/send-email" element={<SendEmail />}/>
                <Route exact path="/orders" element={<Orders />}/>
                <Route exact path="/checkout" element={<Checkout />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
    </AppContext.Provider>
    );
}

export default App;
