"use client"
import React, { useEffect, useState } from "react";
import { menuConfigItem } from "@/components/menu/menuConfig/menuConfigItem";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setActiveMenuName } from "@/store/slices/headerSlice";

export const MainMenu = ({
                             activeMenu,
                             onClose,
                         }: {
    activeMenu?: boolean;
    onClose?: () => void;
}) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [activeMenuName, setActiveMenuLabel] = useState<string | null>(null);
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

    // Load active menu from localStorage on mount
    useEffect(() => {
        const savedName = localStorage.getItem("activeMenuName");
        const savedItem = localStorage.getItem("activeMenuItem");

        setActiveMenuLabel(savedName);
        setActiveMenuItem(savedItem);
        dispatch(setActiveMenuName(savedName));
    }, []);

    // Handle menu click
    const onClick = (key: string) => {
        const menuItem = menuConfigItem.find((item) => item.key === key);

        localStorage.setItem("activeMenuItem", key);
        localStorage.setItem("activeMenuName", menuItem?.description || "");
        localStorage.setItem("activeMenuLabel", menuItem?.label || "");

        setActiveMenuItem(key);
        setActiveMenuLabel(menuItem?.description || "");
        dispatch(setActiveMenuName(menuItem?.description || ""));

        router.push("/" + key);
        onClose?.();
    };

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = activeMenu ? "hidden" : "auto";
    }, [activeMenu]);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm transition-opacity duration-300
          ${activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Sidebar */}
            <div
                className={`fixed z-40 mt-[10px] rounded-r-lg left-0 h-full w-[300px] bg-white shadow-xl transition-transform duration-300
          ${activeMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Menu
                    mode="inline"
                    style={{
                        border: "none",
                        padding: "10px",
                        backgroundColor: "white",
                        borderRadius: "0 10px 0 0",
                        fontSize: "16px",
                        overflow: "auto",
                        height: "90vh",
                    }}
                    //@ts-ignore
                    items={menuConfigItem || []}
                    theme="light"
                    selectedKeys={[activeMenuItem || ""]}
                    onClick={({ key }) => onClick(key)}
                />
            </div>
        </>
    );
};
