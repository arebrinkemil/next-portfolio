import Link from "next/link";

const Header = () => (
  <header className="flex justify-between items-center w-full h-20 px-4 text-[#9e9b94] bg-[#522222] fixed nav z-30 ">
    <div className="w-full flex flex-row justify-around text-4xl font-bold">
      <div>
        <Link href="/">HOME</Link>
      </div>
      <div>
        <Link href="/about">ABOUT</Link>
      </div>
      <div>
        <Link href="/contact">CONTACT</Link>
      </div>
    </div>
  </header>
);

export default Header;
