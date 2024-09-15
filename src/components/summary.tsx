import { InOrbitSvgIcon } from "./in-orbit-svg-icon"
import { Button } from "./ui/button"
import { DialogTrigger } from "./ui/dialog"
import { CheckCircle2, Plus } from "lucide-react"
import { Progress, ProgressIndicator } from "./ui/progress-bar"
import { Separator } from "./ui/separator"
import { useQuery } from "@tanstack/react-query"
import { getSummary } from "../http/get-summary"
import dayjs from "dayjs"
import ptBR from "dayjs/locale/pt-br"
import { PendingGoals } from "./pending-goals"

dayjs.locale(ptBR)

export function Summary() {
  // fetching data
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60 // 60 seconds
  })

  //Checking if there is any data
  if (!data) {
    return null
  }

  // dayjs
  const firstDayOfWeek = dayjs().startOf("week").format("D MMM")
  const lastDayOfWeek = dayjs().endOf("week").format("D MMM")

  // Progress Bar
  const progress = Math.round((data.completed / data.total) * 100)

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitSvgIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      {/* Progress  */}
      <div className="flex flex-col gap-3">
        <Progress value={data.completed} max={data.total}>
          <ProgressIndicator style={{ width: `${progress}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{" "}
            <span className="text-zinc-100">{data.completed}</span> de{" "}
            <span className="text-zinc-100">{data.total}</span> metas nessa
            semana.
          </span>
          <span>{progress}%</span>
        </div>
      </div>

      <Separator />
      {/* Pending goals  */}
      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        {/* goals per day  */}
        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format("dddd")
          const formatedDate = dayjs(date).format("D [de] MMMM")

          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium">
                <span className="capitalize">{weekDay}</span>{" "}
                <span className="text-zinc-400 text-xs">({formatedDate})</span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goals.map((goal) => {
                  const goalCompletedAt = dayjs(goal.completedAt).format(
                    "HH[:]mm"
                  )

                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        Você completou "
                        <span className="text-zinc-100">{goal.title}</span>" às{" "}
                        <span className="text-zinc-100">
                          {goalCompletedAt}h
                        </span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
