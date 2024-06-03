import "./App.css";
import { Provider } from "react-redux";
import Routers from "./routes";
import persistor, { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routers />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
