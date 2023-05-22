export const metadata = {
    title: 'Calientes | Hot One Guests',
    description: 'Hot Ones Guest Page',
  };
  
  export default function TestingLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <section>{children}</section>
      </>
    );
  }
  