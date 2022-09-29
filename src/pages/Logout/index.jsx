function Logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");

  return (window.location = "/login");
}

export default Logout;
