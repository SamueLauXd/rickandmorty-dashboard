'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"

export default function CharacterDetail({params}) {
    const id = params.characterId
    const [detail, setDetail] = useState({})
    const statusStyle = detail.status === 'Alive' ? 'w-3 h-3 rounded-full bg-green-500' : 'w-3 h-3 rounded-full bg-red-500'

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetail(data)
        })
    }, [])

    return (
        <main>
            <div className="px-7 md:px-24 pt-20">
                <Link className="px-6 py-4 rounded-lg font-bold text-slate-800 dark:text-slate-500 transition-colors ease-in-out duration-150 border border-slate-800 dark:border-slate-500 hover:border-red-500 hover:text-red-500" href='/'>Return</Link>
                <section className="mt-10 md:mt-20 grid place-items-center">
                    <article className="flex flex-col md:flex-row justify-center gap-9 p-4 border border-slate-800 dark:border-slate-500 rounded-xl">
                        <img className="rounded-lg" src={detail.image} alt={`image of ${detail.name}`}/>
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-4xl">{detail.name}</h1>
                            <div className="flex justify-start gap-4 items-center">
                                <p>Status:</p>
                                <div className="flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-md gap-2 px-2 py-1">
                                    <div className={statusStyle}></div>
                                    <p>{detail.status}</p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-4 items-center">
                                <p>Species:</p>
                                <div className="flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-md gap-2 px-2 py-1">
                                    <p>{detail.species}</p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-4 items-center">
                                <p>Gender:</p>
                                <div className="flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-md gap-2 px-2 py-1">
                                    <p>{detail.gender}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
            <div className="md:absolute md:bottom-0 w-full">
                <Footer/>
            </div>
        </main>
    )
}