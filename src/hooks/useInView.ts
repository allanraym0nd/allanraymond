import { useRef, useState, useEffect } from "react";


export const useInView = (threshold = 0.1) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsNewView] = useState(false)

    useEffect(() => {
        // intersectionObserver -> watches when elements enter/exit the viewport:
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { // if element enters view port change state
                    setIsNewView(true)
                    observer.unobserve(entry.target) // then stops observing
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
