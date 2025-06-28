
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const ScrollAnimationSection = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Manufacturing Excellence in <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-green-600">
                Artificial Leather
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
          alt="Premier LeatherCom Manufacturing"
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default ScrollAnimationSection;
