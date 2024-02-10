import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footerpage from '../components/Footerpage';


export default function NewsEach() {
    const location = useLocation();
    console.log(location)

    // Check if location.state exists before destructuring its properties
    if (!location.state) {
        return <div>Loading...</div>; // or handle the case where state is null
    }

    // Destructure title and renderContent from location.state
    const title = location.state.title;
    const content = location.state.content;
    console.log(title)
    console.log(location.state,"hjj")

    const renderContent = () => {
        return content.map((item, index) => {
            if (typeof item === 'string') {
                // Render paragraphs
                return <p key={index} className='text-sm'>{item}<br/><br/></p>;
            } else if (Array.isArray(item)) {
                // Render bullet points
                return (
                    <ul key={index}>
                        {item.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                );
            } else if (typeof item === 'object' && item.type === 'image') {
                // Render images
                return <img key={index} src={item.url} alt={item.alt} />;
            } else if (typeof item === 'object' && item.type === 'quote') {
                // Render quotes
                return <blockquote key={index}>{item.text}</blockquote>;
            } else {
                return null; // Handle other types of content as needed
            }
        });
    };

    return (
        <>
        <Navbar/>
        <div className='px-4 md:px-28 py-20 md:py-28'>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-900'>{title}</h1><br/><br/>
            {/* Render article content */}
            {renderContent()}
        </div>
        <Footerpage/>
        </>
        
    );
}

