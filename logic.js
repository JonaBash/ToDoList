class App extends React.Component {
    constructor(props) {
        super(props)
        this.counter = 0;
        this.new = []
        this.state = {
            what: '',
            date: '',
            new: []
        }
        this.addNewItem = this.addNewItem.bind(this);
    }

    addNewItem() {
        this.counter ++;
        console.log(this.counter)
        var activity = [<Item id={`num${this.counter}`} what={this.what.value} date={this.date.value}/>]
        this.new.push(activity)
        this.setState({
            new: this.new
        })
    }
    render() {
        return (
            <div>
                <input placeholder='my new activity' ref={x => this.what = x} className='input' />
                <input type='date' ref={x => this.date = x} />
                <button onClick={this.addNewItem}>Add</button>
                <ul>
                    {this.state.new}
                </ul>
            </div>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super (props)
        this.doneList = [];
        this.state = {
            done : ''
        }
        this.done = this.done.bind(this)
    }
    done(e) {
        var checked = this.state.done == '' ? 'line-through' : '';
        this.setState({
            done: checked
        })
        this.doneList.push(`${this.props.what}&nbsp;on&nbsp;${this.props.date}`);
        console.log(this.doneList)
    }
    render() {
        return (
            <li style={{'textDecoration':this.state.done}} type='none'><input onClick={this.done} type='checkbox'/>{this.props.what}&nbsp;on&nbsp;{this.props.date}</li>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

