import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
