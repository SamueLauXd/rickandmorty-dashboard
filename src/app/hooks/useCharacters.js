import { useState, useEffect } from "react";

export function useCharacters() {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
            console.log(data.info);
        })
    }, [])

    const nextPage = () => {
        if(info.next === null) return

        fetch(info.next)
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
        })
    }

    const previousPage = () => {
        if(info.prev === null) return
        
        fetch(info.prev)
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
        })
    }

    return {
        characters,
        nextPage,
        previousPage
    }
}