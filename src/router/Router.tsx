import { memo, VFC } from "react"
import { Route, Routes } from "react-router-dom"

import { Home } from "../components/pages/Home"
import { Page1 } from "../components/pages/Page1"
import { Page2 } from "../components/pages/Page2"
import { Login } from "../components/pages/Login";
import { MyPage } from "../components/pages/MyPage";
import { Admin } from "../components/pages/Admin";
import { SearchSup } from "../components/pages/SearchSup"

export const Router: VFC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/page1" element={<Page1 />}></Route>
            <Route path="/page2" element={<Page2 />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/searchsup" element={<SearchSup />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
        </Routes>
    );
});