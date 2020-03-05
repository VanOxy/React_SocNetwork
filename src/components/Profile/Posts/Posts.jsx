import  React  from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let posts = [];
    
    for (let index = 0; index <5; index++){
        posts.push(<Post text={index} key={index}/>);
    }
    
    return (
        <div className={s.posts}>
           {posts}
        </div>
    );
}

export default Posts;