import { BrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./AppStore/store";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-[100vh] text-slate-100">
      <Provider store={appStore}>
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
