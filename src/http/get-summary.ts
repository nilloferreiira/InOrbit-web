import { api } from "./api/api"

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

interface SummaryPromise {
  summary: SummaryResponse
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await api.get<SummaryPromise>("/summary")
  const data = response.data

  return data.summary
}
