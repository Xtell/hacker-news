import { ConfigProvider } from "antd";
import { FlowContainer, Header } from "./components";
import { theme } from "./constants/index.js";


function Index() {
  return (
      <ConfigProvider theme={ theme }>
        <FlowContainer>
          <Header/>
          <main className="main">
            Main
          </main>
        </FlowContainer>
      </ConfigProvider>
  )
}

export default Index