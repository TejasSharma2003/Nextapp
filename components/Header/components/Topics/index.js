import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';

const Topics = ({ tags, className }) => {
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tagsWrapperRef = useRef();

  const onShiftToLeft = () => {
    if (!showRightArrow) setShowRightArrow(true);

    if (tagsWrapperRef?.current) {
      tagsWrapperRef.current.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    }
  };
  const onShiftToRight = () => {
    if (tagsWrapperRef.current.scrollLeft <= 100) {
      setShowRightArrow(false);
    }

    if (tagsWrapperRef?.current) {
      tagsWrapperRef.current.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`relative ml-10 flex items-center ${className || ''}`}>
      {showRightArrow && (
        <span className="bg-white-gradient-l-r absolute bottom-0 left-0 top-2/4 block h-[90%] -translate-y-2/4 rounded-r-full bg-gradient-to-l from-black-100/[.9] to-black-300 pr-[20px] ">
          <IoIosArrowForward
            className="h-full -scale-x-[1] cursor-pointer text-3xl"
            onClick={onShiftToRight}
          />
        </span>
      )}
      <div ref={tagsWrapperRef} className=" overflow-hidden">
        <div className="flex items-center text-white-100">
          {tags.map((tag, idx) => {
            return (
              <Link href={`/tags/${tag.attributes.tagName}`} key={idx}>
                <span
                  key={idx}
                  className="custom-item ml-5 inline-block cursor-pointer whitespace-nowrap rounded-full bg-black-100 px-5 py-4 text-2xl text-white-100  transition-colors hover:bg-white-100 hover:text-black-100 "
                >
                  {tag.attributes.tagName}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <span className=" absolute bottom-0 right-0 top-2/4 block h-[90%] -translate-y-2/4 rounded-l-full bg-gradient-to-r from-black-100/[.9] to-black-300 pl-[20px] pr-10 ">
        <IoIosArrowForward
          className="h-full cursor-pointer text-3xl"
          onClick={onShiftToLeft}
        />
      </span>
    </div>
  );
};

export default Topics;
