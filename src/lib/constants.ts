// Brand colors
export const COLORS = {
  primaryBlue: '#235FF8',
  darkBlue: '#0B1B42',
  lightBlue: '#E1F5FC',
  accentOrange: '#F15624',
  accentYellow: '#FFCF30',
};

// Core message data
export const CORE_MESSAGES = [
  {
    id: 1,
    title: "A Better Whole-Person Approach",
    description: "We provide integrated physical and mental health treatment through our network of trusted providers.",
    whatItMeans: "We coordinate care between physical and mental health providers to treat the whole person.",
    whyItMatters: "Disconnected care leads to worse outcomes, making integrated treatment essential for true health improvement.",
    relatedTo: "Original Message 1 & 3",
    audiences: ["patients", "pcps", "therapists", "internal"]
  },
  {
    id: 2,
    title: "Evidence-Based Collaborative Care",
    description: "We implement proven collaborative care models that improve clinical outcomes.",
    whatItMeans: "Our approach is grounded in research-validated methods that show measurable improvements in patient health.",
    whyItMatters: "Traditional disconnected care models don't achieve the same level of clinical improvement our approach provides.",
    relatedTo: "Original Message 2 & 5",
    audiences: ["patients", "pcps", "therapists", "internal"]
  },
  {
    id: 3,
    title: "Accessible & Personalized Treatment",
    description: "We make quality care more accessible through flexible options tailored to individual needs.",
    whatItMeans: "We provide multiple pathways to care that adapt to patient preferences, schedules, and clinical needs.",
    whyItMatters: "Standard one-size-fits-all approaches create barriers that prevent many people from getting needed care.",
    relatedTo: "Original Message 4",
    audiences: ["patients", "pcps", "therapists", "internal"]
  },
  {
    id: 4,
    title: "Measurable Health Improvements",
    description: "We track progress through objective measurements to ensure patients achieve meaningful health improvements.",
    whatItMeans: "We use validated assessment tools to monitor patient progress and adjust treatment as needed.",
    whyItMatters: "Measurement-based care identifies what's working and what needs adjustment to achieve the best outcomes.",
    relatedTo: "Original Message 5",
    audiences: ["patients", "pcps", "therapists", "internal"]
  }
];

// Audience data
export const AUDIENCES = [
  {
    id: "patients",
    name: "Patients",
    description: "Individuals seeking mental health services",
    messageDetails: {
      1: {
        supportingPoints: [
          { point: "Your physical and mental health are connected, and we treat them together", source: "Original Message 1" },
          { point: "Your primary care provider and therapist work as a team", source: "Original Message 3" },
          { point: "You'll have one coordinated treatment plan, not separate disconnected ones", source: "Original Message 1" }
        ],
        audienceLanguage: [
          "Our care team works together to help you feel better in both body and mind",
          "No more explaining your story multiple times to different providers",
          "Your doctors talk to each other so you get the right care at the right time"
        ]
      },
      2: {
        supportingPoints: [
          { point: "Our methods are based on research showing what truly works", source: "Original Message 2" },
          { point: "Our collaborative approach has been proven to work better than traditional care", source: "Original Message 5" },
          { point: "We continuously measure your progress to make sure you're improving", source: "Original Message 2" }
        ],
        audienceLanguage: [
          "Our approach has been shown to help people feel better faster",
          "We use methods that have been scientifically proven to work",
          "You'll have a team of experts using the most effective approaches for your care"
        ]
      },
      3: {
        supportingPoints: [
          { point: "Choose from in-person, video, or messaging options", source: "Original Message 4" },
          { point: "Your care adapts to your life, not the other way around", source: "Original Message 4" },
          { point: "Get care that fits your schedule and preferences", source: "Original Message 4" }
        ],
        audienceLanguage: [
          "Care that fits into your life, not the other way around",
          "Multiple ways to connect with your care team",
          "Get help your way - whether that's in person, by video, or through messages"
        ]
      },
      4: {
        supportingPoints: [
          { point: "Regular check-ins to track your progress", source: "Original Message 5" },
          { point: "Treatment that adjusts based on how you're doing", source: "Original Message 5" },
          { point: "Clear goals and ways to measure improvement", source: "Original Message 5" }
        ],
        audienceLanguage: [
          "We'll regularly check how you're feeling to make sure you're getting better",
          "Your treatment plan will change based on what's working for you",
          "You'll see your progress over time with regular check-ins"
        ]
      }
    }
  },
  {
    id: "pcps",
    name: "Primary Care Providers",
    description: "Physicians and clinicians providing primary care",
    messageDetails: {
      1: {
        supportingPoints: [
          { point: "Integrated care model reduces burden on PCPs", source: "Original Message 1" },
          { point: "Direct communication channels with mental health specialists", source: "Original Message 3" },
          { point: "Shared treatment plans visible to all providers", source: "Original Message 3" }
        ],
        audienceLanguage: [
          "Seamless referrals and ongoing collaboration with mental health specialists",
          "Reduce your administrative burden with our integrated care team",
          "Stay informed about your patients' mental health treatment without additional time demands"
        ]
      },
      2: {
        supportingPoints: [
          { point: "Our model follows IMPACT collaborative care guidelines", source: "Original Message 2" },
          { point: "Regular case consultations with psychiatric specialists", source: "Original Message 2" },
          { point: "Evidence-based screening and assessment tools", source: "Original Message 5" }
        ],
        audienceLanguage: [
          "Implement the gold standard in collaborative care with minimal practice disruption",
          "Access to psychiatric consultation without lengthy referral processes",
          "Evidence-based protocols that integrate with your existing workflow"
        ]
      },
      3: {
        supportingPoints: [
          { point: "Multiple referral and consultation options", source: "Original Message 4" },
          { point: "Flexible scheduling for warm handoffs and joint sessions", source: "Original Message 4" },
          { point: "Patient-centered care coordination", source: "Original Message 4" }
        ],
        audienceLanguage: [
          "Give your patients options that fit their needs and preferences",
          "Streamlined referral process that reduces administrative burden",
          "Care coordination that respects both provider and patient time constraints"
        ]
      },
      4: {
        supportingPoints: [
          { point: "Regular outcomes reporting for referred patients", source: "Original Message 5" },
          { point: "Standardized metrics across physical and mental health", source: "Original Message 5" },
          { point: "Treatment algorithms adjusted based on patient progress", source: "Original Message 5" }
        ],
        audienceLanguage: [
          "Receive regular updates on your patients' progress and outcomes",
          "Monitor both physical and mental health improvements in one place",
          "Evidence-based treatment adjustments based on measurement-based care"
        ]
      }
    }
  },
  {
    id: "therapists",
    name: "Therapists",
    description: "Mental health professionals providing therapy services",
    messageDetails: {
      1: {
        supportingPoints: [
          { point: "Direct communication with medical providers", source: "Original Message 1" },
          { point: "Access to patients' physical health information", source: "Original Message 3" },
          { point: "Collaborative treatment planning with medical team", source: "Original Message 3" }
        ],
        audienceLanguage: [
          "Provide more effective therapy with insight into patients' complete health picture",
          "Collaborate directly with medical providers for truly integrated care",
          "Address both the physical and psychological factors affecting your patients"
        ]
      },
      2: {
        supportingPoints: [
          { point: "Evidence-based therapeutic protocols", source: "Original Message 2" },
          { point: "Regular case consultation with integrated team", source: "Original Message 2" },
          { point: "Support for implementing measurement-based care", source: "Original Message 5" }
        ],
        audienceLanguage: [
          "Join a practice model validated by extensive clinical research",
          "Receive support implementing evidence-based protocols that improve outcomes",
          "Collaborate with a multidisciplinary team for complex case management"
        ]
      },
      3: {
        supportingPoints: [
          { point: "Flexible practice options (in-person, telehealth, hybrid)", source: "Original Message 4" },
          { point: "Technology support for various care modalities", source: "Original Message 4" },
          { point: "Patient-centered scheduling and communication", source: "Original Message 4" }
        ],
        audienceLanguage: [
          "Practice in ways that work best for you and your patients",
          "Technology and support for multiple therapeutic modalities",
          "Flexible scheduling options that respect your professional boundaries"
        ]
      },
      4: {
        supportingPoints: [
          { point: "Integrated assessment and outcomes tracking", source: "Original Message 5" },
          { point: "Structured supervision and case consultation", source: "Original Message 5" },
          { point: "Data-driven treatment adjustments", source: "Original Message 5" }
        ],
        audienceLanguage: [
          "Streamlined outcomes measurement integrated into your workflow",
          "See the concrete impact of your therapeutic interventions",
          "Data-informed supervision and professional development"
        ]
      }
    }
  },
  {
    id: "internal",
    name: "Internal Staff",
    description: "Staff members working within the organization",
    messageDetails: {
      1: {
        supportingPoints: [
          { point: "Our integrated model is our core differentiator", source: "Original Message 1" },
          { point: "We've built systems to enable true collaborative care", source: "Original Message 3" },
          { point: "Cross-disciplinary communication is essential to our model", source: "Original Message 3" }
        ],
        audienceLanguage: [
          "We're pioneering a better healthcare model that treats the whole person",
          "Our systems and processes are designed to break down traditional silos",
          "We measure our success by how well our teams collaborate across disciplines"
        ]
      },
      2: {
        supportingPoints: [
          { point: "Our methods are grounded in research and continuously refined", source: "Original Message 2" },
          { point: "We implement collaborative care with fidelity to evidence-based models", source: "Original Message 5" },
          { point: "Clinical excellence is our north star", source: "Original Message 2" }
        ],
        audienceLanguage: [
          "We don't just say we're evidence-based - we implement with fidelity",
          "Our clinical models are held to the highest standards of research validation",
          "We regularly review and refine our approach based on outcomes data"
        ]
      },
      3: {
        supportingPoints: [
          { point: "We prioritize patient preferences in care delivery", source: "Original Message 4" },
          { point: "Our systems support multiple care modalities", source: "Original Message 4" },
          { point: "We remove barriers to accessing appropriate care", source: "Original Message 4" }
        ],
        audienceLanguage: [
          "We design our processes around patient needs, not administrative convenience",
          "Our technology enables rather than restricts flexible care options",
          "We continually identify and eliminate barriers to care"
        ]
      },
      4: {
        supportingPoints: [
          { point: "Measurement is integrated into all clinical workflows", source: "Original Message 5" },
          { point: "We use data to drive continuous improvement", source: "Original Message 5" },
          { point: "Transparency in outcomes is fundamental to our approach", source: "Original Message 5" }
        ],
        audienceLanguage: [
          "We define success by measurable improvements in patient health",
          "Data drives our decisions at every level of the organization",
          "We're transparent about our outcomes, both successes and areas for improvement"
        ]
      }
    }
  }
];

// Rationale process steps
export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Audit Existing Messaging",
    description: "We conducted a comprehensive review of all current messaging materials, identifying strengths, inconsistencies, and areas for improvement."
  },
  {
    id: 2,
    title: "Stakeholder Interviews",
    description: "We gathered insights from key stakeholders across the organization to understand messaging challenges and opportunities."
  },
  {
    id: 3,
    title: "Audience Analysis",
    description: "We analyzed the needs and communication preferences of our four key audiences: patients, PCPs, therapists, and internal staff."
  },
  {
    id: 4,
    title: "Message Refinement",
    description: "We consolidated our original five messages into four clearer, more impactful core messages that better align with our brand voice."
  },
  {
    id: 5,
    title: "Audience-Specific Adaptation",
    description: "We tailored supporting points and language for each core message to resonate with specific audience needs and priorities."
  }
];

// Rollout steps
export const ROLLOUT_STEPS = [
  {
    id: 1,
    title: "Internal Training & Alignment",
    description: "Ensure all staff understand and can articulate the refined messaging framework.",
    details: [
      "Conduct department-specific training sessions",
      "Create quick reference materials for all staff",
      "Develop FAQ document addressing common questions",
      "Establish feedback mechanism for implementation challenges"
    ]
  },
  {
    id: 2,
    title: "Update Communication Materials",
    description: "Systematically update all external and internal communication assets.",
    details: [
      "Audit and prioritize materials for updating",
      "Update website content and structure",
      "Revise marketing collateral and sales materials",
      "Update patient-facing educational materials",
      "Refresh provider resources and referral information"
    ]
  },
  {
    id: 3,
    title: "Implement in Conversation Guides",
    description: "Integrate messaging into daily conversations and patient interactions.",
    details: [
      "Update call scripts for patient services team",
      "Create conversation guides for different clinical scenarios",
      "Develop email templates incorporating refined messages",
      "Train staff on naturalistic message integration"
    ]
  },
  {
    id: 4,
    title: "Measure & Refine",
    description: "Establish mechanisms to track implementation effectiveness and make adjustments.",
    details: [
      "Define key metrics for message effectiveness",
      "Conduct regular message consistency audits",
      "Gather feedback from target audiences",
      "Schedule quarterly review and refinement sessions"
    ]
  }
];