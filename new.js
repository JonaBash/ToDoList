var date_utils = {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    years: [2018, 2019, 2020, 2021, 2022]
};


handleSubmit(event) {
    console.log('submit event');
    event.preventDefault();
    var new_activity = {
        name = this.name.value,
        day = this.day.value,
        month = this.month.value,
        year = this.year.value
    };
    this.state.activities.push(new_activity);
    this.setState({
        activities: this.state.activities
    });
}

{this}

renderOptions(arr) {
    return arr.map(x => <option key={x} value={x}>{x}</option>);
}
class App extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='new activity'></input>
                    <select>
                        {this.renderOptions(dateUtils.days)}
                    </select>
                    <select>
                        {this.renderOptions(dateUtils.months)}
                    </select>
                    <select>
                        {this.renderOptions(dateUtils.years)}
                    </select>
                    <input type='submit' value='add'></input>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
