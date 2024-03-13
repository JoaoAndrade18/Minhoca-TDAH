import { Helmet } from "react-helmet-async";
import { Main } from "../../components/main";

export function Home() {
  return (
    <>
      <Helmet title="página inicial" />

      <Main />
    </>
  );
}
