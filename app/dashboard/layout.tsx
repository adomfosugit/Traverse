import Drawer from './drawer/Drawer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="hidden 2xl:flex w-1/4 bg-cyan-100 rounded-xl m-4">
        <Drawer />
      </aside>
      <main className="p-4">
        <div className="w-full 2xl:w-10/12 ml-auto"> {children}</div>
      </main>
    </>
  );
}
