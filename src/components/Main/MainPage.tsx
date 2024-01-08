"use client";
import Image from 'next/image';
import Link from "next/link";
import styles from "@/components/Main/styles/MainPage.module.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSkillScrollAnimation } from "@/components/Main/animation/skillAnimation";

const ProjectItem: React.FC<{ projectName: string; category: string; team: string; githubLink: string }> = ({ projectName, category, team, githubLink }) => (
  <div className={styles.projectbox}>
    <div className={styles.hideback} />
    <Link href="/ProjectInformation">
      <div className={styles.imageContainer}>
        <Image
          width={220}
          height={220}
          className={styles.projectimg}
          src={`/img/${projectName}.png?text=First slide&bg=f5f5f5`}
          alt={projectName}
        />
      </div>
    </Link>
    <div className={styles.projectname}>
      <p style={{ fontSize: '2vw', fontWeight: 'bold' }}>{projectName}</p>
      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent: 'left', marginLeft: '17%' }}>
        {category}
      </p>
      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent: 'left', marginLeft: '17%' }}>
        {team}
      </p>
      <Link href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
        GitHub ＞
      </Link>
    </div>
  </div>
);

const Mainpage = () => {

  const { ref, isInViewport } = useSkillScrollAnimation();
  const React = 40;

  return (
    <>
      <div className={styles.myinformation}>
        <div className={styles.Introduction_sentence}><br></br>
            <p style={{ fontSize: '2.4vw', fontWeight: 'bold', marginBottom: '5%', textAlign : "center" }}>
            Hi! I`m JongWon Lee<br/> 
            I`m a back-end engineer who develops in line with rapidly changing trends
            </p>
        </div>

        <div className={styles.aboutme}>
          <div className={styles.Businesscard}>
            <div className={styles.myimg}>
            </div>
            <div className={styles.information}>
              <p style={{ fontSize: '2vw', fontWeight: 'bold' }}>Jongwon Lee</p>
              <p style={{ fontSize: '1.5vw' }}>Back-end Developer</p>
              <p style={{ fontSize: '1vw', marginTop : "1%", marginBottom : "2%" }}>
              DMU ComputerSoftwareEngineering B.S.</p>
              <p style={{ fontSize: '1vw', marginBottom: '1%' }}>
                E | whddnjs1245@gmail.com</p>
              <p style={{ fontSize: '1vw', marginLeft: '-15.5%' }}>
                P | 010-XXXX-XXXX</p>
          </div>
          </div>
          <div className={styles.aboutinfor2}>
            <p style={{ fontSize: '1.3vw', fontWeight: 'bold', marginBottom: '3%', textAlign : "center" }}>Studying diligently to stay current with evolving trends in technology.</p>
            <p style={{ fontSize: '1.3vw', fontWeight: 'bold', marginBottom: '3%', textAlign : "center" }}>Organizing and posting acquired knowledge on my blog.</p>
            <p style={{ fontSize: '1.3vw', fontWeight: 'bold', textAlign : "center" }}>Working on a project that reflects the latest technology.</p><br/>
          </div>
        </div>
        

      </div>
      <div id="about"></div>
      <div className={styles.who}>
        <div className='mt-5'></div>
        <p className={styles.who_title}>
          About. <span className={styles.subtitle}>Me</span>
        </p>
        <p style={{ fontSize: '2.5vw', fontWeight: 'bold', textAlign: 'left' }}>
          Introduce
        </p>
        <div className={styles.who_introduce_box}>
          <p>
            대학교 컴퓨터소프트웨어 공학과를 다니면서 프로그래밍을 시작하였습니다.<br/>
            MIT 전공 동아리에 참여하여 다양한 활동과 프로젝트 경험을 쌓았습니다.<br/>
            <br/>
            동아리 프로젝트를 진행하면서 적은 수의 트래픽에도 서버에 부하가 걸리는 문제점을 겪었습니다. <br/>
            당시, MSA와 Kubernetes의 Nginx Ingress Controller를 통해 트래픽 부하를 줄일 수 있었고<br/>
            이로 인해 서버 부하가 되는것을 어느정도 막을 수 있었습니다.<br/>
            이러한 경험을 통해 성능 최적화와 확장성을 강화하는 방법에 대해 공부하고 있습니다.<br/>
            <br />
          </p>
          <p>
            <strong>SE |</strong>

            <ul>
              <li>라즈베리파이를 클러스터링하여 Kubernetes(k3s)를 적용한 경험</li>
              <li>Kubernetes에 Nginx Ingress Controller를 사용한 경험</li>
              <li>Kubernetes의 MasterNode와 N개의 WorkerNode를 동기화하여 NFS 서버를 설계 및 구축한 경험</li>
              <li>Spring과 Flask를 사용하여 MSA 아키텍처를 설계한 경험</li>
              <li>DockerHub 플랫폼을 활용하여 Docker를 사용하여 앱/웹 배포한 경험</li>
              <li>실시간 모니터링(whatap)를 활용하여 실시간으로 서버 모니터링 경험</li>
            </ul>
          </p>
          <p>
            <strong>BE |</strong>
            <br />
            <ul>
              <li>Spring의 JPA를 활용하여 개발한 경험</li>
              <li>RestFul API를 구현한 경험</li>
            </ul>
          </p>
          <p>
            <strong>TO |</strong>
            <br />
            <ul>
              <li>Notion, Git을 활용하여 팀원 간의 협업 경험</li>
            </ul>
          </p>
          <hr />
        </div>
      </div>
      <div className='mt-5'></div>

      <div id="tech"></div>
      <div className={styles.techbox}>
        <div className='mt-5'></div>
        <p className={styles.who_title}>Tech</p>
        <div className={styles.techbox_content_box}>
          <p>
          <strong>S | Strong</strong>
          <ul className={styles.techbox_content}>
            <li>BE : Spring | Spring Boot | Flask | Spring JPA | MySQL</li>
            <li>FE : Next.js</li>
          </ul>
          </p>
          <p>
          <strong>W | Weak</strong>
          <ul className={styles.techbox_content}>
            <li>BE : Node.js | Redis | Kafka</li>
            <li>FE : Flutter | Vue.js | Android | C | C# | C++</li>
          </ul>
          </p>
          <p>
          <strong>E | ETC</strong>
          <ul className={styles.techbox_content}>
            <li>DEV : Docker | Kubernetes | NginxIngressController | AWS | Linux | CloudFlare</li>
            <li>TO : InteliJ | Visual Studio Code | Eclipse | Git | Notion | Slack</li>
          </ul>
          </p>
          <hr />
        </div>
      </div>
      <div className='mt-5'></div>
      <div id="project"></div>
      <div className={styles.projectimgbox}>
          <div className='mt-5'></div>
          <p>Projects</p>
          <div className={styles.divider}></div>
            <div className={styles.slideimg}>
              <Carousel data-bs-theme="dark" variant="dark" style={{height : '100%'}}>
                <Carousel.Item>
                  <ProjectItem projectName="Aily-Recycle" category="TeamProject" team="KOEX" githubLink="https://github.com/Aily-AIRecycle" />
                </Carousel.Item>
                <Carousel.Item>
                  <ProjectItem projectName="Aily-Recycle" category="Test" team="KOEX" githubLink="https://github.com/Aily-AIRecycle" />
                </Carousel.Item>
            </Carousel>
          </div>
      </div>
      <div className='mt-5'></div>
      <div id="award"></div>
      <div className={styles.awardbox}>
        <div className='mt-5'></div>
        <div className={styles.awardtitle}>
          <p>Awards</p>
        </div>
        <div className={styles.awarddetail}>
          <div className={styles.awarddetail_title}>
            <p>Activities</p>
          </div>
          <div className={styles.awarddetail_content_title}>
          <a href='https://leeportfolios.notion.site/KES-2023-Aily-3fbb2eb9ce9d4f19a314762866b87b8a?pvs=4'><p>2023 동양미래EXPO 제41회 작품전시회 - 장려상 -</p>
            </a>
          </div>
          <div className={styles.awarddetail_content}>
            <p style={{fontWeight: 'bold',  textAlign: 'center', fontSize: '1.5vw' }}>Back-End</p><br/><br/>
              - 라즈베리파이4 활용한 클러스터링<br/>
              - Dokcer(DockerHub)를 이용해 유지, 보수 활용<br/>
              - Kubernetes(k3s)를 활용하여 앱/웹 배포<br/>
              - Nginx Ingress Controller 사용하여 트래픽 분산 (성능 향상, 서버 장애 방지)<br/>
              - DNS 및 SSL 설정<br/>
              - NFS(Network File System) 서버를 구축하여 중요 데이터 보존<br/>
              - Spring, Flask를 사용한 K3S based MSA 구축<br/><br/>
          </div>
          <div className={styles.awarddetail_content}>
          <p style={{fontWeight: 'bold', marginBottom: '2%',  textAlign: 'center', fontSize: '1.5vw'  }}>사용된 기술</p><br/><br/>
              Spring, Flask, Next.js, Kubernetes(k3s), Docker, NFS, DNS, MSA, Arduino, NginxIngressController, YoloV5 등
          <hr />
          </div>
              {/* <Achievements title="2023 동양미래EXPO 제41회 작품전시회 - 장려상 -"/> */}
        </div>
      </div>
    </>
  );
};

export default Mainpage;


