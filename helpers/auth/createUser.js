import axios from "axios";

const createUser = async credentials => {
  try {
    const res = await axios.post("/api/auth/signup", credentials, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const cre = as => {};

export default createUser;
