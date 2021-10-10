import React, { createContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import TemplateList from "./component/TemplateList";
import TemplateDetails from "./component/TemplateDetails";

const templateValues = {
  companyname: "Company Name",
  fullname: "Full Name",
  jobtitle: "Job Title",
  phoneno: "022-21458",
  email: "email@domain.com",
  website: "www.domain.com",
  href: "...",
};

export const TemplateValues = createContext();

const App = () => {
  return (
    <>
      <TemplateValues.Provider value={templateValues}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/templatelist">
            <TemplateList />
          </Route>
          <Route path="/templatedetails/:templateId">
            <TemplateDetails />
          </Route>
        </Switch>
      </TemplateValues.Provider>
    </>
  );
};

export default App;
