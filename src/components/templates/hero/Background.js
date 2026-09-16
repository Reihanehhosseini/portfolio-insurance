import Image from "next/image";

export default function Background() {
  return (
    <div className="overflow-hidden ">
      <Image
        src="/images/hero-mobC.webp"
        alt=""
        width={1011}
        height={1556}
        priority
        sizes="100vw"
        aria-hidden="true"
        className="block md:hidden  overflow-hidden w-full h-full object-cover object-center select-none pointer-events-none 500:-translate-y-25 sm:-translate-y-60"
      />
      <Image
        src="/images/hero-full.PNG"
        alt=""
        width={1721}
        height={914}
        priority
        sizes="100vw"
        aria-hidden="true"
        className="hidden md:block  w-full h-full object-cover object-center select-none pointer-events-none! -translate-y-10!"
      />
    </div>
  );
}
