import Header from "./header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      <main className="h-screen bg-[#9e9b94] flex justify-center items-center max-w-[100vw] overflow-x-clip">
        {children}
      </main>
      <div></div>
    </>
  );
}
