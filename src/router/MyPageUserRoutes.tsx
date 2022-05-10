import { MessageSender } from "../components/pages/MessageSender";
import { MyPageUser } from "../components/pages/MyPageUser";
import { SearchSup } from "../components/pages/SearchSup";

export const MyPageUserRoutes = [
    {   
        path: "/",
        exact: true,
        children: <MyPageUser />
    },
    {
        path: "/messagesender",  
        exact: false,    
        children: <MessageSender />
    },
    {
        path: "/searchsup",  
        exact: false,    
        children: <SearchSup />
    },

];