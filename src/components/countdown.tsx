import { useState, type FC } from 'react'
import { useInterval } from '../hooks/use-interval'

interface CountdownProps {
  startInSeconds?: number
  callback?: () => void
}

export const Countdown: FC<CountdownProps> = ({
  startInSeconds = 10,
  callback,
}) => {
  const [seconds, setSeconds] = useState(startInSeconds)

  useInterval(
    () => {
      setSeconds(seconds - 1)

      if (seconds === 1) {
        callback?.()
      }
    },
    seconds === 0 ? null : 1000,
  )

  return <time dateTime={`PT${seconds}S`}>{seconds} seconds</time>
}
