"use client";

import { useEffect, useState } from "react";
import { menuConfigItem } from "@/components/menu/menuConfig/menuConfigItem";
import { setActiveMenuName } from "@/store/slices/headerSlice";
import { useDispatch } from "react-redux";

export const MainMenu = () => {
    const [activeKey, setActiveKey] = useState<string | undefined>("");

    const dispatch = useDispatch();

    useEffect(() => {
        // localStorage faqat clientda ishlaydi
        const key =  localStorage.getItem("key");
        setActiveKey(key ? key : menuConfigItem[0]?.key);
    }, []);

    useEffect(() => {
        if (activeKey) {
            dispatch(setActiveMenuName(activeKey));
            // localStorage.setItem("key", activeKey); // clientda saqlash
        }
    }, [activeKey]);

    const onClick = (key: string | undefined) => {
        setActiveKey(key);
    };

    return (
        <div className="w-full bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
                {menuConfigItem.map((item) =>
                    (
                        <div key={item.key} onClick={() => onClick(item.key)} className={ `px-3 sm:px-4 py-2 rounded-md cursor-pointer whitespace-nowrap transition-all duration-200 text-sm sm:text-base ${activeKey === item.key ? "bg-blue-600 text-white shadow" : "text-gray-800 hover:bg-gray-100"}` } >
                            {item.label}
                        </div>
                    ))}
            </div>
        </div>
    );
};
