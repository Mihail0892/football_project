import React, { useEffect, useRef, useState } from "react";
import styles from "./AuthForm.module.scss";
import { useDispatch } from "react-redux";
import { logIn, changeNickname } from "../../store/redusers/auth";

const AuthForm = ({ setModal }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("click", handler, true);
  }, [setModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && pass.toLowerCase() === "хуйло") {
      setModal(false);
      setName("");
      console.log("Hello");
    }
    if (pass === "") {
      alert("Введіть пароль");
    }
    if (pass.toLowerCase() !== "хуйло" && pass.toLowerCase() !== "") {
      alert("Пароль невірний");
      setPass("");
    }
  };

  return (
    <div ref={divEl} className={styles.box}>
      <form onSubmit={handleSubmit}>
        <span onClick={() => setModal(false)}>X</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше ім'я"
          minLength={3}
        />
        <br />
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Хто путін?"
        />
        <button
          onClick={() => {
            pass.toLowerCase() === "хуйло" && dispatch(logIn());
            pass.toLowerCase() === "хуйло" && dispatch(changeNickname(name));
          }}
          disabled={name === "" ? true : false}
          type="submit"
        >
          Вхід
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
