"use client";

import { useEffect, useState } from "react";
import { menuConfigItem } from "@/components/menu/menuConfig/menuConfigItem";
import { setActiveMenuName } from "@/store/slices/headerSlice";
import { useDispatch } from "react-redux";

export const MainMenu = () => {
    const [activeKey, setActiveKey] = useState<string | undefined>("");

    const [key , setKey] = useState(localStorage.getItem("key"))
    const dispatch = useDispatch();

    useEffect(() => {
        // localStorage faqat clientda ishlaydi

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
            <div className="max-w-7xl mx-auto px-4 py-3 flex gap-4 overflow-x-auto">
                {menuConfigItem.map(item => (
                    <button
                        key={item.key}
                        onClick={() => onClick(item.key)}
                        className={`
                            px-4 py-2 rounded-md
                            ${activeKey === item.key
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100"
                        }
                        `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
