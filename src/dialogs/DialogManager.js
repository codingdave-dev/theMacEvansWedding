import React, { useState } from "react";
import { connect } from "react-redux";
import LoginDialog from "./auth/LoginDialog";
import RegisterDialog from "./auth/RegisterDialog";

const dialogLookup = {
  LoginDialog,
  RegisterDialog,

};

const mapStateToProps = (state) => ({
  currentDialog: state.dialog,
});

const DialogManager = ({ currentDialog }) => {
  let renderedDialog;

  if (currentDialog) {
    const { dialogType, dialogProps } = currentDialog;
    const DialogComponent = dialogLookup[dialogType];

    renderedDialog = <DialogComponent {...dialogProps} />;
  }

  return <span>{renderedDialog}</span>;
};

export default connect(mapStateToProps)(DialogManager);
