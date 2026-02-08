import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import SimpleImageSlider from 'react-simple-image-slider';
import { firebaseConfig } from './config/firebase';
import './Live.css';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Live = () => {
    const [imageData, setImageData] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getDatabase(app);

        // Function to fetch data for a specific node
        const fetchDataForNode = async (nodeName) => {
            const nodeRef = ref(db, nodeName);
            const snapshot = await get(nodeRef);
            const nodeData = snapshot.val();
            return [nodeName, nodeData.imageUrl, nodeData.text1, nodeData.text2];
        };

        // Fetch data for "Latest," "Previous1," and "Previous2" nodes
        const fetchData = async () => {
            try {
                const latestDS = await fetchDataForNode('Latest');
                const previous1DS = await fetchDataForNode('Previous1');
                const previous2DS = await fetchDataForNode('Previous2');
                setImageData([latestDS, previous1DS, previous2DS]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [app]);

    const handlePrevious = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex < imageData.length - 1 ? prevIndex + 1 : prevIndex));
    };

    return (
        <><h1>Results</h1><div className="center-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="center-content">
                    <SimpleImageSlider
                        width={800}
                        height={500}
                        images={imageData.map(([_, imageUrl]) => ({ url: imageUrl }))}
                        currentIndex={selectedImageIndex}
                        showBullets={false}
                        showNavs={true}
                        loop={false} />
                    <div className='scoreContainer'>
                        <div className="custom-nav">
                            <button onClick={handlePrevious} disabled={selectedImageIndex === 0}>
                                Previous
                            </button>
                            <button onClick={handleNext} disabled={selectedImageIndex === imageData.length - 1}>
                                Next
                            </button>
                        </div>
                        <div className="text-area">
                            <p>{imageData[selectedImageIndex][2]}</p>
                            <p>{imageData[selectedImageIndex][3]}</p>
                        </div>
                    </div>
                </div>
            )}
        </div></>
    );
};

export default Live;
