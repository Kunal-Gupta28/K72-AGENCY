import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Responsibility from "../components/Responsibility";
import Full_screen_images from "../components/Full_screen_images";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import PinImage_with_marquee from "../components/PinImage_with_marquee";

const Agency = () => {
  const [logoColor,setLogoColor] = useState('black')
  const cardRef = useRef("null");
  const bgChangerRef = useRef("null");

  // images
  const allImageNames = [
    "card_1.jpg",
    "card_2.jpg",
    "card_3.jpg",
    "card_4.jpg",
    "card_5.jpg",
    "card_6.jpg",
    "card_7.jpg",
    "card_8.jpg",
    "card_9.jpg",
    "card_10.jpg",
    "card_11.jpg",
    "card_12.jpg",
    "card_13.jpg",
    "card_15.jpg",
    "card_14.jpg",
  ];

  // Responsibility data
  const people = [
    { post: "Account Director", post_holder: "ISABELLE BEAUCHEMIN" },
    { post: "Associate Creative Director", post_holder: "HUGO JOSEPH" },
    { post: "Graphic Designer", post_holder: "OLIVIER DUCLOS" },
    { post: "Associate Creative Director", post_holder: "JOËL LETARTE" },
    { post: "Creative Director", post_holder: "CHANTAL GOBEIL" },
    {
      post: "Conseillère production et opération",
      post_holder: "MYLÈNE ST-ARNEAULT",
    },
    { post: "Associate Creative Director", post_holder: "SÉBASTIEN ROY" },
    { post: "Account executive", post_holder: "SOPHIE AUGER" },
    { post: "Business Lead", post_holder: "CARL GODBOUT" },
    { post: "Copywriter", post_holder: "CAMILLE BRIÈRE" },
    { post: "Account Manager", post_holder: "CLAIRE ROBERT" },
    { post: "Account Supervisor", post_holder: "ARNAUD DOYON" },
    { post: "EVP & Managing Director", post_holder: "PIERRE-LUC PAIEMENT" },
    { post: "Art Director", post_holder: "MÉLANIE LAVIOLETTE" },
    { post: "Director of Strategy", post_holder: "MICHÈLE RIENDEAU" },
    { post: "Art Director", post_holder: "ALEX SAUVAGEAU" },
    { post: "Account Manager", post_holder: "PHILIPPE PERREAULT" },
    { post: "Strategist", post_holder: "BÉATRICE ROUSSIN" },
    {
      post: "Planificateur stratégique principal",
      post_holder: "OLIVIER ROEYAERTS",
    },
  ];

  // Full screen image
  const screenImages = [
    { text1: "LamaJeure", text2: "LamaJeure", image: "/image/agency_cat.jpg" },
    {
      text1: "GardaWorld",
      text2: "Crisis24",
      image: "/image/agency_crisis24.jpg",
    },
    { text1: "Lassonde", text2: "Fruité", image: "/image/agency_mouth.jpg" },
  ];

  // pulgin scrolltrigger
  gsap.registerPlugin(ScrollTrigger);

  // gsap for fix card image changing on scrolling
  useGSAP(() => {

    const Main = document.querySelector("main")

    // image change on scrolling animation
    gsap.to(Main, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 25%",
        end: "250% top",
        markers:true,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          let imageIndex = Math.floor(self.progress * allImageNames.length);
          if (imageIndex >= allImageNames.length) {
            imageIndex = allImageNames.length - 1;
          }
          const img = cardRef.current.querySelector("img");
          if (img) {
            img.src = `/image/${allImageNames[imageIndex]}`;
          }
        },
      },
    });

    // background change animation with smooth transition both ways
    gsap.to(Main, {
      backgroundColor: "black",
      color: "white",
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
      trigger: bgChangerRef.current,
      start: "top 7%",
      toggleActions: "play reverse play reverse",
      onEnter: () => setLogoColor("white"),
      onLeaveBack: () => setLogoColor("black"),
      }
    });

  });


  return (
    <main className="relative pt-1"> 
      {/* fixed card for images display */}
      <div
        ref={cardRef}
        className='h-[19.8vw] w-[15vw] rounded-3xl absolute top-[2.67%] left-[30.2%] -z-10 bg-no-repeat bg-[url("/image/card_30.jpg")] bg-contain overflow-hidden'
      >
        <img src="/image/card_1.jpg" />
      </div>

      {/* navbar */}
      <section className="w-full fixed top-0 left-0 z-40">
        <Navbar logo_color={logoColor} />

        {/* moveable nav */}
        <div className="flex text-white text-[1.2vw] fixed top-0 right-0 z-30">
          <div className="h-[3vw] w-[18vw] ps-3 bg-black flex items-end">
            <p>WORK (16)</p>
          </div>
          <div className="h-24 w-[30vw] ps-3 bg-black flex items-end">
            <p>AGENCY</p>
          </div>
          <div className="h-[7.2vw] w-72 ps-3 bg-black flex items-end">
            <p>MENU</p>
          </div>
        </div>
      </section>

      {/* heading */}
      <section className="mt-[56vh] mb-[2vw]">
        {/* herosection text */}
        <div className="text-[20vw] leading-[17vw] text-center">
          <h1 style={{ fontWeight: 500 }}>SEVEN7Y</h1>
          <h1 className="mt-[0.5vw]" style={{ fontWeight: 500 }}>
            TWO
          </h1>
        </div>

        {/* left para */}
        <p
          className="w-[58vw] ms-[41vw] text-[3vw] leading-[3.12vw] indent-[27%] pe-[1.2vw]"
          style={{ fontWeight: 300 }}
        >
          We’re inquisitive and open-minded, and we make sure creativity crowds
          out ego from every corner. A brand is a living thing, with values, a
          personality and a story. If we ignore that, we can achieve short-term
          success, but not influence that goes the distance. We bring that
          perspective to every brand story we help tell.
        </p>

        {/* text in tabular format */}
        <div className=" w-full px-[8%] mt-[15vw] text-[1vw]">
          {/* row 1 */}
          <div className="flex justify-evenly">
            <div className="w-[30%] px-5">Expertise</div>
            <div className="w-[30%] px-5">
              <ul className="leading-[1.2vw]">
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </ul>
            </div>
            <div className="w-[30%]"></div>
          </div>

          {/* row 2 */}
          <div
            ref={bgChangerRef}
            className="flex justify-evenly mt-[8vw]"
            style={{ fontWeight: 500 }}
          >
            <p className="w-[30%] px-5">
              Our Work_ Born in curiosity, raised by dedication and fed with a
              steady diet of creativity.
            </p>
            <p className="w-[30%] px-5">
              Our Creative_ Simmering in an environment where talent can come to
              a full boil. Encouraged to become the best versions of ourselves.
            </p>
            <p className="w-[30%] px-5">
              Our Culture_ We’re open to each other. Period. The team works
              together to create a space that makes us proud.
            </p>
          </div>
        </div>
      </section>

      {/* pin image with marquee */}
      <section className="h-[100vh] w-full mt-[30vw]">
        <PinImage_with_marquee image="card_29" />
        <PinImage_with_marquee image="card_24" />
      </section>

      <section>
        {people.map((person, index) => (
          <Responsibility
            key={index}
            post={person.post}
            post_holder={person.post_holder}
          />
        ))}
      </section>

      {/* Full screen image */}
      <section>
        {screenImages.map((item, index) => (
          <Full_screen_images
            key={index}
            text1={item.text1}
            text2={item.text2}
            image={item.image}
          />
        ))}
      </section>

      {/* footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Agency;
