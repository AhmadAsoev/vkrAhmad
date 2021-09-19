import React, {useState} from "react";
import Post from "../Post/Post";
import PostForm from "../PostForm/PostForm";

function Wall() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https://cutt.ly/PEo7H7O',
                name: 'Четкий пацык с четками',
            },
            content: 'Благодарю Алиф академию за потраченный год',
            likes: 0,
            likedByMe: false,
            created: 1603501200,
        },
    ]);
    const [edited, setEdited] = useState();

    const handleLike = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }

            if (o.likedByMe) {
                const likes = o.likes - 1;
                const likedByMe = !o.likedByMe
                return {...o, likedByMe, likes}
            }

            const likedByMe = !o.likedByMe;
            const likes = o.likes + 1;
            return {...o, likedByMe, likes};
        }));
    };

    const handleRemove = (id) => {
        setPosts((prevState) => prevState.filter(o => {
            if (o.id !== id) {
                return o;
            }

            return null;
        }));
    };

    const handlePostEdit = (id) => {
        const post = posts.find(o => o.id === id);
        if (post === undefined) {
            return;
        }

        setEdited(post);
    };

    const handleSave = (post) => {
        if (edited !== undefined) {
            setPosts((prevState) => prevState.map((o) => {
                if (o.id !== post.id) {
                    return o;
                }

                return {...post};
            }))
            setEdited(undefined);
            return;
        }
        setPosts((prevState) => [{...post}, ...prevState]);
        setEdited(undefined);
    };

    const handleCancel = () => {
        setEdited(undefined);
    };

    return (
        <>
            <PostForm
                edited={edited}
                onSave={handleSave}
                onCancel={handleCancel}
            />
            <div>
                {posts.map(o => <Post
                    key={o.id}
                    post={o}
                    onLike={handleLike}
                    onRemove={handleRemove}
                    onEdit={handlePostEdit}
                />)}
            </div>
        </>
    );
}

export default Wall;