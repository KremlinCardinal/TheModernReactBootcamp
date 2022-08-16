class Hello extends React.Component {
    render() {
        const { to, from } = this.props;
        return <p>Hi {to} from {from}!</p>;
    }
}