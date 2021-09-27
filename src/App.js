import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import TaskList from "./components/taskList";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TaskList />
      </PersistGate>
    </Provider>
  );
}

export default App;
