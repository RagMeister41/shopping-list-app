import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet>
                <title>Shopping List App</title>
                <meta name="description" content="A simple shopping list app to manage your shopping items." />
            </Helmet>
            <ThemeProvider>
                <AuthProvider>
                    <QueryClientProvider client={queryClient}>
                        <Provider store={store}>
                            <PersistGate loading={null} persistor={persistor}>
                                <BrowserRouter>
                                    <App />
                                    <ToastContainer />
                                </BrowserRouter>
                            </PersistGate>
                        </Provider>
                    </QueryClientProvider>
                </AuthProvider>
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>
);

reportWebVitals();

