const validateToken = async (json) => {
  if (
    json.status === "Token is Invalid" ||
    json.status === "Token is Expired"
  ) {
    window.location.href = "/logout";
  }
};

const logout = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("name");
};

export { validateToken, logout };
