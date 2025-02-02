const comentAPI = document.querySelector('.commnet_API');
const wrap = document.querySelector('.wrap')

comentAPI.addEventListener('hover', function () {
    comentAPI.innerHTML = 'Comment'
})

function card(e){
    return  `
     <div class="card">
        <p class="id">Id:${e.id}</p>
        <p class="title">Name: ${e.name}</p>
        <a class="email" href="${e.email}">${e.email}</a>
        <p class="body">${e.body}</p>
    </div>`
}

document.addEventListener('DOMContentLoaded', function (api){
    fetch('https://jsonplaceholder.typicode.com/comments/')
    .then((response) => {
        if(response.status == 200){
            return response.json()
        }
        console.error('Error');
    })
    .then((data) => {
        wrap.innerHTML = ''
        data.slice(0, 50).forEach(el => {
            wrap.innerHTML += card(el)
        });
    })
    .catch(console.log(`API ga noto'g'ri so'rov kiritildi`))
    .finally(
        console.log('tugadi')
    )
})



let title = document.querySelector('h1')

comentAPI.addEventListener('click', function(com){
    title.innerHTML = 'Comment'
    fetch('https://jsonplaceholder.typicode.com/comments/')
    .then((response) => {
        if(response.status == 200){
            return response.json()
        }
        console.error('Error');
    })
    .then((data) => {
        wrap.innerHTML = ''
        data.slice(0, 50).forEach(el => {
            wrap.innerHTML += card(el)
        });
    })
    .catch(console.log(`API ga noto'g'ri so'rov kiritildi`))
    .finally(
        console.log('tugadi')
    )
})

let postAPI = document.querySelector('.postAPI')

    function cardPost(i){
        return  `
        <div class="card">
           <p class="id">Id:${i.id}</p>
           <p class="title">Nname: ${i.title}</p>
           <a class="email" href=""></a>
           <p class="body">${i.body}</p>
       </div>`
    }

postAPI.addEventListener('click', function(post){
    title.innerHTML = 'Post'
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => {
        if(response.status == 200){
            return response.json()
        }
        console.log('hato')
    })
    .then((data) => {
        wrap.innerHTML = ''
        data.slice(0, 50).forEach(el => {
            wrap.innerHTML += cardPost(el)
        })
    })
})


let albumAPI = document.querySelector('.albumAPI')

function albumObj(al){
    return  `
    <div class="card">
       <p class="id">Id:${al.id}</p>
       <p class="title">Nname: ${al.title}</p>
       <p class="body"><strong>userID</strong> ${al.userId}</p>
   </div>`
}

albumAPI.addEventListener('click', function(album){
    fetch('https://jsonplaceholder.typicode.com/albums/')
    .then((response) => {
        if(response.status == 200){
            return response.json(
            )
        }
        console.log('eror')
    })
    
    .then((data) => {
        title.innerHTML = ''
        wrap.innerHTML = ''
        title.innerHTML += 'Album'
        data.slice(0, 50).forEach(el =>{
            wrap.innerHTML += albumObj(el)
        })
    })
})

let photoAPI = document.querySelector('.photoAPI')

function photo (album){
  return `
     <div class="card">
       <p class="id">Id:${album.id}</p>
       <p class="title">Nname: ${album.title}</p>
       <p class="body"><strong>userID</strong> ${album.title}</p>
       <div class="imgs" >
        <img src=${album.url} alt="url">
       <img src='${album.thumbnailUrl}' alt="thumbnailUrl">
   </div>
   </div>`
}

photoAPI.addEventListener('click', function(poto){
    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then((response )=> {
        if(response.status == 200){
            return response.json()
        }
        console.log('eror')
    })
    .then((data) => {
        title.innerHTML = ''
        wrap.innerHTML = ''
        title.innerHTML += 'Photo'
        data.slice(0, 10).forEach((el) => {
            wrap.innerHTML += photo(el)
        })
    })
})

let todoAPI = document.querySelector('.todoAPI')

function Todo(i) {
    return `
        <div class="card">
            <p class="id">Id: ${i.id}</p>
            <h1 class="title"><strong>Title:</strong> ${i.title}</h1>
            <h6><strong>Completed:</strong> ${i.completed}</h6>
        </div>`;
}

todoAPI.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Error fetching data');
        })
        .then((data) => {
            title.innerHTML = 'Todo';
            wrap.innerHTML = ''; 
            data.slice(0, 50).forEach((el) => {
                wrap.innerHTML += Todo(el);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});


let userAPI = document.querySelector('.userAPI')

function user(i) {
    return `
        <div class="card">
            <p class="id">Id: ${i.id}</p>
            <h3 class="title"><strong>Name:</strong> ${i.name}</h3>
            <h3 class="username"><strong>Username</strong>${i.username}</h3>
            <a href="${i.email}" >${i.email}</a>
            <h3><strong>Address:</strong>${i.address}</h3>
            <h6><strong>Phone:</strong> ${i.phone}</h6>
            <h6><strong>Website:</strong>${i.website}</h6>
            <h6><strong>Company</strong>${i.company.name}</h6>
        </div>`;
}

userAPI.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Error fetching data');
        })
        .then((data) => {
            title.innerHTML = 'User';
            wrap.innerHTML = ''; 
            data.slice(0, 10).forEach((el) => {
                wrap.innerHTML += user(el);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});