"use client"

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentEmployee} from "@/store/slices/employeesSlice";
import {RootState} from "@/store/store";
import {useRouter} from "next/navigation";
import {Play} from "lucide-react";

export default function MovieGrid() {
    const dispatch = useDispatch();
    const {employees} = useSelector((state: RootState) => state.employees);
    const router = useRouter();

    const [category, setCategory] = useState<string | null>(null);
    const [categoryLabel, setCategoryLabel] = useState<string | null>(null);
    const [categoryDesc, setCategoryDesc] = useState<string | null>(null);

    useEffect(() => {
        setCategory(localStorage.getItem("activeMenuItem"));
        setCategoryLabel(localStorage.getItem("activeMenuLabel"));
        setCategoryDesc(localStorage.getItem("activeMenuName"));
    }, []);

    const handleMovieClick = (emp: any) => {
        dispatch(setCurrentEmployee(emp));
        if (!category || category === "/") {
            router.push(`/home/${emp.id}`);
        } else {
            router.push(`/${category}/${emp.id}`);
        }
    };

    if (employees.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-2xl text-muted-foreground">No movies found. Try a different search!</p>
            </div>
        );
    }

    return (
        <div className={"p-5"}>

            <div className={"mb-4 sm:hidden block flex flex-col"}>
               <span className={"text-[16px]"}> {categoryLabel ? categoryLabel : "Asosiy bo'lim"}</span>
                <span className={"text-[grey] text-[14px]"}>{categoryDesc}</span>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">

                {employees.map((emp) => (
                    <div
                        key={emp.id}
                        onClick={() => handleMovieClick(emp)}
                        className="group relative cursor-pointer overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                        <div className="relative w-full h-64 overflow-hidden">
                            <img
                                src={emp.photo || "/placeholder.svg"}
                                alt={emp.lastName}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        </div>

                        {/*<div*/}
                        {/*    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">*/}
                        {/*    <button className="p-3 bg-primary rounded-full hover:bg-primary/90 transition-colors">*/}
                        {/*        <Play size={28} className="text-primary-foreground fill-primary-foreground"/>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        <div className="p-4 space-y-2">
                            <h3 className="font-bold text-lg text-balance line-clamp-2">{emp.firstName} {emp.lastName}</h3>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-accent font-semibold">{emp.role}</span>
                                <span className="text-yellow-400">★ {emp.rating}</span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{emp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
