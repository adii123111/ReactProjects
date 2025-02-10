import "./App.css";
import Login from "./Componets/Login";
import Pofile from "./Componets/Pofile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>hello</h1>
      <Login />
      <Pofile />
    </UserContextProvider>
  );
}

export default App;
