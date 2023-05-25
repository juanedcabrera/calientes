export const metadata = {
  title: 'Calientes | Hot One Guests',
  description: 'Hot Ones Seasons Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
