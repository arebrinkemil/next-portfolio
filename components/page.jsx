import Header from "./header";
import Head from "next/head";

export default function Page({ children }) {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>ÅREBRINK</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="max-w-[100vw] overflow-x-clip">{children}</main>
      {/* placeholder to keep scroll */}
    </div>
  );
}
