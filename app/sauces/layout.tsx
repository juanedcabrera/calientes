export const metadata = {
  title: 'Calientes | Hot Ones Hot Sauces',
  description: 'Hot Ones Hot Sauces',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
