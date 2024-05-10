import React from 'react';
import styled from "styled-components";

type PopupWindowType = {
    onClose: () => void
    top: number
    left: number
}

export const PopupWindow = ({onClose, top, left}: PopupWindowType) => {
    return (
        <Popup style={{position: 'absolute', top: top, left: left, border: '1px solid black'}}>
            <button onClick={onClose}>Close</button>
            <div>Window content</div>
        </Popup>
    );
}

const Popup = styled.div`
  position: fixed;
  background-color: white;
  z-index: 100;
  width: 421px;
  height: 336px;
  padding: 20px;
  border: 1px #E3E3E3 solid;
  border-radius: 4px;`
;