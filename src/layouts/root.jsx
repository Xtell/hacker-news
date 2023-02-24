import { FlowContainer, Header } from "../components";
import { Outlet } from "react-router";

function Root() {
  return (
      <FlowContainer>
        <Header/>
        <main className="main">
          <Outlet/>
        </main>
      </FlowContainer>
  );
}

export default Root;