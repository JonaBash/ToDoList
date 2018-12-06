class App extends React.Component {
    constructor(props) {
        super(props)
        this.counter = 0;
        // this.new = []
        this.state = {
            show: 'none',
            what: '',
            date: '',
            new: []
        }
    }
    // addActivity () {

    // }
    render() {
        return (
            <div>
                <input placeholder='my new activity' ref={(input) => { this.textInput = input; }} className='input' />
                <input type='date' ref={(input) => { this.date = input; }}/>
                <button onClick={(e) => {
                    this.counter ++;
                    console.log(this.counter);
                    e.preventDefault();
                    this.setState({
                        what: this.textInput.value
                    })
                    console.log(this.state.what)
                    this.setState({
                        date: this.date.value
                    })
                    this.state.new.push(<li key={this.counter} className='list'>{`${this.state.what} on ${this.state.date}`}</li>);
                    this.setState({
                        new: this.state.new
                    })
                }}>Add</button>
                <ul>
                    {this.state.new}
                </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);