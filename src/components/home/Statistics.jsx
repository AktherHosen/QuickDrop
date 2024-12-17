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
      <div ref={ref} className="grid grid-cols-3 gap-4 place-items-center">
        <div className="text-center space-y-3">
          {inView && (
            <>
              <CountUp
                start={100}
                end={120}
                duration={4}
                className="text-4xl font-bold"
              />
              <span className="text-2xl font-bold">+</span>
              <span className="block">Parcel Booked</span>
            </>
          )}
        </div>

        <div className="text-center space-y-3">
          {inView && (
            <>
              <CountUp
                start={100}
                end={120}
                duration={5}
                className="text-4xl font-bold"
              />
              <span className="text-2xl font-bold">+</span>
              <span className="block">Parcel Delivered</span>
            </>
          )}
        </div>

        <div className="text-center space-y-3">
          {inView && (
            <>
              <CountUp
                start={200}
                end={220}
                duration={6}
                className="text-4xl font-bold"
              />
              <span className="text-2xl font-bold">+</span>
              <span className="block">Total User</span>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
