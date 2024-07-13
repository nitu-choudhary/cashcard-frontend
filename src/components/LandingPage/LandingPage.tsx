import { motion } from 'framer-motion';
import React from 'react';
import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC =  () => {
    const navigate = useNavigate();

    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
      };

      const handleLoginClick = async () => {
        try {
          // TODO: Implement login logic
          navigate('/cashcards');
        } catch (error) {
          console.error("Login failed:", error);
        }
      };

    return (
        <div className="landing-page">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
            >
                Welcome to My Cash Card App
            </motion.h1>
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
        </div>
    );
}

export default LandingPage;