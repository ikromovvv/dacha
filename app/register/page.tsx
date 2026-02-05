"use client";

import { Form, Input, Select, Upload, Button, Card, ConfigProvider } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {API_URL, headers, useHttp} from "@/api/api";

const { Option } = Select;
const data = [
    {first_name: "Karoke" , phone_number: "770070782" , role_id: 5 },
    {first_name: "Ps 4" , phone_number: "998981234701" , role_id: 5 },
    {first_name: "Ps 4" , phone_number: "98 123 47 01" , role_id: 5 },
]


export default function Register() {
    const {request}= useHttp()

    const onFinish = () => {
        data.map(item => {
            return request(
                `${API_URL}auth/users/`,
                "POST",
                // @ts-ignore
                JSON.stringify(item),
                headers()
            );
        });
    };


    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 16,
                },
            }}
        >
            <div style={{ maxWidth: 500, margin: "40px auto" }}>
                <Card title="Ro'yxatdan o'tish">
                    <Form layout="vertical" onFinish={onFinish}>
                        {/* Lavozim */}
                        <Form.Item
                            label="Lavozim"
                            name="role"
                            rules={[{ required: true, message: "Lavozimni tanlang" }]}
                        >
                            <Select placeholder="Tanlang">
                                <Option value="oshpaz">Oshpaz</Option>
                                <Option value="ofitsiant">Ofitsiant</Option>
                                <Option value="taksist">Taksist</Option>
                            </Select>
                        </Form.Item>

                        {/* Ism */}
                        <Form.Item
                            label="Ism"
                            name="firstName"
                            rules={[{ required: true, message: "Ismni kiriting" }]}
                        >
                            <Input />
                        </Form.Item>

                        {/* Familiya */}

                        {/* Otasining ismi */}


                        {/* Tug'ilgan sana */}


                        {/* Manzil */}
                        <Form.Item label="Manzil" name="address">
                            <Input.TextArea rows={3} />
                        </Form.Item>

                        {/* Rasmlar */}
                        <Form.Item
                            label="Rasmlar"
                            name="photo"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e?.fileList}
                        >
                            <Upload
                                listType="picture-card"
                                multiple
                                maxCount={6}
                                beforeUpload={() => false}
                                showUploadList={{
                                    showPreviewIcon: false,
                                    showRemoveIcon: true,
                                }}
                            >
                                <div>
                                    <UploadOutlined />
                                    <div style={{ marginTop: 8 }}>Yuklash</div>
                                </div>
                            </Upload>
                        </Form.Item>

                        <Button type="primary" htmlType="submit" block>
                            Yuborish
                        </Button>
                    </Form>
                </Card>
            </div>
        </ConfigProvider>
    );
}
