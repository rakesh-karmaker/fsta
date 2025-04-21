export const metadata = {
  title: "FSTA - About Us",
  openGraph: {
    title: "FSTA - About Us",
    url: "https://mscsc.netlify.app/about",
  },
  twitter: {
    title: "FSTA - About Us",
    site: "https://mscsc.netlify.app/about",
  },
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
