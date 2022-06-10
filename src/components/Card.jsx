import styled from 'styled-components'

const Wrapper = styled.article`
    border-radius: 4px;
    background-color: var(--colors-bg);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 20vh;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
`

const CardBody = styled.div`
    padding: 1rem 1.5rem 1.5rem;
`

const CardTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 800;
`

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
`

const CardListItem = styled.li`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
`

const Card = ({ img, countryName, info = [], onClick = Function.prototype }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={countryName}/>
      <CardBody>
          <CardTitle>{countryName}</CardTitle>
          <CardList>
              {info.map(el => (
                  <CardListItem key={el.title}>
                      <b>{el.title}:</b> {el.description}
                  </CardListItem>
              ))}
          </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card
