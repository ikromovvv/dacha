"use client";

import { Form, Input, Select, Upload, Button, Card, ConfigProvider } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function Register() {
    const onFinish = (values: any) => {
        console.log("Yuborilgan ma'lumotlar:", values);
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
                        <Form.Item
                            label="Familiya"
                            name="lastName"
                            rules={[{ required: true, message: "Familiyani kiriting" }]}
                        >
                            <Input />
                        </Form.Item>

                        {/* Otasining ismi */}
                        <Form.Item label="Otasining ismi" name="fatherName">
                            <Input />
                        </Form.Item>

                        {/* Tug'ilgan sana */}
                        <Form.Item
                            label="Tug'ilgan sana"
                            name="birthDate"
                            rules={[{ required: true, message: "Sanani tanlang" }]}
                        >
                            <Input type="date" />
                        </Form.Item>

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
