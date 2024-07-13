import { motion } from 'framer-motion';
import React, { useState } from 'react';
import "./LandingPage.css";

const LandingPage: React.FC =  () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
      };

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    return (
        <div className="landing-page">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
            >
                Welcome to My Cash Card App
            </motion.h1>

            {!isLoggedIn && (
                <motion.button
                    className="login-button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleLoginClick}
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    Login
                </motion.button>
            )}

            {isLoggedIn && (
                <div>
                    {/* cash card list or dahsboard component */}
                    <h1>You are logged in!</h1>
                </div>
            )}
        </div>
    );
}

export default LandingPage;