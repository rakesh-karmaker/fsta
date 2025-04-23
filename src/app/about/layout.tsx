export const metadata = {
  title: "FSTA - About Us",
  openGraph: {
    title: "FSTA - About Us",
    url: "https://fsta-next.netlify.app/about",
  },
  twitter: {
    title: "FSTA - About Us",
    site: "https://fsta-next.netlify.app/about",
  },
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
