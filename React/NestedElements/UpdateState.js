class DetailsBox extends React.Component{
    state = {
        name: 'John',
        color: 'green',
        backgroundColor :'pink',
        subject: 'Psychology'
    }

    pickRandomName = () =>{
        var names = [
            'Alice',
            'Bob',
            'Carl',
            'Dora',
            'Elisa'
        ];
        
        var nameIndex = Math.floor(Math.random() * names.length);

        this.setState({
            name: names[nameIndex]
        });
    }

    pickRandomColor = () => {
        var colors = [
            'blue',
            'magenta',
            'lavender',
            'violet',
            'red'
        ];
        var colorIndex = Math.floor(Math.random() * colors.length);

        this.setState({
            color: colors[colorIndex]
        });
    }

    pickRandomBackgroundColor = () => {
        var colors = [
            'lime',
            'skyblue',
            'orange',
            'yellow',
            'purple'
        ];
        var colorIndex = Math.floor(Math.random() * colors.length);

        this.setState({ 
            backgroundColor: colors[colorIndex] 
        });
    }

    pickRandomSubject = () => {
        var subjects = [
            'Math',
            'Science',
            'Biochemistry',
            'Physics',
            'History',
            'Psychology'
        ];
        var subjectIndex = Math.floor(Math.random() * subjects.length);
        this.setState({
           subject: subjects[subjectIndex]
        });
    }
    
    render() {
        const style = {
          color: this.state.color,
          backgroundColor: this.state.backgroundColor
        }

        return (
            <div>
                <div className="details" style={style}>
                    Name: {this.state.name}<br />
                    Subject: {this.state.subject}
                </div>
                <button className="button" onClick={this.pickRandomName}>
                    Change Student Name
                </button>
                <button className="button" onClick={this.pickRandomColor}>
                    Change Text Color
                </button>
                <button className="button" onClick={this.pickRandomBackgroundColor}>
                    Change Background Color
                </button>
                <button className="button" onClick={this.pickRandomSubject}>
                    Change Subject
                </button>
            </div>
        );
    }
}


ReactDOM.render(<DetailsBox />, document.getElementById('react-update-state'));
