// Take2Cleaning — single source of content for the whole site.
// Edit this file, run `node build/build.mjs`, and every page regenerates.

export const site = {
  name: 'Take2Cleaning',
  legalName: 'Take2Cleaning',
  domain: 'www.take2cleaning.co.uk',
  origin: 'https://www.take2cleaning.co.uk',
  tagline: 'Cleaning with care, powered by trust',
  strapline: 'Domestic and commercial cleaning across Bordon, Whitehill and East Hampshire.',
  base: 'Bordon, Hampshire',
  town: 'Bordon',
  county: 'Hampshire',
  postcodeArea: 'GU35',
  phone: '07354 321405',
  phoneHref: '+447354321405',
  whatsapp: '07883 715604',
  whatsappHref: '447883715604',
  email: 'hello@take2cleaning.co.uk',      // SIGN-OFF: confirm the address to publish
  hours: 'Monday to Friday 8am to 6pm, Saturday 9am to 2pm',  // SIGN-OFF
  responsePromise: 'We answer every enquiry the same working day.',
  founded: 2025,
  lat: 51.1128,
  lng: -0.8646,
  socials: {},                              // SIGN-OFF: Facebook / Instagram URLs if they exist
  colours: {
    ink: '#072530',
    brand: '#12C2E9',
    brandInk: '#076A85'
  }
};

// ---------------------------------------------------------------- services
// Copy below is rewritten from the existing Wix site. Claims carried over
// from that site are marked CLAIM in comments so they can be checked.
export const services = [
  {
    slug: 'domestic-cleaning',
    name: 'Domestic cleaning',
    navName: 'Domestic cleaning',
    audience: 'home',
    icon: 'home',
    lead: 'Regular house cleaning that turns up when it says it will.',
    metaTitle: 'Domestic cleaning in Bordon and East Hampshire',
    metaDesc: 'Weekly, fortnightly, monthly or one-off house cleaning across Bordon, Whitehill, Liphook, Alton and Petersfield. DBS-checked cleaners, free written quote.',
    hero: 'Weekly, fortnightly, monthly or just when you need it. The same cleaner each visit, DBS-checked, and a written quote before anyone sets foot in your house.',
    intro: [
      'Most people do not want a cleaning company. They want the same person, on the same morning, doing the same job to the same standard, without having to be asked twice. That is what regular domestic cleaning with us looks like.',
      'We agree the rooms and the tasks with you at the start, write them down, and work to that list every visit. If something needs adding, you tell us once and it stays added.'
    ],
    includes: {
      title: 'What a regular clean covers',
      groups: [
        { name: 'Kitchen', items: ['Worktops, splashbacks and sink cleaned and dried', 'Hob degreased, extractor face wiped', 'Fronts of units and appliances wiped', 'Microwave cleaned inside and out', 'Floor vacuumed and mopped', 'Bins emptied and liners replaced'] },
        { name: 'Bathrooms', items: ['Bath, shower, screen and tiles descaled', 'Basin, taps and mirror polished', 'Toilet cleaned inside and out, including behind', 'Surfaces and ledges dusted', 'Floor vacuumed and mopped'] },
        { name: 'Bedrooms and living areas', items: ['All reachable surfaces dusted, including skirtings and sills', 'Beds made or linen changed if you leave it out', 'Upholstery vacuumed, cushions straightened', 'Mirrors and glass spot-cleaned', 'Carpets vacuumed, hard floors vacuumed and mopped'] },
        { name: 'Throughout', items: ['Light switches, handles and door frames wiped', 'Cobwebs removed', 'Stairs and landing vacuumed', 'Everything put back where it was found'] }
      ]
    },
    extras: {
      title: 'Ask for these and we will build them in',
      items: ['Inside the oven', 'Inside the fridge or freezer', 'Interior windows and frames', 'Ironing', 'Laundry loaded and hung', 'Inside kitchen cupboards', 'Conservatory or garden room']
    },
    faqs: [
      { q: 'Will I get the same cleaner every time?', a: 'Yes, that is how we set the round up. If your regular cleaner is on holiday or off sick we will tell you before the visit and send someone who has been briefed on your list, or move the visit if you would rather wait.' },
      { q: 'Do I have to be in?', a: 'No. Most of our regular customers are at work. We can hold a key, use a key safe, or work around whoever is home. Key handling is written into the agreement so you know exactly who holds what.' },
      { q: 'Are your cleaners DBS-checked?', a: 'Yes. Every member of our team is DBS-checked before they set foot in a customer property, and we will show you the certificate if you ask.' },
      { q: 'Do you bring your own products and equipment?', a: 'Yes, as standard. If you would prefer we use your products, for example because of an allergy in the house or a surface that needs a specific treatment, just say so and we will.' },
      { q: 'What is the shortest visit you do?', a: 'Two hours. Below that there is not enough time to do a room properly, and we would rather turn the job down than do it badly.' },
      { q: 'Can I cancel or move a visit?', a: 'Yes. Give us 24 hours and there is nothing to pay. We will always try to move a visit rather than lose it.' }
    ],
    related: ['end-of-tenancy-cleaning', 'carpet-upholstery-cleaning', 'environmental-cleans']
  },
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End of tenancy cleaning',
    navName: 'End of tenancy',
    audience: 'home',
    icon: 'key',
    lead: 'A full clean to inventory standard, so the deposit argument never starts.',
    metaTitle: 'End of tenancy cleaning in East Hampshire',
    metaDesc: 'Full end of tenancy cleaning to inventory standard for tenants, landlords and agents across East Hampshire. Written quote, itemised checklist, no call-out fee.',
    hero: 'A full internal clean to inventory standard, worked from a written checklist you get a copy of. Tenants, landlords and letting agents across East Hampshire.',
    intro: [
      'Deposit disputes are almost never about whether a property was clean. They are about whether anybody can prove it. So we work from an itemised checklist, tick it off room by room, and hand you the completed sheet at the end along with photographs of the finished rooms.',
      'We arrive with everything needed for the job, including a ladder, a steam cleaner and the descaler that actually shifts limescale. You do not need to supply anything.'
    ],
    includes: {
      title: 'What the clean covers, room by room',
      groups: [
        { name: 'Kitchen', items: ['Oven cleaned inside, including racks, trays, door glass and seals', 'Hob, extractor and filter degreased', 'Fridge and freezer emptied, defrosted and cleaned inside', 'Washing machine drawer, seal and filter cleaned', 'All cupboards and drawers cleaned inside and out', 'Sink and taps descaled, waste flushed', 'Tiles, splashbacks and worktops degreased', 'Floor washed, including under appliances where they move'] },
        { name: 'Bathrooms', items: ['Limescale removed from taps, shower head, screen and tiles', 'Grout scrubbed and rinsed', 'Toilet cleaned inside, outside, behind and underneath', 'Extractor fan cover cleaned', 'Mirrors and cabinets cleaned inside and out', 'Sealant cleaned and any mould treated', 'Floor washed and edges detailed'] },
        { name: 'Every room', items: ['Carpets vacuumed, including edges and under movable furniture', 'Hard floors vacuumed and washed', 'Skirtings, door frames, doors and handles washed', 'Light switches, sockets and radiators cleaned', 'Interior windows, sills and frames cleaned', 'Wardrobes, drawers and shelving cleaned inside', 'Cobwebs removed, ceiling corners checked', 'Curtain rails and picture rails dusted'] }
      ]
    },
    extras: {
      title: 'Commonly added',
      items: ['Carpet cleaning by hot water extraction', 'Upholstery cleaning', 'Exterior window cleaning', 'Garage, shed or loft clearance', 'Patio or decking wash', 'Rubbish removal']
    },
    faqs: [
      { q: 'Will this clean get my deposit back?', a: 'Cleaning is one of the things a check-out inventory scores, and it is the one we can control. We clean to inventory standard and give you the completed checklist and photographs so you have evidence if the agent queries it. We cannot do anything about wear, damage or the state of the garden.' },
      { q: 'What if the agent says something was missed?', a: 'Tell us within 72 hours of the check-out and we will come back and put it right at no charge, as long as nobody has moved back in and the property has not been used since we cleaned it.' },
      { q: 'Does the property need to be empty?', a: 'It works far better empty. We can only clean inside cupboards, behind appliances and under furniture that is not there. If the property is still part-furnished, tell us when you book and we will quote for what can actually be reached.' },
      { q: 'How long does it take?', a: 'A one-bedroom flat is usually most of a day for two cleaners. A four-bedroom house is normally a full day with a larger team. We will tell you the expected hours in the quote rather than leaving you guessing.' },
      { q: 'Do you do this for landlords and agents directly?', a: 'Yes, and a good share of our end of tenancy work comes that way. We can hold keys, work to a standing spec across a portfolio and invoice monthly.' },
      { q: 'Is carpet cleaning included?', a: 'Vacuuming is. Hot water extraction is a separate job and priced separately, because not every tenancy needs it. If the inventory calls for professionally cleaned carpets, add it when you book and we will do both in one visit.' }
    ],
    related: ['carpet-upholstery-cleaning', 'domestic-cleaning', 'new-build-builders-cleaning']
  },
  {
    slug: 'office-commercial-cleaning',
    name: 'Office and commercial cleaning',
    navName: 'Office and commercial',
    audience: 'business',
    icon: 'building',
    lead: 'Contract cleaning with a named account manager, not a call centre.',
    metaTitle: 'Office and commercial cleaning, East Hampshire',
    metaDesc: 'Contract office and commercial cleaning across Bordon, Alton, Petersfield, Liphook and Farnham. Named account manager, documented spec, free site survey.',
    hero: 'Offices, health centres, industrial units and public sector sites. Every contract gets a named account manager who owns the quality and answers the phone.',
    // CLAIM carried from the existing site: "decades of experience in commercial cleaning"
    intro: [
      'Our team has decades of commercial cleaning experience between them, on premises from a few hundred to several thousand square metres. Clients have included private companies, entertainment venues and public sector organisations.',
      'What that experience mostly buys you is a sensible specification. We survey the site, write down exactly what gets done daily, weekly, monthly and quarterly, and price against that document rather than against a guess. You always know what you are paying for.'
    ],
    includes: {
      title: 'How a contract is set up',
      groups: [
        { name: 'The survey', items: ['We walk the site with you and measure it', 'We agree which areas are daily, weekly, monthly and periodic', 'We note access, alarms, keys and out of hours arrangements', 'We flag anything that needs specialist treatment or access equipment'] },
        { name: 'The specification', items: ['A written task list per area with a frequency against each line', 'Agreed consumables, and who supplies them', 'Cover arrangements for holiday and sickness', 'The escalation route and response times when something goes wrong'] },
        { name: 'The delivery', items: ['A named account manager as your single point of contact', 'Documented quality inspections on a set cycle', 'COSHH sheets and risk assessments held on site', 'A log you can see, so nothing rests on memory'] }
      ]
    },
    extras: {
      title: 'Periodic work we handle alongside a contract',
      items: ['Carpet cleaning by hot water extraction', 'Vinyl stripping, sealing and buffing', 'Washroom deep cleans and sanitary provision', 'High level and internal window cleaning', 'Kitchen and canteen deep cleans', 'Builders and refurbishment cleans']
    },
    faqs: [
      { q: 'What size of site do you take on?', a: 'From a single small office up to several thousand square metres. If a job is outside what we can staff properly we will say so rather than take it and struggle.' },
      { q: 'Who do I call when there is a problem?', a: 'Your account manager, directly, on a mobile. Not a general enquiries line. They walk the site on a set cycle and they are the person responsible for the standard.' },
      { q: 'Can you clean outside office hours?', a: 'Yes. Early mornings, evenings and weekends are normal for us, and most contracts run outside occupied hours so the work is invisible.' },
      { q: 'How is a contract priced?', a: 'Against the written specification, by the hours it genuinely takes. We do not quote a headline figure and then thin out the hours. If the spec changes, the price changes, and we tell you before it does.' },
      { q: 'Do you cover holidays and sickness?', a: 'Yes, cover is written into the contract. It is one of the first things we agree because it is the first thing that goes wrong elsewhere.' },
      { q: 'Can we start with a trial?', a: 'Yes. A one-month trial on a rolling basis is fine, and it is a fair way for both sides to find out whether it works.' }
    ],
    related: ['hard-floor-care', 'carpet-upholstery-cleaning', 'event-cleaning']
  },
  {
    slug: 'carpet-upholstery-cleaning',
    name: 'Carpet and upholstery cleaning',
    navName: 'Carpet and upholstery',
    audience: 'both',
    icon: 'sofa',
    lead: 'Hot water extraction that lifts the dirt out rather than moving it around.',
    metaTitle: 'Carpet and upholstery cleaning, East Hampshire',
    metaDesc: 'Hot water extraction carpet and upholstery cleaning across East Hampshire. Furniture moved, protective pads used, quick drying and no sticky residue.',
    hero: 'Hot water extraction, commonly called steam cleaning. Heated water under pressure through the fibres, then powerful extraction to pull the dirt and the moisture back out.',
    intro: [
      'Most of what makes a carpet look tired is grit sitting down in the pile and an oily film on the fibre tips. A vacuum takes the grit off the top. Hot water extraction flushes both out of the whole depth of the pile, which is why the colour comes back rather than just the surface looking tidier.',
      'We move the furniture, clean underneath it, and put protective pads or foil under the feet so nothing marks the damp carpet while it dries. It dries fast and leaves no sticky residue, which matters because residue is what makes a cleaned carpet re-soil quickly.'
    ],
    includes: {
      title: 'How we work a room',
      groups: [
        { name: 'Before', items: ['Furniture moved where it can be moved safely', 'Fibre and construction identified, and a test patch taken', 'Thorough dry vacuum to lift loose grit', 'Spots and traffic lanes pre-treated and given dwell time'] },
        { name: 'During', items: ['Agitation to work the pre-treatment through the pile', 'Hot water extraction pass by pass across the whole area', 'Extra dry passes on traffic lanes to pull moisture out', 'Edges and doorways detailed by hand'] },
        { name: 'After', items: ['Pile groomed so it dries standing the right way', 'Protective pads or foil under furniture feet', 'Air movers used where drying needs help', 'We tell you honestly what will not come out, and why'] }
      ]
    },
    extras: {
      title: 'Also cleaned this way',
      items: ['Sofas, armchairs and dining chairs', 'Mattresses', 'Rugs, including wool', 'Stairs and landings', 'Office chairs and soft seating', 'Car and van interiors']
    },
    faqs: [
      { q: 'How long will it take to dry?', a: 'Usually two to four hours with windows open and the heating on, longer for a dense wool carpet or a cold still room. We use extra dry passes and air movers to bring that down.' },
      { q: 'Will every stain come out?', a: 'No, and anyone who promises otherwise is selling. Dye stains, bleach marks, old pet accidents that have reached the underlay and heat-set damage may be permanent. We will tell you before we start what we think will lift and what will not.' },
      { q: 'Is it safe for wool?', a: 'Yes, with the right chemistry and temperature. We identify the fibre first and test an out-of-sight patch before committing to the room.' },
      { q: 'Do you move the furniture?', a: 'Yes, everything that can be moved safely by two people. We do not move pianos, large aquariums, or anything on a wall bracket.' },
      { q: 'Is it safe around children and pets?', a: 'Yes. Keep them off the carpet until it is dry, which is the only real precaution. We can use a low-odour system if anyone in the house is sensitive.' },
      { q: 'How often should carpets be done?', a: 'A busy family hallway wants doing once a year. A spare bedroom can go three or four years. Commercial traffic lanes often need a lift twice a year to stop the wear pattern setting in.' }
    ],
    related: ['hard-floor-care', 'end-of-tenancy-cleaning', 'domestic-cleaning']
  },
  {
    slug: 'new-build-builders-cleaning',
    name: 'New build and builders cleaning',
    navName: 'New build and builders',
    audience: 'business',
    icon: 'hardhat',
    lead: 'Sparkle cleans and handover cleans, with the certificates to be on site.',
    metaTitle: 'Builders and sparkle cleans in Hampshire',
    metaDesc: 'Builders cleans, sparkle cleans and handover cleans for new build sites and refurbishments. CSCS-certified operatives, IPAF-trained for high level work.',
    hero: 'Builders cleans and final sparkle cleans for new build sites and refurbishments, from a single plot to a large commercial build.',
    // CLAIM carried from the existing site: CSCS and IPAF certification, H&S training, PPE
    intro: [
      'Construction programmes move. We plan for that rather than complaining about it, and we will re-sequence around you when the handover date shifts, which it usually does.',
      'Our operatives are trained in health and safety, hold CSCS cards and carry the correct PPE for the task. For anything above head height we have staff with IPAF certification, so we can work off access equipment safely rather than improvising off a stepladder.'
    ],
    includes: {
      title: 'The two stages',
      groups: [
        { name: 'Builders clean', items: ['Debris, packaging and protective film removed', 'Plaster, paint, adhesive and silicone splashes removed from every surface', 'Dust removed from high level, ledges, pipework and services', 'Floors scraped, vacuumed and washed', 'Windows and frames cleaned inside', 'Site left ready for the final trades'] },
        { name: 'Sparkle clean', items: ['Full second dust down after the trades have finished', 'Glass polished inside and out where reachable', 'Sanitary ware and kitchens cleaned to handover standard', 'Sockets, switches, ironmongery and trims detailed', 'Floors finished and protected', 'Snagging touch-ups cleaned after remedial work'] }
      ]
    },
    extras: {
      title: 'Also available on site',
      items: ['Welfare and site office cleaning during the build', 'High level cleaning from MEWP or tower', 'Post-handover snagging cleans', 'Window cleaning at height', 'Waste removal', 'Show home and marketing suite cleaning']
    },
    faqs: [
      { q: 'What certification do your operatives hold?', a: 'CSCS cards and health and safety training as standard, with IPAF certification among the team for powered access work. We will send the cards and our RAMS across before we come on site.' },
      { q: 'Can you work to a shifting programme?', a: 'Yes. That is the normal case, not the exception. Tell us as soon as the date moves and we will re-sequence, including working weekends if that is what the handover needs.' },
      { q: 'Do you do builders cleans on single houses?', a: 'Yes. A domestic extension or a loft conversion gets the same two-stage treatment at a sensible scale.' },
      { q: 'What about protective film and stickers?', a: 'Included. Film on glass, units, sanitary ware and appliances all comes off, and the residue comes off with it.' },
      { q: 'Do you supply your own power and water?', a: 'We will use site supplies where they are available, which is usual. If the plot has neither, tell us at survey and we will price for bringing our own.' },
      { q: 'Who signs off the clean?', a: 'Your site manager, against the checklist we agree at survey. If something fails, we put it right before we leave site.' }
    ],
    related: ['office-commercial-cleaning', 'hard-floor-care', 'end-of-tenancy-cleaning']
  },
  {
    slug: 'event-cleaning',
    name: 'Event cleaning',
    navName: 'Event cleaning',
    audience: 'business',
    icon: 'flag',
    lead: 'Before, during and after, so the venue goes back better than it came.',
    metaTitle: 'Event cleaning in Hampshire and Surrey',
    metaDesc: 'Event cleaning for functions, festivals and sporting events. Litter clearance, washroom attendance, waste handling and overnight turnarounds.',
    hero: 'Corporate functions, festivals, sporting fixtures and private celebrations. We turn the venue round quickly, quietly and to the state the hire agreement asks for.',
    intro: [
      'Event work is mostly logistics. The cleaning itself is straightforward; getting the right number of people into the right part of the site at the right time, with somewhere for the waste to go, is the part that goes wrong.',
      'So we plan against your schedule: build, live, break. We agree the waste streams and where they go before the first bin fills, and we staff the overnight turnaround properly so day two starts clean.'
    ],
    includes: {
      title: 'What we cover',
      groups: [
        { name: 'Before', items: ['Pre-event clean of the whole footprint', 'Washrooms stocked and checked', 'Bin positions agreed and set out', 'Waste streams and compound agreed with the venue'] },
        { name: 'During', items: ['Litter picking on a rota through the live period', 'Washroom attendance and restocking', 'Spill response and floor safety', 'Bin changes and compaction to keep the compound moving'] },
        { name: 'After', items: ['Full litter clearance across the site', 'Deep clean of washrooms, bars and catering areas', 'Floors washed or pressure washed as the surface requires', 'Waste segregated, removed and the site handed back'] }
      ]
    },
    extras: {
      title: 'Bolt-ons',
      items: ['Overnight turnaround between event days', 'Portable washroom servicing', 'Marquee and floor covering cleaning', 'Pressure washing of hard standing', 'Post-event carpet cleaning', 'Full waste removal']
    },
    faqs: [
      { q: 'How much notice do you need?', a: 'Two weeks is comfortable for a large event because of staffing. We will take shorter notice and often can cover it, but ring rather than email if the date is tight.' },
      { q: 'Can you work overnight?', a: 'Yes, and for multi-day events that is usually the whole point. The overnight turnaround is where the value is.' },
      { q: 'Do you handle the waste as well as the cleaning?', a: 'We segregate, bag and move it to the compound as standard. Removal from site is quoted separately because it depends on volume and on what the venue already has in place.' },
      { q: 'What size of event do you take?', a: 'From a village hall function up to a multi-day outdoor event. Tell us expected numbers and the footprint and we will tell you honestly whether we can staff it.' },
      { q: 'Do you work with the venue or with us?', a: 'Both. We are used to sitting between an organiser and a venue and working to whichever hire agreement has the tighter standard.' },
      { q: 'What about the weather?', a: 'Outdoor events in the wet need more people, more matting and more floor safety attention. We build a contingency into the plan rather than discovering it on the day.' }
    ],
    related: ['office-commercial-cleaning', 'hard-floor-care', 'carpet-upholstery-cleaning']
  },
  {
    slug: 'hard-floor-care',
    name: 'Hard floor care',
    navName: 'Hard floor care',
    audience: 'both',
    icon: 'floor',
    lead: 'Vinyl stripped and resealed, wood sanded and finished, stone restored.',
    metaTitle: 'Hard floor cleaning and restoration, Hampshire',
    metaDesc: 'Vinyl stripping and resealing, wood floor sanding and waxing, tile and stone restoration for homes and businesses across East Hampshire.',
    hero: 'Vinyl, safety flooring, wood, tile and stone. Cleaned, stripped back, resealed and maintained so the floor lasts instead of being replaced.',
    intro: [
      'A hard floor almost never needs replacing as early as people think. What has usually failed is the finish, not the floor, and a finish can be taken off and put back.',
      'We work across homes, offices and commercial sites, and we will tell you honestly when a floor is past restoration rather than taking money for a job that will not hold.'
    ],
    includes: {
      title: 'By floor type',
      groups: [
        { name: 'Vinyl and safety flooring', items: ['Old sealant and dressing stripped back completely', 'Machine scrubbed and rinsed to bare surface', 'Fresh protective seal applied in multiple coats', 'Buffed to the finish you want, matt through to high gloss', 'Maintenance regime written down so the finish lasts'] },
        { name: 'Wood', items: ['Light sanding to take back the surface', 'Wax polishing or sealing depending on the floor and your preference', 'Advice on which finish suits the room and the traffic', 'Edges and awkward corners done by hand'] },
        { name: 'Tile, stone and grout', items: ['Deep clean with rotary machine and the right chemistry', 'Grout scrubbed, rinsed and where needed recoloured', 'Impregnating sealer applied to porous stone', 'Polished finish restored on marble and terrazzo where appropriate'] }
      ]
    },
    extras: {
      title: 'Related work',
      items: ['Scheduled buff and burnish on a maintenance contract', 'Anti-slip treatment', 'Entrance matting supply and cleaning', 'Concrete and hard standing pressure washing', 'Escalator and stair nosing cleaning', 'Post-restoration maintenance training for your own staff']
    },
    faqs: [
      { q: 'How long is the floor out of use?', a: 'For a strip and reseal, plan on the area being closed overnight. Each seal coat needs to cure. We normally work evenings or weekends so nothing is lost.' },
      { q: 'Can you match an existing finish?', a: 'Usually. Tell us the product if you know it, or show us an area that has not worn, and we will match the sheen level.' },
      { q: 'Is my vinyl worth resealing?', a: 'If the wear is in the finish, yes, and it is a fraction of replacement. If the wear has gone through into the vinyl itself, no, and we will say so.' },
      { q: 'Do you sand wood floors?', a: 'We do light sanding as part of a restoration and refinish. A full deep sand back on a badly damaged floor is a flooring contractor job and we will say when that is what you need.' },
      { q: 'Will grout recolouring last?', a: 'Properly prepared, yes, for years. Prepared badly it peels in months, which is why the cleaning stage takes longer than the colouring stage.' },
      { q: 'How often should a commercial vinyl floor be resealed?', a: 'A busy entrance or corridor typically every 12 to 18 months, with buffing in between. A quiet office floor goes much longer.' }
    ],
    related: ['carpet-upholstery-cleaning', 'office-commercial-cleaning', 'new-build-builders-cleaning']
  },
  {
    slug: 'environmental-cleans',
    name: 'Environmental cleans',
    navName: 'Environmental cleans',
    audience: 'both',
    icon: 'shield',
    lead: 'Discreet deep cleaning and clearance for properties that have got on top of someone.',
    metaTitle: 'Sensitive property cleaning and clearance',
    metaDesc: 'Discreet deep cleaning and full property clearance for hoarded, neglected or distressed properties. Trained staff, unmarked arrival, no judgement.',
    hero: 'Deep cleaning and full clearance for properties that have been neglected, hoarded or left in a difficult state. Handled quietly, by people trained for it.',
    // CLAIM carried from the existing site: trusted provider for local authorities
    intro: [
      'Life gets on top of people. A bereavement, an illness, a period where everything was too much, and a house can reach a state the person living in it cannot face on their own. There is nothing unusual about it and there is nothing to be embarrassed about.',
      'We take these jobs seriously and we take them quietly. Our staff are trained for complex and emotionally difficult environments, we work with complete discretion, and we are a trusted provider for local authorities when specialist cleaning support is needed.'
    ],
    includes: {
      title: 'How we handle it',
      groups: [
        { name: 'Before we start', items: ['A private visit to see the property and agree the scope', 'A written plan with what happens on which day', 'Agreement on what is kept, what is checked with you, and what goes', 'A discreet arrival, unmarked where you want it that way'] },
        { name: 'The work', items: ['Full clearance where it is needed, room by room', 'Anything of obvious value or sentiment set aside for you to see', 'Deep clean of every surface once the room is clear', 'Odour treatment and, where required, sanitising', 'Waste segregated and disposed of through licensed routes'] },
        { name: 'Afterwards', items: ['The property handed back clean and usable', 'Photographs if a landlord or authority needs a record', 'Honest advice on anything structural we have uncovered', 'A standing arrangement for regular visits if that would help'] }
      ]
    },
    extras: {
      title: 'Who we work for',
      items: ['Private individuals and families', 'Housing associations', 'Local authorities', 'Executors and probate solicitors', 'Letting agents and landlords', 'Social workers and support services']
    },
    faqs: [
      { q: 'Will anyone know you have been?', a: 'Not unless you tell them. We arrive discreetly, we do not discuss the job with neighbours, and we can work outside normal hours if that helps.' },
      { q: 'Do I have to be there?', a: 'No, but it helps for the first visit so we can agree what is kept. After that we can work with keys and check in with you by phone.' },
      { q: 'What happens to things I might want?', a: 'Anything that looks valuable, personal or sentimental gets set aside and shown to you before it goes anywhere. We do not make that decision for you.' },
      { q: 'Is this the same as biohazard cleaning?', a: 'No. We handle neglected, hoarded and distressed properties. Where a job genuinely needs a licensed biohazard or trauma specialist we will tell you and help you find one rather than take it on.' },
      { q: 'Can the council or a housing association instruct you directly?', a: 'Yes, and they do. We are used to working to an authority specification and reporting back with photographs and a written record.' },
      { q: 'How is the waste disposed of?', a: 'Through licensed carriers and licensed sites, with transfer notes available on request.' }
    ],
    related: ['domestic-cleaning', 'end-of-tenancy-cleaning', 'carpet-upholstery-cleaning']
  }
];

// ------------------------------------------------------------------- areas
export const areas = [
  { slug: 'bordon', name: 'Bordon', postcode: 'GU35', home: true,
    blurb: 'Our home town. We are based here, so Bordon jobs get the shortest notice and the easiest rescheduling of anywhere we cover.',
    local: 'Bordon has changed faster than almost anywhere in East Hampshire. The garrison went, and Whitehill and Bordon has been building out ever since, which means we work across two very different kinds of property in the same town: new houses on the regeneration plots that need builders cleans and handover cleans, and older ex-service and private housing around Chalet Hill, Lindford Road and the Oakhanger side that mostly wants regular domestic work. Both are ten minutes from our door.',
    services: ['domestic-cleaning', 'end-of-tenancy-cleaning', 'new-build-builders-cleaning', 'office-commercial-cleaning', 'carpet-upholstery-cleaning', 'environmental-cleans'] },
  { slug: 'whitehill', name: 'Whitehill', postcode: 'GU35',
    blurb: 'The other half of the town, and effectively our doorstep. Same-week starts are normal here.',
    local: 'Whitehill and Bordon are one town on the map and two in practice. Whitehill runs north towards the Deadwater Valley and the older housing off Hogmoor Road and Petersfield Road, and the newer development has filled in a lot of ground between them. Rental turnover is high here, so end of tenancy work is most of what we get asked for, and the new plots bring builders and sparkle cleans with them.',
    services: ['domestic-cleaning', 'end-of-tenancy-cleaning', 'new-build-builders-cleaning', 'carpet-upholstery-cleaning'] },
  { slug: 'lindford', name: 'Lindford', postcode: 'GU35',
    blurb: 'Five minutes from base, across the Wey, so short-notice visits are easy here.',
    local: 'Lindford sits just over the river from Bordon and is mostly settled family housing, which means most of our work here is regular weekly and fortnightly domestic cleaning rather than one-off jobs. Because it is so close we can usually slot an extra visit in at short notice, and one cleaner can cover the whole village.',
    services: ['domestic-cleaning', 'carpet-upholstery-cleaning', 'end-of-tenancy-cleaning'] },
  { slug: 'headley', name: 'Headley and Headley Down', postcode: 'GU35',
    blurb: 'Headley, Headley Down, Arford and Standford, all inside our closest ring.',
    local: 'Headley and Headley Down cover a lot of ground for their size, from the older properties around Headley village and Arford down to the more spread out housing at Headley Down and Standford. Larger houses and longer driveways mean we quote by the job rather than assuming a standard visit length, and a longer fortnightly clean often makes more sense here than a shorter weekly one.',
    services: ['domestic-cleaning', 'carpet-upholstery-cleaning', 'hard-floor-care', 'end-of-tenancy-cleaning'] },
  { slug: 'liphook', name: 'Liphook', postcode: 'GU30',
    blurb: 'Fifteen minutes down the A3. Strong rental turnover, so mostly end of tenancy work.',
    local: 'Liphook has a big commuter population because of the station, and where there are commuters there are rentals. Where there are commuters there are rentals, so end of tenancy work around Headley Road, Portsmouth Road and the newer closes off London Road is most of what comes out of Liphook, alongside regular domestic work for households where nobody is home in the week.',
    services: ['end-of-tenancy-cleaning', 'domestic-cleaning', 'carpet-upholstery-cleaning', 'office-commercial-cleaning'] },
  { slug: 'liss', name: 'Liss', postcode: 'GU33',
    blurb: 'Liss, Liss Forest and Rake, on the Petersfield side of the A3.',
    local: 'Liss splits between the village proper and Liss Forest, with a lot of period and character property in between. Older houses mean older floors, so hard floor care and carpet work come up here more than anywhere else on our patch, alongside regular domestic rounds.',
    services: ['domestic-cleaning', 'carpet-upholstery-cleaning', 'hard-floor-care', 'end-of-tenancy-cleaning'] },
  { slug: 'petersfield', name: 'Petersfield', postcode: 'GU31 and GU32',
    blurb: 'Twenty minutes south. Domestic work, town centre offices and end of tenancy cleans.',
    local: 'Town centre offices and professional premises around The Square and Lavant Street, family housing out towards Sheet and Steep, and a rental market that keeps end of tenancy work coming. It takes commercial contracts and domestic rounds in equal measure.',
    services: ['domestic-cleaning', 'office-commercial-cleaning', 'end-of-tenancy-cleaning', 'carpet-upholstery-cleaning', 'hard-floor-care'] },
  { slug: 'alton', name: 'Alton', postcode: 'GU34',
    blurb: 'Twenty-five minutes north. More business premises than anywhere else we cover.',
    local: 'Alton carries more business premises than anywhere else we cover, between the town centre, the industrial estates off Mill Lane and Omega Park, and the professional offices around the High Street. Contract office and commercial cleaning is the bulk of what Alton needs from us, with domestic work in Anstey, Wilsom and Holybourne alongside it.',
    services: ['office-commercial-cleaning', 'domestic-cleaning', 'end-of-tenancy-cleaning', 'hard-floor-care', 'carpet-upholstery-cleaning'] },
  { slug: 'four-marks', name: 'Four Marks and Medstead', postcode: 'GU34',
    blurb: 'On the Winchester road out of Alton, covered on our Alton rounds.',
    local: 'Four Marks and Medstead are largely modern detached and bungalow housing with a lot of retired and semi-retired households, which shapes what we get asked for: fortnightly domestic cleaning, one-off deep cleans before family visit, and a fair amount of carpet cleaning. We cover both on the same round as Alton.',
    services: ['domestic-cleaning', 'carpet-upholstery-cleaning', 'end-of-tenancy-cleaning'] },
  { slug: 'grayshott', name: 'Grayshott', postcode: 'GU26',
    blurb: 'Ten minutes east, over the Surrey border. Larger properties, so longer visits.',
    local: 'Grayshott is a short run from Bordon and the property is generally larger than average, so visits here tend to be longer and less frequent rather than short and weekly. It is also a town the bigger franchises skip over, which is why we picked it up.',
    services: ['domestic-cleaning', 'carpet-upholstery-cleaning', 'hard-floor-care', 'end-of-tenancy-cleaning'] },
  { slug: 'hindhead', name: 'Hindhead', postcode: 'GU26',
    blurb: 'Fifteen minutes east on the A3, through the tunnel or over the old road.',
    local: 'Hindhead sits high and wooded, which has two practical effects on cleaning: more mud carried in from the Devils Punch Bowl and the commons, and more damp and mould in the colder months on north-facing rooms. Both are things we plan for rather than discover.',
    services: ['domestic-cleaning', 'carpet-upholstery-cleaning', 'end-of-tenancy-cleaning'] },
  { slug: 'haslemere', name: 'Haslemere', postcode: 'GU27',
    blurb: 'Twenty minutes east. Commuter housing, period property and a busy rental market.',
    local: 'Haslemere is a station town, and the housing splits between substantial period property around the High Street and Shottermill and newer family housing towards Grayswood and Hammer. The age of the housing stock means upholstery and hard floor work come up here more than they do elsewhere.',
    services: ['domestic-cleaning', 'end-of-tenancy-cleaning', 'carpet-upholstery-cleaning', 'hard-floor-care'] },
  { slug: 'farnham', name: 'Farnham', postcode: 'GU9 and GU10',
    blurb: 'Twenty-five minutes north east. Offices, period homes and a busy lettings market.',
    local: 'Farnham is the largest town on our northern edge, and it has the business base to match: offices around Downing Street and East Street, and trading estates out towards Weydon Lane. It is the kind of town our commercial work is set up for, and the volume of period property makes it good ground for floor care. Domestic rounds run in Rowledge, Wrecclesham and Badshot Lea.',
    services: ['office-commercial-cleaning', 'domestic-cleaning', 'end-of-tenancy-cleaning', 'hard-floor-care', 'carpet-upholstery-cleaning'] },
  { slug: 'bentley', name: 'Bentley and Froyle', postcode: 'GU10',
    blurb: 'Between Alton and Farnham, on the A31. Covered on both rounds.',
    local: 'Bentley, Froyle and Binsted sit in the gap between Alton and Farnham, which is exactly the sort of place national franchises decide is not worth the drive. It is fifteen minutes from two of the rounds we already run, so it is worth ours. Mostly larger village property, mostly fortnightly.',
    services: ['domestic-cleaning', 'carpet-upholstery-cleaning', 'end-of-tenancy-cleaning'] }
];

// ------------------------------------------------------------------ guides
export const guides = [
  {
    slug: 'end-of-tenancy-cleaning-checklist',
    title: 'The end of tenancy cleaning checklist',
    metaTitle: 'End of tenancy cleaning checklist',
    metaDesc: 'The full room by room checklist we work to on an end of tenancy clean, free to print and use yourself.',
    lead: 'This is the actual sheet our teams tick off, room by room. Print it, work through it yourself, or hand it to whoever does.',
    body: [
      { h: 'Why a checklist settles deposit arguments', p: ['Deposit disputes are rarely about whether a property was clean. They are about whether anyone can prove it was. A check-out inventory is a photographic record taken by somebody paid to find fault; the only reliable answer to it is a record of your own.', 'So whether we do the clean or you do, work from a list and tick it as you go. If you do it yourself, photograph each finished room with a timestamp. If we do it, you get the completed sheet and the photographs from us.'] },
      { h: 'What gets missed most often', p: ['In our experience the five things that come back on a check-out report, almost every time, are the oven, the extractor filter, the washing machine drawer and seal, the inside of kitchen cupboards, and limescale on the shower screen and taps.', 'None of those are visible from the middle of the room, which is exactly why they get missed. Check them first rather than last.'] },
      { h: 'The order to work in', p: ['Top to bottom, back to front, wet rooms last. Start the oven soaking before anything else, because it needs the dwell time and it is the job most likely to run out of day.', 'Do all the dusting and the high level before any floor goes down, and do the floors as you leave each room for the last time. Kitchens and bathrooms take roughly half the total time between them, so do not leave them until the end.'] }
    ],
    checklist: 'end-of-tenancy-cleaning'
  },
  {
    slug: 'how-to-get-your-deposit-back',
    title: 'How to get your deposit back',
    metaTitle: 'How to get your tenancy deposit back',
    metaDesc: 'What a check-out inventory actually scores, what cleaning can and cannot fix, and how to challenge a deduction you think is wrong.',
    lead: 'What the check-out report actually scores, what cleaning can fix, and what to do when the agent proposes a deduction you think is unfair.',
    body: [
      { h: 'Find the check-in inventory before you do anything', p: ['Your deposit is judged against the check-in inventory, not against a perfect property. If the oven was already scorched on day one and the inventory says so, it is not your problem now.', 'Dig that document out before you start cleaning, read it, and note every item where the check-in condition was already less than perfect. That document is the reason most deductions get reduced.'] },
      { h: 'Fair wear and tear is not damage', p: ['Carpet thinning in a hallway after three years is wear. A burn in the same carpet is damage. Faded paint is wear, a picture hook is damage, a scuffed skirting is arguable and usually settles as wear.', 'Cleaning is different again. There is no such thing as fair wear and tear on cleanliness: the standard is that you return the property as clean as it was given to you, and that is a standard you can actually meet.'] },
      { h: 'Photograph everything, twice', p: ['Photograph every room the day you move in and the day you leave, with something in shot that dates them. Phone photos carry the date in the file, and that has settled more disputes than any amount of arguing.', 'Photograph the meter readings too, and the inside of the oven, and the state of the garden. They are the three most common late additions to a deduction list.'] },
      { h: 'If you disagree with the deduction', p: ['Deposits held in England and Wales must be protected in one of the government-approved schemes, and each of those schemes runs a free adjudication service. You do not need a solicitor and you should not accept a deduction just because it arrives on letterhead.', 'Reply in writing, item by item, referencing the check-in inventory and your photographs. Say what you accept and what you dispute, and say plainly that you will refer the disputed items to the scheme. A large share of deductions are reduced at that point.'] }
    ]
  },
  {
    slug: 'choosing-a-cleaner-you-can-trust',
    title: 'Choosing a cleaner you can trust',
    metaTitle: 'How to choose a cleaning company you can trust',
    metaDesc: 'The questions worth asking before you let a cleaning company into your home, and the answers that should worry you.',
    lead: 'You are handing someone a key to your house. These are the questions worth asking first, and the answers that should give you pause.',
    body: [
      { h: 'Ask who is actually coming', p: ['There is a real difference between a company that employs its cleaners and an agency that introduces you to a self-employed one. Neither is wrong, but they carry different insurance, different cover when someone is ill, and different recourse if something goes missing.', 'Ask directly: is the person coming to my house employed by you? Who covers the visit when they are on holiday? A company that cannot answer that in one sentence has not thought about it.'] },
      { h: 'Ask about vetting, and ask to see it', p: ['DBS checking should be standard for anyone entering homes. The useful follow-up is whether they will show you the certificate, because a company that vets properly is happy to prove it and a company that says it vets is often describing an intention.', 'Ask about references and about how long the team have been with them. Turnover is the single best predictor of whether you will get the same face each week.'] },
      { h: 'Ask what the insurance actually covers', p: ['Public liability covers damage to your property. Employers liability covers their staff. Treatment risk, which is the cover that pays when a cleaning process damages the thing being cleaned, is the one people forget and the one that matters for carpets and floors.', 'Ask for the figures and ask for the certificate. "We are fully insured" is not an answer, it is a slogan.'] },
      { h: 'Be careful of a price that is too good', p: ['Work out the hourly rate implied by the quote. If it is below what someone can legally be paid once employer national insurance, holiday pay, insurance, equipment and travel are covered, then somebody is being underpaid or the hours are about to be cut short.', 'The cheapest quote on a job is usually the one with the fewest hours in it, not the most efficient team.'] },
      { h: 'Get the spec in writing', p: ['A written task list is the only thing that prevents the slow drift where less gets done for the same money. It also protects the cleaner, because it stops the job quietly growing.', 'Any company that will not put the tasks in writing is telling you something.'] }
    ]
  },
  {
    slug: 'what-hot-water-extraction-does',
    title: 'What hot water extraction actually does to a carpet',
    metaTitle: 'Hot water extraction carpet cleaning explained',
    metaDesc: 'How hot water extraction, commonly called steam cleaning, differs from bonnet and dry compound methods, and when each is right.',
    lead: 'Steam cleaning, bonnet cleaning, dry compound. They are not the same job and they do not give the same result. Here is the difference in plain terms.',
    body: [
      { h: 'What is actually in a dirty carpet', p: ['Two things. Dry soil, which is grit and sand and fibre that has worked its way down into the pile, and oily soil, which is a thin film of body oils, cooking residue and traffic film sitting on the fibre tips.', 'Dry soil is what wears a carpet out, because it is abrasive and it cuts the fibre every time someone walks on it. Oily soil is what makes a carpet look grey, because it holds fine dust against the fibre and kills the way it reflects light.'] },
      { h: 'How hot water extraction works', p: ['Heated water carrying a cleaning solution is injected into the pile under pressure, which flushes the whole depth of the carpet rather than the top of it, and a powerful vacuum immediately pulls the water and the suspended soil back out.', 'The heat matters, the dwell time of the pre-spray matters more than most people think, and the number of dry passes at the end decides how quickly the carpet dries. A good operator spends most of the job on preparation and extraction, not on the wet pass.'] },
      { h: 'Why residue is the thing to ask about', p: ['If detergent is left behind in the pile, it stays sticky, and a sticky carpet attracts soil far faster than a clean one. That is the real reason a carpet sometimes looks worse a month after cleaning than it did before.', 'Proper rinsing, and where needed an acid rinse, is what prevents it. If a quote is cheap because the job is quick, rinsing is usually the step that got dropped.'] },
      { h: 'When the other methods are right', p: ['Bonnet cleaning, where an absorbent pad is spun over the surface, is fast and dries in minutes. It only cleans the top of the pile, so it is an interim maintenance method for commercial traffic lanes, not a deep clean.', 'Dry compound cleaning, where a damp absorbent powder is brushed in and vacuumed out, suits places that cannot be closed and carpets that must not be wetted. It is genuinely useful and genuinely less thorough.', 'For a domestic carpet that has not been cleaned in a year or more, hot water extraction is the one that will actually change how it looks.'] }
    ]
  },
  {
    slug: 'builders-clean-vs-sparkle-clean',
    title: 'Builders clean or sparkle clean, and why you need both',
    metaTitle: 'Builders clean vs sparkle clean explained',
    metaDesc: 'The difference between a builders clean and a sparkle clean on a construction handover, and what happens when a programme only allows for one.',
    lead: 'Two stages, two different jobs. Programmes that budget for one of them end up paying for both anyway, usually at short notice.',
    body: [
      { h: 'The builders clean', p: ['This is the rough stage. Debris out, protective film off, plaster and paint and adhesive and silicone off every surface, dust taken down from high level and from every ledge and pipe run, floors scraped and washed.', 'It happens once the wet trades are done and it exists so that the final trades can work in a clean space. It is heavy work and it needs people who are on site every day, not a domestic team.'] },
      { h: 'The sparkle clean', p: ['This is the presentation stage, and it happens after the final trades have finished, because they will put dust back no matter how careful they are. Second dust down throughout, glass polished, sanitary ware and kitchens to handover standard, ironmongery and trims detailed, floors finished and protected.', 'It is what the client sees on handover day, and it is what gets snagged if it is rushed.'] },
      { h: 'What goes wrong when you only book one', p: ['If you book one clean and it lands too early, the final trades dirty it and you pay again. If it lands too late, the final trades are working in dust and the finish suffers, which then gets snagged.', 'The cost of the second clean is small against the cost of a handover slipping a week on cleaning snags, which is a conversation we have had more than once.'] },
      { h: 'Certification, because sites ask', p: ['Anyone cleaning a live construction site needs CSCS and health and safety training as a minimum, correct PPE for the task, and IPAF certification if they are going up on powered access. Our operatives hold these and we send RAMS and cards over before we come on site.', 'It is worth checking with any contractor, because a cleaning crew that cannot produce cards will stop at the gate and your programme stops with them.'] }
    ]
  }
];

// ------------------------------------------------------------- reasons etc
export const reasons = [
  { title: 'You get the same people', body: 'Rounds are set up so the same cleaner covers the same houses. It is why the standard holds, and why nobody has to explain the job twice.', icon: 'people' },
  { title: 'DBS-checked, every one', body: 'Everyone who enters a customer property is DBS-checked before their first visit, and we will show you the certificate without being pushed.', icon: 'shield' },
  { title: 'The spec is written down', body: 'Domestic or commercial, you get a written task list. It stops the job quietly shrinking and it stops it quietly growing.', icon: 'list' },
  { title: 'We answer the same day', body: 'Every enquiry gets a reply the same working day. Quotes are free, itemised and in writing, and there is no call-out fee.', icon: 'clock' },
  { title: 'Local, and it shows', body: 'We are based in Bordon. Most of our work is within twenty minutes of the yard, which is why we can move a visit at short notice.', icon: 'pin' },
  { title: 'Certified for site work', body: 'CSCS cards, health and safety training and IPAF certification among the team, so construction and commercial sites are not a problem.', icon: 'badge' }
];

export const steps = [
  { n: 1, title: 'Tell us what you need', body: 'Two minutes on the form, a phone call, or a WhatsApp message with a couple of photographs. Whichever is easiest.' },
  { n: 2, title: 'We survey or we ask', body: 'Anything sizeable gets a free visit. Smaller jobs we can quote from a description and a few photographs, without wasting your morning.' },
  { n: 3, title: 'You get it in writing', body: 'An itemised quote with the tasks listed and the hours shown. No call-out fee, no deposit, nothing to sign before you are ready.' },
  { n: 4, title: 'We turn up and do it', body: 'On the agreed day, with our own equipment and products, working to the list. You get told if anything changes.' }
];

export const quoteFacts = [
  { h: 'Quotes are free and there is no call-out fee', p: 'We will come and look at the job, or quote from photographs if that is quicker for you. Either way there is nothing to pay for the quote and nothing to pay if you decide against it.' },
  { h: 'The quote is itemised, not a single number', p: 'You see the tasks and the hours behind the price. That way you can add or remove work knowingly, rather than negotiating blind against a headline figure.' },
  { h: 'No deposit on domestic work', p: 'Regular cleaning and one-off domestic jobs are invoiced after the visit. Large clearances and contract work are set out in the agreement before we start.' },
  { h: 'The price does not drift', p: 'If the scope changes we tell you before we do the work, not after. A quote holds for 30 days.' }
];

export const priceFactors = [
  { service: 'Regular domestic cleaning', factors: ['How many rooms and bathrooms, and how often you want us', 'Whether anyone is home, and how the key is handled', 'Extras like ironing, oven or interior windows', 'Pets, which add time to floors and upholstery'] },
  { service: 'End of tenancy', factors: ['Bedrooms, bathrooms and whether the property is empty', 'The state of the oven, which is the single biggest swing', 'Whether carpets need hot water extraction as well', 'Access, parking and how many floors'] },
  { service: 'Office and commercial', factors: ['Floor area and the mix of areas within it', 'Frequency, and which tasks are daily against periodic', 'Hours of access, and whether the work is out of hours', 'Consumables, and whether we supply them'] },
  { service: 'Carpet and upholstery', factors: ['Number and size of rooms, and the stairs', 'Fibre type, because wool is slower than synthetic', 'How much furniture needs moving', 'Pre-treatment needed on traffic lanes and spots'] },
  { service: 'Builders and sparkle cleans', factors: ['Plot size and number of units', 'Whether it is one stage or two', 'High level work and whether access equipment is needed', 'Programme, and whether weekend working is required'] },
  { service: 'Environmental cleans', factors: ['Volume to clear and how much is sorted first', 'Waste type and disposal route', 'How many days the property needs', 'Whether odour treatment or sanitising is required'] }
];

export const faqs = [
  { q: 'Which areas do you cover?', a: 'We are based in Bordon and work across East Hampshire and the Surrey border: Whitehill, Lindford, Headley, Liphook, Liss, Petersfield, Alton, Four Marks, Grayshott, Hindhead, Haslemere, Farnham and the villages between them. If you are just outside, ring and ask, because it often still works.' },
  { q: 'Are you insured?', a: 'Yes. We hold public liability and employers liability cover, and we will send the certificate across with the quote. Ask for the figures and you will get them.' },
  { q: 'Are your staff DBS-checked?', a: 'Yes, every one of them, before their first customer visit. We will show you the certificate.' },
  { q: 'Do you bring your own products and equipment?', a: 'Yes as standard. If you would rather we used your products, for an allergy or a particular surface, tell us and we will.' },
  { q: 'How do I pay?', a: 'Bank transfer on invoice for domestic work, monthly invoicing for contracts. No deposit on domestic jobs.' },
  { q: 'What if I am not happy with a clean?', a: 'Tell us within 48 hours and we come back and put it right at no charge. That is the whole of the policy and there is nothing else in the small print.' },
  { q: 'Can you hold a key?', a: 'Yes, and most of our regular customers prefer it. Key handling is written into the agreement, keys are held coded rather than addressed, and you can take yours back whenever you want.' },
  { q: 'How much notice do you need?', a: 'For regular domestic work we can usually start within a week. End of tenancy and one-off jobs often go in sooner, and around Bordon and Whitehill we can sometimes do next day. Large commercial contracts need a survey first.' },
  { q: 'Do you work weekends?', a: 'Saturdays yes, Sundays by arrangement. Commercial and site work outside hours is normal for us.' },
  { q: 'Do you charge a call-out fee?', a: 'No. Quotes are free and there is no minimum charge for coming to look.' }
];
