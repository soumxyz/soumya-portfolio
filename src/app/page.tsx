"use client";

import { AboutSection } from "@/sections/About";
import { aboutSectionId, contactSectionId, heroSectionId, projectsSectionId } from "@/sections/constants";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { useState } from "react";
import { SmoothCursor } from "@/components/SmoothCursor";

export default function Home() {
    const [activeSectionId, setActiveSectionId] = useState<string>(heroSectionId);
    return (
        <>
            <SmoothCursor />
            <Header activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
            <HeroSection id={heroSectionId} />
            <ProjectsSection id={projectsSectionId} />
            <TapeSection />
            {/* If you want to bring back the endorsements section, uncomment the line below */}
            {/* <TestimonialsSection /> */}
            <AboutSection id={aboutSectionId} />
            <ContactSection id={contactSectionId} />
            <Footer />
        </>
    );
}

// Home page is a Client Component; keep site-level metadata in layout.tsx
