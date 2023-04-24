/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { css } from '@emotion/react'
import ErrorContainer from './ErrorContainer'



const buttonStyle = css`
    background-color: #2b7bbe;
    color: #fff;
    border: 2px solid #2b7bbe;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 300;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer; 

    &:hover {
        background-color: gainsboro;
    }

`
const h1Style = css`
    font-family: sans-serif; 
    font-size: 40px;
    font-weight: normal;
`

const inputFieldStyle = css`
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-size: 18px;
`
const formStyle = css`
    align-content: center;
`

const divStyling = css`
    background-color: royalblue;
    border: 1px, solid dimgray;
    padding: 8px;
    padding-top: 4px;
    border-radius: 5px;
    width: fit-content;
    display: inline-block;
    margin: 10px;

    p {
        color: white;
    }

    h2 {
        color: white;
    }
`

function Search({ query }){
const [inputQuery, setInputQuery] = useState(query || "")
const [searchParams, setSearchParams] = useSearchParams()

const [ weatherList, setWeatherList ] = useState([])
const [ loading, setLoading ] = useState(false)
const [ error, setError ] = useState(false)

//console.log("==Weather Data: ", weather)

useEffect(() => {
    let ignore = false
    const controller = new AbortController()

    
    async function fetchSearchResults(){
        setLoading(true)
        let responseBody = {}

        try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=ab666ce188c59eb4ef091d17f0fbb0ce`, { signal: controller.signal })
        responseBody = await response.json()
        } catch (e) {
            if (e instanceof DOMException){
                console.log("HTTP Request has been Cancelled")
            }
            else {
                setError(true)
                console.error("Error: ", e)
                throw e
            }

        }
        //cleanup function to ignore the results on next search query
        if(!ignore){
        setWeatherList(responseBody.list || [])
        setLoading(false)
        setError(false)
        }
   
    }

    if (query) {
        fetchSearchResults()
    }

    return () => { 
        ignore = true 
        controller.abort()
    }

}, [ query ])


const weatherData = Object.keys(weatherList).map((key) => {
    return weatherList[key]
})



return(

    <div>
        <h1 css={h1Style}>🌞Welcome to My Weather App!🌞</h1>
        <form css={formStyle} onSubmit={e => {
            e.preventDefault()
            setSearchParams({q: inputQuery})
        }}>
            <input css={inputFieldStyle} value={inputQuery} onChange={e => setInputQuery(e.target.value)}></input>
            <button css={buttonStyle} type="submit">Search</button>
        </form>
        
        {error && <ErrorContainer>An error occurred......</ErrorContainer>}
        <h2 css={h1Style}>The Weather for {query}: </h2>
        {loading ? <Spinner/> : (
            <>
        <div css={divStyling} className='containerForWeatherData'>
            <p className='pClassWData'>🌡️Low: 34</p>
            <p className='pClassWData'>🌡️High: 63</p>
            <p className='pClassWData'>☔Precepatation Chance: 0 %</p>
            <p className='pClassWData'>Sunny</p>
        </div>
        <div css={divStyling} className='containerForWeatherData'>
            <p className='pClassWData'>🌡️Low: 18</p>
            <p className='pClassWData'>🌡️High: 32</p>
            <p className='pClassWData'>☔Precepatation Chance: 80 %</p>
            <p className='pClassWData'>Cloudy with a good chance of rain</p>
        </div>
        <div css={divStyling} className='containerForWeatherData'>
            <p className='pClassWData'>🌡️Low: 17</p>
            <p className='pClassWData'>🌡️High: 28</p>
            <p className='pClassWData'>☔Precepatation Chance: 100 %</p>
            <p className='pClassWData'>Snow</p>
        </div>
        <div css={divStyling} className='containerForWeatherData'>
            <p className='pClassWData'>🌡️Low: 28</p>
            <p className='pClassWData'>🌡️High: 52</p>
            <p className='pClassWData'>☔Precepatation Chance: 40 %</p>
            <p className='pClassWData'>Cloudy with a chance of rain</p>
        </div>
        <div css={divStyling} className='containerForWeatherData'>
            <p className='pClassWData'>🌡️Low: 30</p>
            <p className='pClassWData'>🌡️High: 59</p>
            <p className='pClassWData'>☔Precepatation Chance: 70 %</p>
            <p className='pClassWData'>Cloudy with a chance of rain</p>
        </div>
        </>
        )}
        
    </div>
)

}

 
export default Search