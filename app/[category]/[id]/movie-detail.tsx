"use client"

import {useSelector} from "react-redux";
import type {RootState} from "@/store/store";

import MovieGrid from "@/components/movie-grid";
import {ArrowLeft} from "lucide-react";
import {List, Input, Button, Form, Rate} from "antd";
import {useEffect, useState} from "react";
import EmployeeInfo from "@/components/user-info/movie-info";
import {API_URL, headers, useHttp} from "@/api/api";

export const MovieDetail = ({id}: any) => {

    const [emp, setEmp] = useState({})
    const {request} = useHttp()

    useEffect(() => {

        request(`${API_URL}auth/users/${id}`, "GET", null, headers())
            .then(res => {
                console.log(res)
                setEmp(res)
            })
    }, [])

    const [comments, setComments] = useState<
        { author: string; content: string; rating: number }[]
    >([
        {author: "Ali", content: "Ajoyib odam!", rating: 5},
        {author: "Vali", content: "Juda foydali ma’lumot berdi", rating: 4},
    ]);

    const [form] = Form.useForm();

    const handleAddComment = (values: any) => {
        setComments([
            ...comments,
            {
                author: "Siz",
                content: values.comment,
                rating: values.rating,
            },
        ]);
        form.resetFields();
    };

    if (!emp) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Profile not found</h1>
                    <button
                        className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                        <ArrowLeft size={20}/>
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground container mx-auto sm:px-[25px] px-[15px] py-[15px]">
            <EmployeeInfo emp={emp}/>

            {/*<div className="mt-8">*/}
            {/*    <h2 className="text-2xl font-bold mb-4">Kommentlar</h2>*/}

            {/*    <List*/}
            {/*        className="comment-list ml-[5px]"*/}
            {/*        header={`${comments.length} komment`}*/}
            {/*        itemLayout="horizontal"*/}
            {/*        dataSource={comments}*/}
            {/*        renderItem={(item) => (*/}
            {/*            <div*/}
            {/*                className="p-4 border rounded-lg bg-gray-50 mt-[10px] mb-[10px] flex justify-between items-start">*/}

            {/*                /!* Chap taraf: Author + Comment *!/*/}
            {/*                <div>*/}
            {/*                    <p className="font-semibold text-[17px]">{item.author}</p>*/}
            {/*                    <p className="mt-2">{item.content}</p>*/}
            {/*                </div>*/}

            {/*                <Rate disabled value={item.rating}/>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    /> */}


            {/*    <Form form={form} onFinish={handleAddComment} className="mt-4">*/}
            {/*        <Form.Item*/}
            {/*            name="rating"*/}
            {/*            label="Baho bering"*/}
            {/*            rules={[{required: true, message: "Baho qo‘ying!"}]}*/}
            {/*        >*/}
            {/*            <Rate/>*/}
            {/*        </Form.Item>*/}

            {/*        <Form.Item*/}
            {/*            name="comment"*/}
            {/*            rules={[{required: true, message: "Komment yozing!"}]}*/}
            {/*        >*/}
            {/*            <Input.TextArea*/}
            {/*                style={{fontSize: "16px"}}*/}
            {/*                rows={3}*/}
            {/*                placeholder="Komment yozing..."*/}
            {/*            />*/}
            {/*        </Form.Item>*/}

            {/*        <Form.Item>*/}
            {/*            <Button type="primary" htmlType="submit">*/}
            {/*                Yuborish*/}
            {/*            </Button>*/}
            {/*        </Form.Item>*/}
            {/*    </Form>*/}
            {/*</div>*/}

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Boshqalar :</h2>
                <MovieGrid/>
            </div>
        </div>
    );
};
