import React from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeIn = ({ threshold = 0.15, triggerOnce = false, distance = 100, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      style={{
        transition: "opacity 1000ms, transform 300ms",
        opacity: inView ? 1 : 0,
        // transform: `translateY(${inView ? 0 : distance}px)`,
      }}
      {...remainingProps}
      ref={ref}
    />
  )
}

export const FadeTop = ({ threshold = 0.15, triggerOnce = false, distance = 100, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      style={{
        transition: "opacity 1000ms, transform 1000ms",
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : -distance}px)`,
      }}
      {...remainingProps}
      ref={ref}
    />
  )
}

export const FadeLeft = ({ threshold = 0.15, triggerOnce = false, distance = 100, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      style={{
        transition: "opacity 1000ms, transform 1000ms",
        opacity: inView ? 1 : 0,
        transform: `translateX(${inView ? 0 : -distance}px)`,
      }}
      {...remainingProps}
      ref={ref}
    />
  )
}