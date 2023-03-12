import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    margin:200px auto 0 auto;
    width:50%;
    text-align:center;
    border: 1px solid red;

    ul{
      width: 300px;
      background:#fff;
      margin:0 auto;
    }
`


export const ItemWrap = styled(motion.li)`
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    margin-top:-1px;
    background: white;
    overflow: hidden;

    h1{
        padding:22px 30px 21px 30px;
        font-size:15px;
        z-index:1;
        opacity:0.9;
    }
`

export const Img = styled(motion.div)`
    width:40px;
    height:40px;
    overflow: hidden;
    border-radius:50%;
    margin:0 30px 0 0;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        width:32px;
        height:32px;
        border-radius:50%;
        vertical-align:bottom;
    }
`

export const SubWrap = styled(motion.div)`
    font-size:15px;
    height:auto;
    width:100%;
    display:flex;
    flex-direction: column;
    background: white;

    h5{
        padding:20px 30px;
        font-weight:500;
        line-height:150%;
        text-align:left;
    }

    :last-child{
        border-radius:0 0 20px 20px;
    }

`