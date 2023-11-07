import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/PersWebDaffa.css'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Circular Progressbar
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from "../../scripts/RadialSeparators";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// Icon
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const PersWebDaffa = () => {
  const [data, setData] = useState(null);
  const {username} = useParams();
  const baseUrl = "http://localhost:5000/";
  const percentage = 66;
  

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/convert-web/${username}`);
      console.log("Data : ", response.data.data);
      setData(response.data.data);
      console.log("Data web 1: ",response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [username])

  
  const openTab = (tabname) => (event) => {
    let tablinks = document.getElementsByClassName("tab-link");
    let tabcontents = document.getElementsByClassName("tab-content");
    for (let tablink of tablinks) {
      tablink.classList.remove("link-active");
    }

    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("content-active");
    }

    event.currentTarget.classList.add("link-active");
    document.getElementById(tabname).classList.add("content-active");
  }


  
  return (
    <div>
      {data && data.data_diri ? (
        <>
            <div id="persWebDaffa">
              <Container>
                <section id="home">
                  <Navbar expand="lg" className="bg-body-tertiary">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto navbar-element">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#profile" className="text-light">Profile</Nav.Link>
                        <Nav.Link href="#portfolio" className="text-light">Portfolio</Nav.Link>
                        <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>

                  <h1 className="text-light introduce">Hi, My name is<br/>{data.data_diri.nama}</h1>
                  <Button variant="outline-light" className="mt-3">Download CV</Button>{' '}
                </section>

                <section id="profile">
                  <h1 className="text-light title">Profile</h1>
                  <Row>
                    <Col xs={9} className="text-light deskripsi">
                      <Row>
                        <Col>{data.data_diri.deskripsi}</Col>
                      </Row>
                      <Row>
                        <Col className="content-element">
                          <p className="d-inline-block text-light tab" onClick={openTab('educations')}>Education</p>
                          <p className="d-inline-block text-light tab" onClick={openTab('organization')}>Organization</p>
                          <p className="d-inline-block text-light tab" onClick={openTab('skill')}>Skill</p>

                          <div className="tab-content content-active" id="educations">
                            <div className="info">
                              {data.data_diri.pendidikans.map((pendidikan, index) => {
                                const startDate = new Date(pendidikan.tahun_mulai_ajaran);
                                const endDate = new Date(pendidikan.tahun_akhir_ajaran);

                                return (
                                  <React.Fragment key={index}>
                                    <p className="text-light">
                                      {pendidikan.instansi_pendidikan}{" "}
                                      <span>({startDate.getFullYear()} - {endDate.getFullYear()})</span>
                                    </p>
                                    <p className="subtitle text-light">{pendidikan.jurusan}</p>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>

                          <div className="tab-content" id="organization">
                            <div className="info">
                              {data.data_diri.organisasis.map((organisasi, index) => {
                                const startDate = new Date(organisasi.tanggal_mulai_menjabat);
                                const endDate = new Date(organisasi.tanggal_akhir_menjabat);

                                return (
                                  <React.Fragment key={index}>
                                    <p className="text-light">
                                      {organisasi.nama_organisasi}{" "}
                                      <span>({startDate.getFullYear()} - {endDate.getFullYear()})</span>
                                    </p>
                                    <p className="subtitle text-light">{organisasi.posisi}</p>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>

                          <div className="tab-content" id="skill">
                            <div className="wrapper">
                                {data.data_diri.skills.map((skill, index) => {
                                  return (
                                    <div className="info" style={{ width:"20%" }}>
                                    <React.Fragment key={index}>
                                      <p className="text-light">{skill.nama_skill}</p>
                                      <CircularProgressbarWithChildren
                                        value={skill.capability}
                                        text={`${skill.capability}%`}
                                        strokeWidth={10}
                                        styles={
                                            buildStyles({
                                            strokeLinecap: "butt",
                                          })
                                        }
                                        
                                      >
                                        <RadialSeparators
                                          count={12}
                                          style={{
                                            background: "#fff",
                                            width: "2px",
                                            height: `${10}%`
                                          }}
                                        />
                                      </CircularProgressbarWithChildren>
                                    </React.Fragment>
                                  </div>
                                  )
                                })}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="text-light d-flex justify-content-center">
                    <img
                      src={`${baseUrl}${data.data_diri.foto}`}
                      alt=""
                      className="w-100"
                      style={{ height: "auto" }}
                    />
                    </Col>
                  </Row>
                </section>

                <section id="portfolio">
                  <h1 className="text-light title text-center">Portfolio</h1>

                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    style={{ 
                      width: "75%",
                      height: "500px"
                    }}
                  >
                    {data.data_diri.portofolios.map((portofolio, index) => (
                      <SwiperSlide key={index}>
                        <div className="slide-container">
                          <img
                            src={`${baseUrl}${portofolio.file_portofolio}`}
                            alt={`Portfolio ${index + 1}`}
                            className="top-aligned-image"
                          />
                          <div className="text-overlay">
                            <h2 className="text-light">{portofolio.nama_portofolio}</h2>
                            <p className="text-light">{portofolio.deskripsi_portofolio}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>

                <section id="contact">
                  <h1 className="text-light title">Contact Me</h1>
                  <p className="text-light">For business inquiry please send email to <span>{data.data_diri.email}</span></p>
                  <div className="wrapper">
                    <AiOutlineInstagram className="contact-element" size={"50px"} color="#fff"/>
                    <AiOutlineLinkedin className="contact-element" size={"50px"} color="#fff"/>
                    <AiOutlineGithub className="contact-element" size={"50px"} color="#fff"/>
                  </div>
                </section>
              </Container>
            </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default PersWebDaffa