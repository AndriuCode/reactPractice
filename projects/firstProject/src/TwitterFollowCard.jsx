import { useState } from "react"

export function TwitterFollowCard({ children, userName = "unknown", initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const hadnleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const avatarImg = `https://unavatar.io/github/${userName}`
    const buttonText = isFollowing ? "Siguiendo" : "Seguir"
    const buttonStyles = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button"

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    alt="Avatar de AndriuCode"
                    src={avatarImg}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonStyles} onClick={hadnleClick}>
                    <span className="tw-followCard-text">{buttonText}</span>
                    <span className="tw-followCard-unFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
