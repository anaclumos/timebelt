import React from 'react'
import styled from 'styled-components'

type Props = {
  timeframe: 'days' | 'hours' | 'minutes' | 'seconds'
  now: any // will fix
  setNow: any // will fix
}

const HorizontalButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const HorizontalButtonDivMiddleBanner = styled.div`
  /* center vertically */
  margin-top: auto;
  font-size: 2rem;
  margin-bottom: auto;
  text-align: center;
  width: 50%;
`

const SmallButton = styled.button`
  font-size: 1rem;
  width: 25%;
`

const TimeNavigatorButtonRow = ({
  timeframe,
  now,
  setNow,
}: Props) => {
  return (
    <HorizontalButtonDiv>
      <SmallButton
        onClick={() => {
          setNow(now.subtract({ [timeframe]: 1 }))
        }}
      >
        -1
      </SmallButton>
      <HorizontalButtonDivMiddleBanner>
        {/* timeframe */}
        {timeframe}
      </HorizontalButtonDivMiddleBanner>
      <SmallButton
        onClick={() => {
          setNow(now.add({ [timeframe]: 1 }))
        }}
      >
        +1
      </SmallButton>
    </HorizontalButtonDiv>
  )
}

export default TimeNavigatorButtonRow
