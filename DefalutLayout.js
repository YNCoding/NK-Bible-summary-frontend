
import Footer from '../components/Footer'
import Header from '../components/header'
import LeftMenu from '../components/LeftMenu'
import styles from '../styles/Home.module.css'


export default function DefalutLayout() {
  return (
    <div className={styles.container}>
      <Header>
        NK English Bible
      </Header>

      <section>
      <nav className={styles.aside}>
        <LeftMenu>
          <nav className={styles.nav ol}>
          <ol>
            <li><a href="#">1.Intro</a></li>
          </ol>
        </LeftMenu>
      </nav>

      <main className={styles.main}>
        <div>
          <h1>1. intro</h1>
          <p>This is a simple introduction to the Bible, written with our Chinese and North Korean friends in mind, so that they will be able to gain a basic understanding of what this Message from God is about. If I could put myself in God’s place...if I had all power and all knowledge simply with my thoughts and words...if I had created everything, and topped it off with the greatest creation, that was a living being made with many of my own characteristics, which is what God did when he created people...and then decided to give my greatest creation a gift to guide him through his life in the world where I placed him...what would it be that I would choose to give him? Great strength? Great wisdom? Some other ability? In the case of God, the one tangible gift he chose to leave us with is his Message...his Word...to us. If this is his greatest, most important gift he left us with, if he loves and cares for and wants the best for us...and this Book is what he chose to give to us...then it is surely a treasure of infinite value...for in it is the Message that he wants us to receive, to know, to follow, to take to heart. Reading and getting to know this Book is perhaps the most important task we can do in life.
</p> <p>Each book of the Bible that follows in this booklet is given a one word description that begins with the same letter of the alphabet as the name of the book, so that the basic message of that book can be remembered more simply. Then there is one verse given from the book which conveys an important aspect of what the whole book is about. Following that title is a brief overview or summary of the general message and contents of each book.
 </p> <p>이것은 성경에 대한 간단한 소개로, 우리 중국인과 북한 친구들이 하나님으로부터 온 이 메시지가 무엇인지에 대한 기본적인 이해를 얻을 수 있도록 하기 위한 것입니다.
          만약 내가 모든 힘과 지식을 단순히 내 생각과 말로만 가지고 있다면…. 만약 내가 모든 것을 창조하고, 그것을 가장 위대한 창조물로 끝낸다면…. 가장 위대한 창조물은 하나님이 인간을 창조하실 때 내 자신의 많은 특성으로 창조하신 삶이었습니다.
          그리고 내가 그를 있게 한 세상에서의 그의 삶을 인도할 때, 내 위대한 창조물에게 선물을 주기로 결심했다. 내가 그에게 무엇을 주기로 선택했을까? 큰 힘? 위대한 지혜? 다른 능력? 하나님의 경우, 그가 우리에게 남겨주기로 선택한 유일한 선물은 그의 메시지입니다.
하나님의 말씀. 만약 이게 우리에게 남긴 가장 위대하고 중요한 선물이고. 그가 우리를 사랑하고 아끼고, 우리에게 최고를 주길 원한다면…. 그래서 그가 우리에게 주기로 선택한 것이 이 책(성경, Bible)이라면, 우리가 받고, 알고, 따르고, 마음에 새겨지기를 바라는 바로 그 메시지를 담은 이것은 확실히 무한한 가치의 보배입니다. 이 책을 읽고 알게 되는 것은 아마도 우리가 인생에서 할 수 있는 가장 중요한 일일 것입니다.</p>
          <p>이 책자에서 이어지는 각각의 성경책에는 책의 이름과 같은 알파벳 문자로 시작하는 단어의 설명이 하나씩 주어져 있어 그 책의 기본 메시지를 보다 간단하게 기억할 수 있습니다. 그러면 책 전체 내용이 무엇인지에 대한 중요한 측면을 전달하는 한 구절이 책에서 나옵니다. 그  다음에는 각 책의 전반적인 내용에 대한 간략한 개요 또는 요약이 나와 있습니다.</p></div>
      </main>
      </section>

      <footer className={styles.footer}>
        <Footer>
          <p>Footer</p>
        </Footer>
      </footer>
      </div>
  )
}
