import React from "react";
import Container from "../common/Container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Container>
      <div
        ref={ref}
        className="bg-primary py-6 text-white bg-opacity-100 rounded-md"
      >
        <div className="grid grid-cols-3 place-items-center gap-4">
          <div className="text-start space-y-3">
            {inView && (
              <>
                <CountUp
                  start={100}
                  end={120}
                  duration={4}
                  className="text-3xl md:text-4xl font-bold"
                />
                <span className="text-2xl font-bold">+</span>
                <span className="block text-sm lg:text-[1rem] font-semibold">
                  Booked
                </span>
              </>
            )}
          </div>

          <div className="text-start space-y-3">
            {inView && (
              <>
                <CountUp
                  start={100}
                  end={115}
                  duration={5}
                  className="text-3xl md:text-4xl font-bold"
                />
                <span className="text-2xl font-bold">+</span>
                <span className="block text-sm lg:text-[1rem] font-semibold">
                  Delivered
                </span>
              </>
            )}
          </div>

          <div className="text-start space-y-3">
            {inView && (
              <>
                <CountUp
                  start={200}
                  end={220}
                  duration={6}
                  className="text-3xl md:text-4xl font-bold"
                />
                <span className="text-2xl font-bold">+</span>
                <span className="block text-sm lg:text-[1rem] font-semibold">
                  Users
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
