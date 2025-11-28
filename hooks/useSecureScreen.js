import { useEffect } from "react";

export function useSecureScreen() {
    useEffect(() => {
        // ❌ Right-click block
        const handleContextMenu = (e) => e.preventDefault();

        // ❌ F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C blok
        const handleKeyDown = (e) => {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && e.key === "I") ||
                (e.ctrlKey && e.shiftKey && e.key === "C") ||
                (e.ctrlKey && e.key === "U")
            ) {
                e.preventDefault();
            }
        };

        // ❌ Screenshot events (100% block bo‘lmaydi, lekin bilinadi)
        const handleVisibility = () => {
            if (document.visibilityState === "hidden") {
                console.log("⚠️ Screenshot yoki background app aniqlandi");
            }
        };

        // ❌ Ctrl+P (print) block
        const handleBeforePrint = (e) => {
            e.preventDefault();
            alert("Printing blocked!");
        };

        // Listenerlar qo‘shish
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("visibilitychange", handleVisibility);
        window.addEventListener("beforeprint", handleBeforePrint);

        // cleanup
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("visibilitychange", handleVisibility);
            window.removeEventListener("beforeprint", handleBeforePrint);
        };
    }, []);
}
