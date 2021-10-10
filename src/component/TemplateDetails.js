import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Sidebar from "./Sidebar";
import { TemplateValues } from "../App";

const TemplateDetails = () => {
  const [avatar, setAvatar] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const { templateId } = useParams();
  const details = useContext(TemplateValues);
  const [templateValues, setTemplateValues] = useState(details);

  const avatarImageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setAvatar(base64);
      localStorage["avatarimg"] = base64;
    });
  };

  const companyLogoUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setCompanyLogo(base64);
      localStorage["companylogo"] = base64;
    });
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  let name, value;
  const handleOnChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setTemplateValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Sidebar
            value={templateValues}
            avatarImg={avatar}
            companyLogo={companyLogo}
            handleChange={handleOnChange}
            handleAvatarChange={avatarImageUpload}
            handleCompanyLogoChange={companyLogoUpload}
          />
        </Grid>
        <Grid
          item
          xl={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {templateId === "0" && (
            <Template1
              value={templateValues}
              avatarImg={avatar}
              companyLogo={companyLogo}
            />
          )}
          {templateId === "1" && <Template2 />}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateDetails;
