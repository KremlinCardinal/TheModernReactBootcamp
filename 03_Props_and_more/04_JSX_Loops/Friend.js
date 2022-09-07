class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>
    );
  }
}

// CODE EXAMPLES
// hobbies.map(h => <li>{h}</li>);

// IS THE SAME AS

// hobbies.map(h => {
//     return <li>{h}</li>;
// });

// OR

// hobbies.map(function (h) {
//     return <li>{h}</li>;
// });

// ARROW FUNCTIONS WITHOUT BRACES IMPLICITLY RETURN
