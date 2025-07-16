import ContactForm from "./components/ContactForm";
import meta from "../../../data/meta/contact.json"

export const metadata = {
    ...meta
};

export default function ContactPage() {
    return (
        <>
            {/* contact form */}
            <ContactForm />
        </>
    );
}