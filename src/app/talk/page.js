import Calendar from "../contact/components/Calendar";
import meta from "../../../data/meta/contact.json"

export const metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    author: meta.author,
    canonical: meta.canonical,
    openGraph: {
        title: meta.openGraph.title,
        locale: meta.openGraph.locale,
        type: meta.openGraph.type,
        description: meta.openGraph.description,
        url: meta.openGraph.url,
        site_name: meta.openGraph.site_name,
        images: [
            {
                url: meta.openGraph.images['url'],
                width: meta.openGraph.images['width'],
                height: meta.openGraph.images['height'],
                alt: meta.openGraph.images['alt'],
                type: meta.openGraph.images['type'],
            },
        ],
    },
    twitter: {
        card: meta.twitter.card,
        title: meta.twitter.title,
        description: meta.twitter.description,
        image: meta.twitter.image,
        site: meta.twitter.site,
        creator: meta.twitter.creator,
    },
};

export default function BookaCall() {
    return (
        <>
            {/* calendarly part */}
            <Calendar />
        </>
    );
}