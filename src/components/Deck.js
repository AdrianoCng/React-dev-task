import React, { useEffect, useState } from "react"
import axios from "axios";

import Card from "./Card"

const Deck = () => {
    const [breeds, setBreeds] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                setIsloading(true);

                const { data } = await axios.get("https://api.thecatapi.com/v1/breeds?limit=15");

                setBreeds(data);
            } catch (error) {
                console.log(error);
                setErrorMessage("No Cats found :(")
            } finally {
                setIsloading(false);
            }
        }

        fetchData()
    }, [])

    return (
        <div className="row row-cols-1 row-cols-lg-2 g-4 py-5">
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