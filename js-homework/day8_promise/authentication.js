export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  let encodedPassW = "";
  for (let i = password.length - 1; i >= 0; i--) {
    encodedPassW += password[i];
  }
  encodedPassW += "encoded";
  return encodedPassW;
};

export const decodePassword = (encrypted) => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  const withoutEncoded = encrypted.replace("encoded", "");

  let decodedPassword = "";
  for (let i = withoutEncoded.length - 1; i >= 0; i--) {
    decodedPassword += withoutEncoded[i];
  }
  return decodedPassword;
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
  // Fetch a user by email
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    const user = users.find((user) => user.email === email);
    if (user) {
      resolve(user);
    } else {
      reject(new Error("User not found"));
    }
    // }, 1000);
  });
};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
  return new Promise((resolve, reject) => {
    const encodedPassW = encodePassword(password);

    if (encodedPassW === encrypted) {
      resolve(true);
    } else {
      reject(new Error("Invalid password"));
    }
  });
};

export const login = async (email, password) => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"
  try {
    const user = await getUserByEmail(email);

    await verifyPassword(password, user.password);

    // Return user details along with the token
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      token: "token",
    };
  } catch (error) {
    return error.message;
  }
};
