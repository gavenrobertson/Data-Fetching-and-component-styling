import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'


import Search from './pages/Search'

function App() {
    const [ searchParams ] = useSearchParams()
    return (
        <Routes>
            <Route path="/"
            element={<Search query={searchParams.get("q")} /> } />


        </Routes>
        
    )
}



export default App
