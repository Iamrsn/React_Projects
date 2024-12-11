import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [SelectedNumber,setSelectedNumber]=useState()
  console.log(SelectedNumber)
  return (
    <div>
      {arrNumber.map((v, i) => (
        <Box key={i} onClick={()=>setSelectedNumber(v)}>{v}</Box>
      ))}
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
`;


//fn me koi value pass krwana hai to callback de dena rhta hai..