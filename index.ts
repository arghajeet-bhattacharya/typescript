import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface TestObjInterface {
    id: number,
    userId: number,
    title: string,
    completed: boolean
}

axios.get(url)
    .then(response => {
        const testObj = response.data as TestObjInterface;

        logResponse(testObj.id, testObj.title);

    });


const logResponse = (id: number, title: string) => {
    console.log(`${id} ${title}`);
}