import React from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeIn = ({ threshold = 0.15, triggerOnce = false, yDistance = 100, xDistance = 100, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      style={{
        transition: "opacity 1000ms, transform 1000ms",
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : yDistance}px) translateX(${inView ? 0 : xDistance}px)`,
      }}
      {...remainingProps}
      ref={ref}
    />
  )
}