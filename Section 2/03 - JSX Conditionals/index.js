function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>Contrats you win!</h2>
                    <img src="https://images.unsplash.com/photo-1611518229032-de72ef58bcca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80" />
                </div>;
        } else {
            msg = <p>Sorry you lost!</p>
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));