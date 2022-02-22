import {Container} from "@mantine/core";
import { lazy, Suspense } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastProvider} from "react-toast-notifications";

const RootPage = lazy(() => import('./pages/root/root'))
const HomePage = lazy(() => import('./pages/home/home.jsx'))
const ContactsPage = lazy(() => import('./pages/contacts/contacts'))
const AccountPage = lazy(() => import('./pages/account/account'))
const InvoicesPage = lazy(() => import('./pages/invoices/invoices'))
const OrganizationPage = lazy(() => import('./pages/organisation/organization'))
const ErrorPage = lazy(() => import('./pages/error/ErrorPage'))

const routes = [
    {
        path: '/',
        Component: () => <RootPage/> 
    },
    {
        path: '/contacts',
        Component: () => <ContactsPage/> 
    },
    {
        path: '/account',
        Component: () => <AccountPage/> 
    },
    {
        path: '/invoices',
        Component: () => <InvoicesPage/> 
    },
    {
        path: '/organization',
        Component: () => <OrganizationPage/> 
    },
    {
        path: '/error/:authid',
        Component: () => <ErrorPage/> 
    },
    {
        path: '/home',
        Component: () => <HomePage/> 
    }
]

export default function App() {
    return (
        <>
            <ToastProvider>
                <Container>
                    <Suspense fallback={null}>
                        <BrowserRouter>
                            <Routes>
                                {routes.map((el, index) => 
                                    <Route 
                                        id = {index} 
                                        path = {el.path} 
                                        element = {el.Component()}
                                     />)
                                }        
                            </Routes>
                        </BrowserRouter>
                    </Suspense>
                </Container>
            </ToastProvider>
        </>
    );
}
