import { Alert, Button, Checkbox, Input, Spin } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authRoute } from "../../api";
import Logo from "../../assets/layout/logo.png";
import { Container, CardContainer } from "./styles";

function Register() {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // navigate
  const navigate = useNavigate();

  // submit
  const handleSubmit = async () => {
    setError(false);
    setLoading(true);

    if (passwordConfirm !== password) {
      setPasswordConfirmError(true);
      setLoading(false);
    } else {
      setPasswordConfirmError(false);

      const response = await authRoute.register(name, email, password);

      if (response.error) {
        setError(true);
        setLoading(false);
      } else {
        const { user, access_token } = response;

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/");
      }

      setLoading(false);
    }
  };

  return (
    <Container>
      <CardContainer>
        <div className="logo-area">
          <img src={Logo} alt="LinkedIn" title="LinkedIn" />
        </div>
        <h1>Cadastre-se</h1>
        <form>
          {error && (
            <Alert
              style={{ marginBottom: 20 }}
              message="Email ou senha incorretos"
              type="error"
            />
          )}

          <div className="input-area">
            <Input
              style={{ height: 40 }}
              name="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="input-area">
            <Input
              style={{ height: 40 }}
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-area">
            <Input
              style={{ height: 40 }}
              name="career"
              placeholder="your career"
              value={career}
              onChange={(e) => {
                setCareer(e.target.value);
              }}
            />
          </div>

          <div className="input-area">
            <Input.Password
              style={{ height: 40 }}
              name="password"
              placeholder="your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {passwordConfirmError && (
            <Alert
              style={{ marginBottom: 20 }}
              message="password not match"
              type="error"
            />
          )}

          <div className="input-area">
            <Input.Password
              style={{ height: 40 }}
              name="password-confirm"
              placeholder="confirm your password"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
          </div>
          <div className="btn-area">
            <Button disabled={loading} type="primary" onClick={handleSubmit}>
              {loading ? "Carregando" : "Registre-se"}
            </Button>
          </div>

          <div className="remember">
            <Checkbox>Lembra-me</Checkbox>
          </div>
        </form>
        <div className="register">
          <p>
            já possui uma conta? <a href="/register">faça login</a>
          </p>
        </div>
      </CardContainer>
    </Container>
  );
}

export default Register;
