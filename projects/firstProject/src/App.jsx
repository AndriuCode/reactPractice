import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id: 1,
        name: 'Andres S. Vivanco',
        userName: 'andriuCode',
        isFollowing: true
    },
    {
        id: 2,
        name: 'Andres S. Vivanco',
        userName: 'andriuCode',
        isFollowing: false
    },
    {
        id: 3,
        name: 'Andres S. Vivanco',
        userName: 'andriuCode',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { id, name, userName, isFollowing } = user

                    return (
                        <TwitterFollowCard key={id} userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
