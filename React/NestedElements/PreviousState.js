
class Counter extends React.Component {
    state = {
        count: 0
    };

    incrementCount = () => {
        this.setState((prevState, props) => ({
                count: prevState.count + props.increment
        }));
    }

    render() {
        setTimeout(this.incrementCount, 1500)
        
        return (
            <div>
                <div className="circle">
                    {this.state.count}
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Counter increment={1}/>,
    document.getElementById('previous-state'));



