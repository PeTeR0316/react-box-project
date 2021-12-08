import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const BoxArea = (props) => {
    const [widthSize, setWidthSize] = useState();
    const [colorArray, setColorArray] = useState([...props.colorBox]);

    useEffect(() => {
        setWidthSize(window.innerWidth);
    },window.innerWidth)

    const colorCheck = (e) => {
        if(props.find=== e.target.textContent) {
            alert("정답")
        } else {
            alert("오답")
        }

    }

    const ColorBoxStyled = styled.div`
        .boxContainer {
            text-align: center;
        }

        .box {
            width: ${widthSize / 4}px;
            height: ${widthSize / 4}px;
            border: 1px solid #000;
            display: inline-block;
            margin: 2px;
        }

        .colorText {
            display: none;
        }

        .red {
            background-color: red;
        }

        .green {
            background-color: green;
        }

        .blue {
            background-color: blue;
        }

        .yellow {
            background-color: yellow;
        }
    `

    return (
        <ColorBoxStyled>
            <ul className="boxContainer">
                {colorArray.length !== 0 ? 
                    (colorArray.map((color) => {
                        return <li className={`box ${color}`} 
                            onClick={colorCheck}
                        >
                            <span className="colorText">{color}</span>
                        </li>
                    })) : 
                    (props.resetBox.map((color) => {
                        return <li className="box"></li>
                    }))
                }
            </ul>
        </ColorBoxStyled>
    );
};

export default BoxArea;