const useAuth = () => {
    const loginUser = JSON.parse(localStorage.getItem("loginData"));
    const registerUser = JSON.parse(localStorage.getItem("registerData"));
  
    const auth = loginUser?.authToken;
  
    return { auth, loginUser, registerUser };
  };
  
  export { useAuth };