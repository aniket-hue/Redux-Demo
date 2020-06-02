import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <div>
                <CounterOutput value={this.props.ctr.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSub} />
                <hr />
                <ul>
                    {
                        [...this.props.ctr.result].map(data => {

                            return (
                                < li onClick={() => this.props.onDelete(data.id)} key={data.id}>{data.value}</li>
                            );
                        })
                    }
                </ul>
            </div >
        );
    }
}

const mapStateToProps = state => {

    return {
        ctr: state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' }),
        onAdd: () => dispatch({ type: 'ADD', value: 5 }),
        onSub: () => dispatch({ type: 'SUB', value: 5 }),
        onDelete: (id) => dispatch({ type: 'DELETE', value: id }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);