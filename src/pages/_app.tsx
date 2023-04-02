import NavBar from "@/components/NavBar";

interface AppProps {
  Component: React.ComponentType;
  pageProps: object;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
