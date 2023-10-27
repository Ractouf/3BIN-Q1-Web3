import { useNavigate } from 'react-router-dom'
import { Form, Button, Input, Space } from 'antd';

const CreateNew = ({addNew}) => {
    const navigate = useNavigate();

    const handleSubmit = (anecdote) => {
        addNew(anecdote);
        navigate('/');
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <Form onFinish = {handleSubmit}>
                <Space direction = "vertical">
                    <Form.Item
                        label = 'content'
                        name = 'content'
                        rules = {[
                            {
                                required: true,
                                message: 'Please input a content!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label = 'author'
                        name = 'author'
                        rules = {[
                            {
                                required: true,
                                message: 'Please input an author!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label = 'info'
                        name = 'info'>
                        <Input />
                    </Form.Item>

                    <Button type = "primary" htmlType = "submit">Create</Button>
                </Space>
            </Form>
        </div>
    );
}

export default CreateNew;