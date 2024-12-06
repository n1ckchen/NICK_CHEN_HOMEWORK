// ● Practice
// ○ use both .then and async/await to write, including error handling
// ■ fetch API from jsonplaceholder
// ■ write a promise-based function that return a random number after a delay
// ■ use Promise.all to write an example


const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchData = (url) => {
    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);

    })
    .catch((error) => {
        console.log('Error caught:', error);
    })
};

fetchData(url);


async function fetchData2(url) {
    try {
        const respond = await fetch(url);

        const data = await respond.json();
        console.log(data);
    }

    catch(error) {
        console.log('Error caught:', error);
    }
    
}

fetchData2(url);