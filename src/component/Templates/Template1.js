import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

const Template1 = ({ value, avatarImg, companyLogo }) => {
  return (
    <>
      <Card
        sx={{
          width: 500,
          height: 300,
          bgcolor: "#2B2B2B",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            width: "43%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 79, height: 79 }} src={avatarImg} />
          <img src={companyLogo} alt="company Logo" style={{ width: "80%" }} />
        </CardContent>
        <CardContent sx={{ width: "63%" }}>
          <Typography sx={{ fontSize: 14, color: "#fff", fontWeight: "400" }}>
            {value.fullname}
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#fff", fontWeight: "400" }}>
            {value.jobtitle}
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#fff", fontWeight: "400" }}>
            {value.companyname}
          </Typography>
          <Divider sx={{ borderColor: "#777777", width: "50" }} />
          <Link underline="none" sx={{ color: "#fff", display: "block" }}>
            📞 {value.phoneno}
          </Link>
          <Link
            href={`mailto:${value.email}`}
            underline="none"
            sx={{ color: "#fff", display: "block" }}
          >
            📧 {value.email}
          </Link>
          <Link
            href={value.href}
            underline="none"
            target="_blank"
            sx={{ color: "#fff", display: "block" }}
          >
            🌐 {value.website}
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default Template1;
