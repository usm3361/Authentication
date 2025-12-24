import fs from "fs/promises";

// user function
export const readUsers = async () => {
  try {
    const USERS_PATH = "./data/users.json";
    const USERS = await fs.readFile(USERS_PATH, "utf-8");
    const USERSOBJ = JSON.parse(USERS);
    return USERSOBJ;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const writeUsers = async (users) => {
  await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));
};

export const validateUser = async (username, password) => {
  const users = await readUsers();
  const user = users.find((u) => u.username.toUpperCase() === username.toUpperCase());
  if (user) {
    const isValid = user.password === password;
    if (user && isValid) {
      return user;
    } else {
      return null;
    }
  } else {
    console.log("user not found");
    return null;
  }
};

// post function
export const readPosts = async () => {
  try {
    const POSTS_PATH = "./data/posts.json";
    const POSTS = await fs.readFile(POSTS_PATH, "utf-8");
    const POSTSOBJ = JSON.parse(POSTS);
    return POSTSOBJ;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const writePosts = async (posts) => {
  await fs.writeFile(POSTS_PATH, JSON.stringify(posts, null, 2));
};

console.log(await validateUser("Uri", 7173361));
