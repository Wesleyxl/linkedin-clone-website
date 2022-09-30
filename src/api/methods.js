import { BASE_URL } from "../../env";
import { validateToken } from "../services/auth";

// public get
const apiFetchPublicGet = async (endpoint, body = {}) => {
  const response = await fetch(`${BASE_URL + endpoint}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  await validateToken(json);

  return json;
};

// public post
const apiFetchPublicPost = async (endpoint, body = {}) => {
  const response = await fetch(`${BASE_URL + endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  await validateToken(json);

  return json;
};

// GET
const apiFetchGet = async (endpoint) => {
  const response = await fetch(`${BASE_URL + endpoint}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("access_token"),
    },
  });

  const json = await response.json();

  await validateToken(json);

  return json;
};

// GET
const apiFetchPost = async (endpoint, body = {}) => {
  const response = await fetch(`${BASE_URL + endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("access_token"),
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  await validateToken(json);

  return json;
};

export { apiFetchGet, apiFetchPost, apiFetchPublicGet, apiFetchPublicPost };
