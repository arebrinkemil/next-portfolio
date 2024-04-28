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
      <main className="h-screen bg-[#9e9b94] max-w-[100vw] overflow-x-clip">
        {children}
      </main>
      {/* placeholder to keep scroll */}
      <div className="h-[150vh]">hello</div>
    </div>
  );
}
