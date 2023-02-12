import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import styles from "./HomeComponent.module.scss";

const HomeComponent = ({ setModal, modal }) => {
  return (
    <div className={styles.main}>
      {modal && <AuthForm setModal={setModal} />}
    </div>
  );
};

export default HomeComponent;
