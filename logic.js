class App extends React.Component {
    constructor(props) {
        super(props)
        this.counter;
        this.new = []
        this.state = {
            show: 'none',
            what: '',
            day: '',
            month: '',
            year: ''
        }
    }
    render() {
        return (
            <div>
                <input placeholder='my new activity' ref={(input) => { this.textInput = input; }} />
                <select ref={(value)=> {this.d = value}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select ref={(value)=> {this.m = value}}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <select ref={(value)=> {this.y = value}}>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
                <input type='date'/>
                <button onClick={() => {
                    this.counter ++;
                    // this.setState({
                    //     show: 'block'
                    // })
                    this.setState({
                        what: this.textInput.value
                    })
                    this.setState({
                        day: this.d.value
                    })
                    this.setState({
                        month: this.m.value
                    })
                    this.setState({
                        year: this.y.value
                    })
                    this.new.push(<li>{`${this.state.what} on ${this.state.day}/${this.state.month}/${this.state.year}`}</li>);
                    // <p>&#8226; {this.state.what} on {this.state.day}/{this.state.month}/{this.state.year}</p>
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