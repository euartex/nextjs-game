import GameContainer from "@/components/game-container"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 md:p-8">
      <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm">
        <h1 className="text-3xl font-bold text-center mb-4">Next.js Game</h1>
        <GameContainer />
      </div>
    </main>
  )
}
