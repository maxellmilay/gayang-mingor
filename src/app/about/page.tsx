import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="aspect-[1000/384] md:aspect-[1440/384] w-full relative">
        <Image
          fill
          alt="header"
          src="/images/about-header.png"
          className="object-cover"
          unoptimized={true}
        />
      </div>
      <div className="px-8 sm:px-16 md:px-28 lg:px-36 py-8 md:py-14 lg:py-20 font-gotham text-justify">
        <section>
          <h2 className="font-bold text-base sm:text-xl md:text-2xl lg:text-5xl">
            Who We Are
          </h2>
          <p className="text-sm md:text-lg lg:text-3xl my-2 sm:my-4 md:my-6 lg:my-8">
            We are Gayang Mingor, the Batch 2022 of Philippine Science High
            School - Central Visayas Campus - 90 members of the premiere high
            school in Asia.
          </p>
          <div className="w-full aspect-[1157/572] relative">
            <Image fill alt="Frozen Musical - 2018" src="/images/frozen.png" />
          </div>
          <p className="text-mingor-blue-200 font-light text-xs md:text-base lg:text-xl mt-3">
            Frozen Musical - 2018
          </p>
        </section>
        <section className="my-16 sm:my-20 md:my-28 lg:my-40">
          <h1 className="font-bitcheese text-center text-mingor-blue-200 font-normal text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            Gayang Mingor?
          </h1>
          <p className="my-8 sm:my-10 md:my-14 lg:my-16 text-sm md:text-lg lg:text-3xl">
            While believed to represent “Eagle Warrior”, its precise origin and
            meaning remain a mystery. The closest approximation is the Kalinga
            warrior class known as the “Mingor”.
            <br />
            <br />
            Regardless of its direct translation and meaning, “Gayang Mingor”
            resonates deeply within us as a symbol of strength, resilience, and
            fellowship - qualities that have become integral to our batch
            identity, braving through dire circumstances like the pandemic,
            while maintaining our harmony as a batch.
            <br />
            <br />
            United by the spirit of Gayang Mingor, we forge ahead, embracing the
            challenges and opportunities that lie ahead, confident that our bond
            and shared values will guide us to great achievements in the years
            to come.
          </p>
          <div className="aspect-[1148/486] w-full relative">
            <Image
              fill
              alt="Buwan ng Wika Celebration - 2018"
              className="object-fit"
              src="/images/buwan-wika.png"
            />
          </div>
          <p className="text-mingor-blue-200 font-light text-xs md:text-base lg:text-xl mt-3">
            Buwan ng Wika Celebration - 2018
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
