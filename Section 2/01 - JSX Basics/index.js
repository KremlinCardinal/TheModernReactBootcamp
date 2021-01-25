class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Image!</h1>
                <img src="https://images.unsplash.com/photo-1611518229032-de72ef58bcca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80" />
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));