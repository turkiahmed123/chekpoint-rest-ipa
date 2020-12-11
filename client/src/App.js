import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import ContactList from "./Components/ContactList";
import Add from "./Components/Add";
import { Button } from "semantic-ui-react";
import { toggleFalse } from "./JS/actions/edit";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Button onClick={dispatch(toggleFalse())}>
        <Link to="/Add">add contact </Link>
      </Button>

      <Button>
        <Link to="/">Contact List</Link>
      </Button>

      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
