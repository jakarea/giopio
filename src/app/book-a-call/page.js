import Calendar from "../contact/components/Calendar"; 
import meta from "../../../data/meta/book-a-call.json";

export const metadata = {
    ...meta
};

export default function BookaCall() {
    return (
        <>
            {/* calendarly part */}
            <Calendar />
        </>
    );
}