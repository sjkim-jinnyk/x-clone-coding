export default function afterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p>
      afterLoginLayout
      {children}
    </p>
  );
}
