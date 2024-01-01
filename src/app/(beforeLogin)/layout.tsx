type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div>
      모달
      {children}
      {modal}
    </div>
  );
}
