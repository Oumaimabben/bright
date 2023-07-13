import React from "react";
import Card from "./Card";
import Titles from "./Titles";
const WhyUs = () => {
  const cards = [
    {
      title: "Validated Certification",
      description:
        "Our certificates hold significant value as they are endorsed by the governance authorities, ensuring their credibility and recognition.",
      
    },
    {
      title: "Internship Opportunities",
      description:
        "We offer valuable internship programs, providing practical experience and bridging the gap between academia and the professional world.",
       
    },
    {
      title: "Job Opportunities",
      description:
        "Through our extensive network of partners, we connect learners with potential employment prospects, opening doors to exciting career paths.",
       
    },
    {
      title: "Top-tier Mentors and Experts",
      description:
        "Our platform boasts a team of highly accomplished mentors and experts in their respective domains. They bring a wealth of knowledge and experience to guide learners on their educational journey.",
       
    },
    {
      title: "Engaging Gamification",
      description:
        " Learning becomes enjoyable and immersive with our gamification approach. We incorporate interactive elements and challenges to make the educational experience both fun and effective.",
       
    },
    {
      title: "Simplified Teaching Methods",
      description:
        "Our top-tier mentors employ effective teaching techniques, ensuring that complex concepts are presented in a simplified manner. This approach enables learners to grasp and retain information more efficiently.",
       
    },
    {
      title: "Tunisian Language 'الدارجة' Integration",
      description:
        "To ensure optimal comprehension, we offer content delivery in the Tunisian language 'الدارجة.' By using a language familiar to learners, we enhance their understanding and overall learning experience.",
      
    },
    {
      title: "Real-time Projects with Real Clients",
      description:
        "We provide practical exposure by offering real-time projects that align with current market demands. These projects involve collaboration with real clients, enabling learners to develop practical skills and gain industry-relevant experience.",
      
    },
    {
      title: "What to expect",
      description:
        "A comprehensive and professional educational experience while enjoying the benefits of validated certifications, internship and job opportunities, renowned mentors, gamified learning, and real-world projects.",
       
    },
  ];
  return (
    <section className=" p-20 ">
      <Titles title={"Why us?"} />

      <div className="grid grid-cols-3 gap-6  mt-20">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description}  />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
