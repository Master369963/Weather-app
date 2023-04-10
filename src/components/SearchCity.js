import styled from "styled-components"
import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions, geoApi_URL } from "./Tools/Api"
import { filterDuplicateCities } from "./Tools/ForeCastFn"

const SearchWrapper = styled.div`
  position: relative;
  margin: 2rem 0;
`

const WeatherSetting = ({ onSearchChange }) => {
  const handleOnChange = (searchData) => {
    onSearchChange(searchData)
  }

  const loadOptions = (inputValue) => {
    return fetch(`${geoApi_URL}/cities?minPopulation=100000&namePrefix=${inputValue}&types=CITY&limit=10`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        if (!response.message) {
          const allOptions = response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode} `,
            }
          })
          const options = filterDuplicateCities(allOptions)

          return {
            options,
          }
        } else {
          return { options: [] }
        }
      })
      .catch((error) => console.err(error))
  }

  const inactivedColor = 'var(--primary_light_a03)'

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007bff' : 'white',
      color: state.isSelected ? 'white' : 'black',
      fontSize: '1.6rem',
      transition: 'all .2s ease',
      '&:hover': {
        backgroundColor: 'var(--secondary)',
      }
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '4px',
      maxHeight: '200px',
      overflow: 'auto',
      fontSize: '1.6rem',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--text_default_light)',
    }),
    input: (provided) => ({
      ...provided,
      color: 'white',
      letterSpacing: '1px',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: `1px solid ${inactivedColor}`,
      fontSize: '1.6rem',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: inactivedColor,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      svg: {
        fill: inactivedColor,
      }
    }),
  };

  return (
    <SearchWrapper>
      {/* <SearchInput
        id="location"
        name="location"
        list="location-list"
        placeholder="Search city"
      />
      <datalist id="location-list">

      </datalist> */}
      <AsyncPaginate
        placeholder="Search City"
        debounceTimeout={700}
        value=""
        loadOptions={loadOptions}
        onChange={handleOnChange}
        pageLimit={10}
        styles={customStyles}
      />
      {/* <SearchBtn>
        <GoSearch />
      </SearchBtn> */}
    </SearchWrapper >
  )
}

export default WeatherSetting