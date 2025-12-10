import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import './Messages.css'

const Messages = () => {
  const [openModalId, setOpenModalId] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenModalId(null);
      }
    };

    if (openModalId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openModalId]);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  const handleOverlayClick = (e) => {
 
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>

<div className="ambient-glow orange"></div>
<div className="ambient-glow red"></div>

<section className="lala">

    <section>
    <Sidebar />
    </section>
  
  <section className="helio"> 
  <main className="main-content">
        <header className="page-header">
          <div className="page-header-left">
            <h1>Messages</h1>
            <p>8 unread messages</p>
          </div>
          <div className="filter-tabs">
            <button className="filter-tab all">All</button>
            <button className="filter-tab unread">Unread</button>
          </div>
        </header>

   
        <div className="messages-list">

          <div
            className="message-card unread"
            onClick={() => openModal("sarah")}
          >
            <div className="message-header">
              <div className="avatar orange">S</div>
              <div className="sender-info">
                <div className="sender-name">
                  Sarah Johnson
                  <span className="unread-indicator">✨</span>
                </div>
                <div className="sender-email">sarah.j@techcorp.com</div>
              </div>
              <div className="message-date">2025-11-24 • 10:30 AM</div>
            </div>
            <div className="message-subject">Project Collaboration Opportunity</div>
            <div className="message-preview">
              Hi! I came across your portfolio and I'm really impressed with your
              work on the e-commerce platform. We're currently looking for a lead
              designer for a similar project at TechCorp. The project involves
              building a B2B marketplace with ...
            </div>
          </div>

          
          <div
            className="message-card"
            onClick={() => openModal("ahmed")}
          >
            <div className="message-header">
              <div className="avatar teal">A</div>
              <div className="sender-info">
                <div className="sender-name">Ahmed Hassan</div>
                <div className="sender-email">
                  ahmedh@fintechstartup.io
                </div>
              </div>
              <div className="message-date">2025-11-23 • 2:15 PM</div>
            </div>
            <div className="message-subject">UX Consultation Request</div>
            <div className="message-preview">
              Hello, we are building a fintech app focused on cryptocurrency
              trading and need expert UX guidance. Your portfolio shows exactly
              the kind of work we need - particularly your mobile banking app
              design. Are you available for a consultation next month?
            </div>
          </div>

       
          <div className="message-card">
            <div className="message-header">
              <div className="avatar purple">M</div>
              <div className="sender-info">
                <div className="sender-name">Maria Garcia</div>
                <div className="sender-email">
                  maria.garcia@designconf.com
                </div>
              </div>
              <div className="message-date">2025-11-21 • 4:20 PM</div>
            </div>
            <div className="message-subject">
              Speaking Opportunity - DesignCon 2026
            </div>
            <div className="message-preview">
              We're organizing DesignCon 2026 and would love to have you as a
              keynote speaker. Your work on multilingual interfaces and
              accessibility is particularly relevant to our audience. The
              conference will be held in Dubai next March. We cover all expenses
              and offer an honorarium. Would you be interested?
            </div>
          </div>

        
          <div className="message-card">
            <div className="message-header">
              <div className="avatar blue">J</div>
              <div className="sender-info">
                <div className="sender-name">James Chen</div>
                <div className="sender-email">
                  james.chen@agencypro.com
                </div>
              </div>
              <div className="message-date">2025-11-20 • 11:00 AM</div>
            </div>
            <div className="message-subject">Freelance Design Work</div>
            <div className="message-preview">
              Hi there! Agency Pro is looking for talented freelance designers to
              join our network. We have multiple clients in need of UI/UX design
              services, and your portfolio stood out to us. Would you be
              interested in taking on freelance projects? Rates are competitive
              and projects vary from 2-week sprints to 3-month contracts.
            </div>
          </div>

         
          <div className="message-card">
            <div className="message-header">
              <div className="avatar green">F</div>
              <div className="sender-info">
                <div className="sender-name">Fatima Al-RahmanN</div>
                <div className="sender-email">
                  f.alrahman@dubaiventures.ae
                </div>
              </div>
              <div className="message-date">2025-11-19 • 3:30 PM</div>
            </div>
            <div className="message-subject">Project Collaboration Opportunity</div>
            <div className="message-preview">
              Hi! I came across your portfolio and I'm really impressed with your
              work on the e-commerce platform. We're currently looking for a lead
              designer for a similar project at TechCorp. The project involves
              building a B2B marketplace with ...
            </div>
          </div>

          
          <div className="message-card">
            <div className="message-header">
              <div className="avatar pink">D</div>
              <div className="sender-info">
                <div className="sender-name">David Martinez</div>
                <div className="sender-email">
                  david.m@innovatelab.com
                </div>
              </div>
              <div className="message-date">2025-11-17 • 5:45 PM</div>
            </div>
            <div className="message-subject">Educational Platform UI Design</div>
            <div className="message-preview">
              We're developing an educational platform for K-12 students and need
              someone with strong UX skills to help us design an engaging,
              age-appropriate interface. The project timeline is 4 months with
              possibility of ongoing maintenance work. Would you be interested in
              learning more?
            </div>
          </div>

       
          <div className="message-card">
            <div className="message-header">
              <div className="avatar yellow">D</div>
              <div className="sender-info">
                <div className="sender-name">Lisa Thompson</div>
                <div className="sender-email">
                  lisa.t@edutech.com
                </div>
              </div>
              <div className="message-date">2025-11-18 • 1:15 PM</div>
            </div>
            <div className="message-subject">Partnership Proposal</div>
            <div className="message-preview">
              InnovateLab is a design agency specializing in SaaS products. We're
              looking to partner with talented independent designers for overflow
              work and specialized projects. Your dashboard and analytics work is
              exceptional. Let's discuss a potential partnership structure that
              would be beneficial for both of us.
            </div>
          </div>
        </div>
      </main>

      
      <div
        className={`modal-overlay ${
          openModalId === "sarah" ? "active" : ""
        }`}
        id="modal-sarah"
        onClick={handleOverlayClick}
      >
        <div className="modal">
          <div className="modal-header">
            <h2 className="modal-title">Message Details</h2>
            <button className="close-btn" onClick={closeModal}>
              GO Back
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-sender">
              <div className="modal-avatar avatar orange">S</div>
              <div className="modal-sender-info">
                <h3>Sarah Johnson</h3>
                <p>sarah.j@techcorp.com</p>
              </div>
            </div>
            <h4 className="modal-subject">Project Collaboration Opportunity</h4>
            <div className="modal-content">
              Hi! I came across your portfolio and I'm really impressed with your
              work on the e-commerce platform. We're currently looking for a lead
              designer for a similar project at TechCorp. The project involves
              building a B2B marketplace with advanced filtering, real-time
              inventory management, and a seamless checkout experience.
              <br />
              <br />
              We believe your experience with complex e-commerce systems makes you
              an ideal candidate. The role would be fully remote with flexible
              hours. We offer competitive compensation and equity options.
              <br />
              <br />
              Would you be available for a call next week to discuss this
              opportunity further?
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-btn reply">Reply</button>
            <button className="modal-btn mark-read">Mark As Read</button>
            <button className="modal-btn delete">Delete</button>
          </div>
        </div>
      </div>

  
      <div
        className={`modal-overlay ${
          openModalId === "ahmed" ? "active" : ""
        }`}
        id="modal-ahmed"
        onClick={handleOverlayClick}
      >
        <div className="modal">
          <div className="modal-header">
            <h2 className="modal-title">Message Details</h2>
            <button className="close-btn" onClick={closeModal}>
              GO Back
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-sender">
              <div className="modal-avatar avatar teal">A</div>
              <div className="modal-sender-info">
                <h3>Ahmed Hassan</h3>
                <p>ahmedh@fintechstartup.io</p>
              </div>
            </div>
            <h4 className="modal-subject">UX Consultation Request</h4>
            <div className="modal-content">
              Hello, we are building a fintech app focused on cryptocurrency
              trading and need expert UX guidance. Your portfolio shows exactly
              the kind of work we need - particularly your mobile banking app
              design. Are you available for a consultation next month?
              <br />
              <br />
              Our app aims to simplify crypto trading for beginners while
              providing advanced features for experienced traders. We're
              particularly interested in your approach to complex data
              visualization and user onboarding flows.
              <br />
              <br />
              The consultation would involve reviewing our current designs,
              providing feedback, and helping us establish a design system that
              can scale as we add more features. We're flexible on timing and can
              work around your schedule.
              <br />
              <br />
              Looking forward to hearing from you!
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-btn reply">Reply</button>
            <button className="modal-btn mark-read">Mark As Read</button>
            <button className="modal-btn delete">Delete</button>
          </div>
        </div>
      </div>

    
  </section>


</section>

  
    
    </>
  );
};

export default Messages;
