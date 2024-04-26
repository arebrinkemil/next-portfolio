import Link from "next/link";

const Header = () => (
  <header className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav z-30 ">
    <div className="w-full flex flex-row justify-around text-4xl font-bold">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  </header>
);

export default Header;
