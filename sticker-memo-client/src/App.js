import React from 'react';

const App = () => {
    return (
        <div>
            App
        </div>
    );
};

export default App;



// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';

// const App = () => {
//     const [username, setUsername] = useState("");

//     useEffect(()=>{
//         fetch("/api/users/post-test", {
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json;charset=utf-8",
//                 "Accept": "application/json"
//             }, 
//             body: JSON.stringify({
//                 username: "test", 
//                 password: "test"
//             })
//         })
//             .then((response) => {
//                 return response.json();
//             })
//             .then((responseBody)=>{
//                 console.log(responseBody.isSuccess)
//                 console.log(responseBody.message)
//                 console.log(responseBody.data)
//                 setUsername(responseBody.data.username);
//             });
//     }, []);

//     return (
//         <div>
//             App {username}
//         </div>
//     );
// };



// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';

// const App = () => {
//     const [username, setUsername] = useState("");

//     useEffect(()=>{
//         fetch("/api/users/get-test")
//             .then((response) => {
//                 return response.json();
//             })
//             .then((responseBody)=>{
//                 console.log(responseBody.isSuccess)
//                 console.log(responseBody.message)
//                 console.log(responseBody.data)
//                 setUsername(responseBody.data.username);
//             });
//     }, []);

//     return (
//         <div>
//             App {username}
//         </div>
//     );
// };