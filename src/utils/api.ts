import { ICharacter } from "./types";

const data : Array<ICharacter> = [
    {
        name: "aaa",
        attack: 10,
        defense: 5,
        health: 65,
        type: 'epic'
    },
    {
        name: "bbb",
        attack: 10,
        defense: 5,
        health: 65,
        type: 'epic'
    },
]

export const getData = () => {
    return data;
}