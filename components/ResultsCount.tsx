type ResultsCountProps = {
  count: number
}

export default function ResultsCount({count}: ResultsCountProps) {
  return (
    <span className="rounded-xl px-2 py-1 bg-blue-400 text-white text-sm">{count}</span>
  )
}