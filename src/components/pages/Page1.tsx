import { memo, VFC } from "react";
import SignUp from "../SignUp";
import { Footer } from "../organisms/layouts/Footer";
import SignUpRev from "../SignUpRev";

export const Page1: VFC = memo(() => {
    return (
        <div>
            <SignUpRev />
            <Footer />
        </div>
    );
});