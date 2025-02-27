import { LanguageSwitcher } from "@features/localization/ui/LanguageSwitcher";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <div>
            <h1>Default Layout</h1>
            <LanguageSwitcher />
            <Outlet />
        </div>
    )
}