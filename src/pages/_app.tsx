import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "@/components/NavBar";
import "../styles/globals.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: object;
}

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <NavBar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
