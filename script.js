/**
 * Blad — Berlin & Brandenburg Community Nature Education & Climate Action (Pilot 2026/27)
 * Vanilla JS: EN/DE language toggle, mobile nav, mailto form builder, scroll reveal.
 * No cookies, trackers, or external libraries.
 */

const translations = {
  en: {
    skip_link: "Skip to main content",
    nav_pilot_badge: "Pilot 2026/27",
    nav_problem: "The Problem",
    nav_what: "What We Do",
    nav_community: "Community",
    nav_how: "How It Works",
    nav_pilot: "Pilot Phase",
    nav_about: "About",
    nav_contact: "Join / Contact",

    hero_eyebrow:
      "Social & Ecological Impact Venture · Berlin & Brandenburg (Pilot 2026/27)",
    hero_headline:
      "Hands-on nature education & local climate action for Berlin's communities",
    hero_subline:
      "Helping neighbourhoods move from climate worry to collective action—bringing Kitas, schools, adults, seniors, and companies together to care for street trees, green inner courtyards (Hinterhöfe), spot birds and insects, and measure urban heat.",
    hero_cta_partner: "Join the Blad Community",
    hero_cta_book: "Book a Kiez Impact Day",
    hero_note:
      "For neighbours of all ages, Kitas & schools, CSR/HR teams, and impact incubation & grant partners.",
    hero_card_tag: "BERLIN STREET CANOPY · SUNLIT LINDEN LEAF",
    pillar_1: "Birds & Insects",
    pillar_2: "Street Trees & Courtyards",
    pillar_3: "Urban Heat Measurement",

    problem_label: "01 · The Problem",
    problem_title:
      "Berlin's street trees and inner courtyards overheat—while neighbours lack accessible ways to act together",
    spectrum_cool: "Watered & shaded microclimate",
    spectrum_desc:
      "Ongoing summer droughts, sandy soils, and sealed asphalt push Berlin's street trees and courtyards into visible heat stress—affecting children, families, and older residents right outside their doors.",
    spectrum_heat: "Drought & heat-island stress",
    problem_card1_title: "Drought-stressed trees & heat-trapping courtyards",
    problem_card1_text:
      "Dry summers, sandy soils, and sealed asphalt in residential blocks and inner courtyards (Hinterhöfe) create urban heat islands that strain local biodiversity and hit young children and older adults hardest.",
    problem_card2_title: "From climate worry to hands-on Kiez action",
    problem_card2_text:
      "Many children, working adults, and seniors want to help their local environment, yet lack guided, hands-on opportunities right outside their door to adopt street trees, green shared courtyards, and learn together across generations.",

    what_label: "02 · What We Do",
    what_title:
      "Practical nature education and cooling action right in the Kiez",
    what_intro:
      "Combining Ecological Impact (urban cooling & biodiversity) with Social Impact (intergenerational community learning).",
    what_card1_tag: "Kitas, Familienzentren & Seniors",
    what_card1_title: "Intergenerational nature & tree-care workshops",
    what_card1_text:
      "Hands-on discovery for Kita groups, Familienzentren (family centres), schools, and older neighbours—aligned with the Berliner Bildungsprogramm (BBP): adopting and watering local street trees, spotting birds and insects, and sharing knowledge across generations.",
    what_card2_tag: "Youth, Adults & Neighbours",
    what_card2_title: "Kiez & courtyard citizen science",
    what_card2_text:
      "Practical outdoor sessions where students and residents measure surface and air temperatures across shaded tree beds and green courtyards (Hinterhöfe) versus sealed asphalt, log pollinator species, and experience how vegetation cools their block.",
    what_card3_tag: "For Companies",
    what_card3_title: "Kiez Impact Days for companies",
    what_card3_text:
      "Paid corporate team days where Berlin and Brandenburg companies green shared inner courtyards (Hinterhöfe), plant street tree beds (Baumscheiben), and build insect hotels—working side by side with local partners and co-financing free community workshops.",

    trust_label: "Pilot 2026/27 Ecosystem & Community Network:",
    card_spec_cost_label: "Kosten / Access:",
    card_spec_format_label: "Format:",
    card1_cost_val: "100% Free for Kitas & Seniors",
    card1_format_val: "3–4 hrs guided outdoor session · Berlin & Potsdam",
    card1_btn: "Inquire for your Kita or Group →",
    card2_cost_val: "100% Free Community Participation",
    card2_format_val: "2–3 hrs microclimate walk & sensor exploration",
    card2_btn: "Join Next Kiez Session →",
    card3_cost_val: "From €1,800 / Team (Co-Finances Free Workshops)",
    card3_format_val: "Turnkey 3.5 hrs ESG team day + verified CSR report",
    card3_btn: "Book a Corporate Impact Day →",

    comm_label: "Blad Community · Moving From Climate Worry to Action",
    comm_title: "Everyone in the Kiez has a role",
    comm_intro:
      "Street trees and green courtyards need care all summer long—especially during school holidays when droughts peak. Blad connects five neighbourhood groups into one continuous care network:",
    comm_group_1: "🌱 Kitas, Familienzentren & Schools",
    comm_group_2: "🌿 Neighbours & Families",
    comm_group_3: "🌳 Seniors & Retirees",
    comm_group_4: "🏡 Courtyard & Tree Initiatives",
    comm_group_5: "🏢 Company Teams",
    comm_card_title: "Join the Blad Community",
    comm_card_text:
      "Want to adopt a street tree on your block, green an inner courtyard (Hinterhof), or bring a free workshop to your Kita, Familienzentrum, school, or senior group?",
    comm_card_btn: "Join via Email",
    comm_card_sublink: "Or use the contact form below →",

    how_label: "03 · Social Business & Impact Model",
    how_title: "How our hybrid impact model works in the neighbourhood",
    how_step1_title: "Free access for Kitas, Familienzentren & schools",
    how_step1_text:
      "Educational workshops and neighbourhood sessions are free of charge for participating Kitas, Familienzentren (family centres), schools, senior groups, and residents so every Kiez can participate regardless of income.",
    how_step2_title: "Hybrid model: Company days & planned grants",
    how_step2_text:
      "Our social business model combines earned revenue from paid corporate Kiez Impact Days with planned public climate, Bezirksamt, education, and neighbourhood grants.",
    how_step3_title: "Co-created with local Kiez partners",
    how_step3_text:
      "Every workshop, tree-bed planting, and courtyard greening is delivered with local Familienzentren, neighbourhood centres (Stadtteilzentren), educators, civic tree-watering initiatives, and green-space partners.",

    pilot_label: "04 · Pilot & Incubation Roadmap (2026/27)",
    pilot_title: "From concept validation to measurable neighbourhood impact",
    pilot_intro:
      "Blad is in the early pilot phase for 2026/27 in Berlin and Brandenburg. Here are the three validation steps we are preparing:",
    stage_1_label: "Stage 1",
    stage_2_label: "Stage 2",
    stage_3_label: "Stage 3",
    status_planned: "Planned",
    pilot_stage1_title: "Talk to communities, Kitas, Familienzentren & partners",
    pilot_stage1_text:
      "Conduct structured discovery with educators, Familienzentren (family centres), neighbourhood centres, senior groups, civic tree initiatives, and CSR teams in Berlin and Brandenburg to co-design workshop and courtyard-greening formats.",
    pilot_stage2_title: "Run first pilot workshops",
    pilot_stage2_text:
      "Deliver initial hands-on pilot sessions on bird and insect identification, street tree watering, courtyard cooling, and microclimate heat measurement while evaluating social and ecological outcomes.",
    pilot_stage3_title: "Apply for local funding & launch Kiez Impact Days",
    pilot_stage3_text:
      "Apply for public climate-adaptation, neighbourhood, and startup support programmes alongside initial corporate Kiez Impact Days to validate our sustainable hybrid financing model.",

    about_label: "05 · About & Founding Mission",
    about_title: "Why we are building Blad",
    about_photo_placeholder: "Faizan Ahmed & Maham Shakil · Berlin & Brandenburg",
    about_placeholder_badge: "Founding Team · Berlin",
    about_name: "Faizan Ahmed & Maham Shakil · Co-Founders, Blad",
    about_bio:
      "As Berliners with a shared vision to help green Germany—starting right in our own neighbourhoods—we founded Blad to bring people of all generations together for practical urban climate action. In our 2026/27 pilot phase across Berlin and Brandenburg, we are turning stressed street trees and hot inner courtyards into living classrooms and cooler, greener shared spaces.",

    contact_label: "06 · Join & Contact",
    contact_title: "Join the Blad Community or partner with us",
    contact_lead:
      "Whether you are a neighbour, Kita/Familienzentrum educator, or senior group wanting to care for street trees and courtyards, a company planning a Kiez Impact Day, or an incubator / grant reviewer in Berlin & Brandenburg—we would love to hear from you.",
    contact_direct_label: "Direct email:",

    form_name_label: "Your name",
    form_name_placeholder: "Alex Meyer",
    form_role_label: "I am reaching out as",
    form_role_opt_comm: "Community member (Neighbour, adult, family, or senior)",
    form_role_opt1: "Kita, Familienzentrum, or school staff",
    form_role_opt2: "Company (Kiez Impact Day / CSR / HR)",
    form_role_opt3: "Incubator, grant reviewer, or local partner",
    form_role_opt4: "Other inquiry",
    form_msg_label: "Message",
    form_msg_placeholder:
      "Tell us about your Kiez, courtyard, group, or partnership idea...",
    form_submit: "Open in email app",
    form_footnote:
      "Submitting opens your default email client addressed directly to faizan.crm1@gmail.com.",

    footer_tagline:
      "Hands-on nature education & climate action for Berlin & Brandenburg communities · Pilot 2026/27"
  },

  de: {
    skip_link: "Zum Hauptinhalt springen",
    nav_pilot_badge: "Pilotphase 2026/27",
    nav_problem: "Herausforderung",
    nav_what: "Was wir machen",
    nav_community: "Community",
    nav_how: "So funktioniert's",
    nav_pilot: "Pilotphase",
    nav_about: "Über Blad",
    nav_contact: "Mitmachen / Kontakt",

    hero_eyebrow:
      "Soziales & ökologisches Impact-Venture · Berlin & Brandenburg (Pilotphase 2026/27)",
    hero_headline:
      "Praktische Naturbildung & lokaler Klimaschutz für Berliner Kieze",
    hero_subline:
      "Wir unterstützen Nachbarschaften dabei, vom Klimastress ins gemeinsame Handeln zu kommen: Kitas, Familienzentren, Schulen, Erwachsene, Senior*innen und Unternehmen pflegen gemeinsam Straßenbäume, begrünen Hinterhöfe, entdecken Vögel und Insekten und messen Stadthitze.",
    hero_cta_partner: "Teil der Blad Community werden",
    hero_cta_book: "Kiez Impact Day anfragen",
    hero_note:
      "Für Nachbar*innen jeden Alters, Kitas, Familienzentren & Schulen, CSR-/HR-Teams sowie Inkubatoren und Förderpartner.",
    hero_card_tag: "BERLINER BAUMKRONE · SONNENDURCHFLUTETES LINDENBLATT",
    pillar_1: "Vögel & Insekten",
    pillar_2: "Straßenbäume & Hinterhöfe",
    pillar_3: "Stadthitze messen",

    problem_label: "01 · Die Herausforderung",
    problem_title:
      "Berlins Straßenbäume und Hinterhöfe überhitzen – während im Kiez niedrigschwellige Wege zum gemeinsamen Handeln fehlen",
    spectrum_cool: "Bewässertes & schattiges Mikroklima",
    spectrum_desc:
      "Anhaltende Sommertrockenheit, sandige Böden und versiegelter Asphalt bringen Berliner Straßenbäume und Innenhöfe in sichtbaren Hitzestress – direkt vor den Türen von Kindern, Familien und älteren Menschen.",
    spectrum_heat: "Trocken- & Hitzeinsel-Stress",
    problem_card1_title: "Trockenstress für Bäume & aufgeheizte Hinterhöfe",
    problem_card1_text:
      "Heiße Sommer, sandige Böden und versiegelte Flächen in Wohnblöcken und Hinterhöfen erzeugen Hitzeinseln, die die lokale Artenvielfalt schwächen und besonders Kleinkinder sowie ältere Menschen belasten.",
    problem_card2_title: "Vom Klimastress zum gemeinsamen Anpacken im Kiez",
    problem_card2_text:
      "Viele Kinder, Berufstätige und Senior*innen möchten vor der eigenen Haustür aktiv werden – doch oft fehlen angeleitete Möglichkeiten, um gemeinsam Straßenbäume zu gießen, Hinterhöfe zu begrünen und voneinander zu lernen.",

    what_label: "02 · Was wir machen",
    what_title:
      "Praktische Naturbildung und spürbare Abkühlung direkt im Kiez",
    what_intro:
      "Wir verbinden ökologische Wirkung (Stadtkühlung & Artenvielfalt) mit sozialer Wirkung (generationsübergreifendes Lernen im Quartier).",
    what_card1_tag: "Kitas, Familienzentren & Senior*innen",
    what_card1_title: "Generationsübergreifende Natur- & Baum-Workshops",
    what_card1_text:
      "Praxisnahes Entdecken für Kita-Gruppen, Familienzentren, Schulklassen und ältere Nachbar*innen – orientiert am Berliner Bildungsprogramm (BBP): Straßenbäume adoptieren und gießen, Vögel und Insekten bestimmen und Wissen zwischen den Generationen teilen.",
    what_card2_tag: "Jugend, Erwachsene & Kiez",
    what_card2_title: "Citizen Science im Kiez & Hinterhof",
    what_card2_text:
      "Praxiseinheiten im Freien, bei denen Schüler*innen und Anwohnende Temperaturen an schattigen Baumscheiben und begrünten Hinterhöfen im Vergleich zu Asphalt messen, Bestäuber erfassen und erleben, wie Begrünung ihren Block kühlt.",
    what_card3_tag: "Für Unternehmen",
    what_card3_title: "Kiez Impact Days für Unternehmen",
    what_card3_text:
      "Bezahlte Einsatz- und Teamtage, bei denen Unternehmen aus Berlin und Brandenburg gemeinsam mit lokalen Partnern Hinterhöfe begrünen, Baumscheiben bepflanzen und Insektenhotels bauen – und so kostenfreie Kiez-Workshops mitermöglichen.",

    trust_label: "Pilot 2026/27 Ökosystem- & Kiez-Netzwerk:",
    card_spec_cost_label: "Kosten / Zugang:",
    card_spec_format_label: "Format:",
    card1_cost_val: "100% kostenfrei für Kitas & Senior*innen",
    card1_format_val: "3–4 Std. Praxis-Session · Berlin & Potsdam",
    card1_btn: "Für Kita oder Gruppe anfragen →",
    card2_cost_val: "100% kostenfreie Kiez-Teilnahme",
    card2_format_val: "2–3 Std. Mikroklima- & Sensor-Rundgang",
    card2_btn: "Beim nächsten Rundgang mitmachen →",
    card3_cost_val: "Ab 1.800 € / Team (ermöglicht freie Workshops)",
    card3_format_val: "Rundum begleiteter 3,5-Std. ESG-Teamtag + CSR-Zertifikat",
    card3_btn: "Kiez Impact Day für Unternehmen anfragen →",

    comm_label: "Blad Community · Vom Klimastress ins Handeln",
    comm_title: "Alle im Kiez können mitwirken",
    comm_intro:
      "Straßenbäume und begrünte Hinterhöfe brauchen den ganzen Sommer über Pflege – besonders in den Schulferien, wenn die Hitze am größten ist. Blad verbindet fünf Gruppen zu einem kontinuierlichen Kiez-Netzwerk:",
    comm_group_1: "🌱 Kitas, Familienzentren & Schulen",
    comm_group_2: "🌿 Nachbarschaft & Familien",
    comm_group_3: "🌳 Senior*innen",
    comm_group_4: "🏡 Hinterhof- & Baum-Initiativen",
    comm_group_5: "🏢 Unternehmensteams",
    comm_card_title: "Werde Teil der Blad Community",
    comm_card_text:
      "Möchtest du dich um einen Straßenbaum kümmern, einen Hinterhof begrünen oder einen kostenfreien Workshop in deine Kita, dein Familienzentrum, deine Schule oder Seniorengruppe holen?",
    comm_card_btn: "Per E-Mail mitmachen",
    comm_card_sublink: "Oder nutze das Kontaktformular unten →",

    how_label: "03 · Social-Business- & Wirkungsmodell",
    how_title: "Wie unser hybrides Modell im Quartier funktioniert",
    how_step1_title: "Kostenfreier Zugang für Kitas, Familienzentren & Schulen",
    how_step1_text:
      "Unsere Bildungsworkshops und Kiez-Aktionen sind für teilnehmende Kitas, Familienzentren, Schulen, Seniorengruppen und Anwohnende kostenfrei, damit jedes Quartier unabhängig vom Budget teilnehmen kann.",
    how_step2_title: "Hybrides Modell: Unternehmenstage & geplante Förderung",
    how_step2_text:
      "Unser Social-Business-Modell kombiniert Einnahmen aus bezahlten Kiez Impact Days für Unternehmen mit geplanten Anträgen auf öffentliche Klima-, Bezirksamts-, Bildungs- und Quartiersförderung.",
    how_step3_title: "Gemeinsam mit lokalen Kiez-Partnern",
    how_step3_text:
      "Jeder Workshop, jede Baumscheiben-Bepflanzung und jede Hinterhofbegrünung wird eng mit Familienzentren, Stadtteilzentren, pädagogischen Fachkräften, Gieß-Initiativen und Grünflächen-Partnern umgesetzt.",

    pilot_label: "04 · Pilot- & Inkubations-Fahrplan (2026/27)",
    pilot_title: "Von der Validierung zur messbaren Wirkung im Kiez",
    pilot_intro:
      "Blad befindet sich in der frühen Pilotphase 2026/27 in Berlin und Brandenburg. Diese drei Validierungsschritte bereiten wir aktuell vor:",
    stage_1_label: "Schritt 1",
    stage_2_label: "Schritt 2",
    stage_3_label: "Schritt 3",
    status_planned: "Geplant",
    pilot_stage1_title: "Gespräche mit Kitas, Familienzentren, Schulen & Partnern",
    pilot_stage1_text:
      "Strukturierte Bedarfsanalyse mit Kitas, Familienzentren, Stadtteilzentren, Seniorengruppen, Baum-Initiativen und CSR-Teams in Berlin und Brandenburg zur gemeinsamen Formatentwicklung.",
    pilot_stage2_title: "Erste Pilot-Workshops durchführen",
    pilot_stage2_text:
      "Durchführung erster Praxiseinheiten zu Artenbestimmung, Straßenbaumpflege, Hinterhofkühlung und Mikroklima-Messung sowie Auswertung der sozialen und ökologischen Wirkung.",
    pilot_stage3_title: "Fördermittel beantragen & Kiez Impact Days starten",
    pilot_stage3_text:
      "Bewerbung um öffentliche Klimaanpassungs-, Quartiers- und Gründungsförderung begleitend zu ersten Kiez Impact Days mit Unternehmen zur Validierung unseres hybriden Finanzierungsmodells.",

    about_label: "05 · Über Blad & Gründungsmission",
    about_title: "Warum wir Blad aufbauen",
    about_photo_placeholder: "Faizan Ahmed & Maham Shakil · Berlin & Brandenburg",
    about_placeholder_badge: "Gründerteam · Berlin",
    about_name: "Faizan Ahmed & Maham Shakil · Co-Founders, Blad",
    about_bio:
      "Als Berliner*innen mit der gemeinsamen Vision, Deutschland Schritt für Schritt grüner zu machen – direkt vor unserer eigenen Haustür –, haben wir Blad ins Leben gerufen, um Menschen aller Generationen für praktischen Klimaschutz im Kiez zusammenzubringen. In unserer Pilotphase 2026/27 in Berlin und Brandenburg verwandeln wir belastete Straßenbäume und aufgeheizte Hinterhöfe in lebendige Lernorte und kühlere, grünere Nachbarschaften.",

    contact_label: "06 · Mitmachen & Kontakt",
    contact_title: "Werde Teil der Blad Community oder Partner",
    contact_lead:
      "Ob du als Nachbar*in, Kita-/Familienzentrum-Team oder Seniorengruppe Straßenbäume und Hinterhöfe pflegen möchtest, als Unternehmen einen Kiez Impact Day planst oder als Inkubator bzw. Förderprogramm in Berlin & Brandenburg auf uns schaust – wir freuen uns auf deine Nachricht.",
    contact_direct_label: "Direkte E-Mail:",

    form_name_label: "Dein Name",
    form_name_placeholder: "Alex Meyer",
    form_role_label: "Ich melde mich als",
    form_role_opt_comm:
      "Community-Mitglied (Nachbarschaft, Erwachsene, Familie, Senior*in)",
    form_role_opt1: "Kita-, Familienzentrum- oder Schulteam",
    form_role_opt2: "Unternehmen (Kiez Impact Day / CSR / HR)",
    form_role_opt3: "Inkubator, Förderprogramm, Jury oder lokaler Partner",
    form_role_opt4: "Sonstige Anfrage",
    form_msg_label: "Nachricht",
    form_msg_placeholder:
      "Erzähl uns kurz von deinem Kiez, deinem Hinterhof, deiner Gruppe oder deiner Partnerschaftsidee...",
    form_submit: "Im E-Mail-Programm öffnen",
    form_footnote:
      "Beim Absenden öffnet sich dein E-Mail-Programm direkt mit einer Nachricht an faizan.crm1@gmail.com.",

    footer_tagline:
      "Praktische Naturbildung & lokaler Klimaschutz für Communities in Berlin & Brandenburg · Pilotphase 2026/27",

    nav_proto: "Prototyp",
    proto_label: "03 · GreenTech, Citizen Science & CSR-Impact-Konsole",
    proto_title: "Live-Simulator: Kiez-Mikroklima, Baum-Diagnose & CSR-Impact",
    proto_intro:
      "Bei unseren Workshops und Corporate Kiez Impact Days messen Teilnehmende reale Oberflächentemperaturen (°C), Bodenfeuchte und den Zustand von Straßenbäumen. Teste hier unser interaktives Feld-Instrument und den B2B-CSR-Rechner:",
    proto_chip_1: "🌡️ Oberflächentemperatur-Sensorik (°C)",
    proto_chip_2: "🌳 Berliner & Potsdamer Baum-Kompass",
    proto_chip_3: "📊 Verifizierter B2B-CSR-Rechner",
    proto_tool1_badge: "Modul 01 · Mikroklima-Telemetrie",
    proto_tool1_title: "Stadthitze- & Hinterhof-Kühlungs-Simulator",
    proto_tool1_sub:
      "Wähle ein Berliner Wetterszenario oder bewege die Regler, um versiegelten Straßenasphalt mit einer bewässerten Baumscheibe bzw. einem begrünten Hinterhof zu vergleichen.",
    proto_preset1: "🔥 Hitzewelle Juli (47°C vs. 27°C)",
    proto_preset2: "☀️ Warmer Hinterhof (41°C vs. 24°C)",
    proto_preset3: "🌤️ Sonniger Nachmittag (35°C vs. 22°C)",
    proto_slider_asphalt: "Versiegelter Straßenasphalt (°C)",
    proto_slider_green: "Bewässerte Baumscheibe / Grüner Hinterhof (°C)",
    proto_delta_label: "Gemessene Oberflächen-Abkühlung (ΔT)",
    proto_delta_note:
      "Starker lokaler Kühleffekt: Schattiger, feuchter Boden und Staudenpflanzungen senken die Strahlungshitze für Kinder, Senior*innen und Straßenbäume deutlich.",
    proto_tool2_badge: "Modul 02 · Baum-Diagnose & CSR-Impact-Engine",
    proto_tool2_title: "Berliner & Potsdamer Baum-Guide + CSR-Rechner",
    proto_tool2_sub:
      "Prüfe den Pflegebedarf lokaler Straßenbaumarten und berechne den messbaren ESG-/CSR-Output eines Corporate Kiez Impact Days.",
    tree_linden: "🌿 Winterlinde",
    tree_maple: "🍁 Spitzahorn",
    tree_oak: "🌳 Stieleiche",
    tree_chestnut: "🌰 Rosskastanie",
    tree_water_label: "Gießprotokoll im Sommer",
    tree_stress_label: "Optischer Trockenstress-Indikator",
    tree_plants_label: "Empfohlene Baumscheiben-Begleitpflanzen",
    csr_preview_tag: "B2B Kiez Impact Day · CSR-Ergebnis-Simulator",
    csr_stat1: "Straßenbäume gegossen & gemulcht",
    csr_stat2: "Baumscheiben / Hofbeete bepflanzt",
    csr_stat3: "Kostenfreie Kita-/Schul-Workshops finanziert"
  }
};

// Add English prototype translations
Object.assign(translations.en, {
  nav_proto: "Prototype",
  proto_label: "03 · GreenTech, Citizen Science & CSR Impact Console",
  proto_title: "Live Kiez Microclimate, Street Tree & CSR Impact Lab",
  proto_intro:
    "During workshops and Corporate Kiez Impact Days, participants log real surface temperature (°C), soil moisture, and street-tree vitality data. Test our interactive field instrument and B2B CSR calculator below:",
  proto_chip_1: "🌡️ Surface Thermal Sensing (°C)",
  proto_chip_2: "🌳 Berlin & Potsdam Tree Diagnostics",
  proto_chip_3: "📊 Verifiable B2B CSR Output",
  proto_tool1_badge: "Module 01 · Microclimate Telemetry",
  proto_tool1_title: "Urban Heat & Courtyard Cooling Simulator",
  proto_tool1_sub:
    "Select a Berlin weather scenario or drag the thermal sliders to compare sealed street asphalt with a watered Baumscheibe or greened Hinterhof.",
  proto_preset1: "🔥 July Heatwave (47°C vs 27°C)",
  proto_preset2: "☀️ Warm Hinterhof (41°C vs 24°C)",
  proto_preset3: "🌤️ Sunny Afternoon (35°C vs 22°C)",
  proto_slider_asphalt: "Sealed Street Asphalt Surface (°C)",
  proto_slider_green: "Watered Tree Bed / Green Hinterhof (°C)",
  proto_delta_label: "Measured Surface Cooling Delta (ΔT)",
  proto_delta_note:
    "Strong local cooling effect: Shaded, watered soil and perennial groundcover significantly reduce radiant heat stress for children, seniors, and street trees.",
  proto_tool2_badge: "Module 02 · Tree Diagnostics & CSR Impact Engine",
  proto_tool2_title: "Berlin & Potsdam Street Tree Guide + CSR Calculator",
  proto_tool2_sub:
    "Inspect species-specific drought care protocols and calculate the verifiable ESG/CSR output of a Corporate Kiez Impact Day.",
  tree_linden: "🌿 Winterlinde",
  tree_maple: "🍁 Spitzahorn",
  tree_oak: "🌳 Stieleiche",
  tree_chestnut: "🌰 Rosskastanie",
  tree_water_label: "Summer Deep-Watering Protocol",
  tree_stress_label: "Visual Drought-Stress Indicator",
  tree_plants_label: "Recommended Baumscheiben Companion Guild",
  csr_preview_tag: "B2B Kiez Impact Day · CSR Outcome Simulator",
  csr_stat1: "Street trees deep-watered & mulched",
  csr_stat2: "Baumscheiben / courtyard beds planted",
  csr_stat3: "Free Kita, school or senior workshops funded"
});

const treeDatabase = {
  linden: {
    en: {
      title: "Tilia cordata · Small-Leaved Lime",
      role: "Berlin's #1 street tree (~35% of city canopy) · High summer water demand",
      cans: "💧 8–12 Cans / Wk",
      water: "80–120 Liters / week (applied slowly in 2 rings around trunk)",
      stress: "Crisp brown leaf margins & early yellowing during July/August droughts",
      plants: "Wild Marjoram (Dost), Meadow Sage (Wiesensalbei) & Bellflower (Glockenblume)"
    },
    de: {
      title: "Tilia cordata · Winterlinde",
      role: "Berlins häufigster Straßenbaum (~35 % Bestand) · Hoher Wasserbedarf im Sommer",
      cans: "💧 8–12 Kannen / Wo.",
      water: "80–120 Liter / Woche (langsam im Wurzelbereich versickern lassen)",
      stress: "Braune, trockene Blattränder & frühe Gelbfärbung im Juli/August",
      plants: "Wilder Dost, Wiesensalbei & Rundblättrige Glockenblume"
    }
  },
  maple: {
    en: {
      title: "Acer platanoides · Norway Maple",
      role: "Common boulevard & courtyard shade tree · Sensitive to compacted soil",
      cans: "💧 7–10 Cans / Wk",
      water: "70–100 Liters / week (deep slow watering at outer root zone)",
      stress: "Leaf scorch on sun-exposed canopy & curling leaf tips",
      plants: "Woodruff (Waldmeister), Wild Strawberry (Walderdbeere) & Bugleweed (Günsel)"
    },
    de: {
      title: "Acer platanoides · Spitzahorn",
      role: "Typischer Allee- & Hofbaum · Empfindlich bei Bodenverdichtung",
      cans: "💧 7–10 Kannen / Wo.",
      water: "70–100 Liter / Woche (durchdringendes Gießen im Wurzelbereich)",
      stress: "Blattrandnekrosen auf der Sonnenseite & eingerollte Blattspitzen",
      plants: "Waldmeister, Walderdbeere & Kriechender Günsel"
    }
  },
  oak: {
    en: {
      title: "Quercus robur · English Oak",
      role: "Biodiversity keystone species (supports 500+ insect species in Berlin/Brandenburg)",
      cans: "💧 6–10 Cans / Wk",
      water: "60–100 Liters / week (critical for young street trees < 15 years)",
      stress: "Premature acorn drop & pale, wilting foliage during prolonged heat",
      plants: "Yarrow (Schafgarbe), Wild Thyme (Sand-Thymian) & Knapweed (Flockenblume)"
    },
    de: {
      title: "Quercus robur · Stieleiche",
      role: "Schlüsselart für Artenvielfalt (Lebensraum für über 500 Insektenarten)",
      cans: "💧 6–10 Kannen / Wo.",
      water: "60–100 Liter / Woche (besonders wichtig für Jungbäume < 15 Jahre)",
      stress: "Vorzeitiger Eichelabwurf & fahles Laub bei anhaltender Hitze",
      plants: "Wiesen-Schafgarbe, Sand-Thymian & Wiesen-Flockenblume"
    }
  },
  chestnut: {
    en: {
      title: "Aesculus hippocastanum · Horse Chestnut",
      role: "Classic Berlin Biergarten & Hinterhof tree · Shallow heat-sensitive roots",
      cans: "💧 9–13 Cans / Wk",
      water: "90–130 Liters / week (shallow roots suffer quickly in sealed courtyards)",
      stress: "Early brown blotches (compounded by drought + leaf miner moth)",
      plants: "Cranesbill (Storchschnabel), Lungwort (Lungenkraut) & Lemon Balm"
    },
    de: {
      title: "Aesculus hippocastanum · Rosskastanie",
      role: "Klassischer Berliner Hinterhofbaum · Hitzeempfindliche Flachwurzeln",
      cans: "💧 9–13 Kannen / Wo.",
      water: "90–130 Liter / Woche (Flachwurzler leiden schnell in versiegelten Höfen)",
      stress: "Frühe braune Blattflecken (Trockenstress + Kastanienminiermotte)",
      plants: "Wiesen-Storchschnabel, Echtes Lungenkraut & Zitronenmelisse"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "en";
  let currentTreeKey = "linden";

  const langButtons = document.querySelectorAll(".lang-btn");
  const i18nElements = document.querySelectorAll("[data-i18n]");
  const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");

  const htmlParagraphKeys = new Set([
    "privacy_item1",
    "privacy_item2",
    "privacy_item3",
    "privacy_item4"
  ]);

  // Interactive Microclimate Calculator Elements
  const asphaltInput = document.getElementById("asphalt-temp");
  const greenInput = document.getElementById("green-temp");
  const asphaltVal = document.getElementById("asphalt-val");
  const greenVal = document.getElementById("green-val");
  const asphaltBar = document.getElementById("asphalt-bar");
  const greenBar = document.getElementById("green-bar");
  const moisturePill = document.getElementById("moisture-pill");
  const coolingDelta = document.getElementById("cooling-delta");
  const coolingStatus = document.getElementById("cooling-status");
  const presetBtns = document.querySelectorAll(".preset-btn");

  // Interactive Tree Guide Elements
  const treeBtns = document.querySelectorAll(".tree-btn");
  const treeTitleVal = document.getElementById("tree-title-val");
  const treeRoleVal = document.getElementById("tree-role-val");
  const treeCansBadge = document.getElementById("tree-cans-badge");
  const treeWaterVal = document.getElementById("tree-water-val");
  const treeStressVal = document.getElementById("tree-stress-val");
  const treePlantsVal = document.getElementById("tree-plants-val");

  // CSR Team Size Calculator Elements
  const teamBtns = document.querySelectorAll(".team-btn");
  const csrTreesNum = document.getElementById("csr-trees-num");
  const csrBedsNum = document.getElementById("csr-beds-num");
  const csrFreeNum = document.getElementById("csr-free-num");

  function updateCoolingSimulation() {
    if (!asphaltInput || !greenInput) return;
    const aTemp = parseFloat(asphaltInput.value);
    const gTemp = parseFloat(greenInput.value);
    asphaltVal.textContent = `${aTemp} °C`;
    greenVal.textContent = `${gTemp} °C`;

    if (asphaltBar) {
      const aPct = Math.min(100, Math.max(8, ((aTemp - 15) / 45) * 100));
      asphaltBar.style.width = `${aPct.toFixed(1)}%`;
    }
    if (greenBar) {
      const gPct = Math.min(100, Math.max(8, ((gTemp - 15) / 45) * 100));
      greenBar.style.width = `${gPct.toFixed(1)}%`;
    }

    const diff = gTemp - aTemp;
    const formattedDiff = diff <= 0 ? `${diff.toFixed(1)} °C` : `+${diff.toFixed(1)} °C`;
    coolingDelta.textContent = formattedDiff;

    const absCooling = aTemp - gTemp;
    if (moisturePill) {
      if (currentLang === "de") {
        moisturePill.textContent =
          absCooling >= 15
            ? "💧 Bodenfeuchte: Optimal"
            : absCooling >= 6
            ? "💧 Bodenfeuchte: Mittel"
            : "⚠️ Bodenfeuchte: Niedrig";
      } else {
        moisturePill.textContent =
          absCooling >= 15
            ? "💧 Soil Moisture: Optimal"
            : absCooling >= 6
            ? "💧 Soil Moisture: Moderate"
            : "⚠️ Soil Moisture: Low";
      }
    }

    if (currentLang === "de") {
      if (absCooling >= 15) {
        coolingStatus.textContent =
          "Starker lokaler Kühleffekt: Schattiger, feuchter Boden und Staudenpflanzungen senken die Strahlungshitze für Kinder, Senior*innen und Straßenbäume deutlich.";
      } else if (absCooling >= 6) {
        coolingStatus.textContent =
          "Spürbare Mikroklima-Entlastung: Begrünte Baumscheiben und Hinterhöfe speichern Feuchtigkeit und heizen sich deutlich langsamer auf als Asphalt.";
      } else {
        coolingStatus.textContent =
          "Geringer Temperaturunterschied: Zusätzliche Bewässerung, Entsiegelung und Schattenpflanzen helfen, die lokale Abkühlung weiter zu steigern.";
      }
    } else {
      if (absCooling >= 15) {
        coolingStatus.textContent =
          "Strong local cooling effect: Shaded, watered soil and perennial groundcover significantly reduce radiant heat stress for children, seniors, and street trees.";
      } else if (absCooling >= 6) {
        coolingStatus.textContent =
          "Noticeable microclimate relief: Greened tree beds and courtyards retain moisture and heat up far more slowly than sealed street asphalt.";
      } else {
        coolingStatus.textContent =
          "Small temperature difference: Additional watering, mulching, and shade vegetation can further increase local neighbourhood cooling.";
      }
    }
  }

  function updateTreePanel() {
    if (!treeWaterVal || !treeDatabase[currentTreeKey]) return;
    const data = treeDatabase[currentTreeKey][currentLang] || treeDatabase[currentTreeKey].en;
    if (treeTitleVal) treeTitleVal.textContent = data.title;
    if (treeRoleVal) treeRoleVal.textContent = data.role;
    if (treeCansBadge) treeCansBadge.textContent = data.cans;
    treeWaterVal.textContent = data.water;
    treeStressVal.textContent = data.stress;
    treePlantsVal.textContent = data.plants;
  }

  if (teamBtns.length > 0) {
    const csrImpactMap = {
      "15": { trees: "8–12", beds: "3–4", free: "1" },
      "25": { trees: "14–18", beds: "5–6", free: "2" },
      "40": { trees: "22–30", beds: "8–10", free: "3" }
    };
    teamBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        teamBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const size = btn.getAttribute("data-team");
        const metrics = csrImpactMap[size] || csrImpactMap["15"];
        if (csrTreesNum) csrTreesNum.textContent = metrics.trees;
        if (csrBedsNum) csrBedsNum.textContent = metrics.beds;
        if (csrFreeNum) csrFreeNum.textContent = metrics.free;
      });
    });
  }

  if (asphaltInput && greenInput) {
    asphaltInput.addEventListener("input", () => {
      presetBtns.forEach((b) => b.classList.remove("active"));
      updateCoolingSimulation();
    });
    greenInput.addEventListener("input", () => {
      presetBtns.forEach((b) => b.classList.remove("active"));
      updateCoolingSimulation();
    });

    presetBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        presetBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        asphaltInput.value = btn.getAttribute("data-asphalt");
        greenInput.value = btn.getAttribute("data-green");
        updateCoolingSimulation();
      });
    });
  }

  if (treeBtns.length > 0) {
    treeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        treeBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentTreeKey = btn.getAttribute("data-tree");
        updateTreePanel();
      });
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    i18nElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = translations[lang][key];
      if (!text) return;

      if (htmlParagraphKeys.has(key)) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    i18nPlaceholders.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = translations[lang][key];
      if (text) {
        el.setAttribute("placeholder", text);
      }
    });

    langButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    updateCoolingSimulation();
    updateTreePanel();
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosenLang = btn.getAttribute("data-lang");
      setLanguage(chosenLang);
    });
  });

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener("click", () => {
      const isExpanded = mobileBtn.getAttribute("aria-expanded") === "true";
      mobileBtn.setAttribute("aria-expanded", String(!isExpanded));
      mobileNav.hidden = isExpanded;
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileBtn.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // Mailto Form Handler (no backend)
  const mailtoForm = document.getElementById("contact-form") || document.getElementById("mailto-form");
  if (mailtoForm) {
    mailtoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameEl = document.getElementById("contact-name") || document.getElementById("sender-name");
      const roleEl = document.getElementById("contact-role") || document.getElementById("sender-role");
      const msgEl = document.getElementById("contact-message") || document.getElementById("sender-message");

      const name = nameEl ? nameEl.value.trim() : "";
      const role = roleEl ? roleEl.value : "";
      const message = msgEl ? msgEl.value.trim() : "";

      const subject = encodeURIComponent(
        `Blad Community / Inquiry (${role}) — ${name}`
      );
      const body = encodeURIComponent(
        `Name: ${name}\nRole: ${role}\n\n${message}`
      );
      window.location.href = `mailto:faizan.crm1@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Subtle Fade-in on Scroll (respecting prefers-reduced-motion)
  const revealItems = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    revealItems.forEach((el) => observer.observe(el));
  }
});
