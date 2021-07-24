import React, { useEffect, useState } from "react"

import Card from "./Card"

import axios from "axios";


const Deck = () => {
    const [breeds, setBreeds] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(async () => {
        try {
            setIsloading(true);

            const { data } = await axios.get("https://api.thecatapi.com/v1/breeds?limit=10");

            setBreeds(data);
        } catch (error) {
            console.log(error);
            setErrorMessage("No Cats found :(")
        } finally {
            setIsloading(false);
        }

    }, [])

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-5">
            {isLoading ? "Loading..."
                : errorMessage ? errorMessage
                    : breeds.map((breed, index) => {
                        return (
                            <div className="col" key={index}>
                                <Card data={breed} />
                            </div>
                        )
                    })}
        </div>
    )
}

export default Deck;