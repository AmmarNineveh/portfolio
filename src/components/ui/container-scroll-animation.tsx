"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 1] : [1.05, 1];
  };

  const rotate = useTransform(scrollY, [0, 800], [15, 0]);
  const scale = useTransform(scrollY, [0, 800], scaleDimensions());
  const translate = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <div className="flex flex-col items-center justify-center relative p-2 md:p-6 pb-0">
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: { translate: any; titleComponent: string | React.ReactNode }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="w-full mx-auto"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformOrigin: "top center"
      }}
      className="w-full h-auto z-10 relative"
    >
      <div className="w-full h-auto">
        {children}
      </div>
    </motion.div>
  );
};
