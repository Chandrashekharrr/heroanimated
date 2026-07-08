'use client';
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";



gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Home() {
  const spotlightGallery = useRef<HTMLDivElement | null>(null);
  const logo = useRef<HTMLDivElement | null>(null);
  const heroFooter = useRef<HTMLDivElement | null>(null);
  const heroInner = useRef<HTMLDivElement | null>(null);
  const heroOverlay = useRef<HTMLDivElement | null>(null);
  const btn = useRef<HTMLAnchorElement | null>(null);
  const heroh3 = useRef<HTMLHeadingElement | null>(null);




  const lerp = (from:number, to:number, t:number) => from + (to - from) * t;
  const mapRange = (value:number, rangeStart:number, rangeEnd:number) =>
    gsap.utils.clamp(0, 1, (value - rangeStart) / (rangeEnd - rangeStart));
  
  useEffect(()=>{
    if(!heroh3.current) return;

    const headlineSplit = new SplitText(heroh3.current,{
      type:"words",
      wordsClass:"words",
    })
    
    const headerfadeTarget = [...headlineSplit.words, heroh3.current!];
    gsap.set(headerfadeTarget, {opacity:0});

    const headerFadeStep = (0.6 - 0.1) / headerfadeTarget.length;
    const headerFadeDuration = headerFadeStep * 3;
  },[])


  // const MOBILE_BREAKPOINT = 1000;

  // let logoStartScale = 6;
  // gsap.matchMedia().add(`(max-width: ${MOBILE_BREAKPOINT}px)`,()=>{
  //   logoStartScale = 2;
  //   return () => (logoStartScale = 6);
  // })

  // ScrollTrigger.create({
  //   trigger: ".hero",
  //   start:"top top",
  //   end: `*=${window.innerHeight * 4}px`,
  //   pin: true,
  //   pinSpacing:false,
  //   onUpdate: (self) =>{
  //     const scrollProgress = self.progress;

  //     const galleryProgress = mapRange(scrollProgress, 0, 0.75);
  //     const galleryScale = lerp(1, 0.5, galleryProgress);
  //     gsap.set(spotlightGallery, {scale:galleryScale});
  //   }
  // })


  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {

    if (!spotlightGallery.current) return;
    
    const images = spotlightGallery.current.querySelectorAll(
      ".hero-spotlight-item img"
    );
    let logoStartScale = 6;

    const mm = gsap.matchMedia();

    mm.add("(max-width:1000px)", () => {
        logoStartScale = 2;

        return () => {
            logoStartScale = 6;
        };
    });

    const trigger = ScrollTrigger.create({

        trigger: heroRef.current,

        start: "top top",

        end: () => `+=${window.innerHeight * 4}`,

        pin: true,

        pinSpacing: false,

        onUpdate: (self) => {

            const scrollProgress = self.progress;

            const galleryProgress =
                gsap.utils.mapRange(
                    0,
                    0.75,
                    0,
                    1,
                    scrollProgress
                );

            const galleryScale =
                lerp(
                    1,
                    0.5,
                    galleryProgress
                );

            gsap.set(spotlightGallery.current, {
                scale: galleryScale,
            });


            const imageScale = lerp(1.25, 1, galleryProgress);
            gsap.set(images, {scale:imageScale});

        },

    });

    return () => {

        trigger.kill();

        mm.revert();

    };

}, {
    scope: heroRef,
});





  return (
    <>
      <div ref={logo} className="logo">

        <img src="/logo.svg" alt="" />


      </div>


      <section ref={heroRef} className="hero">

        <div ref={heroInner} className="hero-inner">
          <div ref={spotlightGallery} className="hero-spotlight-gallery">

            <div className="hero-spotlight-col">
              <div className="hero-spotlight-item">
                <img src="/img-1.jpg" alt="" />
              </div>
              <div className="hero-spotlight-item">
                <img src="/img-2.jpg" alt="" />

              </div>
              <div className="hero-spotlight-item">
                <img src="/img-3.jpg" alt="" />

              </div>
            </div>

            <div className="hero-spotlight-col">
              <div className="hero-spotlight-item">
                <img src="/img-1.jpg" alt="" />
              </div>
              <div className="hero-spotlight-item">
                <img src="/img-5.jpg" alt="" />

              </div>
              <div className="hero-spotlight-item">
                <img src="/img-6.jpg" alt="" />

              </div>
            </div>

            <div className="hero-spotlight-col">
              <div className="hero-spotlight-item">
                <img src="/img-7.jpg" alt="" />
              </div>
              <div className="hero-spotlight-item">
                <img src="/img-2.jpg" alt="" />

              </div>
              <div className="hero-spotlight-item">
                <img src="/img-3.jpg" alt="" />

              </div>
            </div>


          </div>

          <div className="hero-header">
            <h3 ref={heroh3}>
              A living catalogue of images but shouldn't exist.
              Collected frame by frame from the edge of the real.
            </h3>
            <a ref={btn} href="#" className="btn">Request Access</a>
          </div>

          <div ref={heroFooter} className="hero-footer">
            <h5>An archive of the unreal</h5>
          </div>
        </div>
        <div ref={heroOverlay} className="hero-overlay"></div>
      </section>



      <section className="studio">
        <h1>studio</h1>
      </section>
      <section className="connect">
        <h1>connect</h1>

      </section>

    </>
  )
}