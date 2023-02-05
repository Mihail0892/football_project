import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import styles from "./HomeComponent.module.scss";

const HomeComponent = ({setModal}) => {
  return (
    <div className={styles.main}>
      <AuthForm setModal={setModal} />
    </div>
  );
};

export default HomeComponent;
