// ● Practice
// ○ use both .then and async/await to write, including error handling
// ■ fetch API from jsonplaceholder
// ■ write a promise-based function that return a random number after a delay
// ■ use Promise.all to write an example

const url = "https://jsonplaceholder.typicode.com/todos";

const fetchData = (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log("Error caught:", error);
    });
};

fetchData(url);

async function fetchData2(url) {
  try {
    const respond = await fetch(url);

    const data = await respond.json();
    console.log(data);
  } catch (error) {
    console.log("Error caught:", error);
  }
}

fetchData2(url);

const randomNumPromise = (delay) => {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(`Invalid!`);
      return;
    }

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      resolve(randomNum);
    }, delay);
  });
};

async function getRandomNumber(delay = 2000) {
  try {
    const randomNumber = await randomNumPromise(delay);
    console.log("Random number:", randomNumber);
  } catch (error) {
    console.error("Error caught :", error);
  }
}

getRandomNumber();
getRandomNumber(3000);

const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users";
const url3 = "https://jsonplaceholder.typicode.com/comments";

async function fetchDataFromAPIs() {
  try {
    const fetchPosts = fetch(url1).then(response => response.json());
    const fetchUsers = fetch(url2).then(response => response.json());
    const fetchComments = fetch(url3).then(response => response.json());

    const [posts, users, comments] = await Promise.all([
      fetchPosts,
      fetchUsers,
      fetchComments,
    ]);

    console.log("Posts:", posts);
    console.log("Users:", users);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error caught:", error);
  }
}

fetchDataFromAPIs();
