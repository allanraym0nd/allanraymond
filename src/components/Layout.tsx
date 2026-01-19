import { useTheme } from "../context/ThemeContext";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const { currentTheme } = useTheme()

    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-600 dark:text-gray-300">
            {children}
        </div>
    )

}

export default Layout;