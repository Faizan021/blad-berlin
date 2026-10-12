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
    what_card1_tag: "Kitas, Schools & Seniors",
    what_card1_title: "Intergenerational nature & tree-care workshops",
    what_card1_text:
      "Hands-on discovery for Kita groups, school classes, families, and older neighbours: adopting and watering local street trees (complementing civic efforts like Gieß den Kiez), spotting birds and insects, and sharing knowledge across generations.",
    what_card2_tag: "Youth, Adults & Neighbours",
    what_card2_title: "Kiez & courtyard citizen science",
    what_card2_text:
      "Practical outdoor sessions where students and residents measure surface and air temperatures across shaded tree beds and green courtyards (Hinterhöfe) versus sealed asphalt, log pollinator species, and experience how vegetation cools their block.",
    what_card3_tag: "For Companies",
    what_card3_title: "Kiez Impact Days for companies",
    what_card3_text:
      "Paid corporate team days where Berlin and Brandenburg companies green shared inner courtyards (Hinterhöfe), plant street tree beds (Baumscheiben), and build insect hotels—working side by side with local partners and co-financing free community workshops.",

    comm_label: "Blad Community · Moving From Climate Worry to Action",
    comm_title: "Everyone in the Kiez has a role",
    comm_intro:
      "Street trees and green courtyards need care all summer long—especially during school holidays when droughts peak. Blad connects five neighbourhood groups into one continuous care network:",
    comm_group_1: "🌱 Kitas & Schools",
    comm_group_2: "🌿 Neighbours & Families",
    comm_group_3: "🌳 Seniors & Retirees",
    comm_group_4: "🏡 Courtyard & Tree Initiatives",
    comm_group_5: "🏢 Company Teams",
    comm_card_title: "Join the Blad Community",
    comm_card_text:
      "Want to adopt a street tree on your block, green an inner courtyard (Hinterhof), or bring a workshop to your Kita, school, or senior group?",
    comm_card_btn: "Join via Email",
    comm_card_sublink: "Or use the contact form below →",

    how_label: "03 · Social Business & Impact Model",
    how_title: "How our hybrid impact model works in the neighbourhood",
    how_step1_title: "Free access for Kitas, schools & communities",
    how_step1_text:
      "Educational workshops and neighbourhood sessions are free of charge for participating Kitas, schools, senior groups, and residents so every Kiez can participate regardless of income.",
    how_step2_title: "Hybrid model: Company days & planned grants",
    how_step2_text:
      "Our social business model combines earned revenue from paid corporate Kiez Impact Days with planned public climate, education, and neighbourhood grants.",
    how_step3_title: "Co-created with local Kiez partners",
    how_step3_text:
      "Every workshop, tree-bed planting, and courtyard greening is delivered with local neighbourhood centres, educators, civic tree-watering initiatives, and green-space partners.",

    pilot_label: "04 · Pilot & Incubation Roadmap (2026/27)",
    pilot_title: "From concept validation to measurable neighbourhood impact",
    pilot_intro:
      "Blad is in the early pilot phase for 2026/27 in Berlin and Brandenburg. Here are the three validation steps we are preparing:",
    stage_1_label: "Stage 1",
    stage_2_label: "Stage 2",
    stage_3_label: "Stage 3",
    status_planned: "Planned",
    pilot_stage1_title: "Talk to communities, Kitas, schools & partners",
    pilot_stage1_text:
      "Conduct structured discovery with educators, neighbourhood centres, senior groups, civic tree initiatives, and CSR teams in Berlin and Brandenburg to co-design workshop and courtyard-greening formats.",
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
      "Whether you are a neighbour, educator, or senior group wanting to care for street trees and courtyards, a company planning a Kiez Impact Day, or an incubator / grant reviewer in Berlin & Brandenburg—we would love to hear from you.",
    contact_direct_label: "Direct email (placeholder):",

    form_name_label: "Your name",
    form_name_placeholder: "Alex Meyer",
    form_role_label: "I am reaching out as",
    form_role_opt_comm: "Community member (Neighbour, adult, family, or senior)",
    form_role_opt1: "Kita or school staff",
    form_role_opt2: "Company (Kiez Impact Day / CSR / HR)",
    form_role_opt3: "Incubator, grant reviewer, or local partner",
    form_role_opt4: "Other inquiry",
    form_msg_label: "Message",
    form_msg_placeholder:
      "Tell us about your Kiez, courtyard, group, or partnership idea...",
    form_submit: "Open in email app",
    form_footnote:
      "No backend or tracking cookies: submitting opens your default email client addressed to [your email].",

    impressum_title: "Impressum (Legal Notice)",
    legal_badge: "To be completed",
    impressum_intro:
      "Placeholder pursuant to § 5 DDG (German Digital Services Act) — to be completed before public launch:",
    impressum_name_label: "Founding Team / Initiators:",
    impressum_name_val: "Faizan Ahmed & Maham Shakil · Blad (Pilot Initiative)",
    impressum_address_label: "Address in Berlin:",
    impressum_address_val:
      "[Street, House Number, Postal Code, Berlin — To be completed]",
    impressum_contact_label: "Contact:",
    impressum_contact_val:
      "Email: [your email] · Phone: [Phone number — To be completed]",
    impressum_resp_label: "Responsible for content (§ 18 Abs. 2 MStV):",
    impressum_resp_val: "Faizan Ahmed & Maham Shakil · [Berlin Address — To be completed]",

    privacy_title: "Datenschutz (Privacy Policy)",
    privacy_intro:
      "Placeholder pursuant to GDPR (DSGVO) — to be completed before public launch:",
    privacy_item1:
      "<strong>Controller:</strong> Faizan Ahmed & Maham Shakil, Berlin ([Address & [your email] — To be completed])",
    privacy_item2:
      "<strong>No cookies or analytics:</strong> This website uses no tracking cookies, analytics scripts, or form databases.",
    privacy_item3:
      "<strong>Email contact:</strong> When you contact us via email (mailto), your email address and message are processed solely to reply to your inquiry. [Add retention period & legal basis under Art. 6(1) GDPR — To be completed]",
    privacy_item4:
      "<strong>Hosting & Fonts:</strong> [Complete details on your web host server logs and consider self-hosting fonts before production if required by your privacy review — To be completed]",

    footer_tagline:
      "Hands-on nature education & climate action for Berlin & Brandenburg communities · Pilot 2026/27",
    footer_impressum: "Impressum (To be completed)",
    footer_privacy: "Datenschutz (To be completed)"
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
      "Wir unterstützen Nachbarschaften dabei, vom Klimastress ins gemeinsame Handeln zu kommen: Kitas, Schulen, Erwachsene, Senior*innen und Unternehmen pflegen gemeinsam Straßenbäume, begrünen Hinterhöfe, entdecken Vögel und Insekten und messen Stadthitze.",
    hero_cta_partner: "Teil der Blad Community werden",
    hero_cta_book: "Kiez Impact Day anfragen",
    hero_note:
      "Für Nachbar*innen jeden Alters, Kitas & Schulen, CSR-/HR-Teams sowie Inkubatoren und Förderpartner.",
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
    what_card1_tag: "Kitas, Schulen & Senior*innen",
    what_card1_title: "Generationsübergreifende Natur- & Baum-Workshops",
    what_card1_text:
      "Praxisnahes Entdecken für Kita-Gruppen, Schulklassen, Familien und ältere Nachbar*innen: Straßenbäume adoptieren und gießen (ergänzend zu Initiativen wie Gieß den Kiez), Vögel und Insekten bestimmen und Wissen zwischen den Generationen teilen.",
    what_card2_tag: "Jugend, Erwachsene & Kiez",
    what_card2_title: "Citizen Science im Kiez & Hinterhof",
    what_card2_text:
      "Praxiseinheiten im Freien, bei denen Schüler*innen und Anwohnende Temperaturen an schattigen Baumscheiben und begrünten Hinterhöfen im Vergleich zu Asphalt messen, Bestäuber erfassen und erleben, wie Begrünung ihren Block kühlt.",
    what_card3_tag: "Für Unternehmen",
    what_card3_title: "Kiez Impact Days für Unternehmen",
    what_card3_text:
      "Bezahlte Einsatz- und Teamtage, bei denen Unternehmen aus Berlin und Brandenburg gemeinsam mit lokalen Partnern Hinterhöfe begrünen, Baumscheiben bepflanzen und Insektenhotels bauen – und so kostenfreie Kiez-Workshops mitermöglichen.",

    comm_label: "Blad Community · Vom Klimastress ins Handeln",
    comm_title: "Alle im Kiez können mitwirken",
    comm_intro:
      "Straßenbäume und begrünte Hinterhöfe brauchen den ganzen Sommer über Pflege – besonders in den Schulferien, wenn die Hitze am größten ist. Blad verbindet fünf Gruppen zu einem kontinuierlichen Kiez-Netzwerk:",
    comm_group_1: "🌱 Kitas & Schulen",
    comm_group_2: "🌿 Nachbarschaft & Familien",
    comm_group_3: "🌳 Senior*innen",
    comm_group_4: "🏡 Hinterhof- & Baum-Initiativen",
    comm_group_5: "🏢 Unternehmensteams",
    comm_card_title: "Werde Teil der Blad Community",
    comm_card_text:
      "Möchtest du dich um einen Straßenbaum kümmern, einen Hinterhof begrünen oder einen Workshop in deine Kita, Schule oder Seniorengruppe holen?",
    comm_card_btn: "Per E-Mail mitmachen",
    comm_card_sublink: "Oder nutze das Kontaktformular unten →",

    how_label: "03 · Social-Business- & Wirkungsmodell",
    how_title: "Wie unser hybrides Modell im Quartier funktioniert",
    how_step1_title: "Kostenfreier Zugang für Kitas, Schulen & Community",
    how_step1_text:
      "Unsere Bildungsworkshops und Kiez-Aktionen sind für teilnehmende Kitas, Schulen, Seniorengruppen und Anwohnende kostenfrei, damit jedes Quartier unabhängig vom Budget teilnehmen kann.",
    how_step2_title: "Hybrides Modell: Unternehmenstage & geplante Förderung",
    how_step2_text:
      "Unser Social-Business-Modell kombiniert Einnahmen aus bezahlten Kiez Impact Days für Unternehmen mit geplanten Anträgen auf öffentliche Klima-, Bildungs- und Quartiersförderung.",
    how_step3_title: "Gemeinsam mit lokalen Kiez-Partnern",
    how_step3_text:
      "Jeder Workshop, jede Baumscheiben-Bepflanzung und jede Hinterhofbegrünung wird eng mit Nachbarschaftshäusern, pädagogischen Fachkräften, Gieß-Initiativen und Grünflächen-Partnern umgesetzt.",

    pilot_label: "04 · Pilot- & Inkubations-Fahrplan (2026/27)",
    pilot_title: "Von der Validierung zur messbaren Wirkung im Kiez",
    pilot_intro:
      "Blad befindet sich in der frühen Pilotphase 2026/27 in Berlin und Brandenburg. Diese drei Validierungsschritte bereiten wir aktuell vor:",
    stage_1_label: "Schritt 1",
    stage_2_label: "Schritt 2",
    stage_3_label: "Schritt 3",
    status_planned: "Geplant",
    pilot_stage1_title: "Gespräche mit Nachbarschaft, Kitas, Schulen & Partnern",
    pilot_stage1_text:
      "Strukturierte Bedarfsanalyse mit pädagogischen Teams, Nachbarschaftszentren, Seniorengruppen, Baum-Initiativen und CSR-Teams in Berlin und Brandenburg zur gemeinsamen Formatentwicklung.",
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
      "Ob du als Nachbar*in, Lehrkraft oder Seniorengruppe Straßenbäume und Hinterhöfe pflegen möchtest, als Unternehmen einen Kiez Impact Day planst oder als Inkubator bzw. Förderprogramm in Berlin & Brandenburg auf uns schaust – wir freuen uns auf deine Nachricht.",
    contact_direct_label: "Direkte E-Mail (Platzhalter):",

    form_name_label: "Dein Name",
    form_name_placeholder: "Alex Meyer",
    form_role_label: "Ich melde mich als",
    form_role_opt_comm:
      "Community-Mitglied (Nachbarschaft, Erwachsene, Familie, Senior*in)",
    form_role_opt1: "Kita- oder Schulteam",
    form_role_opt2: "Unternehmen (Kiez Impact Day / CSR / HR)",
    form_role_opt3: "Inkubator, Förderprogramm, Jury oder lokaler Partner",
    form_role_opt4: "Sonstige Anfrage",
    form_msg_label: "Nachricht",
    form_msg_placeholder:
      "Erzähl uns kurz von deinem Kiez, deinem Hinterhof, deiner Gruppe oder deiner Partnerschaftsidee...",
    form_submit: "Im E-Mail-Programm öffnen",
    form_footnote:
      "Kein Backend, keine Tracking-Cookies: Beim Absenden öffnet sich dein E-Mail-Programm mit einer Nachricht an [your email].",

    impressum_title: "Impressum",
    legal_badge: "Noch zu ergänzen",
    impressum_intro:
      "Platzhalter gemäß § 5 DDG – vor Veröffentlichung vollständig auszufüllen:",
    impressum_name_label: "Gründerteam / Initiator*innen:",
    impressum_name_val: "Faizan Ahmed & Maham Shakil · Blad (Pilot-Initiative)",
    impressum_address_label: "Anschrift in Berlin:",
    impressum_address_val:
      "[Straße, Hausnummer, PLZ, Berlin – noch zu ergänzen]",
    impressum_contact_label: "Kontakt:",
    impressum_contact_val:
      "E-Mail: [your email] · Telefon: [Telefonnummer – noch zu ergänzen]",
    impressum_resp_label: "Inhaltlich verantwortlich (§ 18 Abs. 2 MStV):",
    impressum_resp_val: "Faizan Ahmed & Maham Shakil · [Anschrift in Berlin – noch zu ergänzen]",

    privacy_title: "Datenschutz",
    privacy_intro:
      "Platzhalter gemäß DSGVO – vor Veröffentlichung vollständig auszufüllen:",
    privacy_item1:
      "<strong>Verantwortliche Stelle:</strong> Faizan Ahmed & Maham Shakil, Berlin ([Anschrift & [your email] – noch zu ergänzen])",
    privacy_item2:
      "<strong>Keine Cookies oder Analyse-Tools:</strong> Diese Website verwendet keine Tracking-Cookies, Analyse-Skripte oder Formulardatenbanken.",
    privacy_item3:
      "<strong>Kontakt per E-Mail:</strong> Bei einer Kontaktaufnahme per E-Mail (mailto) werden deine Angaben ausschließlich zur Bearbeitung deiner Anfrage verarbeitet. [Speicherdauer & Rechtsgrundlage nach Art. 6 Abs. 1 DSGVO – noch zu ergänzen]",
    privacy_item4:
      "<strong>Hosting & Schriftarten:</strong> [Details zu Server-Logfiles des Hosters ergänzen und vor Livegang ggf. lokales Einbinden der Schriftarten prüfen – noch zu ergänzen]",

    footer_tagline:
      "Praktische Naturbildung & lokaler Klimaschutz für Communities in Berlin & Brandenburg · Pilotphase 2026/27",
    footer_impressum: "Impressum (noch zu ergänzen)",
    footer_privacy: "Datenschutz (noch zu ergänzen)",

    nav_proto: "Prototyp",
    proto_label: "Interaktiver Pilot-Prototyp · GreenTech & Citizen Science",
    proto_title: "Teste unser Kiez-Mikroklima-, Baum- & CSR-Impact-Lab",
    proto_intro:
      "In unseren Workshops und Corporate Kiez Impact Days messen Teilnehmende mit Infrarot-Thermometern und Bodensonden reale Abkühlungseffekte und Baumdaten. Teste hier unseren interaktiven Feld-Prototyp (Simulation für die Pilotphase 2026/27):",
    proto_tool1_badge: "1 · Citizen-Science-Tool",
    proto_tool1_title: "Stadthitze- & Hinterhof-Kühlungs-Simulator",
    proto_tool1_sub:
      "Vergleiche versiegelten Straßenasphalt mit einer bewässerten Baumscheibe oder einem begrünten Hinterhof.",
    proto_preset1: "Sommer-Hitzewelle (47°C vs. 27°C)",
    proto_preset2: "Warmer Hinterhof (41°C vs. 24°C)",
    proto_preset3: "Sonniger Nachmittag (35°C vs. 22°C)",
    proto_slider_asphalt: "Versiegelter Asphalt (°C):",
    proto_slider_green: "Bewässerte Baumscheibe / Grüner Hinterhof (°C):",
    proto_delta_label: "Gemessener Kühlungseffekt (ΔT)",
    proto_delta_note:
      "Starker lokaler Kühleffekt: Schattiger, feuchter Boden und Staudenpflanzungen senken die Strahlungshitze für Kinder, Senior*innen und Straßenbäume deutlich.",
    proto_tool2_badge: "2 · Baum-Kompass & CSR-Vorschau",
    proto_tool2_title: "Berliner & Potsdamer Straßenbaum-Guide + CSR-Impact",
    proto_tool2_sub:
      "Wähle eine typische Straßenbaumart für Pflegehinweise im Workshop und sieh, wie ein Corporate Kiez Impact Day messbare CSR-Wirkung erzeugt.",
    tree_linden: "🌿 Winterlinde",
    tree_maple: "🍁 Spitzahorn",
    tree_oak: "🌳 Stieleiche",
    tree_chestnut: "🌰 Rosskastanie",
    tree_water_label: "Gießbedarf im Sommer:",
    tree_stress_label: "Blatt-Warnsignal bei Trockenstress:",
    tree_plants_label: "Passende heimische Baumscheiben-Pflanzen:",
    csr_preview_tag: "Beispiel B2B-CSR-Wirkung (1 Teamtag · 20 Mitarbeitende)",
    csr_stat1: "Straßenbäume gegossen & gemulcht",
    csr_stat2: "Baumscheiben / Hofbeete bepflanzt",
    csr_stat3: "Kita-, Schul- oder Senioren-Workshop finanziert"
  }
};

// Add English prototype translations
Object.assign(translations.en, {
  nav_proto: "Prototype",
  proto_label: "Interactive Pilot Prototype · GreenTech & Citizen Science",
  proto_title: "Try our Kiez Microclimate, Tree Companion & CSR Impact Lab",
  proto_intro:
    "During our workshops and Corporate Kiez Impact Days, participants use simple handheld infrared thermometers and soil probes to log real microclimate cooling and tree-care data. Test our interactive field prototype below (simulation for 2026/27 pilots):",
  proto_tool1_badge: "1 · Citizen Science Tool",
  proto_tool1_title: "Urban Heat & Courtyard Cooling Simulator",
  proto_tool1_sub:
    "Compare sealed street asphalt with a watered street tree bed (Baumscheibe) or greened inner courtyard (Hinterhof).",
  proto_preset1: "Summer Heatwave (47°C vs 27°C)",
  proto_preset2: "Warm Day Courtyard (41°C vs 24°C)",
  proto_preset3: "Mild Sunny Afternoon (35°C vs 22°C)",
  proto_slider_asphalt: "Sealed Asphalt Surface (°C):",
  proto_slider_green: "Watered Tree Bed / Green Hinterhof (°C):",
  proto_delta_label: "Measured Surface Cooling Delta (ΔT)",
  proto_delta_note:
    "Strong local cooling effect: Shaded, watered soil and perennial groundcover significantly reduce radiant heat stress for children, seniors, and street trees.",
  proto_tool2_badge: "2 · Field Companion & CSR Preview",
  proto_tool2_title: "Berlin & Potsdam Street Tree Guide + CSR Impact Preview",
  proto_tool2_sub:
    "Select a local street tree species to view workshop care guidelines and see how a Corporate Kiez Impact Day translates into verifiable CSR outcomes.",
  tree_linden: "🌿 Winterlinde (Linden)",
  tree_maple: "🍁 Spitzahorn (Maple)",
  tree_oak: "🌳 Stieleiche (Oak)",
  tree_chestnut: "🌰 Rosskastanie (Chestnut)",
  tree_water_label: "Summer Watering Need:",
  tree_stress_label: "Leaf Heat-Stress Sign:",
  tree_plants_label: "Best Native Baumscheiben Plants:",
  csr_preview_tag: "Sample B2B CSR Impact Output (1 Team Day · 20 Employees)",
  csr_stat1: "Street trees watered & mulched",
  csr_stat2: "Baumscheiben / courtyard beds planted",
  csr_stat3: "Kita, school or senior workshop funded"
});

const treeDatabase = {
  linden: {
    en: {
      water: "80–120 Liters / week (8–12 watering cans in dry weeks)",
      stress: "Crisp brown leaf margins & early yellowing during July/August droughts",
      plants: "Wild Marjoram (Dost), Meadow Sage (Wiesensalbei) & Bellflower (Glockenblume)"
    },
    de: {
      water: "80–120 Liter / Woche (8–12 Gießkannen in Trockenperioden)",
      stress: "Braune, trockene Blattränder & frühe Gelbfärbung im Juli/August",
      plants: "Wilder Dost, Wiesensalbei & Rundblättrige Glockenblume"
    }
  },
  maple: {
    en: {
      water: "70–100 Liters / week (deep slow watering at root zone)",
      stress: "Leaf scorch on sun-exposed canopy & curling leaf tips",
      plants: "Woodruff (Waldmeister), Wild Strawberry (Walderdbeere) & Bugleweed (Günsel)"
    },
    de: {
      water: "70–100 Liter / Woche (durchdringendes Gießen im Wurzelbereich)",
      stress: "Blattrandnekrosen auf der Sonnenseite & eingerollte Blattspitzen",
      plants: "Waldmeister, Walderdbeere & Kriechender Günsel"
    }
  },
  oak: {
    en: {
      water: "60–100 Liters / week (especially vital for young street trees < 15 yrs)",
      stress: "Premature acorn drop & pale, wilting foliage during prolonged heat",
      plants: "Yarrow (Schafgarbe), Wild Thyme (Sand-Thymian) & Knapweed (Flockenblume)"
    },
    de: {
      water: "60–100 Liter / Woche (besonders wichtig für Jungbäume < 15 Jahre)",
      stress: "Vorzeitiger Eichelabwurf & fahles Laub bei anhaltender Hitze",
      plants: "Wiesen-Schafgarbe, Sand-Thymian & Wiesen-Flockenblume"
    }
  },
  chestnut: {
    en: {
      water: "90–130 Liters / week (shallow roots suffer quickly in sealed courtyards)",
      stress: "Early brown blotches (compounded by drought + leaf miner moth)",
      plants: "Cranesbill (Storchschnabel), Lungwort (Lungenkraut) & Lemon Balm"
    },
    de: {
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
  const coolingDelta = document.getElementById("cooling-delta");
  const coolingStatus = document.getElementById("cooling-status");
  const presetBtns = document.querySelectorAll(".preset-btn");

  // Interactive Tree Guide Elements
  const treeBtns = document.querySelectorAll(".tree-btn");
  const treeWaterVal = document.getElementById("tree-water-val");
  const treeStressVal = document.getElementById("tree-stress-val");
  const treePlantsVal = document.getElementById("tree-plants-val");

  function updateCoolingSimulation() {
    if (!asphaltInput || !greenInput) return;
    const aTemp = parseFloat(asphaltInput.value);
    const gTemp = parseFloat(greenInput.value);
    asphaltVal.textContent = `${aTemp} °C`;
    greenVal.textContent = `${gTemp} °C`;

    const diff = gTemp - aTemp;
    const formattedDiff = diff <= 0 ? `${diff.toFixed(1)} °C` : `+${diff.toFixed(1)} °C`;
    coolingDelta.textContent = formattedDiff;

    const absCooling = aTemp - gTemp;
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
    treeWaterVal.textContent = data.water;
    treeStressVal.textContent = data.stress;
    treePlantsVal.textContent = data.plants;
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
      window.location.href = `mailto:[your email]?subject=${subject}&body=${body}`;
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
