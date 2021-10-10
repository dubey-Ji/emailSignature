import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";

const Sidebar = ({
  value,
  handleChange,
  avatarImg,
  companyLogo,
  handleAvatarChange,
  handleCompanyLogoChange,
}) => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    let name = localStorage.getItem("username");
    setUserInfo(name);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#2B2B2B",
          overflow: "scroll",
          height: "100vh",
          overflowX: "hidden",
        }}
        id="sidebar"
      >
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "'Roboto', sans-serif",
            margin: "1em 0",
          }}
        >
          Hello {userInfo}
        </h1>
        <div style={{ margin: "2em 2em" }}>
          <Input
            type="file"
            id="avatarimg"
            color="success"
            fullWidth
            defaultValue={avatarImg}
            sx={{ marginY: "2em" }}
            onChange={handleAvatarChange}
          />
          <Input
            type="file"
            id="companylogoimg"
            color="success"
            fullWidth
            defaultValue={companyLogo}
            onChange={handleCompanyLogoChange}
            sx={{ marginY: "2em" }}
          />

          <TextField
            required
            id="filled-required"
            variant="filled"
            label="Full Name"
            name="fullname"
            defaultValue={value.fullName}
            color="success"
            onChange={handleChange}
            focused
            fullWidth
            sx={{ marginY: "2em" }}
          />
          <TextField
            required
            id="filled-required"
            variant="filled"
            name="jobtitle"
            label="Job Title"
            defaultValue={value.jobTitle}
            onChange={handleChange}
            color="success"
            focused
            fullWidth
            sx={{ marginY: "2em" }}
          />
          <TextField
            required
            id="filled-required"
            variant="filled"
            name="companyname"
            label="Company Name"
            defaultValue={value.companyName}
            onChange={handleChange}
            color="success"
            focused
            fullWidth
            sx={{ marginY: "2em" }}
          />
          <TextField
            required
            id="filled-required"
            variant="filled"
            name="phoneno"
            label="Phone Number"
            defaultValue={value.phoneNo}
            onChange={handleChange}
            color="success"
            focused
            fullWidth
            sx={{ marginY: "2em" }}
          />
          <TextField
            required
            id="filled-required"
            variant="filled"
            name="email"
            label="Email"
            defaultValue={value.email}
            onChange={handleChange}
            color="success"
            focused
            fullWidth
            sx={{ marginY: "2em" }}
          />
          <TextField
            required
            id="filled-required"
            variant="filled"
            name="website"
            label="Website"
            defaultValue={value.website}
            onChange={handleChange}
            color="success"
            focused
            fullWidth
            sx={{ marginY: "2em" }}
          />
          <TextField
            required
            id="filled-required"
            variant="filled"
            label="Website Link"
            name="href"
            onChange={handleChange}
            defaultValue={value.href}
            color="success"
            focused
            fullWidth
            sx={{ marginY: "2em" }}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
