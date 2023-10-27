import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, Input, Space } from 'antd';

const CreateNew = (props) => {
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [info, setInfo] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNew({
            content,
            author,
            info,
            votes: 0
        });
        navigate('/');
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit = {handleSubmit}>
                <Space direction = "vertical">
                    <Space.Compact>
                        <Input placeholder = 'content' value = {content} onChange={(e) => setContent(e.target.value)} />
                    </Space.Compact>

                    <Space.Compact>
                        <Input placeholder = 'author' value = {author} onChange={(e) => setAuthor(e.target.value)} />
                    </Space.Compact>

                    <Space.Compact>
                        <Input placeholder = 'info' value = {info} onChange={(e)=> setInfo(e.target.value)} />
                    </Space.Compact>

                    <Button type = "primary">create</Button>
                </Space>
            </form>
        </div>
    );
}

export default CreateNew;