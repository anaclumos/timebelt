import { Temporal } from '@js-temporal/polyfill'
import React, { useEffect } from 'react'
import styled from 'styled-components'

type Props = {
  now: any // will fix
  setNow: any // will fix
}

const RealtimeLabel = styled.label`
  font-size: 1.6rem;
  display: flex;
`

const Checkbox = styled.input`
  font-size: 1rem;
  margin: auto 0.5rem;
  width: 2rem;
  height: 2rem;
`

const RealTimeCheckboxRow = styled.div`
  height: 3rem;
`

const LabelText = styled.p`
  margin: auto 0.5rem;
`

const RealTimeCheckbox = ({ now, setNow }: Props) => {
  const [isRealTime, setIsRealTime] = React.useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRealTime) {
        setNow(now.add({ seconds: 1 }))
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [isRealTime, now, setNow])
  return (
    <RealTimeCheckboxRow>
      <RealtimeLabel>
        <Checkbox
          type="checkbox"
          checked={isRealTime}
          onChange={() => {
            setIsRealTime(!isRealTime)
          }}
        />
        <LabelText>Turn on Auto-increment</LabelText>
      </RealtimeLabel>
    </RealTimeCheckboxRow>
  )
}

export default RealTimeCheckbox
