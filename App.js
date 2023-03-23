import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./states/store";
import { Text ,View} from "react-native-web";

export default function App() {
  return (
 <Provider store={store}>
      <Routes />
    </Provider>
  );
}




