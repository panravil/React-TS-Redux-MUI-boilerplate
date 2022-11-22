import { Card } from '@mui/material';
import React from 'react';
import { ICharacter } from '../utils/types';

interface PropType {
    character: ICharacter
}

export const CharacterCard = (props : PropType) => {
 
    return (
        <Card style={{width:'300px', marginLeft: '5rem'}}>
            <div>Name:{props.character.name}</div>
            <div>Attack:{props.character.attack}</div>
            <div>Defense:{props.character.defense}</div>
            <div>Health:{props.character.health}</div>
            <div>Type:{props.character.type}</div>
        </Card>
    )
}


