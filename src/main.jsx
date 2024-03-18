import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/MainApp/App'
import HistoryProvider from './contexts/historyContext'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<HistoryProvider>
				<App />
			</HistoryProvider>
		</BrowserRouter>
	</React.StrictMode>
)
