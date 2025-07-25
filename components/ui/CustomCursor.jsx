'use client'
import { useState, useEffect, useRef } from 'react'

const CustomCursor = () => {
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPos({ x: e.clientX + 6, y: e.clientY + 6 })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const lerp = (start, end, amount) => start + (end - start) * amount

    const animate = () => {
      setCurrentPos((prev) => {
        const newX = lerp(prev.x, targetPos.x, 0.03) // slower catch-up
        const newY = lerp(prev.y, targetPos.y, 0.03)
        return { x: newX, y: newY }
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [targetPos])

  return (
    <div
      className={`fixed pointer-events-none z-50 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#314B6E] rounded-full transition-opacity duration-300 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: `${currentPos.x}px`,
        top: `${currentPos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

export default CustomCursor
