import {Layout, Menu} from 'antd'
import About from "./About";
import Jokes from "./Jokes";
import {Route, Routes, useNavigate} from "react-router-dom";
import Joke from "./Joke";
const {Header, Content} = Layout

const App = () => {
    const navigate = useNavigate();

    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
                    <Menu.Item onClick = {() => navigate('/jokes')}>Jokes</Menu.Item>
                    <Menu.Item onClick = {() => navigate('/about')}>About</Menu.Item>
                </Menu>
            </Header>

            <Content style={{padding: '30px 50px'}}>
                <Routes>
                    <Route path="/jokes" element={<Jokes/>}/>
                    <Route path="/jokes/:id" element={<Joke/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Content>
        </Layout>
    )
}

export default App
