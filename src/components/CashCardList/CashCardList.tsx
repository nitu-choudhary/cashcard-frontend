import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import CashCard from "./CashCard";
import "./CashCardList.css";

interface CashCard {
  id: number;
  amount: number;
}

const CashCardList: React.FC = () => {
    const [cashCards, setCashCards] = useState<CashCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchCashCards();
    }, []);

    const fetchCashCards = () => {
        const username = process.env.REACT_APP_USERNAME;
        const password = process.env.REACT_APP_PASSWORD;
        const encodedCredentials = btoa(`${username}:${password}`);

        fetch('http://localhost:8080/cashcards', {
            headers: {
                'Authorization': `Basic ${encodedCredentials}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setCashCards(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError("Error loading cash cards");
                setIsLoading(false);
            });
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Your Cash Cards</h1>
            <div className="cash-card-list">
                <AnimatePresence>
                    {cashCards.map((card) => (
                        <CashCard key={card.id} card={card} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default CashCardList;