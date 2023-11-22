import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="andriuCode">
                Andres S. Vivanco
            </TwitterFollowCard>
            <TwitterFollowCard>
                Andres S. Vivanco
            </TwitterFollowCard>
        </section>
    )
}
