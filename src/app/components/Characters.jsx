'use client'
import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import Link from "next/link";

export function Characters() {
    const {characters, nextPage, previousPage} = useCharacters()

    useEffect(() => {
        window.scroll(0,0)
    }, [characters])

    return (
        <section className="px-7 md:px-24">
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8 justify-center">
                {
                    characters.map(({name, image, gender, id}) => (
                        <CharacterCard name={name} image={image} gender={gender} key={id} id={id}/>
                    ))
                }
            </ul>
            <div className="flex justify-center gap-6 mt-10">
                <button onClick={previousPage} className="w-[120px] px-4 py-2 rounded-lg font-bold bg-slate-200 dark:bg-slate-500 transition-colors ease-in-out duration-200 hover:bg-green-500">Previous</button>
                <button onClick={nextPage} className="w-[120px] px-4 py-2 rounded-lg font-bold bg-slate-200 dark:bg-slate-500 transition-colors ease-in-out duration-200 hover:bg-green-500">Next</button>
            </div>
        </section>
    )
}

function CharacterCard({name, image, gender, id}) {
    return (
            <Link href={`/${id}`} className="rounded-xl border flex flex-col justify-center border-slate-800 dark:border-slate-500 p-2 hover:border-green-500 transition-colors ease-in duration-150">
                <img src={image} alt={`image of ${name}`} className="rounded-md" />
                <div className="pt-2 px-1 flex items-center justify-between">
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p className="text-sm opacity-50">{gender}</p>
                </div>
            </Link>
    )

}