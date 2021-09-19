import React from "react";
import './Post.css'

function Post({post, onLike, onRemove, onEdit}) {
    const {author, photo} = post;

    const handleClick = () => {
        onLike(post.id);
    };

    const handleRemove = () => {
        onRemove(post.id);
    }

    const handleEdit = () => {
        onEdit(post.id);
    }

    return (
        <article>
            <header>
                <img src={author.avatar} className="Post-avatar" width="50" height="50" alt={author.name}/>
                <h5 className="Post-name">{author.name}</h5>
                <button className="btn" onClick={handleRemove}>удалить <img src="https://cutt.ly/MEo7EN3" width="50px" height="50px" alt="" /></button>
                <button className="btn" onClick={handleEdit}>изменить <img src="https://cutt.ly/AEo7Mc4"  width="50ps" height="50px" alt="/" /></button>
                <div className="Post-created">{post.created}</div>
            </header>
            <div>
                <div className="Post-content">{post.content}</div>
                {photo && <img src={photo.url} alt={photo.alt}/>}
            </div>
            <footer>
                <span className="Post-likes" onClick={handleClick}>
                    <img
                        src={post.likedByMe ? 'https://cutt.ly/KEo4QS8' : 'https://cutt.ly/WEo4EeC'}
                        alt="likes"
                        width="30px"
                        height="30px"
                    />
                    <span className="Post-likes-count">{post.likes}</span>
                </span>
            </footer>
        </article>
    )
}

export default Post
