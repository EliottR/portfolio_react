import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import Profile from "./pages/Profile"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
// import Name from "./components/Name"

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          render={() => (
            <>
              <Header key={"Header"} />
              {/* <Name /> */}
              <AnimatePresence initial={false} exitBeforeEnter>
                <Switch key={"Switch"}>
                  <Route path="/" exact component={Home} />
                  <Route path="/profile" exact component={Profile} />
                  <Route path="/projects" exact component={Projects} />
                  <Route path="/contact" exact component={Contact} />
                  <Route component={NotFound} />
                </Switch>
              </AnimatePresence>
            </>
          )}
        ></Route>
      </BrowserRouter>
      {/* <Name /> */}
    </>
  )
}

export default App
