import  React  from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [];
    for (let index = 0; index <5; index++){
        posts.push(<Post text={index} />);
    }
    
    return (
        <div className={s.posts}>
           {posts}
        </div>
    );
}

export default MyPosts;