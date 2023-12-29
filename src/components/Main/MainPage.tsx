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
  const TypeScript = 30;
  const Spring = 60;
  const Java = 60;
  const Linux = 20;

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
            <p style={{ fontSize: '2vw', fontWeight: 'bold' }}>Lee Jong Won</p>
            <p style={{ fontSize: '1.5vw' }}>BackEnd/Server</p>
            <p style={{ fontSize: '1vw', marginTop: '5%', marginBottom: '1%' }}>
              E | whddnjs5255@gmail.com
            </p>
            <p style={{ fontSize: '1vw', marginLeft: '-16.5%' }}>
              P | 010-8563-0938
            </p>
          </div>
        </div>
        <div className={styles.aboutme}>
          <div className={styles.abouttitle}>
            <p>AboutMe</p>
          </div>
          <div className={styles.aboutinfor}>
            <div className={styles.aboutinfor2}>
              <p style={{ fontSize: '2vw', fontWeight: 'bold', marginBottom: '2%' }}>
              Hello. My Name Is Jong-won Lee
              </p>
              <p>I am a back-end engineer who develops in line with rapidly changing trends.</p>
              <p>Studying and developing the latest technologies in line with trends.</p>
            </div>
            <div className={styles.aboutinfor3}>
              <h2 style={{fontWeight: 'bold', marginBottom: '2%' }}>Awards</h2>
              <p>2023 KOEX Grand Prize</p>
              <p>2023 Technology Startup Competition</p><br/>
              <h2 style={{fontWeight: 'bold', marginBottom: '2%' }}>Links</h2>
              <p><Link href="https://www.acmicpc.net/">Baekjoon Silver</Link></p>
              <p><Link href="https://github.com/LJW22222">GitHub</Link></p>
              <p><Link href="https://github.com/LJW22222">Notion</Link></p>
            </div>
          </div>
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
      <div id="tech"></div>
      <div className={styles.techbox}>
        <div className='mt-5'></div>
        <p>Tech</p>
        <Container ref={ref} className={isInViewport ? "frame-in" : ""}>
          <div className={`${styles.skill} ${styles.frontskill}`}>
          <h1 style={{fontWeight: 'bold', marginBottom: '2%' , textAlign: 'center' }}>Strong</h1>
            <p>Backend</p>
            <div className={styles.skillbox}>
              <Image
                width={100}
                height={90}
                className={styles.techskillimg}
                src="/img/skillimg/springimg.png?text=First slide&bg=f5f5f5"
                alt="react"
              />
              <Image
                width={100}
                height={90}
                className={styles.techskillimg}
                src="/img/skillimg/springimg.png?text=First slide&bg=f5f5f5"
                alt="react"
              />
            </div>
          </div>
          <div className={`${styles.skill} ${styles.backendskill}`}>
            <h1 style={{fontWeight: 'bold', marginBottom: '2%' , textAlign: 'center' }}>Weak</h1>
            <p>Backend</p>
            <div className={styles.skillbox}>
              <Image
                width={130}
                height={150}
                className={styles.techskillimg}
                src="/img/skillimg/react.png?text=First slide&bg=f5f5f5"
                alt="spring"
              />
              <Image
                width={130}
                height={150}
                className={styles.techskillimg}
                src="/img/skillimg/react.png?text=First slide&bg=f5f5f5"
                alt="spring"
              />
            </div>
          </div>
          <div className={`${styles.skill} ${styles.serverskill}`}>
            <h1 style={{fontWeight: 'bold', marginBottom: '2%', textAlign: 'center' }}>Studying</h1>
            <p>Backend</p>
            <div className={styles.skillbox}>
              <Image
                width={130}
                height={150}
                className={styles.techskillimg}
                src="/img/skillimg/react.png?text=First slide&bg=f5f5f5"
                alt="spring"
              />
              <Image
                width={130}
                height={150}
                className={styles.techskillimg}
                src="/img/skillimg/react.png?text=First slide&bg=f5f5f5"
                alt="spring"
              />
            </div>
          </div>
          <div className={`${styles.skill} ${styles.tool}`}>
            <h1 style={{fontWeight: 'bold', marginBottom: '2%',  textAlign: 'center' }}>Tools</h1>
            <p>Backend</p>
            <div className={styles.skillbox}>
              <Image
                width={130}
                height={150}
                className={styles.techskillimg}
                src="/img/skillimg/react.png?text=First slide&bg=f5f5f5"
                alt="spring"
              />
              <Image
                width={130}
                height={150}
                className={styles.techskillimg}
                src="/img/skillimg/react.png?text=First slide&bg=f5f5f5"
                alt="spring"
              />
            </div>
          </div>
        </Container>
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


