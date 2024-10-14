
async function f1(userId){
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!response.ok){
            throw new Error("User not found");
        }
        
        const user = await response.json();
        console.log("USER:",user);

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const posts = await postsResponse.json();
        //console.log({user, posts});
        
        return {user: user,posts: posts}
    } catch (error) {
        console.log(error.message);
        
    }

}

async function renderUser(id){
    const data = await f1(id);
    //.then(data=> {
        const container = document.createElement("div");
        container.className = "user-container";
        container.innerHTML = `
        <div class=”user”>
		    <p>${data.user.name}</p>
		    <p>${data.user.email}</p>
	    </div>
	    
        <div class=”posts”>
			    ${data.posts.map((post)=>{
                    return `<div class=”item”>
			                    <p>${post.title}</p>
                                <p>${post.body}</p>
		                    </div>`;
                }).join("")}

	    </div>
        
        `;
        document.body.append(container);
    //})
}

/*
второй способ
${data.posts.reduce((acum, current)=>{
                    return acum +  `<div class=”item”>
			                            <p>${current.title}</p>
                                        <p>${current.body}</p>
		                            </div>`;
                }, "")}
*/
// f1(2)
// .then(data =>{
//     console.log(data);
// })
// renderUser(2);
/*
Создать функцию, которая принимает id пользователя и  получает данные о пользователе используя функцию из предыдущей задачи. Добавляет div с данными о пользователе и всеми его постами на страницу. Возвращаемая карточка должна иметь следующую структуру:
<div class=”user-container”>(div-оболочка в html)
	(div нового пользователя)
	<div class=”user”>
		<p>Имя пользователя</p>
		<p>Почта пользователя</p>
	</div>
	<div class=”posts”>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
	</div>
</div>
*/
async function getUser(id){
    const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await userResp.json();
    return user;
}

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const userInfo = document.querySelector("#userInfo");

prev.innerText = "<";
next.innerText = ">";

id = 1;

// renderUser(id);
getUser(id)
    .then(user=> {userInfo.innerText = id + "\n" + user.name + "\n" + user.email});
prev.onclick = () => {
    if (id === 1) {
        return;
    }
    id--;
    getUser(id)
    .then(user=> {userInfo.innerText = id + "\n" + user.name + "\n" + user.email});
}
next.onclick = () => {
    if (id === 10) {
        return;
    }
    id++;
    getUser(id)
    .then(user=> {userInfo.innerText = id + "\n" + user.name + "\n" + user.email});
}


























