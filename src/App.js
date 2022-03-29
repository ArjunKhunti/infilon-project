import { Provider } from "react-redux";
import "./App.css";
import UserTable from "./components/UserTable";
import store from "./Store/reduxStore";

function App() {
  return (
    <Provider store={store}>
      <UserTable />
    </Provider>
  );
}

export default App;
