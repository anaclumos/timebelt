import type { NextPage } from 'next'
import {
  Temporal,
  Intl,
  toTemporalInstant,
} from '@js-temporal/polyfill'
import Head from 'next/head'
import { useState } from 'react'
import TimeNavigatorButtonRow from '../components/TimeNavigatorButtonRow'
import TimeTable from '../components/TimeTable'
import RealTimeCheckbox from '../components/RealTimeCheckbox'

const Home: NextPage = () => {
  const [now, setNow] = useState(
    Temporal.Now.zonedDateTimeISO('America/Los_Angeles')
  )

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
        <p>
          This is a technical proof of concept using
          TypeScript Next.js with Polyfilled Temporal API.
        </p>
        <RealTimeCheckbox now={now} setNow={setNow} />
        <TimeTable now={now} />
        <button
          onClick={() => {
            setNow(
              Temporal.Now.zonedDateTimeISO(
                'America/Los_Angeles'
              )
            )
          }}
        >
          Now
        </button>
        <TimeNavigatorButtonRow
          now={now}
          setNow={setNow}
          timeframe={'days'}
        />
        <TimeNavigatorButtonRow
          now={now}
          setNow={setNow}
          timeframe={'hours'}
        />
        <TimeNavigatorButtonRow
          now={now}
          setNow={setNow}
          timeframe={'minutes'}
        />
        <TimeNavigatorButtonRow
          now={now}
          setNow={setNow}
          timeframe={'seconds'}
        />
      </main>
    </div>
  )
}

export default Home
