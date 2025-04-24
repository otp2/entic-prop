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
    title: "Comprehensive, connected care for your mental health journey",
    description: "We provide a full continuum of mental health care, all working together seamlessly within the Endeavor Health system.",
    whatItMeans: "We provide a full continuum of mental health care, all working together seamlessly within the Endeavor Health system.",
    whyItMatters: "People seeking care, and the providers who refer them, need to know we can be there to support them (or their patients) at every turn in their recovery path, without the added stress of navigating fragmented systems.",
    relatedTo: "Original Messages #2 and #5",
    audiences: ["patients", "pcps", "therapists", "internal"]
  },
  {
    id: 2,
    title: "Expert, compassionate care tailored to your unique needs",
    description: "Our team of highly qualified specialists delivers care grounded in evidence-based practices, always with a personal, understanding approach.",
    whatItMeans: "Our team of highly qualified specialists delivers care grounded in evidence-based practices, always with a personal, understanding approach.",
    whyItMatters: "Patients and referring providers want to feel confident in the quality of care and trust that they or their patients will be treated with genuine empathy and deep expertise.",
    relatedTo: "Original Messages #3 and #4",
    audiences: ["patients", "pcps", "therapists", "internal"]
  },
  {
    id: 3,
    title: "Easy access to the right support, right when you need it",
    description: "We make the process of getting started simple, helping you connect with the appropriate level of care and specialists across our extensive network of convenient locations.",
    whatItMeans: "We make the process of getting started simple, helping you connect with the appropriate level of care and specialists across our extensive network of convenient locations.",
    whyItMatters: "Finding behavioral healthcare can feel overwhelming. We focus on removing those hurdles and ensuring timely access to care.",
    relatedTo: "Original Message #1, incorporating elements of Original Message #5",
    audiences: ["patients", "pcps", "therapists", "internal"]
  },
  {
    id: 4,
    title: "We're here for Illinois: trusted behavioral health expertise woven into our communities",
    description: "As the largest integrated behavioral health network in Illinois, we have a significant reach and a genuine commitment to serving the diverse needs of communities across the state.",
    whatItMeans: "As the largest integrated behavioral health network in Illinois, we have a significant reach and a commitment to serving communities across the Chicagoland.",
    whyItMatters: "This highlights our scale, accessibility, and dedication to the people of Illinois, building trust and affirming our role as a leading provider.",
    relatedTo: "Recurring theme supported by stats and PPTs",
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
          { point: "We offer all levels of care, from inpatient support to outpatient therapy and medication management, so you can get the specific support you need as you move forward." },
          { point: "Your care is connected within the Endeavor Health system, which means your treatment plan stays coordinated and everyone is on the same page." },
          { point: "Think of it like healing from a physical injury – you wouldn't go straight from a cast to running a marathon. We're here to support each step of your recovery journey." }
        ],
        audienceLanguage: [
          "We're with you every step of the way, offering different kinds of support as you heal and grow.",
          "All your care is connected right here, making things easier for you.",
          "It's okay to take the time you need. We have programs designed to fit where you are in your journey."
        ]
      },
      2: {
        supportingPoints: [
          { point: "Our team includes specialists experienced in many areas, like anxiety, depression, substance use, and eating disorders." },
          { point: "You'll receive care from certified and licensed professionals who understand what you're going through." },
          { point: "Our patients often see significant progress, with real improvements in symptoms of anxiety and depression." },
          { point: "We are recognized for maintaining high standards of care and creating a positive patient experience." }
        ],
        audienceLanguage: [
          "Our experts specialize in helping people facing challenges just like yours.",
          "You can feel confident you're in good hands with our caring and qualified team.",
          "Our focus is on helping you feel better and build skills that last."
        ]
      },
      3: {
        supportingPoints: [
          { point: "Getting started is designed to be simple through our assessment and referral process." },
          { point: "We'll help you figure out the best starting point and care plan – you don't need to have it all figured out beforehand." },
          { point: "We accept most insurance plans and can guide you through the details." }
        ],
        audienceLanguage: [
          "Ready to explore support? We make it easy to take that first step.",
          "Please don't worry about knowing exactly what you need – we're here to help you find the right fit.",
          "We work with most insurance plans, so you can focus your energy on feeling better."
        ]
      },
      4: {
        supportingPoints: [
          { point: "We are a part of Endeavor Health, a large, trusted hospital system right here in Illinois." },
          { point: "We have locations and serve individuals across the entire state of Chicagoland." },
          { point: "Our services blend the personal feel of local care with the deep resources of a large system." }
        ],
        audienceLanguage: [
          "We're proud to be part of Endeavor Health, a name you can trust for your health needs.",
          "Care is often close to home, with locations conveniently located throughout Illinois.",
          "You really get the best of both worlds – caring local support backed by a major health system."
        ]
      }
    }
  },
  {
    id: "pcps",
    name: "Primary Care Providers",
    description: "Healthcare professionals referring patients for behavioral health services",
    messageDetails: {
      1: {
        supportingPoints: [
          { point: "We offer a complete continuum of care, facilitating smooth, seamless transitions for your patients between levels like PHP and IOP." },
          { point: "Integrated care management keeps everything within a single medical record, greatly simplifying coordination and communication back to your practice." },
          { point: "We have a dedicated behavioral health navigator service specifically designed to simplify the referral process and ensure rapid access to assessments." }
        ],
        audienceLanguage: [
          "Easily refer your patients for the full range of behavioral health care they need, with smooth, integrated transitions within our system.",
          "Our integrated records mean less administrative burden for you and better, more informed care for your patients.",
          "Our behavioral health navigators are your dedicated resource for straightforward, fast referrals."
        ]
      },
      2: {
        supportingPoints: [
          { point: "Our team includes board-certified psychiatrists and licensed clinical specialists covering all key behavioral health disciplines." },
          { point: "We offer specialized programs designed for complex conditions like eating disorders, substance use, and trauma." },
          { point: "We consistently deliver clinically significant outcomes across a wide range of conditions we treat." },
          { point: "We are a reputable, fully accredited partner you can trust for your behavioral health referrals." }
        ],
        audienceLanguage: [
          "Refer with full confidence to our team of certified specialists who are equipped to manage a wide spectrum of behavioral health needs.",
          "Our evidence-based programs consistently demonstrate measurable improvements in patient outcomes.",
          "Partner with us – a trusted, accredited provider dedicated to excellent behavioral healthcare."
        ]
      },
      3: {
        supportingPoints: [
          { point: "Our expert assessment team efficiently determines the appropriate level of care, significantly simplifying the referral process for your practice." },
          { point: "We accept most major commercial insurance plans, Medicare, and Medicaid, making access easier for your patients." },
          { point: "We provide 24/7 crisis assessment services for urgent situations." }
        ],
        audienceLanguage: [
          "Simply refer your patients to us; our assessment team will handle finding the precise level of care they require.",
          "Access to care is made easy for your patients, supported by our broad insurance acceptance.",
          "For any urgent behavioral health needs, please know we offer 24/7 crisis assessment availability."
        ]
      },
      4: {
        supportingPoints: [
          { point: "We represent the largest integrated behavioral health network in Illinois, offering substantial geographic reach." },
          { point: "We've successfully cared for thousands of patients referred by healthcare professionals across the state." },
          { point: "We are committed to fostering strong partnerships with referring providers right here in our shared communities." }
        ],
        audienceLanguage: [
          "Partner with Illinois' most extensive behavioral health network to ensure comprehensive care options for your patients.",
          "Join the thousands of healthcare professionals across the state who trust us with their patient referrals.",
          "We see ourselves as your dedicated partner in delivering outstanding behavioral healthcare within our shared communities."
        ]
      }
    }
  },
  {
    id: "therapists",
    name: "Therapists & Counselors",
    description: "Mental health professionals partnering with our services",
    messageDetails: {
      1: {
        supportingPoints: [
          { point: "We offer higher levels of care, including PHP and IOP, to provide essential support for your clients when they require more intensive treatment than outpatient settings can provide." },
          { point: "We value your therapeutic relationship with your clients and are committed to referring them back to you for ongoing outpatient care once they've completed a higher level of treatment with us." },
          { point: "Our integrated care approach ensures you receive timely updates on your client's progress while they are in our programs." }
        ],
        audienceLanguage: [
          "We can provide the intensive support your clients may need, allowing you to focus on their ongoing outpatient therapeutic journey.",
          "We respect your relationship with your clients and work in partnership with you for smooth transitions back into your care.",
          "Rest assured, you'll stay informed about your client's progress while they are participating in our programs."
        ]
      },
      2: {
        supportingPoints: [
          { point: "Your clients will receive care from certified and licensed specialists with expertise in a wide range of areas." },
          { point: "Our use of evidence-based treatment modalities and programs consistently leads to clinically significant outcomes." },
          { point: "We are a reputable and trusted partner within the behavioral health community for referrals." }
        ],
        audienceLanguage: [
          "Refer your clients to specialists you can trust to provide excellent, evidence-based care.",
          "Our proven outcomes complement and enhance the valuable work you do in outpatient therapy.",
          "Partner with us as a reputable provider for those times when your clients need a higher level of care."
        ]
      },
      3: {
        supportingPoints: [
          { point: "Our experienced clinical assessment team expertly handles the entire intake process, including insurance verification, making the referral process straightforward for you." },
          { point: "You don't need to pinpoint the exact program needed; we conduct the assessment and ensure clients are placed in the most appropriate level of care for their situation." },
          { point: "We have 24/7 crisis assessment available to support your clients in urgent situations." }
        ],
        audienceLanguage: [
          "Making a referral is designed to be easy – our dedicated team manages the assessment and placement process.",
          "We aim to simplify the administrative process so you can dedicate your focus to your crucial clinical work.",
          "Know that we are here 24/7, available for crisis assessments when your clients require immediate support."
        ]
      },
      4: {
        supportingPoints: [
          { point: "We are part of the largest integrated behavioral health network in Illinois." },
          { point: "We serve individuals from every zip code across Illinois." },
          { point: "Partnering with us gives your clients access to a broader network of care and resources available within the trusted Endeavor Health system." }
        ],
        audienceLanguage: [
          "Partner with the largest behavioral health network in Illinois to significantly expand your clients' access to vital care.",
          "Connect your clients to a trusted system with comprehensive resources spanning the entire state.",
          "We are a reliable, committed partner dedicated to serving the mental health needs of our shared communities."
        ]
      }
    }
  },
  {
    id: "internal",
    name: "Internal Staff",
    description: "ARC, MDs, Directors, Staff from Merged Entities",
    messageDetails: {
      1: {
        supportingPoints: [
          { point: "Understanding our full continuum of care empowers all of us to place patients in the right level of care for their specific needs, which directly improves patient outcomes and overall satisfaction." },
          { point: "Our integrated system means patient information is readily accessible, smoothing communication and coordination across all departments and locations." },
          { point: "By working together seamlessly across levels of care, we create a significantly better experience for patients and their families, reducing confusion and stress for everyone involved." }
        ],
        audienceLanguage: [
          "(ARC Staff): Knowing all our program options inside and out helps us guide callers to the best starting point for them.",
          "(Inpatient MDs): Smooth transitions to PHP/IOP mean our patients can continue their recovery journey with uninterrupted, coordinated support.",
          "(Directors): Championing our continuum of care ensures we're providing appropriate, high-value treatment that serves our patients and our system.",
          "(Staff from Merged Entities): Our merged system means we can now offer a wider, more comprehensive range of services to patients than ever before, accessible across all our locations. This is a real step forward."
        ]
      },
      2: {
        supportingPoints: [
          { point: "Highlighting our specialized programs and the expertise of our staff not only attracts patients with diverse needs but also significantly strengthens our reputation as a leading provider in behavioral health." },
          { point: "Our unwavering commitment to evidence-based practices and achieving positive patient outcomes reflects and reinforces the high quality of care delivered by every single staff member here." },
          { point: "Emphasizing compassionate care is fundamental to Endeavor Health's core values and enhances both the patient and the staff experience within our system." }
        ],
        audienceLanguage: [
          "(Therapists): You are the experts, on the front lines, delivering the high-quality, compassionate care that directly leads to our excellent patient outcomes. Your work is central.",
          "(ARC Staff): You can speak with confidence to callers about our specialized programs and the impressive qualifications of our clinical team.",
          "(Directors): Investing in our expert staff and upholding evidence-based programs is absolutely key to maintaining our clinical excellence and strengthening our position in the market.",
          "(Staff from Merged Entities): We've brought together talented and compassionate professionals from across all our legacy systems to create an even stronger, more dynamic team together."
        ]
      },
      3: {
        supportingPoints: [
          { point: "A streamlined assessment and referral process directly benefits staff by making patient pathways clearer and optimizing how we use our valuable resources." },
          { point: "Understanding insurance coverage and financial options empowers staff to guide patients more effectively and reduces unnecessary administrative hurdles for everyone." },
          { point: "Promoting our 24/7 crisis access ensures our entire community knows we are a reliable resource during urgent situations, powerfully reinforcing our commitment to timely, critical care." }
        ],
        audienceLanguage: [
          "(ARC Staff): Our clear, streamlined intake process makes it easier for you to connect callers with the right help quickly and efficiently.",
          "(Inpatient MDs): Knowing our expert assessment team can facilitate placement allows you to dedicate your focus to providing direct patient care.",
          "(Staff from Merged Entities): One of the benefits of the merger is expanded access points for patients across the region, making it more convenient for people to find care closer to their homes and communities."
        ]
      },
      4: {
        supportingPoints: [
          { point: "Recognizing our position as the largest network in Illinois can instill a sense of pride and highlight the significant impact we have among all staff members." },
          { point: "Understanding our broad reach and the diverse patient population we serve reinforces the critical importance of consistent messaging and delivering excellent service across all our locations." },
          { point: "Highlighting our connection to the trusted Endeavor Health system provides a vital sense of stability and a unifying shared identity for staff from the merged entities." }
        ],
        audienceLanguage: [
          "(All Staff): You are an essential part of the largest behavioral health network in Illinois – that is something to be proud of!",
          "(Staff from Merged Entities): We are now part of a larger, unified family, bringing together the unique strengths and histories of our legacy organizations into something even greater.",
          "(Directors): Our extensive network means we have the opportunity and capacity to reach and help even more people in need across our state."
        ]
      }
    }
  }
];

// Image mapping for original messages
export const ORIGINAL_MESSAGE_IMAGES: { [key: number]: string[] } = {
  1: [
    '/src/assets/Page 7 of 25.png',
    '/src/assets/Page 8 of 25.png',
    '/src/assets/Page 9 of 25.png',
  ],
  2: [
    '/src/assets/Page 10 of 25.png',
    '/src/assets/Page 11 of 25.png',
    '/src/assets/Page 12 of 25.png',
  ],
  3: [
    '/src/assets/Page 13 of 25.png',
    '/src/assets/Page 14 of 25.png',
    '/src/assets/Page 15 of 25.png',
  ],
  4: [
    '/src/assets/Page 3 of 25.png',
    '/src/assets/Page 4 of 25.png',
    '/src/assets/Page 22 of 25.png', 
    '/src/assets/Page 23 of 25.png' 
  ],
  5: [
    '/src/assets/Page 19 of 25.png',
    '/src/assets/Page 20 of 25.png',
    '/src/assets/Page 21 of 25.png',
  ],
};

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
    description: "Ensure all staff understands and can articulate the refined messaging framework.",
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