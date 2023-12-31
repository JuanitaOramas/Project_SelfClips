import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import './Clips.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import sleepPhoto from "../sleepFoto.png";
import Modal from '../pages/Components/Modal';


const videosId = [
    "zBEgoOhBXmY",
    "GCPWUMNRGPs",
    "KptSiZ4fkRw",
    "KsV5lO3vy-c",
    "W5_8Y3cnaFs",
    "FhdSuDxroOA",
    "j3MkSzgPGCE",
]

const imageId = [
    "https://i.pinimg.com/564x/1c/96/e9/1c96e9dc6767dab842a2ab427a7d28ed.jpg",
    "https://i.pinimg.com/564x/e8/5e/4d/e85e4d71e82eb4a79816fbb91ada8f27.jpg"
]

const Clips = () => {
    const initialItems = Array.from({ length: 20 });
    const initialCount = 1;
    
    const [heartColor, setHeartColor] = useState('#EFF3F6'); 
    const [items, setItems] = useState(initialItems);
    const [count, setCount] = useState(initialCount);
    

    const handleRandomSelect = () => {
        const randomIndex = Math.floor(Math.random() * videosId.length);
        return videosId[randomIndex];
      };

      const handleRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageId.length);
        return imageId[randomIndex];
      };

    const fetchMoreData = () => {
        setTimeout(() => {
            setItems([...items, ...Array.from({ length: 20 })]);
            setCount(count + 1);}, 1500);
    };
    const handleHeartClick = () => {setHeartColor(heartColor === 'red' ? '#EFF3F6' : 'red');
    };

    const generateRandomBoolean = () => {
        const randomBoolean = Math.random() < 0.5; // Genera un número aleatorio entre 0 y 1 y compara si es menor que 0.5
        return randomBoolean
      };


    return (
        <div className="clips-container">
            <h4 className='title'>Your Feed</h4>
      
            
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={count < 5}
                loader={<h5>Loading...</h5>}
                style={{ overflow: 'hidden' }}
                
            >
                <div className="cards-container-clips">
                    {items.map((item, index) => (
                        <div className="card-clips" key={index}>
                            <div className="sub-card-clips justify-content-center">
                                <p className="userCreator">@health_cookie</p>
                                {
                                    generateRandomBoolean() 
                                    ? 
                                    <img className="img" src={handleRandomImage()} alt="photo" style={{ width: "200px" }} />
                                    :
                                    <iframe className="iframe-clip" height="280" src={`https://www.youtube.com/embed/${handleRandomSelect()}`}></iframe>
                                }
                                
                                
                                <div className="icons-container ">
                                    <Modal />
                                   <i className="bi bi-heart-fill heartIcon" style={{ color: heartColor }}
                                    onClick={handleHeartClick}></i>
                                    <i className="bi bi-send-fill sendIcon"></i>
                                    
                                </div>
                                <div> <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Nemo, veritatis.</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
            
        </div>

    );
}

export default Clips;
