import { Admin } from "../components/pages/Admin";
import { Detail } from "../components/pages/Detail";

export const AdminRoutes = [
    {   
        path: "/",
        exact: true,
        children: <Admin />
    },
    {
        path: "/detail/:uid",  
        exact: false,    
        children: <Detail />
    },

];