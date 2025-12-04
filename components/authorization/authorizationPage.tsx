import { Modal, Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import RegisterModal from "@/components/authorization/registerModal";
import {useState} from "react";
import ForgotPasswordModal from "@/components/authorization/forgotPassword";

export const AuthorizationPage = ({ active, setActive }: any) => {
    const [form] = Form.useForm();
    const [openRegister , setOpenRegister] = useState(false)
    const [openForgot, setOpenForgot] = useState(false);

    const onFinish = (values: any) => {
        console.log("Login values:", values);
        setActive(false);
    };

    return (
        <Modal
            open={active}
            onCancel={() => setActive(false)}
            footer={null}
            centered
            width={380}
        >
            <div style={{ textAlign: "center", marginBottom: 30 }}>
                <h2 style={{ margin: 0 }}>Kirish</h2>
                <p style={{ color: "#888", marginTop: 8 }}>
                    Profilingizga kirish uchun ma’lumotlarni kiriting
                </p>
            </div>

            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Login"
                    name="login"
                    rules={[{ required: true, message: "Loginni kiriting!" }]}
                >
                    <Input
                        size="large"
                        prefix={<UserOutlined />}
                        placeholder="Login yoki email"
                    />
                </Form.Item>

                <Form.Item
                    label="Parol"
                    name="password"
                    rules={[{ required: true, message: "Parolni kiriting!" }]}
                >
                    <Input.Password
                        size="large"
                        prefix={<LockOutlined />}
                        placeholder="Parol"
                    />
                </Form.Item>

                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    style={{ marginTop: 10 }}
                >
                    Kirish
                </Button>

                <div
                    style={{
                        marginTop: 15,
                        textAlign: "center",
                        color: "#1677ff",
                        cursor: "pointer",
                    }}
                    onClick={() => setOpenForgot(true)}

                >
                    Parolni unutdingizmi?
                </div>

                <div
                    style={{
                        marginTop: 20,
                        textAlign: "center",
                        color: "#444",
                        fontSize: 14,
                    }}
                >
                    Akauntingiz yo‘qmi?{" "}
                    <span
                        onClick={()=> setOpenRegister(true)}
                        style={{
                            color: "#1677ff",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
            Ro‘yxatdan o‘tish
          </span>
                </div>
            </Form>
            <ForgotPasswordModal open={openForgot} setOpen={setOpenForgot} />

            <RegisterModal open={openRegister} setOpen={setOpenRegister}/>
        </Modal>
    );
};
