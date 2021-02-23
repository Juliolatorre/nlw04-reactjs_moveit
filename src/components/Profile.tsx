import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/67549777?s=460&u=b7bf105c5f11c45737ed04d1bac62da35b470bac&v=4" alt="Júlio Latorre"/>
      <div>
        <strong>Júlio Latorre</strong>
        
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}