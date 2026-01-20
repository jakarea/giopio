import BlogPageContent from "./BlogPageContent";
import meta from "../../../data/meta/blog/index.json"

export const metadata = {
   ...meta
};

export default function Blog() {
  return <BlogPageContent />;
}
