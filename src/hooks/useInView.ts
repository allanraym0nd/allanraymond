import { useRef, useState, useEffect } from "react";


export const useInView = (threshold = 0.1) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsNewView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsNewView(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold,
                rootMargin: '50px'
            }
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }

        }

    }, [threshold])

    return { isInView, ref }


}
