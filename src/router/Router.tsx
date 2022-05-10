import { memo, VFC } from "react"
import { Route, Routes } from "react-router-dom"

import { Home } from "../components/pages/Home"
import { Page1 } from "../components/pages/Page1"
import { Page2 } from "../components/pages/Page2"
import { Login } from "../components/pages/Login";
import { MyPageUser } from "../components/pages/MyPageUser";
import { MyPageSupplier } from "../components/pages/MyPageSupplier"
import { Admin } from "../components/pages/Admin";
import { SearchSup } from "../components/pages/SearchSup"
import { MessageSender } from "../components/pages/MessageSender"
import { MessageReceiver } from "../components/pages/MessageReceiver"
import { Detail } from "../components/pages/Detail"
import { Page404 } from "../components/pages/Page404"

export const Router: VFC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="login" element={<Login />} />
            <Route path="mypage_user" element={<MyPageUser />} />
            <Route path="mypage_user/searchsup" element={<SearchSup />} />
            <Route path="mypage_user/messagesender/:uid" element={<MessageSender />} />
            <Route path="mypage_supplier" element={<MyPageSupplier />} />
            <Route path="mypage_supplier/messagereceiver" element={<MessageReceiver />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/detail/:uid" element={<Detail />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
});