// fetch(`https://jsonplaceholder.typicode.com/posts/${1}`)
// // PROMISE - WAIT FOR RESPONSE
//   .then(response => response.json())
// //   // PROMISE - WAIT FOR RESPONSE
//   .then(post => {
//     console.log('Данные поста:', post);
//     const userId = post.userId; // id автора поста
//     // получаем данные автора поста
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => response.json())
//       .then(author => {
//         console.log('Данные автора:', author);
//       });
//   });

  async function getPostAndAuthor() {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${1}`);
    const postData = await postResponse.json();
  
    const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
    const authorData = await authorResponse.json();
  
    return { post: postData, author: authorData };
  }
  
//   getPostAndAuthor()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



/*Задача 1: Используя async await по id комментария выведите в консоль текст поста и комментарий. 
Для этого нужно отправить два запроса к API jsonplaceholder.com:
 один для получения поста, связанного с данным комментарием - https://jsonplaceholder.typicode.com/comments/${commentId},
  и второй - для получения самого комментария - https://jsonplaceholder.typicode.com/posts/${comment.postId} 
  Здесь функция получает ID комментария в качестве аргумента. */


async function getPostAndComment(commentId){
    console.log("==================================");
    
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    // console.log(1,postResponse);
    
    const comment = await commentResponse.json();
    console.log('comment:\n', comment.body);

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);

    const post = await postResponse.json();
    console.log('post: \n',post.body);

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userResponse.json();
    console.log('user name:\n',user.name);
    
    
}


getPostAndComment(3);




/*Задача 2: Доработайте прошлое решение таким образом, чтобы помимо текста поста выводилось имя автора. 

Для этого нужно отправить запрос к API, использую id пользователя, который написал этот пост: https://jsonplaceholder.typicode.com/users/${post.userId}*/



    