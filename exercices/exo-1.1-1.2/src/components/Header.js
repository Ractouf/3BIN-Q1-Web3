import vinci from "../vinci.png";

const Header = (props) => {
    return (<div><h1>{props.course}</h1><img src = {vinci} alt = "logo vinci"/></div>)
}

export default Header;