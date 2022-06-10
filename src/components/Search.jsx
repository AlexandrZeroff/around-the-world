import styled from 'styled-components'
import { IoSearchSharp } from 'react-icons/io5'


const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;

    @media(min-width: 768px){
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search country'
})`
    margin-left: 1rem;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
`

const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
        <IoSearchSharp size='14px' className='border-box'/>
        <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}

export default Search
 