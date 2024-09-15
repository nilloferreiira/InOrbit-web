import { api } from "./api/api"

type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

interface PendingGoals {
  pendingGoals: PendingGoalsResponse
}

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await api.get<PendingGoals>("/pending-goals")
  const data = response.data

  return data.pendingGoals
}
