import { api } from "./api/api"

type CreateGoalRequest = {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency
}: CreateGoalRequest) {
  await api.post("/goals", {
    title,
    desiredWeeklyFrequency
  })
}
