// ForgotPasswordModal.tsx
"use client";

import { Modal, Form, Input, Button, message } from "antd";
import { useState } from "react";

interface ForgotPasswordModalProps {
    open: boolean;
    setOpen: (val: boolean) => void;
}

export default function ForgotPasswordModal({ open, setOpen }: ForgotPasswordModalProps) {
    const [step, setStep] = useState<1 | 2>(1); // 1: telefon, 2: kod
    const [form] = Form.useForm();
    const [phone, setPhone] = useState("");

    const sendCode = (values: any) => {
        setPhone(values.phone);
        console.log("Telefon raqam:", values.phone);
        message.success("SMS kodi yuborildi!");
        setStep(2);
    };

    const verifyCode = (values: any) => {
        console.log("SMS kodi:", values.code);
        message.success("Parolni tiklash mumkin!");
        setOpen(false);
        setStep(1);
        form.resetFields();
    };

    return (
        <Modal
            open={open}
            onCancel={() => {
                setOpen(false);
                setStep(1);
                form.resetFields();
            }}
            footer={null}
            centered
            width={380}
            title={step === 1 ? "Parolni tiklash" : "SMS kodni kiriting"}
        >
            <Form form={form} layout="vertical" onFinish={step === 1 ? sendCode : verifyCode}>
                {step === 1 && (
                    <Form.Item
                        label="Telefon raqami"
                        name="phone"
                        rules={[{ required: true, message: "Telefon raqamingizni kiriting!" }]}
                    >
                        <Input placeholder="+998 90 123 45 67" size="large" />
                    </Form.Item>
                )}

                {step === 2 && (
                    <Form.Item
                        label="SMS kod"
                        name="code"
                        rules={[{ required: true, message: "Kodni kiriting!" }]}
                    >
                        <Input placeholder="123456" size="large" />
                    </Form.Item>
                )}

                <Button type="primary" htmlType="submit" size="large" block>
                    {step === 1 ? "Kod yuborish" : "Tasdiqlash"}
                </Button>
            </Form>
        </Modal>
    );
}
