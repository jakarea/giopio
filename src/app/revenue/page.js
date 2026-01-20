import DataDontLie from "../shopify-component/DataDontLie";
import RevenueForm from "./RevenueForm";
import meta from "../../../data/meta/home.json"

export const metadata = {
  ...meta
};

export default function Revenue() {
  return (
    <>
      <RevenueForm />
      <DataDontLie />
    </>
  );
}
