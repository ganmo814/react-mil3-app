import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page1 } from "../components/pages/Page1";
import { Page2 } from "../components/pages/Page2";

export const homeRoutes = [
    {   
        path: "/",
        exact: true,
        children: <Home />
    },
    {
        path: "/login",  
        exact: false,    
        children: <Login />
    },
    {
        path: "/page1",
        exact: false,
        children: <Page1 />
    },
    {
        path: "/page2",
        exact: false,
        children: <Page2 />
    },
];