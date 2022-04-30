import { memo, VFC } from "react";
import SignUp from "../SignUp";
import { Footer } from "../organisms/layouts/Footer";
// import { AuthProvider } from "../../AuthContext";

export const Login: VFC = memo(() => {
    return (
        <div>
            {/* <AuthProvider> */}
            <SignUp />
            {/* </AuthProvider> */}
            <Footer />
        </div>
    );
});