class App extends React.Component {
    constructor(props) {
        super(props)
        this.new = []
        this.state = {
            show: 'none',
            what: '',
            date: ''
        }
    }
    render() {
        return (
            <div>
                <input placeholder='my new activity' ref={(input) => { this.textInput = input; }} className='input' />
                <input type='date' ref={(input) => { this.date = input; }}/>
                <button onClick={() => {
                    this.setState({
                        what: this.textInput.value
                    })
                    this.setState({
                        date: this.date.value
                    })
                    this.new.push(<li className='list'>{`${this.state.what} on ${this.state.date}`}</li>);
                }}>Add</button>
                <ul>
                    {this.new}
                </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);