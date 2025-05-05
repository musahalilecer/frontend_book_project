import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom"
import NotFound from "../components/organism/NotFound"

const HomePage = lazy(() => import("../components/page/Home"));
const AboutPage = lazy(() => import("../components/page/About"));
const ContactPage = lazy(() => import("../components/page/Contact"));
const Login = lazy(() => import("../components/template/Login"));
const Register = lazy(() => import("../components/template/Register"));
const AdminPage = lazy(() => import("../components/page/Admin"));
const BookFormTemplate = lazy(() => import("../components/template/BookFormTemplate"));
const CustomerFormTemplate = lazy(() => import("../components/template/CustomerFormTemplate"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFound/>
    },

    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <NotFound />
    },

    {
        path: "contact",
        element: <ContactPage />,
        errorElement: <NotFound />
    },

    {
        path: "/login",
        element: <Login />,
        errorElement: <NotFound />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <NotFound />
    },

    // {
    //     element: <PrivateRoute />,
    //     children: [
    //         {
    //             path: "/admin",
    //             element: <AdminPage />,
    //         }
    //     ]
    // },
    ,
    {
        path: "/admin",
        element: <Admin />,
        errorElement: <NotFound />
    },
    {
        path: "/admin/book_form",
        element: <BookFormTemplate />,
        errorElement: <NotFound />
    },
    {
        path: "/customer_form",
        element: <CustomerFormTemplate />,
        errorElement: <NotFound />
    },

    {
        path: "*",
        element: <NotFound />
    }
]);