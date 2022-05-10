import { Detail } from "../components/pages/Detail";
import { MessageReceiver } from "../components/pages/MessageReceiver";
import { MyPageSupplier } from "../components/pages/MyPageSupplier";

export const MyPageSupplierRoutes = [
    {   
        path: "/",
        exact: true,
        children: <MyPageSupplier />
    },
    {
        path: "/messagereceiver",  
        exact: false,    
        children: <MessageReceiver />
    },
    {
        path: "/detail/:uid",  
        exact: false,    
        children: <Detail />
    },

];