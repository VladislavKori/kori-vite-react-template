import { useTranslation } from "react-i18next"

export function HomePage() {
    const { t } = useTranslation()

    return (
        <div>
            Home Page
            <p>{t("hello")}</p>
        </div>
    )
}