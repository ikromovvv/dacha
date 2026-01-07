"use client";

import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentEmployee } from "@/store/slices/employeesSlice";
import { useRouter } from "next/navigation";
import { API_URL, headers, useHttp } from "@/api/api";
import { Riple } from "react-loading-indicators";
import {RootState} from "@/store/store";

export default function MovieGrid() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { request } = useHttp();

    const [employer, setEmployer] = useState<any[]>([]);
    // const [activeMenuName, setActiveMenuName] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const {activeMenuName} = useSelector((state: RootState) => state.header)


    localStorage.setItem("key" , activeMenuName)

    useEffect(() => {
        request(`${API_URL}auth/users/`, "GET", null, headers())
            .then(res => {
                setEmployer(res);
                setLoading(false);
            });
    }, []);

    const handleMovieClick = (emp: any) => {
        dispatch(setCurrentEmployee(emp));
        router.push(`/home/${emp.id}`);
    };

    const filteredEmployer = employer.filter(
        emp => emp?.role?.name === activeMenuName
    );

    if (!loading && filteredEmployer.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-2xl text-muted-foreground">
                    Hozircha foydalanuvchilar yo‘q
                </p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Riple color="#548954" size="large" />
            </div>
        );
    }

    return (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEmployer.map(emp => (
                <div
                    key={emp.id}
                    onClick={() => handleMovieClick(emp)}
                    className="cursor-pointer rounded-lg border hover:shadow-xl"
                >
                    <img
                        src={emp?.photos[0]?.image || "/placeholder.svg"}
                        className="h-64 w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold">
                            {emp.first_name} {emp.last_name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {emp?.role?.name}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
