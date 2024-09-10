export default function ServiceProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mx-36 mt-9">{children}</main>
    </>
  );
}
