import React from "react";
import './CashCard.css';
import { motion } from "framer-motion";

interface CashCardProps {
    card: {
        id: number;
        amount: number;
        nickname?: string;
    };
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const CashCard: React.FC<CashCardProps> = ({ card }) => {
    return (
        <motion.div
            className="cash-card"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <h3>Cash Card</h3>
            <p className="amount">${card.amount.toFixed(2)}</p>
        </motion.div>
    );
}

export default CashCard;