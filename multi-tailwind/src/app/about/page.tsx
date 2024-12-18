import React from "react";

export default function About() {
  return (
 
      <section className="about h-screen flex items-center justify-start bg-cover bg-center text-pink-950 px-10" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-pink-200  p-8 rounded-md max-w-lg">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
          <p>
            Welcome to [Glowup Cosmetics]! We&apos;re here to make beauty easy, fun,
            and accessible for everyone! At [Glowup Cosmetics], we believe that
            makeup isn&apos;t just about looking good—it&apos;s about feeling confident
            and expressing yourself. Our products are thoughtfully created to
            suit all skin types and tones, so no matter who you are, you&apos;ll find
            something you&apos;ll love. Plus, we&apos;re committed to being kind to the
            planet with eco-friendly packaging and cruelty-free formulas. Thank
            you for choosing [Glowup Cosmetics]. Let&apos;s make beauty simple and
            joyful together!
          </p>
        </div>
      </section>
  
  );
}
