import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FILTER_BY_CODE } from '../config'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: 800;
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: 800;
  }
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: start;

  & > b {
    font-weight: 800;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
`

const Info = (props) => {
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld = [],
    currencies = {},
    languages = {},
    borders = []
  } = props

  const navigate = useNavigate()

  const [neighbors, setNeighbors] = useState([])

  useEffect(() => {
    if(borders.length)
        axios.get(FILTER_BY_CODE(borders)).then(({ data }) => setNeighbors(data.map(c => c.name.common)))
  }, [borders])

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name.common} />

      <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native name:</b>{' '}
              {name.nativeName[Object.keys(name.nativeName)[0]].common}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top level domain:</b>
              {tld.map((d) => (
                <span key={d}> {d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currencies:</b>
              {Object.entries(currencies).map((c) => (
                <span key={c[0]}> {c[1].name}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages:</b>
              {Object.values(languages).map((l) => (
                <span key={l}> {l}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!neighbors.length ? (
            <span> There are no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((n) => (
                <Tag key={n} onClick={() => navigate(`/country/${n}`)}>{n}</Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
}

export default Info
