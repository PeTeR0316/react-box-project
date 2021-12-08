import React, { useState } from 'react'
import styled from 'styled-components'
import BoxArea from '../components/BoxArea';



const BoxProject = () => {
    const colors = ["red", "green", "blue", "yellow"]; //색상 리스트
    const [resetBoxArray, setResetBoxArray] = useState(["white", "white", "white", "white", "white", "white", "white", "white", "white"])
    const [changeBoxArray, setChangeBoxArray] = useState([]);
    const [findBlock, setFindBlock] = useState("")

    const getRandomNum = (max, min) => {
        max = Math.floor(max);
        min = Math.ceil(min);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const startBoxChange = () => {
    	let insertColor = [];
        setFindBlock(colors[getRandomNum(3,0)]); //colors에서 색상을 랜덤으로 하나 가져옴

		//길이 9의 랜덤색상 배열을 생성
        for(let i = 0; i < 9; i++) {
            insertColor.push(colors[getRandomNum(3,0)]);
        }

        setChangeBoxArray(insertColor);
    }

    const resetBox = () => {
        setChangeBoxArray([])
    }

    const noFindColor = () => {
        const noFindColorValue = changeBoxArray.find((colorValue) => colorValue === findBlock);

        noFindColorValue ? alert("틀렸습니다.") : alert("정답입니다.")
    }

    const BoxProjectStyled = styled.main`

        
        .title {
            margin: 0;
            padding: 5px;
            text-align: center;
        }

        .dataArea {
            display: flex;
            justify-content: center;
        }

        .findColor {
            width: 120px;
            height: 120px;
            border: 1px solid #000;
            display: inline-block;
            background-color: ${findBlock};
            
        }

        .btnArea {
            margin: 10px;
            text-align: center;
        }

        .btn {
            width: 100px;
            height: 30px;
            margin-right: 10px;
            display:block;
            margin: 5px;
            
        }
        
    `
    return (
        <BoxProjectStyled>
            <h1 className="title">Box</h1>

            <div className="dataArea">
                <div className="findColor"></div>
                
                <div className="btnArea">
                    <button type="button" 
                        className="btn"
                        onClick={startBoxChange}
                    >
                            시작
                        </button>
                    <button type="button" 
                        className="btn"
                        onClick={resetBox}
                    > 
                        초기화
                    </button>
                    <button className="btn"
                        onClick={noFindColor}
                    >
                        없음
                    </button>
                </div>
            </div>

            <BoxArea 
                resetBox={resetBoxArray} 
                colorBox={changeBoxArray} 
                find={findBlock}
            />
        </BoxProjectStyled>
    );
};

export default BoxProject;
