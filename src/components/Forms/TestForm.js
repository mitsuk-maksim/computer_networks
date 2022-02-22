import {Button, Form, Input, notification, Select} from "antd";
import React from "react";

export function TestForm() {

    const openNotification = () => {
        notification.open({
            message: 'Ответы записаны',
            // description:
            //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const {Option} = Select;

    return (
        <Form
            name="basic"
            wrapperCol={{
                span: 10,
            }}
            labelCol={{span: 3}}
            initialValues={{
                remember: true,
            }}
            labelAlign='right'
            onFinish={openNotification}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Как жизнь:"
                name="question_1"
                rules={[
                    {
                        required: true,
                        message: 'Это очень важный вопрос',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Сколько будет 2+2:"
                name="question_2"
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Сколько ты зарабатываешь:"
                name="question_3"
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Дистант это круто?"
                name="question_4"
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Какой у тебя универ:"
                name="question_5"
            >
                <Select
                    allowClear
                    onChange
                >
                    <Option value='MPEI'>МЭИ</Option>
                    <Option value='MGTU'>МГТУ</Option>
                    <Option value='MGU'>МГУ</Option>
                    <Option value='other'>Не студент</Option>
                </Select>
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 11,
                    // span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
}