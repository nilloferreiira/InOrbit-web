import { api } from "./api/api"

export async function createGoalCompletion(goalId: string) {
  await api.post("/completions", {
    goalId: goalId
  })
}
