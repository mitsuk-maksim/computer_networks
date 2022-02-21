import React from "react";
import {Button, Form, Input} from "antd";

export function NameForm() {
    const onFinish = (values) => {
        console.log('Success:', values);
        alert('Очень приятно, ' + values.username);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            wrapperCol={{
                span: 15,
            }}
            initialValues={{
                remember: true,
            }}
            layout="inline"

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Как вас зовут"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                // wrapperCol={{
                //     offset: 8,
                //     span: 16,
                // }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
}

// export class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Очень приятно, ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Как вас зовут:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                     {/*<textarea value={this.state.value} onChange={this.handleChange} />*/}
//                 </label>
//                 <input type="submit" value="Отправить" />
//             </form>
//         );
//     }
// }