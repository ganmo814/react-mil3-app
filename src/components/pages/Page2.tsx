import { memo, VFC } from "react";
import { Footer } from "../organisms/layouts/Footer";
import InquiryForm from "../InquiryForm";

export const Page2: VFC = memo(() => {
    return (
        <div>
            <InquiryForm />
            <Footer />
        </div>

    );
});