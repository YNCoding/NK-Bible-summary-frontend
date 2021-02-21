
import Footer from '../components/Footer'
import Header from '../components/header'
import LeftMenu from '../components/LeftMenu'
import styles from '../styles/Home.module.css'


export default function DefalutLayout() {
  return (
    <div className={styles.container}> 
      <Header></Header>
      <nav className={styles.aside}>
        <LeftMenu></LeftMenu>
      </nav>
      <main className={styles.main}>
          <div>하이</div>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  )
}
