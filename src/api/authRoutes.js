import { apiFetchPublicPost, apiFetchGet } from "./methods";

const authRoutes = {
  login: async (email, password) => {
    const response = await apiFetchPublicPost("/auth/login", {
      email,
      password,
    });

    return response;
  },

  register: async (name, email, password) => {
    const response = await apiFetchPublicPost("/auth/register", {
      name,
      email,
      password,
    });

    return response;
  },

  me: async () => {
    const response = await apiFetchGet("/auth/me");

    return response;
  },
};

export { authRoutes };
