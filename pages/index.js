
import Footer from '../components/Footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header className={styles.header}>NK English Bible</Header>

      <main>
        <section>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#">Cover</a></li>
              <li><a href="#">Prologue</a></li>
              <li><a href="#">Genesis(창세기)</a></li>
              <li><a href="#">Exodus(출애굽기)</a></li>
            </ul>
          </nav>

          <article className={styles.article}>
            <h1>Genesis_God</h1>
          
            <h4>• Phrase:</h4>
            <p>50:20 You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.</p>

            <label for="contentEN"><h4>• summary of content:</h4></label>
            <textarea id="contentEN" name="contentEN" rows="10" cols="90">
              God’s Message to us, the Bible, is the story of who he is, who we are, where we come from, and why we are here. It is a long narrative involving many players experiencing multiple and varied events. Throughout the whole story, we observe a lot about how God operates. We discover that he is a good God, a loving God, powerful, and over all things. Even when tragic and difficult things happen in our lives, God is working in ways we cannot see to bring about his good plans. We observe this very clearly in the dramatic and unexpected story of Joseph, where unimaginable tragedy is turned into spectacular good by God’s direction in this amazing story, which unfolds for us in chapters 37-50.
</textarea>
            <h1>창세기_하나님</h1>
            <h4> • 구절:</h4>
            <p>50:20 당신들은 나를 해하려 하였으나 하나님은 그것을 선으로 바꾸사 오늘과 같이 많은 백성의 생명을 구원하게 하시려 하셨나니</p>

            <label for="ContentKR"><h4>• 내용요약:</h4></label>
            <textarea id="contentKR" name="contentKR" rows="10" cols="90">
              우리에게 보내는 하나님의 말씀, 성경은 그가 누구이며, 우리가 누구이며, 우리가 어디에서 왔고, 우리가 왜 여기에 있는지에 대한 이야기입니다. 수 많은 사건을 경험하는 많은 인물들이 참여하는 긴 서술입니다. 전체 이야기를 통해 우리는 신이 어떻게 작용하는지에 대해 많은 것을 보게 됩니다. 우리는 그가 좋은 하나님이고, 사랑의 하나님이며, 힘이 있고, 모든 것에 뛰어나심을 발견합니다. 우리의 삶에서 비극적이고 어려운 일들이 일어날 때 조차도, 하나님은 좋은 계획을 이끌어내기 위해 우리가 볼 수 없는 방식으로 일하고 계십니다. 우리는 이것을 요셉의 극적이고 예상치 못한 이야기에서 매우 분명하게 관찰합니다. 창세기 37장부터 50장까지 이어지는 이 놀라운 이야기에서 상상할 수 없는 비극이 하나님의 인도에 의해 눈부신 선으로 변합니다.
            </textarea>
          </article>
        </section>

        <form action='button.php'>
          <input type='button'
                 value='등록'
                 onclick='alert("등록되었습니다.")' />
        </form>
        
          <form action='button.php'>
            <input type='button'
                    value='취소'
                    onclick='alert("취소되었습니다.")' />
          </form>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>

  )
}
