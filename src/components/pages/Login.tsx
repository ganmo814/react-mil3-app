import { memo, VFC } from "react";
import SignUp from "../SignUp";
import { Footer } from "../organisms/layouts/Footer";


export const Login: VFC = memo(() => {
    return (
        <div>
            <SignUp />
            <Footer />
        </div>
    );
});