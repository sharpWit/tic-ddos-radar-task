import Header from "@/components/container/header";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <main className="w-full">
        <div className="pt-28 h-full px-8">{children}</div>;
      </main>
    </>
  );
};

export default Container;
