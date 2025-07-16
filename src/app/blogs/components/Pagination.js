import Image from "next/image";

const ArrowButton = ({ direction, onClick, canClick }) => {
    const isNext = direction === "next";
    const arrowSrc = isNext
        ? ["/assets/images/right-arrow.svg", "/assets/images/right-arrow-w.svg"]
        : ["/assets/images/arrow-left.svg", "/assets/images/arrow-left-w.svg"];

    return (
        <button
            onClick={canClick ? onClick : undefined}
            className={`group anim ${canClick ? "" : "cursor-auto"}`}
            type="button"
        > 
            <Image
                src={arrowSrc[0]}
                alt={direction}
                width={40}
                height={25}
                className={`anim ltd ${canClick ? "group-hover:opacity-20" : "opacity-20"}`}
            />
            <Image
                src={arrowSrc[1]}
                alt={direction}
                width={40}
                height={25}
                className={`anim dtl ${canClick ? "group-hover:opacity-20" : "opacity-20"}`}
            />
        </button>
    );
};

const Pagination = ({ canGoPrev, canGoNext, prevPage, nextPage }) => {
    return (
        <div className="w-full flex justify-center items-center gap-x-5 mt-8 md:mt-12 lg:mt-[60px] xl:mt-[72px]">
            <ArrowButton direction="prev" onClick={prevPage} canClick={canGoPrev} />
            <ArrowButton direction="next" onClick={nextPage} canClick={canGoNext} />
        </div>
    );
};

export default Pagination;  