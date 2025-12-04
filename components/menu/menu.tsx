"use client";
import React, { useEffect, useState } from "react";
import { menuConfigItem } from "@/components/menu/menuConfig/menuConfigItem";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setActiveMenuName } from "@/store/slices/headerSlice";

export const MainMenu = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [activeMenuName, setActiveMenuLabel] = useState<string | any>(null);
    const [activeMenuItem, setActiveMenuItem] = useState<string | any>(null);

    // Load active menu from localStorage on mount
    useEffect(() => {
        const savedName = localStorage.getItem("activeMenuName");
        const savedItem = localStorage.getItem("activeMenuItem");

        const defaultKey = menuConfigItem[0]?.key;
        const defaultName = menuConfigItem[0]?.description;

        setActiveMenuLabel(savedName || defaultName);
        setActiveMenuItem(savedItem || defaultKey);
        dispatch(setActiveMenuName(savedName || defaultName));
    }, []);

    // Handle menu click
    const onClick = (key: string | number | any) => {
        const menuItem = menuConfigItem.find((item) => item.key === key);

        localStorage.setItem("activeMenuItem", key);
        localStorage.setItem("activeMenuName", menuItem?.description || "");
        localStorage.setItem("activeMenuLabel", menuItem?.label || "");

        setActiveMenuItem(key);
        setActiveMenuLabel(menuItem?.description || "");
        dispatch(setActiveMenuName(menuItem?.description || ""));

        router.push("/" + key);
    };

    return (
        <div className="w-full bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">

                {menuConfigItem.map((item) => (
                    <div
                        key={item.key}
                        onClick={() => onClick(item.key)}
                        className={`
                            px-3 sm:px-4 py-2 rounded-md cursor-pointer whitespace-nowrap 
                            transition-all duration-200 text-sm sm:text-base
                            ${activeMenuItem === item.key
                            ? "bg-blue-600 text-white shadow"
                            : "text-gray-800 hover:bg-gray-100"}
                        `}
                    >
                        {item.label}
                    </div>
                ))}

            </div>
        </div>
    );
};
