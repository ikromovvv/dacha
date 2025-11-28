import React from "react";
import {useSecureScreen} from "@/hooks/useSecureScreen";


export default function SecureScreenWrapper({ children } : any) {
    useSecureScreen();

    return (
        <div style={{
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none"
        }}>
            {children}
        </div>
    );
}
