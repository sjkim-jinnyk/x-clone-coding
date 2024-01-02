import styles from "@/app/page.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      모달
      {children}
      {modal}
    </div>
  );
}
