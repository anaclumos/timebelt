import type { NextPage } from 'next'
import {
  Temporal,
  Intl,
  toTemporalInstant,
} from '@js-temporal/polyfill'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const losangeles = Temporal.Now.zonedDateTimeISO(
    'America/Los_Angeles'
  )
  const [now, setNow] = useState(losangeles)
  return (
    <div>
      <Head>
        <title>Timebelt</title>
        <meta
          name="description"
          content="timezone conversion made easy"
        />
      </Head>

      <main>
        <h1>Timebelt: Timezone conversion made easy</h1>
        <h2>Los Angeles &rarr; {now.toLocaleString()}</h2>
        <h2>
          New York &rarr;{' '}
          {now
            .withTimeZone('America/New_York')
            .toLocaleString('en-US', {
              timeZone: 'America/New_York',
            })}
        </h2>
        <h2>
          Seoul is &rarr;{' '}
          {now
            .withTimeZone('Asia/Seoul')
            .toLocaleString('ko-KR', {
              timeZone: 'Asia/Seoul',
            })}
        </h2>
        <p>
          {/* add some text */}
          <button
            onClick={() => {
              setNow(now.add({ hours: 1 }))
            }}
          >
            Add 1 hour
          </button>
          <button
            onClick={() => {
              setNow(now.subtract({ hours: 1 }))
            }}
          >
            Subtract 1 hour
          </button>
        </p>
      </main>
    </div>
  )
}

export default Home
