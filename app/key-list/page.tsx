"use client";
import { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addKeyList } from "@/store/slices/keySlice";
import { RootState } from "@/store/store";

const columns = [
    { title: 'No', dataIndex: 'id', key: 'id', width: 60 },
    {
        title: 'Key title',
        dataIndex: 'key',
        key: 'key',
        render: (text: string) => (
            <span className="truncate-mobile">{text}</span>
        ),
    },
    {
        title: 'Key nomi (UZ)',
        dataIndex: 'title_uz',
        key: 'title_uz',
        render: (text: string) => (
            <span className="truncate-mobile">{text}</span>
        ),
    },
    {
        title: 'Key nomi (EN)',
        dataIndex: 'title_en',
        key: 'title_en',
        render: (text: string) => (
            <span className="truncate-mobile">{text}</span>
        ),
    },
    {
        title: 'Key nomi (RU)',
        dataIndex: 'title_ru',
        key: 'title_ru',
        render: (text: string) => (
            <span className="truncate-mobile">{text}</span>
        ),
    },
];

const KeyList = () => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { keyList } = useSelector((state: RootState) => state.key);

    const handleAdd = () => {
        form.resetFields();
        setOpen(true);
    };

    const handleSubmit = () => {
        const values = form.getFieldsValue();
        const newKey = {
            id: new Date().getTime(),
            ...values,
        };
        dispatch(addKeyList(newKey));
        setOpen(false);
    };

    return (
        <div className="p-[10px] flex flex-col gap-[10px]">

            <div className="flex justify-end mb-2">
                <Button type="primary" onClick={handleAdd}>
                    Key Qo‘shish
                </Button>
            </div>

            <div className="overflow-x-auto">
                <Table
                    dataSource={keyList}
                    columns={columns}
                    rowKey="id"
                    // scroll={{ x: 'max-content' }}
                    className="min-w-[600px]"
                    pagination={false}
                />
            </div>

            <Modal
                title="Yangi Key Qo‘shish"
                open={open}
                onCancel={() => setOpen(false)}
                onOk={handleSubmit}
                okText="Saqlash"
                cancelText="Bekor qilish"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Key nomi"
                        name="key"
                        rules={[{ required: true, message: "Key nomini kiriting!" }]}
                    >
                        <Input placeholder="key" style={{ fontSize: 16 }} />
                    </Form.Item>

                    <Form.Item
                        label="Title (UZ)"
                        name="title_uz"
                        rules={[{ required: true, message: "UZ title ni kiriting!" }]}
                    >
                        <Input placeholder="O‘zbekcha nomi" style={{ fontSize: 16 }} />
                    </Form.Item>

                    <Form.Item
                        label="Title (RU)"
                        name="title_ru"
                        rules={[{ required: true, message: "RU title ni kiriting!" }]}
                    >
                        <Input placeholder="Русское название" style={{ fontSize: 16 }} />
                    </Form.Item>

                    <Form.Item
                        label="Title (ENG)"
                        name="title_en"
                        rules={[{ required: true, message: "ENG title ni kiriting!" }]}
                    >
                        <Input placeholder="English title" style={{ fontSize: 16 }} />
                    </Form.Item>
                </Form>
            </Modal>

            {/* Mobile CSS */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .truncate-mobile {
                        display: inline-block;
                        max-width: 80px; /* mobil ekran uchun 10 ta belgiga yaqin */
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        vertical-align: middle;
                    }
                }
            `}</style>
        </div>
    );
};

export default KeyList;
