import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const style = {
    padding: '8px 12px',
    background: theme === 'dark' ? '#111' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    border: '1px solid',
    borderColor: theme === 'dark' ? '#333' : '#ccc',
    cursor: 'pointer'
  }

  return (
    <button onClick={toggleTheme} style={style}>
      Switch to {theme === 'dark' ? 'light' : 'dark'} theme
    </button>
  )
}
