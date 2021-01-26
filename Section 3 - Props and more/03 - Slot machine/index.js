class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine
                    s1="X"
                    s2="Y"
                    s3="X"
                />
                <Machine
                    s1="X"
                    s2="X"
                    s3="X"
                />
                <Machine
                    s1="X"
                    s2="Z"
                    s3="Y"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));