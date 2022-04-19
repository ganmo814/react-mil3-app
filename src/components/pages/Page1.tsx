import { memo, VFC } from "react";
import { Footer } from "../organisms/layouts/Footer";

export const Page1: VFC = memo(() => {
    return (
        <div>
            <h1>Page1ページです</h1>
            <Footer />
        </div>

    );
});