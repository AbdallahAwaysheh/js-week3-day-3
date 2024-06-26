// const container = document.querySelector('.posts');
// const comments =[]
// fetch('https://jsonplaceholder.typicode.com/comments')
//             .then((res)=>res.json())
//             .then((data)=>data.forEach((ele)=>comments.push(ele)))
//             console.log(comments);



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         data.forEach(element => {
//             container.insertAdjacentHTML("beforeend", `<div class="post"> <h1> ${element.title} </h1>
//                 <p> ${element.body} </p>
//                 </div>`
//             ) 
//             for(let i =0; i<5;i++){
//                 container.insertAdjacentHTML('beforeend',` 
//                     <div class="commint">
//                     <h4>${comments[i].name} </h4>
//                     <p class="email">${comments[i].email}</p>
//                     <p class="par">${comments[i].body}</p>
//                     </div>`)
//             }      
            
//     })});
// const albumsContainer = document.querySelector('#albums');
// const albums = fetch("https://jsonplaceholder.typicode.com/albums")
//                 .then((res)=>res.json())
//                 .then(data=>{
//                     data.forEach(element => {
//                         albumsContainer.innerHTML+=`<div><li>${element.title}</li></div>`;
//                     });
//                 });

//  function getAlbums(){
//     const photos =  fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
//                 .then(res=>res.json())
//                 .then(data=>{
//                     data.forEach((ele=>{
//                         albumsContainer.innerHTML+=
//                         `<div>
//                         <li>
//                         ${ele.title}
//                         <hr>
//                         <img src='${ele.url}'>
//                         </li>
//                         </div>`;
//                         console.log(data);
//                     }))
//                 })
// }
// getAlbums();
// const toDoContainer = document.querySelector('#toDO');
// let checkbox= document.querySelector('.toDoList');
// let theTaskIsDone = "checked";
// let theTaskIsNotDone = "disable";
// let result =""

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res=>res.json())
//     .then(data=>{
//         data.forEach(element => {
//             console.log(element);
//             // if (element.completed==true){
//             //     result=theTaskIsDone;
//             // }else{
//             //     result=theTaskIsNotDone;
//             // }
//             toDoContainer.innerHTML+=
//             `   <input type="checkbox" class="toDoList" ${element.completed?'checked':"disable"}> 
//                 <label for="toDoList">${element.title}</label><br>
//             ` 
//         });
//     });