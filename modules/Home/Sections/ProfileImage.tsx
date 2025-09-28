import Svg from "@/constants/svg";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex justify-center items-end">
      <div className="w-fit border-r border-edge overflow-hidden">
        <Image
          className="filter invert dark:filter-none rounded-full aspect-square object-cover object-left border border-edge p-1"
          src="/images/profile.png"
          alt="Home"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full flex flex-col">
        <h2 className="w-full flex justify-start items-center gap-4 text-2xl font-semibold tracking-wide border-y border-edge p-2" >
          Ashutosh Tiwari
          <span>
            {Svg.twitterSVG}
          </span>
        </h2>
        <p className="flex justify-start text-sm font-light text-foreground/60 border-y border-edge p-2" >One Source Contributor</p>
      </div>
    </div>
  );
};

export default ProfileImage;
