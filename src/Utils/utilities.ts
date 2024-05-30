import { TData, TNewPost, TPost } from "./commonTypes";

export function fetchData(callback : Function){
    fetch('https://dummyjson.com/posts?limit=10')
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('posts' , JSON.stringify(data))
        callback(JSON.parse(localStorage.getItem('posts')|| data))
    })
    
}
export function insertNewPost(newPost : TNewPost , callback:Function ,oldObj : TData){
    let newPostInsert : TPost = {
        id: newPost.id,
        title : newPost.title,
        body: newPost.body,
            tags : [],
            reactions : {
                likes : 0,
                dislikes : 0
            },
            views: 0,
            userId:213541
    }
    let newDateObj : TData = {
        posts: [...oldObj.posts , newPostInsert],
        total : oldObj.total +1,
        skip: oldObj.skip+1,
        limit : oldObj.limit+1
    }
    localStorage.setItem('posts' , JSON.stringify(newDateObj))
    callback(newDateObj)
}