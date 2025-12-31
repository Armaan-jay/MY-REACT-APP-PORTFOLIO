import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { portfolioData } from '../data/portfolioData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! I can answer questions about Armaan\'s profile, skills, and projects. What would you like to know?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);

        // Simple response logic
        setTimeout(() => {
            const botResponse = generateResponse(inputValue);
            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
        }, 500);

        setInputValue('');
    };

    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('technology')) {
            return `My skills include: ${portfolioData.skills.join(', ')}.`;
        }

        if (lowerInput.includes('project') || lowerInput.includes('work')) {
            return `Here are some of my projects: ${portfolioData.projects.map(p => p.name).join(', ')}. You can ask for details about a specific one!`;
        }

        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('social')) {
            return `You can connect with me via: ${portfolioData.social.map(s => s.label).join(', ')}. Check the Contact section for links.`;
        }

        if (lowerInput.includes('achievement') || lowerInput.includes('award') || lowerInput.includes('cert')) {
            return `I have achievements like: ${portfolioData.achievements.slice(0, 3).map(a => a.title).join(', ')} ...and more!`;
        }

        if (lowerInput.includes('about') || lowerInput.includes('who are you') || lowerInput.includes('profile')) {
            return portfolioData.profile.about;
        }

        // Default
        return "I'm not sure about that. Try asking about my skills, projects, achievements, or contact info.";
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            <button className="chatbot-toggle" onClick={toggleChat} aria-label="Toggle Chat">
                {isOpen ? '✕' : '💬'}
            </button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Portfolio Assistant</h3>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="chatbot-input-area" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Ask me something..."
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button type="submit">➤</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
