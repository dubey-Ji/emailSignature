import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { TemplateValues } from "../App";

const TemplateList = () => {
  const details = useContext(TemplateValues);
  const templates = [
    {
      templateName: <Template1 value={details} />,
    },
    {
      templateName: <Template2 />,
    },
  ];
  return (
    <>
      <Grid container spacing={2}>
        {templates.map((template, index) => {
          return (
            <>
              <Grid item xl={4}>
                <Link
                  component={RouterLink}
                  to={`/templatedetails/${index}`}
                  underline="none"
                >
                  {template.templateName}
                </Link>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default TemplateList;
