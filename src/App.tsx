import BetRow from './components/BetRow'
import GameCard from './components/GameCard'
import { gamesService } from './service/gamesService'
import {userService} from './service/userService'
import { useEffect, useState } from 'react'


const App = () => {
  const [users, setUsers] = useState([])
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers()
        setUsers(data) 
        console.log('Fetched users:', data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
    const fetchGames = async () => {
      try {
        const data = await gamesService.getAllGames()
        console.log('Fetched games:', data)
        setGames(data)
      } catch (error) {
        console.error('Error fetching games:', error)
      }
    }

    fetchUsers()
    fetchGames()
  }, [])

  if (users.length === 0) {
    return <h2>loading....</h2>  }
  return (
    <div>
          <div className="flex gap-6 p-10 bg-[#121212] justify-center items-center min-h-screen">
      
      {/* Lucky Jet картасы */}
      <GameCard
        title="Lucky Jet" 
        subtitle="1win games" 
        imageSrc={ games[0].img} 
        gradientClass="bg-gradient-to-b from-purple-500 to-indigo-800"
      />

      {/* Mines картасы */}
      <GameCard   
        title="Mines" 
        subtitle="1win games" 
        imageSrc={ games[1].img} 
        gradientClass="bg-gradient-to-b from-blue-400 to-cyan-700"
      />

    </div>
      <div className="bg-[#0D1117] p-6 rounded-lg w-full max-w-4xl font-sans">
      {/* Таблицанын башкы жазуулары */}
      <div className="flex justify-between text-gray-400 text-sm mb-4 px-4">
        <div className="w-1/4">Игрок</div>
        <div className="w-1/4 text-center">Ставка</div>
        <div className="w-1/4 text-center">Кэф</div>
        <div className="w-1/4 text-right">Выигрыш</div>
      </div>

      {/* Маалыматтар сабы */}
      
      { users.map((user) => (
        <BetRow
          key={user.id}
          username={user.name}
          betAmount={user.bet}
          multiplier={user.kef}
          winAmount={user.balance}
          currencySymbol="сом"
        />
      )) }
      {/* Кошумча саптарды ушул жерге кошсо болот */}
    </div></div>
  )
}

export default App