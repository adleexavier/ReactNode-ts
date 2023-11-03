import React, { useState } from "react";
import InputField from "../Ui/InputField";
import classes from "./LandingPage.module.css";
export default function LandingPage() {
  return (
    <div className={classes.test}>
      <InputField
        setValue={() => {}}
        status="active"
        type="dropdownsearch"
        label=""
        subtext=""
        placeholder="your email address"
        width=""
      />
    </div>
  );
}
