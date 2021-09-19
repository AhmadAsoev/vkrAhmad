import React, {useEffect, useRef, useState} from "react";
import './PostForm.css';

const empty = {
    id: 0,
    author: {
        avatar: 'https://cutt.ly/PEo7H7O',
        name: 'OpenJS',
    },
    content: '',
    photo: null,
    likes: 0,
    likedByMe: false,
    created: 0,
}

export default function PostForm({edited = empty, onSave, onCancel}) {
    const [post, setPost] = useState(edited);
    const firstFocusEl = useRef(null);
    useEffect(() => {
        setPost(edited);
    }, [edited])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const parsed = post.tags?.map(o => o.replace('#', '')).filter(o => o.trim() !== '') || [];
        const tags = parsed.length !== 0 ? parsed : null;
        onSave({
            ...post,
            id : post.id || Date.now(),
            created: post.created || Date.now(),
            tags,
            photo: post.photo?.url ? {alt: '', ...post.photo} : null
        });
        setPost(empty);
        firstFocusEl.current.focus();
    };

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        if (name === 'tags') {
            const parsed = value.split(' ');
            setPost((prevState) => ({...prevState, [name]: parsed}));
            return;
        }

        if (name === 'photo') {
            setPost((prevState) => ({...prevState, photo: {url: value, alt: post.photo?.alt || ''}}));
            return;
        }

        if (name === 'alt') {
            setPost((prevState) => ({...prevState, photo: {url: post.photo?.url, alt: value}}));
            return;
        }

        setPost((prevState) => ({...prevState, [name]: value}));
    };

    const handleCancel = () => {
        setPost(empty);
        onCancel();
    };

    return (
        <form>
            <textarea
                ref={firstFocusEl}
                name="content"
                placeholder="content"
                value={post.content || ''}
                onChange={handleChange}
            />
            <button className="btn" onClick={handleSubmit}>Ok <img src="https://cutt.ly/AEo6RkS" width="50px" height="50px" alt="/" /></button>
            {post.id !== 0 && <button className="btn" onClick={handleCancel}>Отменить <img src="https://cutt.ly/bEo6HKd" width="50px" height="50px" alt="/" /></button>}
        </form>
    )
}