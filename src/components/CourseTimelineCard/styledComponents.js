import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const CourseTitle = styled.h1`
  color: #171f46;
  font-weight: 700;
  line-height: 1.3;
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

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

export const CourseDescription = styled.p`
   color: #1e293b,
    line-height:1.5;
     font-family:'Roboto';
     font-size:12px;
     margin-top:0px;
  `

export const CourseTagList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
`

export const CourseTagItem = styled.li`
  list-style-type: none;
`
export const CourseTag = styled.p`
  color: #25262c;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  border-radius: 4px;
  line-height: 1.6;
  padding: 4px 8px;
  margin: 0px;
  margin-bottom: 8px;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    font-weight: 600;
  }
`
