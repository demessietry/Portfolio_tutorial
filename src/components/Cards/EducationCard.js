import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const  Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px opx 10px rgba(0.0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid ${({theme}) => theme.primary};
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0.0,0,0.2);
        transform: translateY(-5px);
    }
    &:hover ${Document} {
        display: flex;
    }

    @media screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 450px;
    }

    @media screen and (max-width: 500px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
        max-width: 90vw;
    }
`

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`

const Logo = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;

    @media screen and (max-width: 768px) {
        height: 40px;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary + 99};

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary + 99};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`


const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary + 80};

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 99};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const Span = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        display: flex;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary + 99};

    @media screen and (max-width: 768) {
        font-size: 12px;
    }
`



function EducationCard ({Education}) {
  return (
    <Card>
        <Top>
            <Logo src={Education.img} />
            <Body>
                <Name>{Education.school}</Name>
                <Degree>{Education.degree}</Degree>
                <Duration>{Education.date}</Duration>
            </Body>
        </Top>
        <Grade>Grade: {Education.grade}</Grade>
        <Description>
            <Span>{Education.desc}</Span>
        </Description>
    </Card>
  )
}

export default EducationCard