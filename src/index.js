import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../src/_settings/global-style"
import { theme } from "../src/_settings/style-theme"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </ThemeProvider>,

  document.getElementById("root")
)

serviceWorker.unregister()
