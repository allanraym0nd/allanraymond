import { useTheme } from "../context/ThemeContext";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const { currentTheme } = useTheme()

    return (
        <div>
            {children}
        </div>
    )

}

export default Layout;

