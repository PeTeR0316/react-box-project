import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const BoxArea = (props) => {
    const [widthSize, setWidthSize] = useState();

    useEffect(() => {
        setWidthSize(window.innerWidth);
    },window.innerWidth)

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
                {props.colorBox.length !== 0 ? 
                    (props.colorBox.map((color) => {
                        return <li className={`box ${color}`}></li>
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