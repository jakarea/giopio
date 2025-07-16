import CDetails from "./components/CareerDetails";
import careerListData from '../../../../data/career/list';
import meta from "../../../../data/meta/career/details.json"

export const metadata = {
   ...meta
};

const CareerDetails = ({ params }) => {
  const career = careerListData.find(career => career.slug == params.careerSlug);

  if (!career) {
    return (
      <div className="w-full py-10 md:py-14 xl:py-20 xl:pb-[140px] relative z-40">
        <div className="container">
          <div className="flex justify-center items-center flex-col gap-y-3 min-h-[80vh]">
            <svg className="w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9040">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <p className="text-sm xl:text-2xl font-medium text-first">
              Career not found...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* career hero */}
      <CDetails career={career} />
    </>
  );
}

export default CareerDetails;