const web3FormsEndpoint = "https://api.web3forms.com/submit";
const web3FormsAccessKeyPlaceholder = "PASTE_WEB3FORMS_ACCESS_KEY_HERE";

const copy = {
  en: {
    metaTitle: "QS Impact Kigali Council | Youth-Led Sustainable Development in Rwanda",
    metaDescription:
      "QS Impact Kigali Council is a youth-led organization in Kigali, Rwanda advancing climate action, education, student sponsorship, safer communities, partnerships, and verified donation support.",
    skipLink: "Skip to content",
    menuToggle: "Open navigation menu",
    mainNav: "Main navigation",
    languageLabel: "Language",
    navMission: "Mission",
    navLeadership: "Leadership",
    navPrograms: "Programs",
    navGlobalDays: "Global Days",
    navImpact: "Impact",
    navPartners: "Partners",
    navSupport: "Support",
    navContact: "Contact",
    heroImageAlt: "Students and QS Impact Kigali Council leaders preparing trees for climate action in Rwanda",
    heroEyebrow: "Kigali, Rwanda | Youth-led sustainable development",
    heroLead:
      "Mobilizing young leaders to build a greener, safer, and more inclusive Rwanda through practical SDG-driven initiatives.",
    primaryActions: "Primary actions",
    heroPrimary: "Explore programs",
    heroSecondary: "Partner with us",
    trustLabel: "Organization credentials",
    trustRegisteredTitle: "Registered in Rwanda",
    trustRegisteredCopy:
      "A Kigali-based council with formal governance and a clear mandate for community-centered development.",
    trustYouthTitle: "Youth-led delivery",
    trustYouthCopy: "University students, graduates, and young professionals turn local needs into measurable projects.",
    trustSdgTitle: "SDG-aligned programs",
    trustSdgCopy: "Workstreams connect education, climate resilience, safer public spaces, and strategic partnerships.",
    missionEyebrow: "Mandate",
    missionHeading: "A council built for practical, youth-led change.",
    missionIntro:
      "QS Impact Kigali Council empowers young leaders to design and implement solutions that respond to real community priorities across Kigali and beyond.",
    missionLabel: "Mission",
    missionTitle: "Empower SDG-driven leadership.",
    missionCopy:
      "Empower and engage young leaders in the implementation of SDG-driven initiatives that improve everyday life at community level.",
    visionLabel: "Vision",
    visionTitle: "Incubate youth-led innovation.",
    visionCopy:
      "Ignite and incubate youth-led innovations that accelerate sustainable development and shape a better future for all.",
    focusLabel: "Focus areas",
    focusHealthTitle: "Health & well-being",
    focusHealthCopy: "Promoting healthier practices and quality of life for communities.",
    focusGenderTitle: "Gender equality",
    focusGenderCopy: "Supporting equal opportunity for women and girls to lead and thrive.",
    focusCitiesTitle: "Sustainable cities",
    focusCitiesCopy: "Creating safer, inclusive, and resilient urban spaces.",
    focusClimateTitle: "Climate action",
    focusClimateCopy: "Running campaigns, workshops, and restoration projects.",
    focusPartnershipsTitle: "Partnerships",
    focusPartnershipsCopy: "Building local and global networks to scale impact.",
    leadershipEyebrow: "Governance",
    leadershipHeading: "Meet the 2026 leadership team.",
    leadershipIntro:
      "The executive team guides the council's strategy, program delivery, governance, finance, and public engagement.",
    leadershipTeamLabel: "QS Impact Kigali Council leadership team",
    leadershipYearLabel: "2026 executive leadership",
    leaderPresidentRole: "Council President",
    leaderPresidentArea: "Strategy & Council Direction",
    leaderExecutiveViceRole: "Executive Vice President",
    leaderExecutiveViceArea: "Executive Coordination",
    leaderSecretaryRole: "Secretary General",
    leaderSecretaryArea: "Governance & Administration",
    leaderProjectsRole: "VP, Project Development & Proposal Development",
    leaderProjectsArea: "Projects & Proposals",
    leaderAccountantRole: "Accountant",
    leaderAccountantArea: "Finance & Accountability",
    leaderCommunicationsRole: "Communication Manager",
    leaderCommunicationsArea: "Communications & Engagement",
    leaderLinkedIn: "LinkedIn profile",
    leaderThomasAlt: "Portrait of Thomas Simbankabo, Council President",
    leaderScoviaAlt: "Portrait of Scovia Ampumuza, Executive Vice President",
    leaderJoyeuseAlt: "Portrait of Cyuzuzo Kayibanda Joyeuse, Secretary General",
    leaderSandyAlt: "Portrait of Sandy Pascale Mukundente, Vice President for Project and Proposal Development",
    leaderInesAlt: "Portrait of Ines Kayitesi, Accountant",
    leaderMarieAlt: "Portrait of Izabayo Marie Grace, Communication Manager",
    programsEyebrow: "Programs",
    programsHeading: "Current priorities with measurable community value.",
    programFilters: "Program filters",
    filterAll: "All",
    filterClimate: "Climate",
    filterEducation: "Education",
    filterSafety: "Safety",
    programTreesAlt: "QS Impact leaders and students planting a tree at Kimisange Secondary School",
    programTreesVideoLabel: "1000 Trees Initiative activity video",
    programTreesLabel: "2025-2030 flagship",
    programTreesTitle: "1000 Trees Initiative",
    programTreesCopy:
      "A five-year restoration commitment supporting Rwanda's green growth agenda through school-based tree planting, student environmental clubs, and climate education.",
    programTreesPoint1: "1,000+ trees planted under the 2025-2030 program.",
    programTreesPoint2: "Fruit trees, agroforestry species, and native varieties.",
    programTreesPoint3: "Ongoing care through school clubs and volunteers.",
    programKimisangeAlt: "Students holding seedlings during a green school activity",
    programKimisangeLabel: "24-month transformation",
    programKimisangeTitle: "Kimisange Safe Learning & Green Community",
    programKimisangeCopy:
      "A proposed transformation of a 7-hectare public school serving 2,700+ students into a safer, greener, more inclusive learning environment.",
    programKimisangePoint1: "Road relocation and secure school boundaries.",
    programKimisangePoint2: "Climate-resilient classrooms, pathways, and playgrounds.",
    programKimisangePoint3: "Youth training and community-supportive facilities.",
    programSdgAlt: "Students participating in an SDG learning session",
    programSdgLabel: "School leadership",
    programSdgTitle: "SDG Champions Program",
    programSdgCopy:
      "Practical sustainability education for secondary students, introducing climate action, sustainable cities, and youth responsibility.",
    programSdgPoint1: "Launched with 60 Senior 5 and Senior 6 students.",
    programSdgPoint2: "Supports plastic-free campaigns and awareness clubs.",
    programSdgPoint3: "Designed to grow a network of SDG youth ambassadors.",
    programSponsorshipAlt: "QS Impact Kigali Council members with a supported high school student",
    programSponsorshipLabel: "Student opportunity",
    programSponsorshipTitle: "School Fees Sponsorship",
    programSponsorshipCopy:
      "A focused support initiative helping vulnerable high school students stay in school by covering school fees and essential requirements until graduation.",
    programSponsorshipPoint1: "Target: 50 supported students by 2030.",
    programSponsorshipPoint2: "5 students are already on board.",
    programSponsorshipPoint3: "5 more students planned for the 2026-2027 academic year.",
    programPlaygroundAlt: "Open field in Rwanda identified for Nduba playground restoration work",
    programPlaygroundLabel: "6-month micro-restoration",
    programPlaygroundTitle: "Nduba Playground Restoration",
    programPlaygroundCopy:
      "A focused community sports and wellbeing project to make a football playground safer, cleaner, and usable through the rainy season.",
    programPlaygroundPoint1: "Ground leveling and basic drainage.",
    programPlaygroundPoint2: "Gender-responsive sanitation and handwashing.",
    programPlaygroundPoint3: "Local maintenance committee and youth sports activation.",
    gdaEyebrow: "Global Days of Action",
    gdaHeading: "Participating since 2024, turning climate awareness into school-based action.",
    gdaIntro:
      "QS Impact Kigali Council joins the Global Days of Action as a practical climate education platform: reaching learners, strengthening environmental responsibility, and connecting local action to a global youth movement.",
    gdaPanelLabel: "2026 documented reach",
    gdaPanelTitle: "Climate education across six school communities.",
    gdaPanelCopy:
      "Across Global Days of Action 2026, the council delivered climate change, carbon offsetting, biodiversity, waste management, tree planting, and youth leadership sessions across GS Rwankuba, GS Kimisange, Gisozi I Primary School, EP Kimihurura, GS Rugote, and Kagugu.",
    gdaMetricsLabel: "Global Days of Action highlights",
    gdaMetricSince: "participation started",
    gdaMetricLearners: "learners documented in available 2026 reports",
    gdaMetricSchools: "school communities engaged in 2026",
    gdaHeroAlt: "A QS Impact Kigali Council leader engaging students during Global Day of Action 2026",
    gdaHeroCaption: "Interactive climate learning during Global Day of Action 2026.",
    gdaTimelineLabel: "Global Days of Action timeline",
    gdaTimeline2024Title: "Ongoing participation",
    gdaTimeline2024Copy:
      "QS Impact Kigali Council has been part of Global Days of Action since 2024, using the campaign to mobilize young people around measurable community action.",
    gdaTimelineDay1Title: "GS Rwankuba",
    gdaTimelineDay1Copy:
      "More than 700 students explored SDG 13, SDG 15, greenhouse gases, biodiversity, carbon offsetting, and practical mitigation actions.",
    gdaTimelineDay2Title: "GS Kimisange & Gisozi I Primary School",
    gdaTimelineDay2Copy:
      "More than 600 learners at GS Kimisange and 1,700+ young learners at Gisozi I Primary School connected daily choices with climate responsibility.",
    gdaTimelineDay3Title: "EP Kimihurura & GS Rugote",
    gdaTimelineDay3Copy:
      "More than 900 learners at EP Kimihurura and 50 final-year students at GS Rugote joined sessions on climate science, conservation, and youth leadership.",
    gdaGalleryLabel: "Global Days of Action 2026 photo highlights",
    gdaRwankubaAlt:
      "GS Rwankuba students and QS Impact Kigali Council leaders holding climate education posters during Global Day of Action 2026",
    gdaGalleryRwankubaTitle: "Launching the 2026 action days",
    gdaGalleryRwankubaCopy: "Discussion, questions, and next steps through the school environmental club.",
    gdaGisoziAlt: "Gisozi I Primary School learners gathered for Global Day of Action 2026",
    gdaGalleryGisoziTitle: "Scaling climate messages through young learners",
    gdaGalleryGisoziCopy: "Waste management, green spaces, energy conservation, and household-level action.",
    gdaKimihururaAlt: "EP Kimihurura students participating in Global Day of Action 2026",
    gdaGalleryKimihururaTitle: "Building climate leaders for life",
    gdaGalleryKimihururaCopy: "Age-appropriate sessions from simple daily actions to the science of emissions.",
    gdaRugoteAlt: "Final-year students attending a Global Day of Action 2026 classroom session at GS Rugote",
    gdaGalleryRugoteTitle: "Reaching remote communities",
    gdaGalleryRugoteCopy: "A dedicated classroom session in Rutsiro District, extending impact beyond Kigali.",
    impactEyebrow: "Impact",
    impactHeading: "Evidence of leadership, learning, and community ownership.",
    impactIntro:
      "The council's 2025 work shows a practical operating model: identify community needs, mobilize young leaders, work with public and civil-society partners, and document measurable outcomes.",
    impactStatsLabel: "Impact highlights",
    impactStudentsReached: "young students reached through climate education sessions since 2025",
    impactTrees: "trees planted under the 1000 Trees Planting five-year program (2025-2030)",
    impactEmpowerment: "youth trained and engaged in sustainability, leadership, and climate action",
    impactWetlands: "youth engaged in wetlands conservation dialogue",
    impactWorkshop: "participants in the Planting the Future workshop",
    impactStudents: "students supported with school fees and requirements",
    galleryLabel: "Project photo gallery",
    galleryWetlandsAlt: "Youth leaders holding tree seedlings at a wetland nursery",
    galleryCouncilAlt: "QS Impact council members with school collaborators",
    gallerySchoolFeesAlt: "QS Impact team members during a student support visit",
    timelineLabel: "Impact timeline",
    timelineWetlandsTitle: "World Wetlands Day",
    timelineWetlandsCopy: "Youth engagement at Nyandungu Eco-Park with ARCOS Network and Living Lakes Network.",
    timelineSdgTitle: "SDG Champions Launch",
    timelineSdgCopy: "Practical sustainability training for secondary school students at GS Gihogwe.",
    timelineCampaignTitle: "Climate Education Campaign",
    timelineCampaignCopy: "More than 1,000 youth mobilized through community sites and learning activities.",
    timelineTreesTitle: "1000 Trees Initiative",
    timelineTreesCopy: "Students, volunteers, and partners planted 750+ trees at Kimisange Secondary School.",
    partnersEyebrow: "Partnership",
    partnersHeading: "A clear route for institutions, companies, and development partners.",
    partnersIntro:
      "QS Impact Kigali Council is seeking partners who can help sustain tree survival, expand school programs, sponsor vulnerable high school students, fund safety infrastructure, and strengthen youth-led green action across Rwanda.",
    pathwayFundTitle: "Fund implementation",
    pathwayFundCopy: "Support tools, materials, transport, school facilities, and project delivery.",
    pathwayExpertiseTitle: "Share expertise",
    pathwayExpertiseCopy:
      "Bring technical guidance in climate, education, infrastructure, or youth development.",
    pathwayScaleTitle: "Scale responsibly",
    pathwayScaleCopy: "Co-design projects with measurable indicators and long-term community ownership.",
    pathwayStudentsTitle: "Sponsor students",
    pathwayStudentsCopy:
      "Support school fees and essential requirements for vulnerable high school students until graduation.",
    supportEyebrow: "Support & donations",
    supportHeading: "Sponsor or donate to a priority area.",
    supportIntro:
      "Supporters can contribute to a specific initiative, sponsor students, or make a general contribution. Payment details are shared through a verified follow-up instead of being posted publicly.",
    supportTableTitle: "Sponsorship opportunities",
    supportTableOpportunity: "Opportunity",
    supportTablePurpose: "Purpose",
    supportTableUse: "Typical support",
    supportRowStudentsTitle: "School Fees Sponsorship",
    supportRowStudentsPurpose: "Help vulnerable high school students remain in school until graduation.",
    supportRowStudentsUse: "School fees and essential learning requirements.",
    supportRowTreesTitle: "1000 Trees Initiative",
    supportRowTreesPurpose: "Support the 2025-2030 restoration commitment.",
    supportRowTreesUse: "Seedlings, tools, transport, planting days, and tree care.",
    supportRowClimateTitle: "Climate Education & Global Days of Action",
    supportRowClimatePurpose: "Expand school outreach and youth climate learning.",
    supportRowClimateUse: "Training materials, facilitation, transport, and documentation.",
    supportRowSafetyTitle: "Safe Learning & Playground Restoration",
    supportRowSafetyPurpose: "Improve safer, cleaner school and youth spaces.",
    supportRowSafetyUse: "Drainage, sanitation, safety works, and youth activation.",
    supportRowGeneralTitle: "General Support",
    supportRowGeneralPurpose: "Strengthen council operations and project delivery.",
    supportRowGeneralUse: "Coordination, reporting, communication, and monitoring.",
    onlinePaymentLabel: "Online payment",
    onlinePaymentTitle: "Visa and card payments",
    onlinePaymentCopy:
      "Visa and card payments should be handled only through a secure bank-hosted payment link or approved payment provider checkout. No card details are collected on this website.",
    onlinePaymentCta: "Prepare a card donation",
    bankDetailsLabel: "Bank transfer",
    bankDetailsTitle: "Bank transfer by request",
    bankDetailsCopy:
      "To reduce public exposure of bank details, transfer information is shared after a supporter submits the support request form.",
    bankDetailsCta: "Prepare a bank transfer",
    bankDetailsNote:
      "The council can verify the request, confirm the supported initiative, and send the correct transfer instructions directly.",
    donationRequestEyebrow: "Donation request",
    donationRequestHeading: "Start your support request.",
    donationRequestIntro:
      "Tell the council how you would like to contribute. You will receive verified bank-transfer instructions, a pro forma invoice when requested, or a secure hosted card-payment link once available.",
    donationStepOneTitle: "Choose your support",
    donationStepOneCopy: "Select a project, frequency, intended amount, and preferred payment route.",
    donationStepTwoTitle: "Submit your details",
    donationStepTwoCopy: "The request is sent securely to QS Impact Kigali Council.",
    donationStepThreeTitle: "Receive instructions",
    donationStepThreeCopy:
      "The council confirms the next step and provides the correct payment document or link.",
    donationFormLabel: "Donation or sponsorship request",
    donationFrequencyLabel: "Frequency",
    donationFrequencyOnce: "One-time",
    donationFrequencyMonthly: "Monthly",
    donationAmountLabel: "Intended amount",
    donationCurrencyLabel: "Currency",
    donationAmountPresetsLabel: "Suggested donation amounts",
    donationInitiativeLabel: "Initiative to support",
    donationInitiativeClimate: "Climate Education & Global Days of Action",
    donationInitiativeSafety: "Safe Learning & Playground Restoration",
    donationDonorTypeLabel: "Donor type",
    donationDonorIndividual: "Individual",
    donationDonorCompany: "Company / organization",
    donationMethodLabel: "Preferred payment route",
    donationMethodBank: "Bank transfer",
    donationMethodCard: "Card payment",
    donationMethodGuidance: "I need guidance",
    donationNameLabel: "Full name",
    donationOrganizationLabel: "Company or organization (optional)",
    donationEmailLabel: "Email",
    donationInvoiceToggle: "I need a pro forma invoice before payment.",
    donationInvoiceNameLabel: "Invoice name / legal entity",
    donationInvoiceIdLabel: "Registration or tax ID (optional)",
    donationInvoiceAddressLabel: "Invoice address",
    donationMessageLabel: "Message (optional)",
    donationMessagePlaceholder: "Add any details the council should know about your intended support.",
    donationSubmit: "Request donation instructions",
    donationSafetyNote:
      "This form does not take payment. Never enter card numbers, CVV codes, banking passwords, or PINs here.",
    donationSending: "Sending your support request...",
    donationSuccess:
      "Thank you. Your support request has been sent. The council will contact you with the next step.",
    donationError: "The request could not be sent. Please try again or contact kigalicouncil@qsimpact.org.",
    formLabel: "Partnership inquiry",
    formName: "Name",
    formOrganization: "Organization",
    formEmail: "Email",
    formInterest: "Area of interest",
    interestTrees: "1000 Trees Initiative",
    interestKimisange: "Kimisange Safe Learning",
    interestSdg: "SDG Champions Program",
    interestGlobalDays: "Global Days of Action",
    interestSponsorship: "School Fees Sponsorship",
    interestPlayground: "Playground Restoration",
    interestGeneral: "General partnership",
    formMessage: "Message",
    formMessagePlaceholder: "Briefly describe how you would like to collaborate.",
    formSubmit: "Send partnership inquiry",
    formNote: "Submissions are sent securely to QS Impact Kigali Council. No email app is required.",
    formSending: "Sending your inquiry...",
    formSuccess: "Thank you. Your partnership inquiry has been sent.",
    formError: "Something went wrong. Please try again or contact kigalicouncil@qsimpact.org.",
    formConfigMissing: "The form is ready, but a Web3Forms access key must be added before launch.",
    contactEyebrow: "Contact",
    contactHeading: "Start a conversation with QS Impact Kigali Council.",
    contactLocation: "Kigali, Rwanda",
    footerCopy: "Youth-led sustainable development, climate resilience, and community transformation in Rwanda.",
    footerCta: "Become a partner",
    formSentButton: "Inquiry sent",
  },
  rw: {
    metaTitle: "QS Impact Kigali Council | Iterambere rirambye riyobowe n'urubyiruko mu Rwanda",
    metaDescription:
      "QS Impact Kigali Council ni umuryango uyobowe n'urubyiruko i Kigali, ukora ku kurengera ikirere, uburezi, gufasha abanyeshuri, umutekano w'abaturage, ubufatanye n'inkunga igenzuwe.",
    skipLink: "Jya ku bikubiye ku rupapuro",
    menuToggle: "Fungura menu",
    mainNav: "Imiyoborere nyamukuru",
    languageLabel: "Ururimi",
    navMission: "Intego",
    navLeadership: "Ubuyobozi",
    navPrograms: "Gahunda",
    navGlobalDays: "Global Days",
    navImpact: "Umusaruro",
    navPartners: "Abafatanyabikorwa",
    navSupport: "Inkunga",
    navContact: "Twandikire",
    heroImageAlt: "Abanyeshuri n'abayobozi ba QS Impact Kigali Council bitegura gutera ibiti mu bikorwa byo kurengera ikirere mu Rwanda",
    heroEyebrow: "Kigali, Rwanda | Iterambere rirambye riyobowe n'urubyiruko",
    heroLead:
      "Duhuza abayobozi bakiri bato kugira ngo bubake u Rwanda rwatsi, rutekanye kandi rudaheza binyuze mu bikorwa bifatika bishingiye kuri SDGs.",
    primaryActions: "Ibikorwa by'ibanze",
    heroPrimary: "Reba gahunda",
    heroSecondary: "Korana natwe",
    trustLabel: "Icyizere cy'umuryango",
    trustRegisteredTitle: "Wanditswe mu Rwanda",
    trustRegisteredCopy:
      "Inama ikorera i Kigali ifite imiyoborere isobanutse n'inshingano yo guteza imbere ibisubizo bishingiye ku baturage.",
    trustYouthTitle: "Ibikorwa biyobowe n'urubyiruko",
    trustYouthCopy:
      "Abanyeshuri ba kaminuza, abarangije n'abanyamwuga bakiri bato bahindura ibikenewe n'abaturage imishinga ifite ibipimo.",
    trustSdgTitle: "Gahunda zishingiye kuri SDGs",
    trustSdgCopy:
      "Imirongo y'ibikorwa ihuza uburezi, guhangana n'imihindagurikire y'ikirere, ahantu hatekanye n'ubufatanye.",
    missionEyebrow: "Inshingano",
    missionHeading: "Inama yubakiye ku mpinduka zifatika ziyobowe n'urubyiruko.",
    missionIntro:
      "QS Impact Kigali Council iha ubushobozi abayobozi bakiri bato bwo gutegura no gushyira mu bikorwa ibisubizo bihura n'ibikenewe n'abaturage i Kigali no hanze yayo.",
    missionLabel: "Intego",
    missionTitle: "Guha imbaraga ubuyobozi bushingiye kuri SDGs.",
    missionCopy:
      "Guha ubushobozi no guhuza abayobozi bakiri bato mu gushyira mu bikorwa imishinga ya SDGs iteza imbere imibereho y'abaturage.",
    visionLabel: "Icyerekezo",
    visionTitle: "Gukuza udushya tuyobowe n'urubyiruko.",
    visionCopy:
      "Gukongeza no guteza imbere udushya tuyobowe n'urubyiruko twihutisha iterambere rirambye kandi tugategura ejo hazaza heza kuri bose.",
    focusLabel: "Ibyo twibandaho",
    focusHealthTitle: "Ubuzima n'imibereho myiza",
    focusHealthCopy: "Guteza imbere imyitwarire myiza y'ubuzima n'imibereho y'abaturage.",
    focusGenderTitle: "Uburinganire",
    focusGenderCopy: "Gushyigikira amahirwe angana kugira ngo abagore n'abakobwa bayobore kandi batere imbere.",
    focusCitiesTitle: "Imijyi irambye",
    focusCitiesCopy: "Kubaka ahantu hizewe, hudaheza kandi hashobora guhangana n'ibibazo.",
    focusClimateTitle: "Kurengera ikirere",
    focusClimateCopy: "Gukora ubukangurambaga, amahugurwa n'imishinga yo gusubiranya ibidukikije.",
    focusPartnershipsTitle: "Ubufatanye",
    focusPartnershipsCopy: "Kubaka imikoranire yo mu gihugu no ku rwego mpuzamahanga kugira ngo umusaruro waguke.",
    leadershipEyebrow: "Imiyoborere",
    leadershipHeading: "Menya ikipe y'ubuyobozi ya 2026.",
    leadershipIntro:
      "Ikipe nshingwabikorwa iyobora ingamba z'inama, ishyirwa mu bikorwa rya gahunda, imiyoborere, imari n'itumanaho n'abaturage.",
    leadershipTeamLabel: "Ikipe y'ubuyobozi ya QS Impact Kigali Council",
    leadershipYearLabel: "Ubuyobozi nshingwabikorwa bwa 2026",
    leaderPresidentRole: "Perezida w'Inama",
    leaderPresidentArea: "Ingamba n'Icyerekezo cy'Inama",
    leaderExecutiveViceRole: "Visi Perezida Nshingwabikorwa",
    leaderExecutiveViceArea: "Guhuza Ibikorwa Nshingwabikorwa",
    leaderSecretaryRole: "Umunyamabanga Mukuru",
    leaderSecretaryArea: "Imiyoborere n'Ubuyobozi bw'Ibiro",
    leaderProjectsRole: "Visi Perezida ushinzwe Iterambere ry'Imishinga n'Inyandiko zayo",
    leaderProjectsArea: "Imishinga n'Inyandiko zayo",
    leaderAccountantRole: "Umubaruramari",
    leaderAccountantArea: "Imari no Kubazwa Inshingano",
    leaderCommunicationsRole: "Ushinzwe Itumanaho",
    leaderCommunicationsArea: "Itumanaho no Guhuza Abafatanyabikorwa",
    leaderLinkedIn: "Umwirondoro wa LinkedIn",
    leaderThomasAlt: "Ifoto ya Thomas Simbankabo, Perezida w'Inama",
    leaderScoviaAlt: "Ifoto ya Scovia Ampumuza, Visi Perezida Nshingwabikorwa",
    leaderJoyeuseAlt: "Ifoto ya Cyuzuzo Kayibanda Joyeuse, Umunyamabanga Mukuru",
    leaderSandyAlt: "Ifoto ya Sandy Pascale Mukundente, Visi Perezida ushinzwe Iterambere ry'Imishinga n'Inyandiko zayo",
    leaderInesAlt: "Ifoto ya Ines Kayitesi, Umubaruramari",
    leaderMarieAlt: "Ifoto ya Izabayo Marie Grace, Ushinzwe Itumanaho",
    programsEyebrow: "Gahunda",
    programsHeading: "Ibyihutirwa bifite agaciro gafatika ku baturage.",
    programFilters: "Muyunguruzi ya gahunda",
    filterAll: "Zose",
    filterClimate: "Ikirere",
    filterEducation: "Uburezi",
    filterSafety: "Umutekano",
    programTreesAlt: "Abayobozi ba QS Impact n'abanyeshuri batera igiti kuri Kimisange Secondary School",
    programTreesVideoLabel: "Video y'ibikorwa bya 1000 Trees Initiative",
    programTreesLabel: "Gahunda nkuru ya 2025-2030",
    programTreesTitle: "1000 Trees Initiative",
    programTreesCopy:
      "Umuhigo w'imyaka itanu wo gusubiranya ahantu h'icyatsi, ushyigikira icyerekezo cy'u Rwanda rwatsi binyuze mu gutera ibiti ku mashuri, clubs z'ibidukikije n'uburezi bw'ikirere.",
    programTreesPoint1: "Ibiti 1,000+ byatewe muri gahunda ya 2025-2030.",
    programTreesPoint2: "Harimo ibiti by'imbuto, agroforestry n'ibiti kavukire.",
    programTreesPoint3: "Kwita ku biti bikomeza binyuze muri clubs z'amashuri n'abakorerabushake.",
    programKimisangeAlt: "Abanyeshuri bafashe ingemwe mu gikorwa cya green school",
    programKimisangeLabel: "Impinduka z'amezi 24",
    programKimisangeTitle: "Kimisange Safe Learning & Green Community",
    programKimisangeCopy:
      "Umushinga uteganyijwe wo guhindura ishuri rya leta rya hegitari 7 rifasha abanyeshuri 2,700+ rikaba ahantu hatekanye, hatoshye kandi hadaheza.",
    programKimisangePoint1: "Kwimura umuhanda no gushyiraho imbibi z'ishuri zitekanye.",
    programKimisangePoint2: "Amashuri, inzira n'ibibuga bihangana n'ingaruka z'ikirere.",
    programKimisangePoint3: "Ikigo cy'amahugurwa y'urubyiruko n'ibikorwa bifasha abaturage.",
    programSdgAlt: "Abanyeshuri bari mu isomo rya SDGs",
    programSdgLabel: "Ubuyobozi mu mashuri",
    programSdgTitle: "SDG Champions Program",
    programSdgCopy:
      "Uburezi bufatika ku iterambere rirambye ku banyeshuri bo mu mashuri yisumbuye, bubamenyesha kurengera ikirere, imijyi irambye n'inshingano z'urubyiruko.",
    programSdgPoint1: "Yatangiranye n'abanyeshuri 60 bo muri Senior 5 na Senior 6.",
    programSdgPoint2: "Ishyigikira ubukangurambaga bwo kugabanya plastiki n'amatsinda y'ubukangurambaga.",
    programSdgPoint3: "Yateguwe kugira ngo yubake urusobe rw'abahagarariye SDGs mu rubyiruko.",
    programSponsorshipAlt: "Abagize QS Impact Kigali Council bari kumwe n'umunyeshuri wo mu mashuri yisumbuye uterwa inkunga",
    programSponsorshipLabel: "Amahirwe y'abanyeshuri",
    programSponsorshipTitle: "Gufasha kwishyura amafaranga y'ishuri",
    programSponsorshipCopy:
      "Gahunda yihariye ifasha abanyeshuri bo mu mashuri yisumbuye bakomoka mu miryango itishoboye gukomeza kwiga, ibishyurira amafaranga y'ishuri n'ibikoresho by'ingenzi kugeza barangije.",
    programSponsorshipPoint1: "Intego: gufasha abanyeshuri 50 kugeza mu 2030.",
    programSponsorshipPoint2: "Abanyeshuri 5 baratangiye gufashwa.",
    programSponsorshipPoint3: "Abandi banyeshuri 5 bateganyijwe mu mwaka w'amashuri wa 2026-2027.",
    programPlaygroundAlt: "Ahantu hafunguye mu Rwanda hatoranyijwe ku mushinga wo gusana ikibuga cya Nduba",
    programPlaygroundLabel: "Micro-restoration y'amezi 6",
    programPlaygroundTitle: "Nduba Playground Restoration",
    programPlaygroundCopy:
      "Umushinga w'imikino n'imibereho myiza y'abaturage ugamije gukora ikibuga cy'umupira gitekanye, gisukuye kandi gikoreshwa no mu gihe cy'imvura.",
    programPlaygroundPoint1: "Kuringaniza ikibuga no gukora imiyoboro y'amazi yoroheje.",
    programPlaygroundPoint2: "Ubwiherero bwita ku bagore n'abagabo n'aho gukarabira intoki.",
    programPlaygroundPoint3: "Komite yo kubungabunga ikibuga n'ibikorwa by'imikino by'urubyiruko.",
    gdaEyebrow: "Global Days of Action",
    gdaHeading: "Twitabira kuva mu 2024, duhindura ubumenyi ku kirere ibikorwa bifatika mu mashuri.",
    gdaIntro:
      "QS Impact Kigali Council yitabira Global Days of Action nk'urubuga rw'uburezi bufatika ku kirere: kugera ku banyeshuri, gukomeza inshingano zo kurengera ibidukikije no guhuza ibikorwa by'iwacu n'urubyiruko ku rwego mpuzamahanga.",
    gdaPanelLabel: "Umusaruro wanditswe wa 2026",
    gdaPanelTitle: "Uburezi ku kirere mu mashuri atandatu.",
    gdaPanelCopy:
      "Muri Global Days of Action 2026, inama yatanze ibiganiro ku mihindagurikire y'ikirere, carbon offsetting, urusobe rw'ibinyabuzima, gucunga imyanda, gutera ibiti n'ubuyobozi bw'urubyiruko kuri GS Rwankuba, GS Kimisange, Gisozi I Primary School, EP Kimihurura, GS Rugote na Kagugu.",
    gdaMetricsLabel: "Ibipimo bya Global Days of Action",
    gdaMetricSince: "hatangiye kwitabirwa",
    gdaMetricLearners: "abanyeshuri banditswe mu makuru ya 2026 aboneka",
    gdaMetricSchools: "amashuri yagezweho muri 2026",
    gdaHeroAlt: "Umuyobozi wa QS Impact Kigali Council aganiriza abanyeshuri muri Global Day of Action 2026",
    gdaHeroCaption: "Kwiga ku kirere mu buryo bw'ibiganiro muri Global Day of Action 2026.",
    gdaTimelineLabel: "Urutonde rwa Global Days of Action",
    gdaTimeline2024Title: "Kwitabira bikomeje",
    gdaTimeline2024Copy:
      "QS Impact Kigali Council yitabira Global Days of Action kuva mu 2024, ikoresha ubu bukangurambaga mu guhuza urubyiruko ku bikorwa bifatika bipimwa.",
    gdaTimelineDay1Title: "GS Rwankuba",
    gdaTimelineDay1Copy:
      "Abanyeshuri barenga 700 baganiriye kuri SDG 13, SDG 15, greenhouse gases, urusobe rw'ibinyabuzima, carbon offsetting n'ibikorwa byo kugabanya ingaruka.",
    gdaTimelineDay2Title: "GS Kimisange & Gisozi I Primary School",
    gdaTimelineDay2Copy:
      "Abanyeshuri barenga 600 kuri GS Kimisange na 1,700+ kuri Gisozi I Primary School bahuje ibikorwa bya buri munsi n'inshingano zo kurengera ikirere.",
    gdaTimelineDay3Title: "EP Kimihurura & GS Rugote",
    gdaTimelineDay3Copy:
      "Abanyeshuri barenga 900 kuri EP Kimihurura n'abanyeshuri 50 barangiza kuri GS Rugote bitabiriye ibiganiro ku bumenyi bw'ikirere, kubungabunga ibidukikije n'ubuyobozi bw'urubyiruko.",
    gdaGalleryLabel: "Amafoto ya Global Days of Action 2026",
    gdaRwankubaAlt:
      "Abanyeshuri ba GS Rwankuba n'abayobozi ba QS Impact Kigali Council bafashe posters z'uburezi ku kirere muri Global Day of Action 2026",
    gdaGalleryRwankubaTitle: "Gutangiza iminsi y'ibikorwa ya 2026",
    gdaGalleryRwankubaCopy: "Ibiganiro, ibibazo n'intambwe zikurikira binyuze muri club y'ibidukikije y'ishuri.",
    gdaGisoziAlt: "Abanyeshuri ba Gisozi I Primary School muri Global Day of Action 2026",
    gdaGalleryGisoziTitle: "Kwagura ubutumwa bw'ikirere binyuze mu banyeshuri bato",
    gdaGalleryGisoziCopy: "Gucunga imyanda, ahantu h'icyatsi, kuzigama umuriro n'ibikorwa mu rugo.",
    gdaKimihururaAlt: "Abanyeshuri ba EP Kimihurura bitabiriye Global Day of Action 2026",
    gdaGalleryKimihururaTitle: "Kubaka abayobozi b'ikirere b'igihe kirekire",
    gdaGalleryKimihururaCopy: "Amasomo ahuye n'imyaka yabo kuva ku bikorwa byoroheje kugeza ku bumenyi bwa emissions.",
    gdaRugoteAlt: "Abanyeshuri barangiza bitabiriye isomo rya Global Day of Action 2026 kuri GS Rugote",
    gdaGalleryRugoteTitle: "Kugera ku baturage bari kure",
    gdaGalleryRugoteCopy: "Isomo ryihariye mu ishuri mu Karere ka Rutsiro, ryaguye umusaruro hanze ya Kigali.",
    impactEyebrow: "Umusaruro",
    impactHeading: "Ibimenyetso by'ubuyobozi, kwiga n'uruhare rw'abaturage.",
    impactIntro:
      "Ibikorwa bya 2025 bigaragaza uburyo bukora: kumenya ibikenewe, guhuza abayobozi bakiri bato, gukorana n'inzego za leta n'imiryango, no kwandika ibisubizo bifite ibipimo.",
    impactStatsLabel: "Ibipimo by'umusaruro",
    impactStudentsReached: "abanyeshuri bakiri bato bagezweho mu biganiro by'uburezi ku kirere kuva mu 2025",
    impactTrees: "ibiti byatewe muri gahunda y'imyaka itanu ya 1000 Trees Planting (2025-2030)",
    impactEmpowerment: "urubyiruko rwahuguwe kandi rwitabira ibikorwa by'iterambere rirambye, ubuyobozi no kurengera ikirere",
    impactWetlands: "urubyiruko rwaganiriye ku kubungabunga ibishanga",
    impactWorkshop: "abitabiriye amahugurwa ya Planting the Future",
    impactStudents: "abanyeshuri bafashijwe kwishyurirwa ishuri n'ibikoresho",
    galleryLabel: "Amafoto y'imishinga",
    galleryWetlandsAlt: "Abayobozi bakiri bato bafashe ingemwe mu buhingiro bw'ibiti",
    galleryCouncilAlt: "Abagize QS Impact bari kumwe n'abafatanyabikorwa b'ishuri",
    gallerySchoolFeesAlt: "Ikipe ya QS Impact mu gikorwa cyo gufasha abanyeshuri",
    timelineLabel: "Urutonde rw'umusaruro",
    timelineWetlandsTitle: "World Wetlands Day",
    timelineWetlandsCopy: "Uruhare rw'urubyiruko muri Nyandungu Eco-Park hamwe na ARCOS Network na Living Lakes Network.",
    timelineSdgTitle: "Itangizwa rya SDG Champions",
    timelineSdgCopy: "Amahugurwa afatika ku iterambere rirambye ku banyeshuri ba GS Gihogwe.",
    timelineCampaignTitle: "Ubukangurambaga bw'ikirere",
    timelineCampaignCopy: "Urubyiruko rusaga 1,000 rwahujwe mu bice by'abaturage n'ibikorwa byo kwiga.",
    timelineTreesTitle: "1000 Trees Initiative",
    timelineTreesCopy: "Abanyeshuri, abakorerabushake n'abafatanyabikorwa bateye ibiti 750+ kuri Kimisange Secondary School.",
    partnersEyebrow: "Ubufatanye",
    partnersHeading: "Inzira isobanutse ku bigo, amasosiyete n'abafatanyabikorwa b'iterambere.",
    partnersIntro:
      "QS Impact Kigali Council irashaka abafatanyabikorwa bafasha kurinda ibiti, kwagura gahunda z'amashuri, gufasha abanyeshuri bo mu mashuri yisumbuye bakomoka mu miryango itishoboye, gutera inkunga ibikorwa by'umutekano no gukomeza ibikorwa by'u Rwanda rwatsi biyobowe n'urubyiruko.",
    pathwayFundTitle: "Tera inkunga ishyirwa mu bikorwa",
    pathwayFundCopy: "Shyigikira ibikoresho, transport, ibikorwa by'amashuri n'ishyirwa mu bikorwa.",
    pathwayExpertiseTitle: "Sangiza ubumenyi",
    pathwayExpertiseCopy: "Tanga inama mu kirere, uburezi, ibikorwa remezo cyangwa iterambere ry'urubyiruko.",
    pathwayScaleTitle: "Kwagura mu buryo burambye",
    pathwayScaleCopy: "Tegurana imishinga ifite ibipimo n'uruhare rurambye rw'abaturage.",
    pathwayStudentsTitle: "Tera inkunga abanyeshuri",
    pathwayStudentsCopy:
      "Fasha kwishyura amafaranga y'ishuri n'ibikoresho by'ingenzi ku banyeshuri bo mu mashuri yisumbuye bakomoka mu miryango itishoboye kugeza barangije.",
    supportEyebrow: "Inkunga n'impano",
    supportHeading: "Tera inkunga cyangwa utange impano ku gikorwa cy'ibanze.",
    supportIntro:
      "Abadushyigikira bashobora gutanga inkunga ku gikorwa kihariye, gufasha abanyeshuri cyangwa gutanga inkunga rusange. Amakuru yo kwishyura atangwa nyuma yo kugenzura ubusabe aho gushyirwa ku rubuga ku mugaragaro.",
    supportTableTitle: "Aho inkunga ikenewe",
    supportTableOpportunity: "Amahirwe",
    supportTablePurpose: "Intego",
    supportTableUse: "Ibyo inkunga ifasha",
    supportRowStudentsTitle: "Gufasha kwishyura amafaranga y'ishuri",
    supportRowStudentsPurpose: "Gufasha abanyeshuri bo mu mashuri yisumbuye bakomoka mu miryango itishoboye gukomeza kwiga kugeza barangije.",
    supportRowStudentsUse: "Amafaranga y'ishuri n'ibikoresho by'ingenzi byo kwiga.",
    supportRowTreesTitle: "1000 Trees Initiative",
    supportRowTreesPurpose: "Gushyigikira gahunda yo gusubiranya ibidukikije ya 2025-2030.",
    supportRowTreesUse: "Ingemwe, ibikoresho, transport, iminsi yo gutera ibiti no kubyitaho.",
    supportRowClimateTitle: "Uburezi ku kirere & Global Days of Action",
    supportRowClimatePurpose: "Kwagura ubukangurambaga mu mashuri n'ubumenyi bw'urubyiruko ku kirere.",
    supportRowClimateUse: "Ibikoresho by'amahugurwa, abahugura, transport no kwandika ibikorwa.",
    supportRowSafetyTitle: "Ahantu ho kwigira hatekanye & gusana ibibuga",
    supportRowSafetyPurpose: "Kunoza amashuri n'ahantu h'urubyiruko hatekanye kandi hasukuye.",
    supportRowSafetyUse: "Imiyoboro y'amazi, isuku, ibikorwa by'umutekano n'ibikorwa by'urubyiruko.",
    supportRowGeneralTitle: "Inkunga rusange",
    supportRowGeneralPurpose: "Gukomeza imikorere y'inama n'ishyirwa mu bikorwa ry'imishinga.",
    supportRowGeneralUse: "Guhuza ibikorwa, raporo, itumanaho no gukurikirana.",
    onlinePaymentLabel: "Kwishyura online",
    onlinePaymentTitle: "Kwishyura na Visa cyangwa ikarita",
    onlinePaymentCopy:
      "Kwishyura na Visa cyangwa ikarita bigomba gukorwa gusa binyuze ku muyoboro wizewe wa banki cyangwa payment provider yemewe. Nta makuru y'ikarita abikwa kuri uru rubuga.",
    onlinePaymentCta: "Tegura inkunga y'ikarita",
    bankDetailsLabel: "Kohereza kuri banki",
    bankDetailsTitle: "Amakuru ya banki atangwa bisabwe",
    bankDetailsCopy:
      "Mu kugabanya kugaragaza amakuru ya banki ku mugaragaro, amakuru yo kohereza amafaranga atangwa nyuma y'uko uwifuza gutera inkunga yohereje fomu y'ubusabe.",
    bankDetailsCta: "Tegura kohereza kuri banki",
    bankDetailsNote:
      "Inama ishobora kugenzura ubusabe, kwemeza igikorwa gishyigikirwa, no kohereza amabwiriza nyayo yo kwishyura mu buryo butaziguye.",
    donationRequestEyebrow: "Ubusabe bw'inkunga",
    donationRequestHeading: "Tangira ubusabe bwawe bwo gutera inkunga.",
    donationRequestIntro:
      "Menyesha inama uko wifuza gutanga inkunga. Uzahabwa amabwiriza ya banki yagenzuwe, pro forma invoice igihe uyisabye, cyangwa link yizewe yo kwishyura n'ikarita igihe izaba iboneka.",
    donationStepOneTitle: "Hitamo icyo ushyigikira",
    donationStepOneCopy: "Hitamo umushinga, inshuro, amafaranga uteganya n'uburyo bwo kwishyura.",
    donationStepTwoTitle: "Ohereza amakuru yawe",
    donationStepTwoCopy: "Ubusabe bwoherezwa mu buryo butekanye kuri QS Impact Kigali Council.",
    donationStepThreeTitle: "Habwa amabwiriza",
    donationStepThreeCopy: "Inama yemeza intambwe ikurikira ikohereza inyandiko cyangwa link ikwiye yo kwishyura.",
    donationFormLabel: "Ubusabe bw'impano cyangwa inkunga",
    donationFrequencyLabel: "Inshuro",
    donationFrequencyOnce: "Inshuro imwe",
    donationFrequencyMonthly: "Buri kwezi",
    donationAmountLabel: "Amafaranga uteganya",
    donationCurrencyLabel: "Ifaranga",
    donationAmountPresetsLabel: "Amafaranga y'icyitegererezo",
    donationInitiativeLabel: "Igikorwa ushaka gushyigikira",
    donationInitiativeClimate: "Uburezi ku kirere & Global Days of Action",
    donationInitiativeSafety: "Ahantu ho kwigira hatekanye & gusana ibibuga",
    donationDonorTypeLabel: "Ubwoko bw'utanga inkunga",
    donationDonorIndividual: "Umuntu ku giti cye",
    donationDonorCompany: "Ikigo / umuryango",
    donationMethodLabel: "Uburyo bwo kwishyura wifuza",
    donationMethodBank: "Kohereza kuri banki",
    donationMethodCard: "Kwishyura n'ikarita",
    donationMethodGuidance: "Nkeneye ubufasha",
    donationNameLabel: "Amazina yose",
    donationOrganizationLabel: "Ikigo cyangwa umuryango (si ngombwa)",
    donationEmailLabel: "Email",
    donationInvoiceToggle: "Nkeneye pro forma invoice mbere yo kwishyura.",
    donationInvoiceNameLabel: "Izina rishyirwa kuri invoice / izina ryemewe ry'ikigo",
    donationInvoiceIdLabel: "Nimero y'iyandikwa cyangwa y'umusoro (si ngombwa)",
    donationInvoiceAddressLabel: "Aderesi ya invoice",
    donationMessageLabel: "Ubutumwa (si ngombwa)",
    donationMessagePlaceholder: "Andika andi makuru inama ikwiye kumenya ku nkunga uteganya.",
    donationSubmit: "Saba amabwiriza yo gutanga inkunga",
    donationSafetyNote:
      "Iyi fomu ntabwo yakira amafaranga. Ntukandikemo nimero z'ikarita, CVV, passwords za banki cyangwa PIN.",
    donationSending: "Ubusabe bw'inkunga burimo koherezwa...",
    donationSuccess:
      "Murakoze. Ubusabe bw'inkunga bwoherejwe. Inama izakwandikira ikumenyeshe intambwe ikurikira.",
    donationError:
      "Ubusabe ntibwashoboye koherezwa. Ongera ugerageze cyangwa wandikire kigalicouncil@qsimpact.org.",
    formLabel: "Ubusabe bw'ubufatanye",
    formName: "Izina",
    formOrganization: "Ikigo",
    formEmail: "Email",
    formInterest: "Aho wifuza gufatanya",
    interestTrees: "1000 Trees Initiative",
    interestKimisange: "Kimisange Safe Learning",
    interestSdg: "SDG Champions Program",
    interestGlobalDays: "Global Days of Action",
    interestSponsorship: "Gufasha kwishyura amafaranga y'ishuri",
    interestPlayground: "Playground Restoration",
    interestGeneral: "Ubufatanye rusange",
    formMessage: "Ubutumwa",
    formMessagePlaceholder: "Andika muri make uko mwifuza gukorana.",
    formSubmit: "Ohereza ubusabe bw'ubufatanye",
    formNote: "Ubusabe bwoherezwa mu buryo butekanye kuri QS Impact Kigali Council. Nta porogaramu ya email ikenewe.",
    formSending: "Ubusabe burimo koherezwa...",
    formSuccess: "Murakoze. Ubusabe bw'ubufatanye bwoherejwe.",
    formError: "Habaye ikibazo. Mwongere mugerageze cyangwa mwandikire kigalicouncil@qsimpact.org.",
    formConfigMissing: "Iyi fomu iriteguye, ariko hakenewe Web3Forms access key mbere yo kuyitangiza.",
    contactEyebrow: "Twandikire",
    contactHeading: "Tangira ikiganiro na QS Impact Kigali Council.",
    contactLocation: "Kigali, Rwanda",
    footerCopy: "Iterambere rirambye, guhangana n'ikirere n'impinduka mu baturage biyobowe n'urubyiruko mu Rwanda.",
    footerCta: "Ba umufatanyabikorwa",
    formSentButton: "Ubusabe bwoherejwe",
  },
};

let currentLanguage = "en";

const getCopy = (key) => copy[currentLanguage][key] || copy.en[key] || "";

function setLanguage(language) {
  currentLanguage = copy[language] ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.title = getCopy("metaTitle");

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", getCopy("metaDescription"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getCopy(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", getCopy(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", getCopy(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", getCopy(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("qsi-language", currentLanguage);
  } catch {
    // Storage is optional; the interface still works without it.
  }
}

function initLanguage() {
  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("qsi-language") || "en";
  } catch {
    savedLanguage = "en";
  }

  setLanguage(savedLanguage);

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
}

function initNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateActiveNavigation = () => {
    const heroHeight = document.querySelector(".hero")?.offsetHeight || 0;
    const position = window.scrollY + 140;
    let activeId = "";

    if (window.scrollY > heroHeight * 0.55) {
      sections.forEach((section) => {
        if (position >= section.offsetTop) {
          activeId = section.id;
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
    });
  };

  updateActiveNavigation();
  window.addEventListener("scroll", updateActiveNavigation, { passive: true });
  window.addEventListener("resize", updateActiveNavigation);
}

function initProgramFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        card.hidden = filter !== "all" && !categories.includes(filter);
      });
    });
  });
}

function initWeb3Form({ formId, statusId, sendingKey, successKey, errorKey }) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  const statusText = status?.querySelector("p");
  const submitButton = form?.querySelector('button[type="submit"]');
  const accessKeyInput = form?.querySelector('input[name="access_key"]');

  if (!form || !status || !statusText || !submitButton || !accessKeyInput) return null;

  const setFormStatus = (type, messageKey) => {
    status.dataset.status = type;
    statusText.textContent = getCopy(messageKey);
    status.hidden = false;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const accessKey = accessKeyInput.value.trim();
    if (!accessKey || accessKey === web3FormsAccessKeyPlaceholder) {
      setFormStatus("warning", "formConfigMissing");
      return;
    }

    setFormStatus("loading", sendingKey);
    submitButton.disabled = true;

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData);

      const response = await fetch(web3FormsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Web3Forms submission failed");
      }

      form.reset();
      accessKeyInput.value = accessKey;
      setFormStatus("success", successKey);
      submitButton.disabled = false;
    } catch (error) {
      console.error(error);
      setFormStatus("error", errorKey);
      submitButton.disabled = false;
    }
  });

  return form;
}

function initForms() {
  initWeb3Form({
    formId: "partnerForm",
    statusId: "formStatus",
    sendingKey: "formSending",
    successKey: "formSuccess",
    errorKey: "formError",
  });
  const donationForm = initWeb3Form({
    formId: "donationForm",
    statusId: "donationFormStatus",
    sendingKey: "donationSending",
    successKey: "donationSuccess",
    errorKey: "donationError",
  });

  if (!donationForm) return;

  const methodSelect = donationForm.querySelector('select[name="payment_method"]');
  document.querySelectorAll("[data-donation-method-target]").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.dataset.donationMethodTarget;
      if (!methodSelect || !target) return;
      methodSelect.value = target;
    });
  });

  const amountInput = donationForm.querySelector('input[name="amount"]');
  const amountButtons = donationForm.querySelectorAll("[data-donation-amount]");
  const syncAmountButtons = () => {
    amountButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.donationAmount === amountInput?.value));
    });
  };

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!amountInput) return;
      amountInput.value = button.dataset.donationAmount || "";
      syncAmountButtons();
      amountInput.focus();
    });
  });
  amountInput?.addEventListener("input", syncAmountButtons);

  const invoiceToggle = donationForm.querySelector("[data-invoice-toggle]");
  const invoiceFields = donationForm.querySelector("[data-invoice-fields]");
  const invoiceName = donationForm.querySelector('input[name="invoice_name"]');
  const invoiceAddress = donationForm.querySelector('textarea[name="invoice_address"]');
  const syncInvoiceFields = () => {
    const isRequested = Boolean(invoiceToggle?.checked);
    if (invoiceFields) invoiceFields.hidden = !isRequested;
    if (invoiceName) invoiceName.required = isRequested;
    if (invoiceAddress) invoiceAddress.required = isRequested;
  };

  invoiceToggle?.addEventListener("change", syncInvoiceFields);
  donationForm.addEventListener("reset", () => {
    requestAnimationFrame(() => {
      syncAmountButtons();
      syncInvoiceFields();
    });
  });
  syncInvoiceFields();
}

function initMetricReveal() {
  const metrics = document.querySelectorAll(".impact-stats strong[data-count]");
  if (!metrics.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.count);
        const suffix = element.textContent.includes("+") ? "+" : "";
        const start = performance.now();
        const duration = 700;

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.round(target * progress);
          element.textContent = `${value.toLocaleString("en-US")}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(element);
      });
    },
    { threshold: 0.65 },
  );

  metrics.forEach((metric) => observer.observe(metric));
}

initLanguage();
initNavigation();
initProgramFilters();
initForms();
initMetricReveal();
