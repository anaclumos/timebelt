import React from 'react'

type Props = {
  now: any // will fix
}

const TimeTable = ({ now }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>Local Time</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>New York</td>
          <td>
            {now
              .withTimeZone('America/New_York')
              .toLocaleString('en-US', {
                timeZone: 'America/New_York',
              })}
          </td>
        </tr>
        <tr>
          <td>Los Angeles</td>
          <td>{now.toLocaleString()}</td>
        </tr>
        <tr>
          <td>London</td>
          <td>
            {now
              .withTimeZone('Europe/London')
              .toLocaleString('en-US', {
                timeZone: 'Europe/London',
              })}
          </td>
        </tr>
        <tr>
          <td>Seoul</td>
          <td>
            {now
              .withTimeZone('Asia/Seoul')
              .toLocaleString('ko-KR', {
                timeZone: 'Asia/Seoul',
              })}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TimeTable
