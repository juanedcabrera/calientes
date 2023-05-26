export const metadata = {
  title: 'Calientes | Hot One Episodes',
  description: 'Hot Ones Episodes Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
