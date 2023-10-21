import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ProjectTitle = styled.h1`
        color: #171f46,
        font-weight:700;
        line-height:1.3;
        font-family:'Roboto';
        font-size:16px;
        margin:0px;
    @media screen and (min-width: 768px) {
   font-size:24px;
}`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
        color: #171f46,
        font-weight:600;
        line-height:1.2;
        font-family:'Roboto';
        font-size:12px;
        margin-left:4px;
    @media screen and (min-width: 768px) {
   font-size:14px;}`

export const ProjectDescription = styled.p`
   color: #1e293b,
    line-height:1.5;
     font-family:'Roboto';
     font-size:12px;
     margin-top:0px;
 @media screen and (min-width: 768px) {
   font-size:16px;}`

export const VisitLink = styled.a`
  text-align: center;
  color: #0967d2;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 5px;
  line-height: 1.2;
  font-weight: 600;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
