import React from 'react';
import { ICharacter } from '../utils/types'
import { getData } from '../utils/api';
import { Card } from '@mui/material';
import { CharacterCard } from '../components/CharacterCard';

export const Home = () => {
    const [characters, setCharacters] = React.useState<Array<ICharacter>>([]);

    React.useEffect(() => {
        const data = getData();
        setCharacters(data);
    }, [])

    return <div style={{display: 'flex', flexDirection: 'row'}}>
        
        {characters && characters.length &&
            characters.map((character) => {
                return (
                    <CharacterCard character={character} />
                )
            })
        }
    </div>
}