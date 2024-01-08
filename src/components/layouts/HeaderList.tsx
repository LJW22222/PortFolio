import Link from "next/link";
import styles from '@/components/layouts/styles/HeaderList.module.css'


function HeaderList(props: any)
{

  //메뉴바에서 버튼 클릭시 화면을 어느 지점으로 이동시켜주는 함수
  const scrollToWho = () => {
    const aboutSection = document.getElementById('who');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProject = () => {
    const projectSection = document.getElementById('project');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToTech = () => {
    const techSection = document.getElementById('tech');
    if (techSection) {
      techSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAwardh = () => {
    const techSection = document.getElementById('award');
    if (techSection) {
      techSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBloge = () => {
    window.open('https://jongone.com/', '_blank');
  };



  return (
    <nav className={`${styles.menuBar} ${styles.fixedMenuBar}`}>
      <ul className={styles.menuList}>
      <li className={styles.menuItem}>
      <a href="#" className={styles.menuButton} onClick={scrollToWho}>Who</a>
      </li>
      <li className={styles.menuItem}>
      <a href="#about" className={styles.menuButton} onClick={scrollToAbout}>About</a>
      </li>
      <li className={styles.menuItem}>
        <a href="#tech" className={styles.menuButton} onClick={scrollToTech}>Tech</a>
      </li>
      <li className={styles.menuItem}>
        <a href="#project" className={styles.menuButton} onClick={scrollToProject}>Project</a>
      </li>
      <li className={styles.menuItem}>
        <a href="#award" className={styles.menuButton} onClick={scrollToAwardh}>Award</a>
      </li>
      <li className={styles.menuItem}>
        <button className={styles.menuButton} onClick={openBloge}>Blog</button>
      </li>
    </ul>
  </nav>
);
}

export default HeaderList;
