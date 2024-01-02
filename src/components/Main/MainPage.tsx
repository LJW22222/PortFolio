"use client";
import Image from 'next/image';
import Link from "next/link";
import styles from "@/components/Main/styles/MainPage.module.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 스타일시트를 추가
import { Container } from "@/components/Main/styles/skillAnimationcss"
import { useSkillScrollAnimation } from "@/components/Main/animation/skillAnimation";

const Mainpage = () => {

  const { ref, isInViewport } = useSkillScrollAnimation();
  const React = 40;

  return (
    <>
      <div className={styles.myinformation}>
        <div className={styles.Businesscard}>
          <div className={styles.myimg}>
            <Image
              src="/img/peple.png"
              alt="Description of the image"
              width={200}
              height={160}
              style={{
                marginLeft: '50%',
                maxWidth: '100%', // 이미지의 최대 너비를 부모 요소에 맞게 조정
                height: 'auto',   // 높이를 자동으로 조정하여 비율 유지
              }}
            />
          </div>
          <div className={styles.information}>
            <p style={{ fontSize: '2vw', fontWeight: 'bold' }}>Jongwon Lee</p>
            <p style={{ fontSize: '1.5vw' }}>Back-end Developer</p>

            <p style={{ fontSize: '1vw', marginTop : "1%" }}>
            DMU ComputerSoftwareEngineering B.S.
            </p>
            <p style={{ fontSize: '1vw', marginBottom: '1%' }}>
              E | whddnjs5255@gmail.com
            </p>
            <p style={{ fontSize: '1vw', marginLeft: '-13%' }}>
              P | 010-8563-0938
            </p>
          </div>
        </div>
        
        <div className={styles.aboutme}>
          <div className={styles.aboutinfor}>
            <div className={styles.aboutinfor2}>
              <p style={{ fontSize: '1.6vw', fontWeight: 'bold', marginBottom: '3%', textAlign : "center" }}>
              Hi! I`m JongWon Lee<br/> 
              I am a back-end engineer who develops in line with rapidly changing trends
              </p>
              <p>I`m Studying the latest technologies in line with changing trends.</p>
              <p>I Studying steadily so as not to fall behind.</p>
              <p>We are working on a project that reflects the latest technology.</p><br/>
              <p>- DMU ComputerSoftwareEngineering B.S.<br/></p>
              <p style={{ marginLeft : "7%" }}>● 2023 DMU PD Lab MIT</p>
              <p>- 2020.05 ~ 2022.09 ROKA (Republic of Korea Army)</p>
              <p style={{ marginLeft : "7%" }}> ● GOP Signal Corps </p>
              <p style={{ marginLeft : "7%" }}> ● Best training camp squad(Awarded Division and Brigade Commanders Commendations)</p>
            </div>

          </div>
        </div>
      </div>
      <div id="about"></div>
      <div className={styles.who}>
        <div className='mt-5'></div>
        <p style={{ fontSize: '4.5vw', fontWeight: 'bold', textAlign : "center" }}>About</p>
        <p style={{ fontSize: '2.5vw', fontWeight: 'bold', textAlign : "left", marginLeft : "10%" }}>Me</p>
        <p style={{ fontSize: '2.5vw', fontWeight: 'bold', textAlign : "left", marginLeft : "10%" }}>Introduce</p>
        <div className={styles.who_introduce_box}>
          <p>빠르게 변화하는 최신기술을 따라가는 개발자 이종원 입니다.<br/>
          다양한 기술과 최신기술을 프로젝트에 적용시키는 것에 많은 관심이있고, 흥미를 느낍니다.<br/><br/>
          </p>

          <p>
          SE | <br/>
          - 라즈베리파이를 클러스터링하여 Kubernetes(k3s)를 적용한 경험<br/>
          - Kubernetes에 Nginx Ingress Controller를 사용한 경험<br/>
          - Kubernetes의 MasterNode와 N개의 WorkerNode를 동기화하여 NFS 서버를 설계 및 구축한 경험<br/>
          - Spring과 Flask를 사용하여 MSA 아키텍처를 설계한 경험<br/>
          - DockerHub 플랫폼을 활용하여 Docker를 사용하여 앱/웹 배포한 경험<br/>
          - 실시간 모니터링(whatap)를 활용하여 실시간으로 서버 모니터링 경험<br/><br/>

          BE | <br/>
          - Spring의 JPA를 활용하여 개발한 경험<br/>
          - RestFul API를 구현한 경험<br/><br/>
          
          TO | <br/>
          - Notion, Git을 활용하여 팀원간의 협업 경험

          </p>
        </div>
      </div>

      <div id="tech"></div>
      <div className={styles.techbox}>
        <div className='mt-5'></div>
         <p>Tech</p>
         <div className={styles.techbox_content_box}>
         <p>S | Strong</p>
              <div className={styles.techbox_content}>
                <p>BE :  Spring | Spring Boot | Flask | Spring JPA | MySQL </p>
                <p>FE :  Next.js</p>
              </div>
         <br/><br/>
         <p>W| Weak</p>
              <div className={styles.techbox_content}>
                <p>BE :  Node.js | Redis | Kafka |</p>
                <p>FE :  Flutter | Vue.js | Android | C | C# | C++</p>
              </div>
          <br/><br/>
          <p>E| ETC</p>
              <div className={styles.techbox_content}>
                <p>DEV : Docker | Kubernetes | NginxIngressController | AWS | Linux | CloudFlare </p>
                <p>TO :  InteliJ | Visual Studio Code | Eclipse | Git | Notion | Slack |</p>
              </div>
          <br/><br/>
         </div>
      </div>
           
      <div id="project"></div>
      <div className={styles.projectimgbox}>
          <div className='mt-5'></div>
          <p>Projects</p>
          <div className={styles.divider}></div>
            <div className={styles.slideimg}>
              <Carousel data-bs-theme="dark" variant="dark" style={{height : '100%'}}>
                <Carousel.Item>
                  <div className={styles.projectbox}>
                    <div className={`${styles.hideback}`}/>
                    <Link href="/ProjectInformation">
                      <div className={styles.imageContainer}>
                        <Image
                          width={220}
                          height={220}
                          className={`${styles.projectimg}`}
                          src="/img/AilySite.png?text=First slide&bg=f5f5f5"
                          alt="First slide"
                        />
                      </div>
                    </Link>
                    <div className={styles.projectname}>
                      <p style={{ fontSize: '2vw', fontWeight: 'bold'  }}>Aily-Recycle</p>
                      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent : 'left', marginLeft : '17%'}}>TeamProject</p>
                      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent : 'left', marginLeft : '17%'}}>KOEX</p>
                      <Link href="https://github.com/Aily-AIRecycle" target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                        GitHub ＞</Link>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className={styles.projectbox}>
                    <div className={styles.hideback}/>
                    <Link href="/ProjectInformation">
                      <div className={styles.imageContainer}>
                        <Image
                          width={220}
                          height={220}
                          className={`${styles.projectimg}`}
                          src="/img/AilySite.png?text=First slide&bg=f5f5f5"
                          alt="First slide"
                        />
                      </div>
                    </Link>
                    
                    <div className={styles.projectname}>
                      <p style={{ fontSize: '2vw', fontWeight: 'bold'  }}>Aily-Recycle</p>
                      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent : 'left', marginLeft : '17%'  }}>Order</p>
                      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent : 'left', marginLeft : '17%'  }}>Order</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                        What? ▶</Link>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className={styles.projectbox}>
                    <div className={styles.hideback}/>
                    <Link href="/ProjectInformation">
                      <div className={styles.imageContainer}>
                        <Image
                          width={220}
                          height={220}
                          className={`${styles.projectimg}`}
                          src="/img/AilySite.png?text=First slide&bg=f5f5f5"
                          alt="First slide"
                        />
                      </div>
                    </Link>
                    <div className={styles.projectname}>
                      <p style={{ fontSize: '2vw', fontWeight: 'bold'  }}>Aily-Recycle</p>
                      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent : 'left', marginLeft : '17%'  }}>Order</p>
                      <p style={{ fontSize: '1.5vw', fontWeight: 'bold', justifyContent : 'left', marginLeft : '17%'  }}>Order</p>
                      <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                      What? ▶</Link>
                    </div>
                  </div>
                </Carousel.Item>
            </Carousel>
          </div>
      </div>
 
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
            <h3>2023 동양미래EXPO 제41회 작품전시회 - 장려상 -</h3>
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
          </div>
              {/* <Achievements title="2023 동양미래EXPO 제41회 작품전시회 - 장려상 -"/> */}
        </div>
      </div>
    </>
  );
};

export default Mainpage;


