import { v4 as uuidv4 } from "uuid";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import React, { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyCYvJdOYjfVGJIoG54knk4EzZQiwHhp2_o',
  authDomain: 'impartial-yoga-judge.firebaseapp.com',
  databaseURL: 'https://impartial-yoga-judge-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'impartial-yoga-judge',
  storageBucket: 'impartial-yoga-judge.appspot.com',
  messagingSenderId: '536862871367',
  appId: '1:536862871367:web:76cf64fe205631216e0662',
  measurementId: 'G-PY9XW5QD8E',
};

const app = initializeApp(firebaseConfig);

const DataSlider = () => {
  // Array to store fetched data
  const [dataSlider, setDataSlider] = useState([]);

  useEffect(() => {
    const fetchDataForNode = async (nodeName) => {
      const db = getDatabase(app);
      const nodeRef = ref(db, nodeName);
      const snapshot = await get(nodeRef);
      const nodeData = snapshot.val();
      return {
        id: uuidv4(),
        node: nodeName,
        url: nodeData.imageUrl,
        title: nodeData.text1,
        score: nodeData.text2,
      };
    };

    const fetchData = async () => {
      try {
        const latestDS = await fetchDataForNode('Latest');
        const previous1DS = await fetchDataForNode('Previous1');
        const previous2DS = await fetchDataForNode('Previous2');

        // Update dataSlider array with fetched data
        setDataSlider([latestDS, previous1DS, previous2DS]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [app]);

  return dataSlider;
};

export default DataSlider;