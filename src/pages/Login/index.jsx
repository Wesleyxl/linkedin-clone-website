import { Input } from "antd";
import React, { useState } from "react";

import { Container, CardContainer } from "./styles";

function Login() {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <CardContainer>
        <h1>Login</h1>
        <form>
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
          <Input.Password
            style={{ height: 40 }}
            name="password"
            placeholder="your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>
      </CardContainer>
    </Container>
  );
}

export default Login;
