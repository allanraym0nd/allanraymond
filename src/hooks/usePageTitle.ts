import { useEffect } from "react";

export const usePageTitle = (title: string) => {
    useEffect(() => {
        const previousTitle = document.title
        document.title = title ? `Allan Raymond | ${title}` : 'Allan Raymond'

        return () => {
            document.title = previousTitle

        }

    }, [title])

}