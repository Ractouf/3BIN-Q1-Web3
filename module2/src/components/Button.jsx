const Button = ({ changeCount, delta, text }) => {

    function handleClick(e) {
        changeCount(parseInt(e.target.dataset.delta));
    }

    return (
        <button onClick = {handleClick} data-delta = {delta}>{text}</button>
    );
}

export default Button;
