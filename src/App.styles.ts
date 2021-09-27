import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from "@material-ui/icons";

import { DarkModeProps } from './type';
export const Wrapper = styled.div`
    margin: 40px;
`

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`

export const DarkModeStyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    left: 20px;
    top: 20px;
`

export const StyledAddShoppingCartIcon = styled(AddShoppingCart)<DarkModeProps>`
    color: ${(props) => props.isDarkMode ? '#FFF': '#333'};

`


