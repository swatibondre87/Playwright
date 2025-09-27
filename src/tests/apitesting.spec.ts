import { test, expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {UserPayload} from '../dataModels/userPayload';

 // 🔹 GET request
test('GET users', async ({ request }) => {
 const response = await request.get('https://reqres.in/api/users?page=2', {
   headers: {
    // 'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   }
 });


 console.log('GET Status:', response.status());
 expect(response.status()).toBe(200);
  const body = await response.json();
 console.log('GET Response:', body);

expect(response.ok()).toBeTruthy();// response.ok() returns true if the HTTP status code is in the 200–299 range.
expect(body.data.length).toEqual(6);
});

 test('DELETE user', async ({ request }) => {
   const response = await request.delete('https://reqres.in/api/users/2', {
     headers: {
       'x-api-key': 'reqres-free-v1',
       'Content-Type': 'application/json'
     }
   });

expect(response.ok()).toBeTruthy();
  // expect(response.status()).toBe(204); // No Content
   console.log('DELETE successful with status:', response.status());
 });


 test('POST create user', async ({ request }) => {
 const response = await request.post('https://reqres.in/api/users', {
   headers: {
     'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   },
   data: {
     name: 'Sidharth',
     job: 'SDET'
   }
 });


 console.log('POST Status:', response.status());
 expect(response.status()).toBe(201);


 const body = await response.json();
 console.log('POST Response:', body);
 expect(body.name).toBe('Sidharth');
});



 // 🔹 PUT request
test('PUT update user', async ({ request }) => {
 const response = await request.put('https://reqres.in/api/users/2', {
   headers: {
     'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   },
   data: {
     name: 'Swati',
     job: 'QA Lead'
   }
 });


 console.log('PUT Status:', response.status());
 expect(response.ok()).toBeTruthy();


 const body = await response.json();
 console.log('PUT Response:', body);
 expect(body.name).toBe('Swati');
});


 // 🔹 PATCH request
test('PATCH update user', async ({ request }) => {
 const response = await request.patch('https://reqres.in/api/users/2', {
   headers: {
     'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   },
   data: {
     job: 'Sr. QA Engineer'
   }
 });


 console.log('PATCH Status:', response.status());
 expect(response.ok()).toBeTruthy();


 const body = await response.json();
 console.log('PATCH Response:', body);
 expect(body.job).toBe('Sr. QA Engineer');
});


test('POST user with external JSON input', async ({ request }) => {
 // Resolve path relative to this test file
 const filePath = path.resolve(__dirname, '../resources/userRequestPayload.json');
 const userData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

 // Send POST request with API key
 const response = await request.post('https://reqres.in/api/users', {
   headers: {
     'Content-Type': 'application/json',
     'x-api-key': 'reqres-free-v1'
   },
   data: userData
 });

 // Validate response
 expect(response.status()).toBe(201);
 const responseBody = await response.json();
 console.log('Response:', responseBody);

 expect(responseBody.name).toBe(userData.name);
 expect(responseBody.job).toBe(userData.job);
});


test('POST request with POJO-like structure', async ({ request }) => {
  // Create a POJO-like object
  const user: UserPayload = {
    name: 'swati',
    job: 'QA',
    skills:['selenium','java'],
     address: {
     "street": "147, Nelson street",
     "city": "Auckland"
    }

  };

  // Send POST request
  const response = await request.post('https://reqres.in/api/users', {
    data: user,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1' // your API key
    }
  });

  // Assertions
  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  console.log(responseBody);

  // Validate response data

console.log("Name: " +responseBody.name);
console.log("Job: " +responseBody.job);
console.log("Skills: " +responseBody.skills[0]);
console.log("City: " +responseBody.address.city);
       

  
  expect(responseBody.name).toBe(user.name);
  expect(responseBody.job).toBe(user.job);
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('createdAt');
});



//API Chaining
test('API Chaining with ReqRes', async ({ request }) => {
 // 1. Create a new user (POST)
 const createResponse = await request.post('https://reqres.in/api/users', {
   data: {
     name: 'swati',
     job: 'QA'
   },
     headers: {
     'Content-Type': 'application/json',
     'x-api-key': 'reqres-free-v1' // your API key
   }
 });

 expect(createResponse.status()).toBe(201);
 const createBody = await createResponse.json();
 console.log('Created User:', createBody);

 const userId = createBody.id;
 console.log("User Id: " +userId);

 // // 2. Get the created user (GET) using id
  const getResponse = await request.get('https://reqres.in/api/users/${userId}', {headers: {
     'Content-Type': 'application/json',
     'x-api-key': 'reqres-free-v1' // your API key
}});
  console.log('Fetched User:', await getResponse.json());

//     // 4. Delete the user (DELETE)
 const deleteResponse = await request.delete('https://reqres.in/api/users/${userId}', {headers: {
     'Content-Type': 'application/json',
     'x-api-key': 'reqres-free-v1' // your API key
}});
 expect(deleteResponse.status()).toBe(204);
 console.log('User deleted');

});

