import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 relative">
      <div className="absolute inset-0 z-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(102,102,102,0.15)_1px,transparent_0)] [background-size:12px_12px]" />
      <div className="z-10">
        <Image
          className="filter invert dark:filter-none"
          src="/logo.webp"
          alt="Home"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default HeroImage;
