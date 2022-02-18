import React from "react";

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Очень приятно, ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Как вас зовут:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    {/*<textarea value={this.state.value} onChange={this.handleChange} />*/}
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}