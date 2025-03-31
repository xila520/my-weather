import React, { useState } from 'react'
import styled from 'styled-components'

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  input {
    padding: 10px;
    margin-right: 10px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
`
interface IProps {
  defaultCity?: string
  onSearch?: (city: string) => void
}

const WeatherForm: React.FC<IProps> = ({ defaultCity, onSearch }) => {
  const [city, setCity] = useState(defaultCity || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch?.(city)
    }
  }

  return (
    <SearchForm onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        name='city'
        placeholder='输入城市拼音名称'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type='submit'>搜索</button>
    </SearchForm>
  )
}

export default WeatherForm
