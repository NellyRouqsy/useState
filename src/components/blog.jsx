const Blog =()=>{
    fetch="https://jsonplaceholder.typicode.com/posts"
    .then((response)=>response.json())
    .then((result)=>{console.log(result)})
    return(
        <div>

        </div>
    )
}

export default Blog