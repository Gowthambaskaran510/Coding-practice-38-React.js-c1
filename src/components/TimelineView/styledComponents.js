import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1100px;
  height: 100vh;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  color: #171f46;
  font-weight: 500;
  line-height: 2.7;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: 'Roboto';
  font-size: 24px;
  margin: 0px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
