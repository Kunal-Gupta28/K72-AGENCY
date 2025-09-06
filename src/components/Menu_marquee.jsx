import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Menu_marquee = (props) => {
  const [marquee, setMarquee] = useState(false);
  const marqueeRef = useRef();

  useGSAP(() => {
    if (marquee) {
      gsap.to(marqueeRef.current, {
        x: "-50%",
        repeat: -1,
        duration: 5,
        ease: "linear",
      });
    } else {
      gsap.killTweensOf(marqueeRef.current);
      gsap.set(marqueeRef.current, { x: 0 });
    }
  }, [marquee]);

  // Content to duplicate inside the scrolling marquee
  const MarqueeContent = () => (
    <>
      {props.marquee}
      <div
        className="mx-[5vw] rounded-full"
        style={{
          backgroundImage: `url(/image/${props.image1}.jpg)`,
          width: "15vw",
          height: "80%",
          alignSelf: "center",
          backgroundSize: "cover",
          display: "inline-block",
        }}
      />
      {props.marquee}
      <div
        className="mx-[5vw] rounded-full"
        style={{
          backgroundImage: `url(/image/${props.image2}.jpg)`,
          width: "15vw",
          height: "80%",
          alignSelf: "center",
          backgroundSize: "cover",
          display: "inline-block",
        }}
      />
    </>
  );

  return (
    <div
      onMouseEnter={() => setMarquee(true)}
      onMouseLeave={() => setMarquee(false)}
      className="h-[25%] border-t border-b cursor-pointer overflow-hidden"
      style={{ fontWeight: 500 }}
    >
      {!marquee && props.page}
      {marquee && (
        <div className="h-full w-full bg-[#d3fd50] text-black flex relative">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu_marquee;
