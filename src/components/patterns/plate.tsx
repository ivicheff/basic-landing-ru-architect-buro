"use client";

import Link from "next/link";
import Image from "next/image";
import madeby from "~/madeby.json";

const Plate = () => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
      `}</style>

      <div className="mx-auto gap-4 bg-[#141516] py-12 md:flex-row">
        <Link
          href={madeby.url}
          className="flex flex-col items-center justify-center gap-4 text-[.6rem] text-white uppercase md:text-[1.5rem] lg:text-[2rem]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <Image
            src="https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoDQrC1uDhANfSJsUda9YFMRTto7iWqcbpB8kK6"
            alt="Plate"
            width={60}
            height={60}
            className="rounded-full text-center outline outline-2 outline-white"
          />
          <span>{madeby.phrase}</span>
        </Link>
      </div>
    </>
  );
};

export default Plate;
