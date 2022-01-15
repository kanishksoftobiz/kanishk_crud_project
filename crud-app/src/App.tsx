import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Header from "./Components/Header";
// import Users from "./Components/Users";
// import Add from "./Components/Add";
// import Edit from "./Components/Edit";
// import Footer from "./Components/Footer";
import { Header, Users, Add, Edit, Footer } from "./Components";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <main>
          <Container>
            <Route path="/" component={Users} exact />
            <Route path="/adduser" component={Add} />
            <Route path="/edituser/:id" component={Edit} />
          </Container>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
