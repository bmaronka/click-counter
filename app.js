class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.start,
    }

    handleMathClick = (type, number) => {
        if (type === 'subtraction') {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result - number,
            }))
        } else if (type === 'reset') {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: this.props.start,
            }))
        } else if (type === 'addition') {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result + number,
            }))
        } else if (type === 'multiplication') {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result * number,
            }))
        } else if (type === 'division') {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result / number,
            }))
        }
    }

    render() {
        return (
            <>
                <MathButton
                    name='-10'
                    number='10'
                    type='subtraction'
                    click={this.handleMathClick}
                />
                <MathButton
                    name='/2'
                    number='2'
                    type='division'
                    click={this.handleMathClick}
                />
                <MathButton
                    name='Reset'
                    type='reset'
                    click={this.handleMathClick}
                />
                <MathButton
                    name='x2'
                    number='2'
                    type='multiplication'
                    click={this.handleMathClick}
                />
                <MathButton
                    name='10'
                    number='10'
                    type='addition'
                    click={this.handleMathClick}
                />
                <ResultPanel
                    count={this.state.count}
                    result={this.state.result}
                />
            </>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number);

    return (
        <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    )
}

const ResultPanel = (props) => {
    return (
        <React.Fragment>
            <h1>Number of clicks: {props.count}{props.count > 10 ? <span> Too many clicks!</span> : null}</h1>
            <h1>Result:  {props.result}</h1>
        </React.Fragment>
    )
}

const startValue = 0;

ReactDOM.render(<Counter start={startValue} />, document.getElementById('root'));