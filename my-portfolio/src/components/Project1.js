import React, { useState, useEffect } from 'react';
import '../styles/Project1.css';
import Project1List from './Project1List';
import  portfolios  from '../data';

const Project1 = () => {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);
    const list = [
        {
          id: "all",
          title: "ALL",
        },
        {
          id: "javascript",
          title: "JavaScript",
        },
        {
          id: "react",
          title: "ReactJS",
        },
        {
          id: "node",
          title: "NodeJS",
        },
    ];

    useEffect(() => {
        // creating a switch case function
        switch(selected){
            case "all":
                setData(allPortfolio);
                break;
            case "javascript":
                setData(javascriptPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "node":
                setData(nodePortfolio);
                break;
            default: 
                setData(allPortfolio);
            
        }

    }, [selected]);

    return (
        <>
            <div className="project1">
                <h1>Portfolio</h1>
                <ul>
                    {list.map((item) => (
                        <Project1List  
                            title={item.title} 
                            active={selected === item.id}
                            setSelected={setSelected} 
                            id={item.id}
                        />
                    ))}   
                </ul>
                <div className="container">
                    {data.map((d) => (
                        <div className="item">
                            <img
                                src={d.img}
                                alt=""
                            />
                            <h3>{d.title}</h3>
                        </div>
                    ))}
                </div>
            
            </div>
        </>
    );
}

export default Project1
