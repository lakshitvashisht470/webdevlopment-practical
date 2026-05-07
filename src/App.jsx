import React, { useContext } from 'react'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function AppContent() {
	const { theme } = useContext(ThemeContext)
	const styles = {
		height: '100vh',
		display: 'flex',
		gap: '16px',
		justifyContent: 'center',
		alignItems: 'center',
		background: theme === 'dark' ? '#000' : '#fff',
		color: theme === 'dark' ? '#fff' : '#000',
		transition: 'background 0.2s, color 0.2s'
	}
	return (
		<div style={styles}>
			<h1>Theme demo</h1>
			<ThemeToggle />
		</div>
	)
}

export default function App() {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	)
}
