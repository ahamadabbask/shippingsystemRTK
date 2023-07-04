import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./Application/Router";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <DndProvider backend={HTML5Backend}>
          <Provider store={store}>
            <ToastContainer />
            <Router />
          </Provider>
        </DndProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
