class Hello extends React.Component {
    render() {
        const { to, from, img } = this.props;
        let bangs = "!".repeat(this.props.bangs);

        return (
            <div>
                <p>Hi {to} from {from}{bangs}</p>
                <img src={img} />
            </div>
        );
    }
}