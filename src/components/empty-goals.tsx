import logoInOrbit from "../assets/logo-in-orbit.svg"
import letsStart from "../assets/lets-start-illustration.svg"
import { Plus } from "lucide-react"
import { DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

export function EmptyGoals() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-8">
      <img src={logoInOrbit} alt="logo" />
      <img src={letsStart} alt="Let's Start illustration" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal{" "}
        <a href="#" className="underline hover:text-zinc-50">
          cadastrar uma
        </a>{" "}
        agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
