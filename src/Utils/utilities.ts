
export function fetchData(callback : Function){
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => callback(data))
}
