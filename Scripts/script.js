/* ============================================================
   DATA — PRODUCTS
   ============================================================ */
const PRODUCTS = [
  /* --- FORBIDDEN ARTIFACTS --- */
  {
    id: 1, category: 'forbidden',
    name: 'Ghost Protocol Pistol — M1911 Replica',
    desc: 'A flawless prop-grade replica of the legendary M1911 service pistol. Cold-cast resin with realistic weight and finish. Used as film prop and collector display piece. Ships in velvet-lined case.',
    price: 1299, oldPrice: 1799, rating: 4.5, reviews: 23,
    img: 'images/01_HangHoa/súng pistol.jpg',
    badges: ['sale'],
    tags: ['forbidden','weapons','replica','prop'],
    stock: 3, sku: 'DW-FA-001',
    specs: ['Material: Cold-cast resin & metal alloy', 'Weight: 1.1 kg', 'Length: 22 cm', 'Finish: Matte black oxide', 'Includes: Display stand & COA']
  },
  {
    id: 2, category: 'forbidden',
    name: 'Fallen Hunter — Sniper Rifle Prop',
    desc: 'Full-scale prop replica of a classic bolt-action sniper rifle. Used in multiple film and theatrical productions. Signed by armorer. Structural resin core. Absolutely non-functional display piece.',
    price: 2499, oldPrice: null, rating: 4.8, reviews: 11,
    img: 'images/01_HangHoa/súng trường.jpg',
    badges: ['rare'],
    tags: ['forbidden','weapons','prop','collector'],
    stock: 1, sku: 'DW-FA-002',
    specs: ['Length: 115 cm', 'Weight: 3.2 kg', 'Material: High-density resin', 'Finish: Military matte', 'Signed by Hollywood armorer']
  },
  {
    id: 3, category: 'forbidden',
    name: 'Ivory Tusk Carved Skull — Resin Replica',
    desc: 'Authentic-appearing carved skull sculpture modeled after forbidden ivory artifacts. 100% resin reproduction. Conservation-approved decorative piece. Comes with certificate of replica origin.',
    price: 799, oldPrice: 999, rating: 4.2, reviews: 34,
    img: 'images/01_HangHoa/ngà voi.jpg',
    badges: ['sale'],
    tags: ['forbidden','sculpture','replica'],
    stock: 7, sku: 'DW-FA-003',
    specs: ['Material: Resin & bone powder composite', 'Size: 18×12×10 cm', 'Weight: 0.6 kg', 'Color: Aged ivory', 'Handcarved details']
  },
  {
    id: 4, category: 'forbidden',
    name: 'Black Widow — Synthetic Opioid Prop Kit',
    desc: 'Theatrical prop kit featuring inert pill replicas and packaging used in crime drama productions. Contains zero active substances. Used for film, photography, and anti-drug awareness campaigns.',
    price: 349, oldPrice: null, rating: 3.9, reviews: 8,
    img: 'images/01_HangHoa/ma túy tổng hợp.jpg',
    badges: ['new'],
    tags: ['forbidden','prop','theatrical'],
    stock: 15, sku: 'DW-FA-004',
    specs: ['Contents: 50 inert prop pills', 'Material: Food-safe resin', 'Packaging: Replica drama-grade', 'Usage: Film/photography props', 'Zero active substances']
  },
  {
    id: 5, category: 'forbidden',
    name: 'Phantom Compound — Synthetic Prop Set',
    desc: 'Multi-component theatrical prop kit featuring powders, capsules and vials for crime scene recreations and educational displays. All materials are inert. Comes in a secure prop case.',
    price: 449, oldPrice: 549, rating: 4.1, reviews: 16,
    img: 'images/01_HangHoa/ma túy hàng the.jpg',
    badges: ['sale'],
    tags: ['forbidden','prop','theatrical'],
    stock: 9, sku: 'DW-FA-005',
    specs: ['Includes: 3 vials, 20 capsules, 1 powder kit', 'Material: Inert theatrical compounds', 'Case: Foam-lined aluminum', 'Certificate: Film prop authentication']
  },
  {
    id: 6, category: 'forbidden',
    name: 'Rhino Horn Relic — Carved Resin Artifact',
    desc: 'Museum-quality reproduction of a ceremonial rhino horn artifact. Created in collaboration with wildlife conservation organizations. Proceeds support anti-poaching initiatives. 100% synthetic materials.',
    price: 599, oldPrice: 699, rating: 4.6, reviews: 42,
    img: 'images/01_HangHoa/sừng tê giác.jpg',
    badges: ['sale'],
    tags: ['forbidden','artifact','replica','conservation'],
    stock: 12, sku: 'DW-FA-006',
    specs: ['Material: Synthetic polymer composite', 'Size: 35×8×6 cm', 'Weight: 0.4 kg', 'Finish: Aged natural texture', 'Conservation certificate included']
  },

  /* --- CURSED PRODUCTS --- */
  {
    id: 7, category: 'cursed',
    name: 'Annabella — The Damnation Doll',
    desc: 'Inspired by infamous paranormal case files, this haunted-aesthetic porcelain doll comes pre-aged and distressed. Includes handwritten "containment instructions" and a mock paranormal investigator\'s report.',
    price: 1899, oldPrice: 2299, rating: 4.9, reviews: 67,
    img: 'images/02_SanPhamBiNguyen/búp bê anabella.jpg',
    badges: ['hot','sale'],
    tags: ['cursed','haunted','doll','paranormal'],
    stock: 2, sku: 'DW-CP-001',
    specs: ['Height: 45 cm', 'Material: Porcelain & cloth', 'Finish: Pre-distressed, aged', 'Includes: Containment box & investigator report', 'Hand-numbered edition']
  },
  {
    id: 8, category: 'cursed',
    name: 'Kumanthong — Child Spirit Effigy',
    desc: 'Traditional Thai supernatural collectible — the Kumanthong child spirit figure. Hand-crafted by artisans in Chiang Mai. Gold-leaf decorated. Includes ritual instruction scroll and incense.',
    price: 1299, oldPrice: null, rating: 4.7, reviews: 29,
    img: 'images/02_SanPhamBiNguyen/búp bê kumanthong.jpg',
    badges: ['rare'],
    tags: ['cursed','spirit','ritual','thai'],
    stock: 5, sku: 'DW-CP-002',
    specs: ['Height: 30 cm', 'Material: Sacred wood, gold leaf', 'Origin: Chiang Mai artisan', 'Includes: Ritual scroll & incense set', 'Blessed by monk']
  },
  {
    id: 9, category: 'cursed',
    name: 'The Crying Boy — Cursed Canvas Print',
    desc: 'Reproduction of Giovanni Bragolin\'s infamous 1950s painting rumored to bring fires wherever it hangs. Museum-quality canvas giclee print. Signed reproduction. Display at your own risk.',
    price: 899, oldPrice: 1099, rating: 4.4, reviews: 51,
    img: 'images/02_SanPhamBiNguyen/bức tranh The crying boy.jpg',
    badges: ['sale'],
    tags: ['cursed','painting','art','haunted'],
    stock: 8, sku: 'DW-CP-003',
    specs: ['Size: 60×80 cm', 'Medium: Canvas giclee print', 'Frame: Black aged wood', 'Reproduction: Signed & numbered', '⚠ Warning: Paranormal disclaimer included']
  },
  {
    id: 10, category: 'cursed',
    name: 'The Japanese Opal Curse Box',
    desc: 'Antique-style lacquered Japanese puzzle box containing a "cursed opal" gem replica and hand-calligraphed curse scroll. Based on traditional Japanese curse lore. Intricate mechanical puzzle mechanism.',
    price: 1599, oldPrice: null, rating: 4.8, reviews: 38,
    img: 'images/02_SanPhamBiNguyen/bùa nguyền rủa Nhật.jpg',
    badges: ['new'],
    tags: ['cursed','japanese','box','opal'],
    stock: 4, sku: 'DW-CP-004',
    specs: ['Box Size: 15×10×8 cm', 'Material: Lacquered hardwood', 'Mechanism: 12-step puzzle lock', 'Contents: Opal replica & scroll', 'Hand-calligraphed curse inscription']
  },
  {
    id: 11, category: 'cursed',
    name: 'The Lover\'s Spectre — Spirit Board Set',
    desc: 'Premium hand-carved walnut spirit communication board. Planchette with embedded crystal. Comes with beginner\'s guide to spirit communication and three protective amulets. For mature collectors only.',
    price: 2199, oldPrice: 2699, rating: 4.6, reviews: 44,
    img: 'images/02_SanPhamBiNguyen/ngải yêu.jpg',
    badges: ['sale'],
    tags: ['cursed','spirit','paranormal','ritual'],
    stock: 3, sku: 'DW-CP-005',
    specs: ['Board: 45×30 cm walnut', 'Planchette: Crystal-inlaid hardwood', 'Finish: Hand-engraved lettering', 'Includes: 3 amulets & guide book', 'Age 18+ only']
  },
  {
    id: 12, category: 'cursed',
    name: 'Hope Diamond Curse Replica',
    desc: 'Dazzling 45.52-carat simulated blue diamond replica of the world\'s most infamous cursed gemstone. Set in sterling silver display mount. Accompanied by complete curse history documentation.',
    price: 499, oldPrice: 699, rating: 4.5, reviews: 92,
    img: 'images/02_SanPhamBiNguyen/viên kim cương xanh Hope.jpg',
    badges: ['hot','sale'],
    tags: ['cursed','diamond','replica','gem'],
    stock: 20, sku: 'DW-CP-006',
    specs: ['Stone: Synthetic blue zirconia', 'Size: 25×18 mm (simulated 45.52 ct)', 'Setting: Sterling silver 925', 'Includes: Display case & curse documentation', 'Certificate of replica authenticity']
  },

  /* --- LUXURY & TECHNOLOGY --- */
  {
    id: 13, category: 'luxury',
    name: 'Patek Philippe Stolen Shadow — Watch Replica',
    desc: 'Museum-quality reproduction of the most expensive stolen Patek Philippe watch ever recovered. Swiss quartz movement. Sapphire crystal. Stainless case. The story of its theft included.',
    price: 3299, oldPrice: 3999, rating: 4.9, reviews: 56,
    img: 'images/03_HangXaXiCongNghe/đồng hồ patek philipe bị đánh cắp.jpg',
    badges: ['hot','sale'],
    tags: ['luxury','watch','replica','stolen'],
    stock: 2, sku: 'DW-LT-001',
    specs: ['Movement: Swiss quartz', 'Case: 316L stainless steel', 'Crystal: Sapphire anti-reflective', 'Strap: Genuine alligator leather', 'Water-resistant: 30m']
  },
  {
    id: 14, category: 'luxury',
    name: 'Mobiado Grand — Stolen Luxury Phone Replica',
    desc: 'Hand-assembled luxury phone replica modeled after the iconic Mobiado Grand 350 Alio. Sapphire crystal display. Titanium frame. CNC-machined precision. The ultimate dark luxury communication device.',
    price: 5999, oldPrice: null, rating: 4.7, reviews: 18,
    img: 'images/03_HangXaXiCongNghe/điện thoại mobiado.jpg',
    badges: ['rare'],
    tags: ['luxury','phone','technology','stolen'],
    stock: 1, sku: 'DW-LT-002',
    specs: ['Frame: Grade 5 titanium', 'Display: Sapphire crystal 3.5"', 'Finish: Hand-polished', 'Weight: 185g', 'OS: Android 14 (custom)']
  },
  {
    id: 15, category: 'luxury',
    name: 'Sony PlayStation 5 — Black Market Edition',
    desc: 'Exclusive underground-modified PS5 with custom black matte finish, jailbroken firmware, and 4TB SSD upgrade. 15 pre-loaded exclusive titles. Ships in anonymous reinforced packaging.',
    price: 1499, oldPrice: 1799, rating: 4.6, reviews: 134,
    img: 'images/03_HangXaXiCongNghe/máy chơi game PS5.jpg',
    badges: ['hot','sale'],
    tags: ['luxury','gaming','technology','modified'],
    stock: 6, sku: 'DW-LT-003',
    specs: ['Storage: 4TB custom SSD', 'Finish: Matte black custom wrap', 'Firmware: Custom (jailbroken)', 'Pre-loaded: 15 exclusive titles', 'Includes: 2 DualSense controllers']
  },
  {
    id: 16, category: 'luxury',
    name: 'Leica Q3 — The Heist Edition Camera',
    desc: 'The world\'s most coveted camera acquired through illicit channels. Full-frame 60MP sensor. 28mm Summilux f/1.7 ASPH lens. The complete package including stolen documentation and original receipt.',
    price: 7499, oldPrice: 8999, rating: 4.9, reviews: 22,
    img: 'images/03_HangXaXiCongNghe/máy ảnh đắt nhất tg.jpg',
    badges: ['rare','sale'],
    tags: ['luxury','camera','technology','stolen'],
    stock: 1, sku: 'DW-LT-004',
    specs: ['Sensor: 60MP full-frame CMOS', 'Lens: 28mm Summilux f/1.7 ASPH', 'Display: 3" TFT touchscreen', 'Video: 8K RAW internal', 'Includes: Original stolen receipt']
  },
  {
    id: 17, category: 'luxury',
    name: 'Oura Ring Gen 3 — Phantom Edition',
    desc: 'Exclusive Oura Ring in custom matte black phantom finish. Health tracking ring with underground biometric data rerouting. All data stored on encrypted private servers.',
    price: 699, oldPrice: 849, rating: 4.4, reviews: 87,
    img: 'images/03_HangXaXiCongNghe/ouraring.jpg',
    badges: ['sale'],
    tags: ['luxury','wearable','technology'],
    stock: 14, sku: 'DW-LT-005',
    specs: ['Material: Titanium matte black', 'Tracking: Sleep, HRV, temperature', 'Battery: 7 days', 'Water-resistant: 100m', 'Private encrypted data server']
  },
  {
    id: 18, category: 'luxury',
    name: 'Shadow Sight — Smart Glasses AR',
    desc: 'Military-grade augmented reality smart glasses with night vision, face recognition, and encrypted communications. Acquired from a classified government technology program. Limited units available.',
    price: 4299, oldPrice: null, rating: 4.8, reviews: 31,
    img: 'images/03_HangXaXiCongNghe/kính thông minh.jpg',
    badges: ['rare','new'],
    tags: ['luxury','technology','military','AR'],
    stock: 3, sku: 'DW-LT-006',
    specs: ['Display: Dual 1080p waveguide', 'Vision: Night vision + thermal', 'AI: Face recognition (offline)', 'Battery: 8 hours continuous', 'Origin: Classified program surplus']
  },
  {
    id: 19, category: 'luxury',
    name: 'Phantom Veil — Enhanced AR Tactical Glasses',
    desc: 'Second generation tactical smart glasses from the same classified program. Improved field of view, extended battery life, and secure mesh networking capability for covert team operations.',
    price: 3799, oldPrice: 4199, rating: 4.6, reviews: 19,
    img: 'images/03_HangXaXiCongNghe/kính thông minh.jpg',
    badges: ['sale'],
    tags: ['luxury','technology','tactical','AR'],
    stock: 2, sku: 'DW-LT-007',
    specs: ['Display: 180° field of view', 'Network: Encrypted mesh', 'Battery: 12 hours', 'Weight: 68g', 'Military-spec durability']
  },

  /* --- DARK ART & MYTHICAL --- */
  {
    id: 20, category: 'dark-art',
    name: 'Mona Lisa — The Underground Acquisition',
    desc: 'Museum-quality giclee reproduction of da Vinci\'s stolen masterpiece. Printed on aged linen canvas using period-accurate pigments. Includes "acquisition paperwork" from our fictional dark network. Framed in hand-carved walnut.',
    price: 12999, oldPrice: 15999, rating: 5.0, reviews: 44,
    img: 'images/04_NgheThuatCoVat/tranh nàng Mona Lisa.jpg',
    badges: ['rare','sale'],
    tags: ['dark-art','painting','artifact','masterpiece'],
    stock: 2, sku: 'DW-DA-001',
    specs: ['Size: 77×53 cm (original scale)', 'Medium: Giclee on aged linen canvas', 'Frame: Hand-carved walnut', 'Pigments: Period-accurate reproduction', 'COA: Fictional dark provenance certificate']
  },
  {
    id: 21, category: 'dark-art',
    name: 'Salvator Mundi — Shadow Edition',
    desc: 'The $450M painting that vanished from public record. Our shadow edition is an exact reproduction on poplar panel, the same support as the original. Oil paint, hand-laid. The last supper\'s cosmic Christ.',
    price: 24999, oldPrice: null, rating: 4.9, reviews: 12,
    img: 'images/04_NgheThuatCoVat/tranh sơn dầu salvator mundi.jpg',
    badges: ['rare'],
    tags: ['dark-art','painting','artifact','masterpiece'],
    stock: 1, sku: 'DW-DA-002',
    specs: ['Size: 65.7×45.7 cm (original scale)', 'Medium: Oil on poplar panel', 'Technique: Hand-laid, period-accurate', 'Age: Artificially distressed surface', 'Provenance: Fictional underground certification']
  },
  {
    id: 22, category: 'dark-art',
    name: 'Hope Diamond — The 45ct Dark Gem',
    desc: 'The world\'s most cursed gemstone. 45.52 carats of dark blue misfortune. Every owner has met a terrible fate. This flawless synthetic replica captures every facet of the original. Comes with complete curse history.',
    price: 499999, oldPrice: null, rating: 4.8, reviews: 7,
    img: 'images/02_SanPhamBiNguyen/viên kim cương xanh Hope.jpg',
    badges: ['rare'],
    tags: ['dark-art','gem','cursed','mythical'],
    stock: 1, sku: 'DW-DA-003',
    specs: ['Stone: Synthetic blue lab diamond', 'Size: 25.6×21.78mm', 'Cut: Cushion antique with faceted girdle', 'Setting: Platinum with 16 white diamonds', 'Documentation: Complete curse history']
  },
  {
    id: 23, category: 'dark-art',
    name: 'Unicorn Skull — Mythical Resin Relic',
    desc: 'Beautifully detailed sculpt of a mythical unicorn skull with intact spiral horn. Hand-painted with gold leaf and aged patina. Museum-quality collector\'s piece for the mythological enthusiast.',
    price: 1899, oldPrice: 2199, rating: 4.7, reviews: 63,
    img: 'images/04_NgheThuatCoVat/kì lân.jpg',
    badges: ['sale'],
    tags: ['dark-art','mythical','skull','sculpture'],
    stock: 8, sku: 'DW-DA-004',
    specs: ['Size: 45×18×20 cm', 'Material: High-density resin', 'Finish: Hand-painted + gold leaf', 'Horn length: 30 cm', 'Display base included']
  },
  {
    id: 24, category: 'dark-art',
    name: 'Ancient Vase — Qing Dynasty Replica',
    desc: 'Exact museum-quality reproduction of a rare Qing Dynasty period porcelain vase. Hand-painted cobalt blue on white glaze using traditional methods. Aged to perfection. Fake provenance documents included for atmosphere.',
    price: 3499, oldPrice: 3999, rating: 4.5, reviews: 29,
    img: 'images/04_NgheThuatCoVat/bình sứ thời Vua Càng Long.jpg',
    badges: ['sale'],
    tags: ['dark-art','artifact','antique','chinese'],
    stock: 5, sku: 'DW-DA-005',
    specs: ['Height: 42 cm', 'Material: High-fire porcelain', 'Glaze: Cobalt blue underglaze', 'Method: Traditional hand-painting', 'Age distressing: Authentic patina simulation']
  },
  {
    id: 25, category: 'dark-art',
    name: 'The Lost Manuscript — Newton\'s Dark Science',
    desc: 'Reproduced facsimile of a fictional "lost" Newton alchemical manuscript. Hand-aged parchment pages, period-accurate iron gall ink script, hidden code passages. 48 pages in leather-bound case.',
    price: 2799, oldPrice: null, rating: 4.8, reviews: 37,
    img: 'images/04_NgheThuatCoVat/bản thảo khoa học.jpg',
    badges: ['rare','new'],
    tags: ['dark-art','artifact','manuscript','alchemy'],
    stock: 6, sku: 'DW-DA-006',
    specs: ['Pages: 48 hand-aged parchment', 'Ink: Iron gall reproduction ink', 'Cover: Genuine leather hand-stitched', 'Size: 25×18 cm', 'Includes: UV decoder lens']
  },
  {
    id: 26, category: 'dark-art',
    name: 'The Ancient One — Taxidermy Homunculus',
    desc: 'Victorian-era style "homunculus" curiosity cabinet piece. Expertly crafted creature combining multiple ethically-sourced animal remains. Museum of curiosities quality. For the serious collector of the macabre.',
    price: 5999, oldPrice: null, rating: 4.6, reviews: 21,
    img: 'images/04_NgheThuatCoVat/người cá.jpg',
    badges: ['rare'],
    tags: ['dark-art','taxidermy','curiosity','victorian'],
    stock: 1, sku: 'DW-DA-007',
    specs: ['Height: 35 cm', 'Base: Mahogany display case', 'Components: Ethically sourced materials', 'Style: Victorian curiosity cabinet', 'Accompanied by fictional discovery documentation']
  },
  {
    id: 27, category: 'dark-art',
    name: 'Lover\'s Lament — Dark Romantic Sculpture',
    desc: 'Haunting dark sculpture depicting intertwined spectral lovers. Cast in cold-process black resin with pearlescent internal lighting. Limited edition of 50 worldwide. Certificate of dark artistry included.',
    price: 3999, oldPrice: 4799, rating: 4.9, reviews: 48,
    img: 'images/02_SanPhamBiNguyen/ngải yêu.jpg',
    badges: ['sale'],
    tags: ['dark-art','sculpture','art','limited'],
    stock: 3, sku: 'DW-DA-008',
    specs: ['Height: 55 cm', 'Material: Black cold-process resin', 'Lighting: Built-in pearlescent LED', 'Edition: 1 of 50 worldwide', 'Signed by sculptor']
  }
];

/* ============================================================
   DATA — BLOG POSTS
   ============================================================ */
const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Curse of the Hope Diamond: Every Owner\'s Tragic Fate',
    category: 'Cursed Objects',
    date: 'November 15, 2024',
    author: 'Shadow Archivist',
    readTime: '8 min',
    img: 'images/02_SanPhamBiNguyen/viên kim cương xanh Hope.jpg',
    excerpt: 'For centuries, the 45.52-carat blue Hope Diamond has left a trail of death, madness, and ruin behind every hand that possessed it. From King Louis XIV to Evalyn Walsh McLean, we document the cursed legacy of history\'s most infamous gemstone.',
    body: `<p>The Hope Diamond. Even its name carries the cruel irony of fate — a stone named "Hope" that has brought nothing but despair to those who dared claim ownership of its extraordinary beauty.</p>
    <h3>Origins of the Curse</h3>
    <p>The story begins in India, where a traveling merchant named Jean-Baptiste Tavernier allegedly stole the stone from the eye of a sacred Hindu statue. The priests, outraged, placed a curse upon the thief and all who would possess the gem thereafter. Tavernier returned to France, sold the stone to King Louis XIV, and was later said to have been torn apart by wild dogs in Russia.</p>
    <blockquote>"Whoever owns this stone shall be consumed by misfortune, and their house shall fall to ruin within a generation." — Attributed to Hindu temple priests, circa 1653</blockquote>
    <h3>The Royal Deaths</h3>
    <p>Louis XIV had the stone recut into the French Blue. His great-great-great-grandson, Louis XVI, inherited it — and was guillotined in 1793. Marie Antoinette, who also wore the gem, met the same fate. The gem then disappeared, only to resurface decades later in London, recut again into the Hope Diamond.</p>
    <h3>The American Era</h3>
    <p>Evalyn Walsh McLean purchased the stone in 1911. She wore it like a talisman — but misfortune followed: her son died in a car accident at nine years old, her daughter died of a drug overdose, her husband went insane and died in an asylum, and the family fortune was lost.</p>
    <p>She passed away in 1947. Harry Winston purchased the estate's jewelry collection and donated the Hope Diamond to the Smithsonian in 1958 — by mail, in a plain brown package.</p>`
  },
  {
    id: 2,
    title: 'Annabelle: The Doll That Haunted a Generation of Collectors',
    category: 'Paranormal',
    date: 'November 10, 2024',
    author: 'Ed Warren Archives',
    readTime: '6 min',
    img: 'images/02_SanPhamBiNguyen/búp bê anabella.jpg',
    excerpt: 'The original Annabelle doll sits locked in a glass case at the Warren Occult Museum — a Raggedy Ann doll possessed, according to paranormal investigators Ed and Lorraine Warren, by a demonic entity that masqueraded as a deceased child.',
    body: `<p>In 1970, a nursing student received what appeared to be an ordinary Raggedy Ann doll as a gift from her mother. What followed over the next months would become one of the most documented paranormal cases in American history.</p>
    <h3>Signs of Possession</h3>
    <p>The doll would move on its own. Roommates would find it in different positions, different rooms. Notes appeared written in childlike handwriting on parchment that wasn't in the apartment. Blood appeared on the doll's hands and chest.</p>
    <blockquote>"The doll is not haunted. It is not possessed by a ghost. It is demonically infested — and it was using the girls as a conduit." — Ed Warren, 1970</blockquote>
    <h3>The Warren Investigation</h3>
    <p>Ed and Lorraine Warren were brought in to investigate. After extensive sessions, they concluded a malevolent demonic entity had attached itself to the doll and was seeking to possess one of the students. They removed the doll and placed it in a specially blessed case.</p>
    <p>A priest who scoffed at the warnings was allegedly run off the road in a nearly fatal accident shortly after leaving the museum. The sign on the case reads: "Warning: Positively Do Not Open."</p>`
  },
  {
    id: 3,
    title: 'The Mona Lisa Heist: How the World\'s Most Famous Painting Was Stolen',
    category: 'Stolen Art',
    date: 'November 5, 2024',
    author: 'Dark History Bureau',
    readTime: '10 min',
    img: 'images/04_NgheThuatCoVat/tranh nàng Mona Lisa.jpg',
    excerpt: 'On the morning of August 22, 1911, visitors to the Louvre noticed something missing from the wall. The Mona Lisa had vanished. The theft that shocked the world remained unsolved for two years — and the story of its disappearance is stranger than fiction.',
    body: `<p>On a Monday morning in August 1911, the Louvre was closed to the public for cleaning. When it reopened the following day, visitors who passed through the Salon Carré noticed a conspicuously blank space on the wall where Leonardo da Vinci's masterpiece had hung for years.</p>
    <h3>The Theft</h3>
    <p>Vincenzo Peruggia, a former Louvre employee, had hidden inside a broom closet overnight. In the morning, he walked out with the painting under his smock. The Mona Lisa's fame at the time was modest — it was the theft itself that made her the most famous painting in the world.</p>
    <blockquote>"For two years, the empty space where the Mona Lisa once hung attracted more visitors than the painting itself had." — Art historian account, 1913</blockquote>
    <h3>The Recovery</h3>
    <p>Peruggia kept the painting in his apartment in Paris for two years, then transported it to Florence. He attempted to sell it to an art dealer — who promptly called the police. The painting was recovered and returned to the Louvre in 1914, where it hangs to this day — behind bulletproof glass.</p>
    <p>The irony is perfect: the theft was what immortalized both the painting and its mysterious subject. Had it never been stolen, the Mona Lisa might have remained merely one of da Vinci's many masterworks.</p>`
  },
  {
    id: 4,
    title: 'Kumanthong: Thailand\'s Most Feared Supernatural Collectible',
    category: 'Dark History',
    date: 'October 28, 2024',
    author: 'Southeast Asia Dark Studies',
    readTime: '7 min',
    img: 'images/02_SanPhamBiNguyen/búp bê kumanthong.jpg',
    excerpt: 'In Thai supernatural tradition, the Kumanthong — literally "Golden Boy" — is an effigy housing the spirit of a deceased fetus. Practitioners claim these golden child spirits bring wealth, protection, and luck to their owners. But the bargain comes at a terrible price.',
    body: `<p>The Kumanthong is one of Southeast Asia's most fascinating and disturbing supernatural traditions. The name translates to "Golden Boy," and these small gilded effigies are believed by practitioners of Thai folk magic to house the spirit of a deceased child.</p>
    <h3>Origins</h3>
    <p>The practice appears in Thai literature as early as the Ayutthaya period. The literary hero Khun Chang Khun Phaen is said to have created a Kumanthong from the body of his unborn son to serve as a protective spirit guardian.</p>
    <blockquote>"A Kumanthong properly kept and respected is worth more than any army. It sees all, knows all, and protects its master absolutely." — Thai folk magic practitioner</blockquote>
    <h3>Modern Practice</h3>
    <p>Contemporary Kumanthong are created by artisans — no actual human remains involved — and blessed by monks or spiritual practitioners. Owners are expected to provide daily offerings of food, water, and toys. In return, the spirit is said to bring luck, warn of danger, and protect the household.</p>
    <p>Many Thai celebrities and business people openly keep Kumanthong. The superstition is deeply embedded in mainstream Thai culture, sitting at the intersection of Buddhism, animism, and older spirit traditions.</p>`
  },
  {
    id: 5,
    title: 'The Salvator Mundi: A $450 Million Painting That Disappeared Again',
    category: 'Stolen Art',
    date: 'October 20, 2024',
    author: 'Art Crime Network',
    readTime: '9 min',
    img: 'images/04_NgheThuatCoVat/tranh sơn dầu salvator mundi.jpg',
    excerpt: 'In November 2017, da Vinci\'s Salvator Mundi sold at Christie\'s for $450.3 million — the most expensive painting ever sold. Then it vanished. No exhibition has displayed it since. Where is the world\'s most expensive painting?',
    body: `<p>The Salvator Mundi depicts Christ as "Savior of the World," holding a crystal orb and raising his right hand in blessing. For centuries, it was believed to be a lost Leonardo. When it was rediscovered — hidden under layers of overpaint and misattributed to a lesser artist — the art world erupted.</p>
    <h3>The Christie's Record</h3>
    <p>On November 15, 2017, Christie's New York auctioned the work. After nearly twenty minutes of bidding, the hammer fell at $400 million. With buyer's premium: $450,312,500. The room went silent, then erupted.</p>
    <blockquote>"This is the last da Vinci. The male Mona Lisa. There will never be another." — Christie's auctioneer, 2017</blockquote>
    <h3>The Disappearance</h3>
    <p>The buyer was identified as a Saudi prince acting on behalf of Crown Prince Mohammed bin Salman. The Louvre Abu Dhabi announced it would display the painting. Then — nothing. The exhibition was cancelled without explanation. No one has seen it since.</p>
    <p>Theories abound: it's on a yacht. It's in a Saudi palace. It's been traded privately. Some art historians now question whether it's even a true Leonardo at all — which would make its disappearance feel like the final irony of a painting that played tricks on experts for three centuries.</p>`
  },
  {
    id: 6,
    title: 'The Black Market Luxury Watch Trade: Inside the Shadow Horological Underground',
    category: 'Luxury Crime',
    date: 'October 12, 2024',
    author: 'Underground Finance Desk',
    readTime: '8 min',
    img: 'images/03_HangXaXiCongNghe/đồng hồ patek philipe bị đánh cắp.jpg',
    excerpt: 'Luxury timepieces worth millions change hands in the shadows every year. From museum heists to insurance scams to counterfeit networks so sophisticated they fool experts — the dark world of luxury watches is as complex as the movements inside them.',
    body: `<p>In the world of high horology, a Patek Philippe doesn't just tell time — it stores value, signals status, and in certain underground networks, functions as anonymous currency. And where there is concentrated, portable value, crime inevitably follows.</p>
    <h3>The Museum Heists</h3>
    <p>In 2013, thieves broke into the Patek Philippe Museum in Geneva and stole 240 watches in what investigators called a "precision operation." The theft was organized by a criminal network spanning five countries. Only a fraction of the watches were recovered.</p>
    <blockquote>"Watches are perfect criminal assets. High value, small size, no serial number visible from outside, and legitimate-looking markets for resale." — Interpol Asset Recovery Division</blockquote>
    <h3>The Counterfeit Ecosystem</h3>
    <p>At the high end of counterfeiting, "super-fakes" are watches that fool even professional watchmakers without disassembly. Produced in underground workshops in China and Eastern Europe, they use genuine Swiss components mixed with high-quality copies. The best can cost \$5,000 to produce and sell for \$50,000.</p>`
  }
];

/* ============================================================
   DATA — REVIEWS
   ============================================================ */
const REVIEWS_DATA = [
  {
    productId: 7,
    text: "The Annabella doll arrived in a sealed black box with wax markings. My cat has refused to enter the room since. 10/10 atmospheric experience.",
    reviewer: 'DarkCollector_X', initial: 'D', date: 'Nov 12, 2024', stars: 5
  },
  {
    productId: 20,
    text: "The Mona Lisa reproduction is absolutely stunning. The aged canvas texture is indistinguishable from genuine old-master work. My guests actually gasp.",
    reviewer: 'ShadowGallery', initial: 'S', date: 'Nov 8, 2024', stars: 5
  },
  {
    productId: 13,
    text: "The Patek Philippe replica is extraordinary. The weight is perfect, the movement smooth. Only an expert would know. I wear it to boardrooms and nobody questions it.",
    reviewer: 'Anonymous_777', initial: 'A', date: 'Oct 30, 2024', stars: 5
  },
  {
    productId: 9,
    text: "Three days after hanging the Crying Boy print, my toaster caught fire. Coincidence? Probably. But I love the thrill of wondering. Great conversation piece.",
    reviewer: 'MacabreMike', initial: 'M', date: 'Oct 25, 2024', stars: 4
  },
  {
    productId: 8,
    text: "The Kumanthong is beautifully crafted. The gold leaf work is immaculate, and the included ritual instructions are detailed and respectful of the tradition.",
    reviewer: 'ThaiBuddhistCollecter', initial: 'T', date: 'Oct 18, 2024', stars: 5
  },
  {
    productId: 15,
    text: "PS5 Black Market Edition loaded with games I've never seen on any store. Performance is flawless. Anonymous delivery was professional. Zero complaints.",
    reviewer: 'Ghost_Player_01', initial: 'G', date: 'Oct 11, 2024', stars: 5
  }
];

/* ============================================================
   CART STATE
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('deepweb_cart') || '[]');
let currentPage = 'home';
let currentFilter = 'all';
let shopFilter = 'all';
let priceMax = 9999999;

function saveCart() {
  localStorage.setItem('deepweb_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = total;
  renderDrawerItems();
}

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }

function addToCart(productId, qty = 1) {
  const p = getProduct(productId);
  if (!p) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart();
  showToast(`<i class="fa-solid fa-check"></i> "${p.name.substring(0,30)}..." added to cart`);
  openCartDrawer();
}

function addToCartById(id) { addToCart(id); }

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  if (currentPage === 'cart') renderCartPage();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  if (currentPage === 'cart') renderCartPage();
}

function setQty(productId, val) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, parseInt(val) || 1);
  saveCart();
}

function getCartTotal() {
  return cart.reduce((s, i) => {
    const p = getProduct(i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

/* ============================================================
   CART DRAWER
   ============================================================ */
function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
  renderDrawerItems();
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
}

function renderDrawerItems() {
  const list = document.getElementById('drawer-items-list');
  const footer = document.getElementById('drawer-footer');
  if (cart.length === 0) {
    list.innerHTML = `<div class="drawer-empty"><i class="fa-solid fa-cart-shopping"></i><p>Your cart is empty</p></div>`;
    footer.style.display = 'none';
    return;
  }
  footer.style.display = '';
  list.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `
    <div class="drawer-item">
      <img class="drawer-item-img" src="${p.img}" alt="${p.name}">
      <div class="drawer-item-info">
        <div class="drawer-item-name">${p.name.substring(0,40)}${p.name.length>40?'…':''}</div>
        <div class="drawer-item-price">$${(p.price * item.qty).toLocaleString()}</div>
        <div class="drawer-item-controls">
          <button class="drawer-qty-btn" onclick="updateQty(${p.id},-1)">−</button>
          <span class="drawer-qty">${item.qty}</span>
          <button class="drawer-qty-btn" onclick="updateQty(${p.id},1)">+</button>
          <button class="drawer-item-remove" onclick="removeFromCart(${p.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('drawer-total-price').textContent = '$' + getCartTotal().toLocaleString();
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(html) {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = html;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

/* ============================================================
   NAVIGATION / SPA ROUTING
   ============================================================ */
function navigateTo(page, param) {
  const pageFiles = {
    home: 'index.html', shop: 'shop.html', detail: 'shop-details.html',
    cart: 'shopping-cart.html', checkout: 'checkout.html',
    blog: 'blog.html', contact: 'contact.html'
  };
  if (pageFiles[page]) {
    const target = pageFiles[page];
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    if (target !== currentFile || (page === 'detail' && param !== undefined)) {
      const query = page === 'detail' && param !== undefined ? '?id=' + encodeURIComponent(param) : '';
      window.location.href = target + query;
      return;
    }
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  currentPage = page;

  const pageMap = {
    home: 'page-home',
    shop: 'page-shop',
    detail: 'page-detail',
    cart: 'page-cart',
    checkout: 'page-checkout',
    blog: 'page-blog',
    'blog-detail': 'page-blog-detail',
    contact: 'page-contact'
  };

  const pageEl = document.getElementById(pageMap[page]);
  if (pageEl) pageEl.classList.add('active');

  // Active nav
  const navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');
  if (page === 'home') document.querySelector('.nav-link[data-page="home"]').classList.add('active');

  window.scrollTo(0, 0);

  // Render page
  if (page === 'shop') {
    if (param) { shopFilter = param; }
    else { shopFilter = 'all'; }
    renderShopPage();
  } else if (page === 'detail') {
    renderDetailPage(param !== undefined ? param : 0);
  } else if (page === 'cart') {
    renderCartPage();
  } else if (page === 'checkout') {
    renderCheckoutPage();
  } else if (page === 'blog') {
    renderBlogPage();
  } else if (page === 'blog-detail') {
    renderBlogDetailPage(param !== undefined ? param : 0);
  }
}

/* ============================================================
   SLIDER
   ============================================================ */
let currentSlide = 0;
let sliderInterval;

function goToSlide(n) {
  document.querySelectorAll('.hero-slide').forEach((s,i) => {
    s.classList.toggle('active', i === n);
  });
  document.querySelectorAll('.dot').forEach((d,i) => {
    d.classList.toggle('active', i === n);
  });
  currentSlide = n;
}

function nextSlide() { goToSlide((currentSlide + 1) % 3); }
function prevSlide() { goToSlide((currentSlide + 2) % 3); }

function startSlider() {
  sliderInterval = setInterval(nextSlide, 5000);
}

/* ============================================================
   PRODUCT CARD RENDER
   ============================================================ */
function renderProductCard(p) {
  const badgesHtml = (p.badges || []).map(b => {
    if (b === 'sale') return `<span class="badge badge-sale">SALE</span>`;
    if (b === 'new') return `<span class="badge badge-new">NEW</span>`;
    if (b === 'rare') return `<span class="badge badge-rare">RARE</span>`;
    if (b === 'hot') return `<span class="badge badge-hot">HOT</span>`;
    return '';
  }).join('');

  const starsHtml = renderStars(p.rating);

  return `
  <div class="product-card" data-id="${p.id}" data-category="${p.category}" data-price="${p.price}">
    <div class="product-img-wrap">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="product-badges">${badgesHtml}</div>
      <div class="product-actions">
        <button class="product-action-btn" onclick="navigateTo('detail',${p.id})" title="Quick View"><i class="fa-solid fa-eye"></i></button>
        <button class="product-action-btn" onclick="addToCart(${p.id})" title="Add to Cart"><i class="fa-solid fa-cart-plus"></i></button>
        <button class="product-action-btn" onclick="showToast('<i class=\\'fa-solid fa-heart\\'></i> Added to wishlist')" title="Wishlist"><i class="fa-regular fa-heart"></i></button>
      </div>
      <div class="product-quick-view" onclick="navigateTo('detail',${p.id})"><i class="fa-solid fa-eye"></i> Quick View</div>
    </div>
    <div class="product-info">
      <div class="product-category-tag">${getCategoryLabel(p.category)}</div>
      <div class="product-name" onclick="navigateTo('detail',${p.id})">${p.name}</div>
      <div class="rating-row">
        <span class="stars">${starsHtml}</span>
        <span class="rating-count">(${p.reviews})</span>
      </div>
    </div>
    <div class="product-footer">
      <div class="price-block">
        <span class="price">$${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toLocaleString()}</span>` : ''}
      </div>
      <button class="add-cart-btn" onclick="addToCart(${p.id})"><i class="fa-solid fa-plus"></i> Add</button>
    </div>
  </div>`;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '★';
    else if (i - rating < 1) html += '½';
    else html += '☆';
  }
  return html;
}

function getCategoryLabel(cat) {
  const map = {
    'forbidden': 'Forbidden Artifacts',
    'cursed': 'Cursed Products',
    'luxury': 'Luxury & Tech',
    'dark-art': 'Dark Art & Mythical'
  };
  return map[cat] || cat;
}

/* ============================================================
   HOME PAGE RENDER
   ============================================================ */
function renderHomePage() {
  // Featured Products — 8 items
  const featured = [...PRODUCTS].slice(0, 8);
  document.getElementById('featured-grid').innerHTML = featured.map(renderProductCard).join('');
  document.getElementById('featured-count').textContent = `Showing 8 of ${PRODUCTS.length} products`;

  // Latest (last 5 added)
  const latest = [...PRODUCTS].slice(-6).reverse();
  document.getElementById('latest-list').innerHTML = latest.map(p => `
  <div class="product-list-item">
    <div class="product-list-thumb"><img src="${p.img}" alt="${p.name}"></div>
    <div class="product-list-info">
      <div class="product-list-name" onclick="navigateTo('detail',${p.id})">${p.name}</div>
      <div class="rating-row" style="margin:4px 0"><span class="stars" style="font-size:11px">${renderStars(p.rating)}</span></div>
      <div class="price" style="font-size:14px">$${p.price.toLocaleString()}</div>
    </div>
  </div>`).join('');

  // Top Rated (sorted by rating)
  const topRated = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 6);
  document.getElementById('toprated-list').innerHTML = topRated.map(p => `
  <div class="product-list-item">
    <div class="product-list-thumb"><img src="${p.img}" alt="${p.name}"></div>
    <div class="product-list-info">
      <div class="product-list-name" onclick="navigateTo('detail',${p.id})">${p.name}</div>
      <div class="rating-row" style="margin:4px 0"><span class="stars" style="font-size:11px">${renderStars(p.rating)}</span></div>
      <div class="price" style="font-size:14px">$${p.price.toLocaleString()}</div>
    </div>
  </div>`).join('');

  // Reviews
  document.getElementById('reviews-grid').innerHTML = REVIEWS_DATA.map(r => {
    const p = getProduct(r.productId);
    return `
    <div class="review-card">
      <div class="review-product-ref">
        <img class="review-product-img" src="${p.img}" alt="${p.name}">
        <div>
          <div class="review-product-name">${p.name.substring(0,35)}…</div>
          <div class="stars" style="font-size:11px">${renderStars(r.stars)}</div>
        </div>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="reviewer">
        <div class="reviewer-avatar">${r.initial}</div>
        <div>
          <div class="reviewer-name">${r.reviewer}</div>
          <div class="reviewer-date">${r.date}</div>
          <div class="reviewer-verified"><i class="fa-solid fa-circle-check"></i> Verified Purchase</div>
        </div>
      </div>
    </div>`;
  }).join('');

  // Blog
  document.getElementById('home-blog-grid').innerHTML = BLOG_POSTS.slice(0, 3).map(b => `
  <div class="blog-card">
    <div class="blog-thumb">
      <img src="${b.img}" alt="${b.title}">
      <span class="blog-category-badge">${b.category}</span>
    </div>
    <div class="blog-body">
      <div class="blog-meta">
        <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
        <span><i class="fa-regular fa-clock"></i> ${b.readTime} read</span>
        <span><i class="fa-regular fa-user"></i> ${b.author}</span>
      </div>
      <div class="blog-title" onclick="navigateTo('blog-detail',${b.id})">${b.title}</div>
      <p class="blog-excerpt">${b.excerpt.substring(0,120)}…</p>
      <span class="blog-read-more" onclick="navigateTo('blog-detail',${b.id})">Read More <i class="fa-solid fa-arrow-right"></i></span>
    </div>
  </div>`).join('');
}

/* ============================================================
   FEATURED PRODUCTS FILTER
   ============================================================ */
function filterProducts(cat, btn) {
  document.querySelectorAll('#featured-tabs .filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = cat;

  const filtered = cat === 'all' ? [...PRODUCTS].slice(0, 8) :
    PRODUCTS.filter(p => p.category === cat).slice(0, 8);

  document.getElementById('featured-grid').innerHTML = filtered.map(renderProductCard).join('');
  document.getElementById('featured-count').textContent = `Showing ${filtered.length} products`;
}

function sortProducts(val, gridId) {
  const grid = document.getElementById(gridId);
  const cards = [...grid.querySelectorAll('.product-card')];
  cards.sort((a, b) => {
    const pa = parseFloat(a.dataset.price);
    const pb = parseFloat(b.dataset.price);
    const na = a.querySelector('.product-name').textContent;
    const nb = b.querySelector('.product-name').textContent;
    if (val === 'price-asc') return pa - pb;
    if (val === 'price-desc') return pb - pa;
    if (val === 'name') return na.localeCompare(nb);
    return 0;
  });
  cards.forEach(c => grid.appendChild(c));
}

/* ============================================================
   SHOP PAGE
   ============================================================ */
function renderShopPage() {
  // Update sidebar active
  document.querySelectorAll('#shop-category-links a').forEach(a => {
    a.classList.remove('active');
  });

  let products = shopFilter === 'all' ? [...PRODUCTS] :
    PRODUCTS.filter(p => p.category === shopFilter);

  products = products.filter(p => p.price <= priceMax);

  document.getElementById('shop-grid').innerHTML = products.map(renderProductCard).join('');
  document.getElementById('shop-count').textContent = `Showing ${products.length} products`;

  // Update sidebar active state
  const catLinks = document.querySelectorAll('#shop-category-links a');
  catLinks.forEach(a => {
    if ((shopFilter === 'all' && a.textContent.includes('All')) ||
        (shopFilter !== 'all' && a.onclick && a.onclick.toString().includes(shopFilter))) {
      a.classList.add('active');
    }
  });
}

function shopFilterCategory(cat, el) {
  document.querySelectorAll('#shop-category-links a').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
  shopFilter = cat;
  renderShopPage();
}

function filterByPrice(val) {
  priceMax = parseInt(val);
  const formatted = parseInt(val).toLocaleString();
  document.getElementById('price-max-label').textContent = '$' + formatted;
  renderShopPage();
}

function shopFilterTag(el, tag) {
  el.classList.toggle('active');
  // Simple: filter by tag in product tags array
  const activeTags = [...document.querySelectorAll('.tag.active')].map(t => t.textContent.toLowerCase());
  if (activeTags.length === 0) {
    shopFilter = 'all';
  } else {
    // Show products that contain at least one active tag
    const products = PRODUCTS.filter(p => activeTags.some(t => (p.tags || []).includes(t)));
    document.getElementById('shop-grid').innerHTML = products.map(renderProductCard).join('');
    document.getElementById('shop-count').textContent = `Showing ${products.length} products`;
    return;
  }
  renderShopPage();
}

/* ============================================================
   SEARCH
   ============================================================ */
function handleSearch(val) { /* live search handled on enter */ }

function performSearch() {
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  if (!q) return;
  navigateTo('shop');
  const products = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    (p.tags || []).some(t => t.includes(q))
  );
  document.getElementById('shop-grid').innerHTML = products.length > 0
    ? products.map(renderProductCard).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text2)"><i class="fa-solid fa-magnifying-glass" style="font-size:40px;margin-bottom:16px;display:block;color:var(--border)"></i><p>No products found for "<strong>${q}</strong>"</p></div>`;
  document.getElementById('shop-count').textContent = `Found ${products.length} results for "${q}"`;
  document.getElementById('search-input').value = '';
}

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */
function renderDetailPage(id) {
  const p = typeof id === 'number' && id > 0 ? getProduct(id) : PRODUCTS[0];
  if (!p) return;

  document.getElementById('detail-breadcrumb').textContent = p.name.substring(0,30) + '…';

  document.getElementById('detail-content').innerHTML = `
  <div class="detail-gallery">
    <img class="detail-main-img" src="${p.img}" alt="${p.name}" id="detail-main-img">
    <div class="detail-thumbs">
      <img class="detail-thumb active" src="${p.img}" onclick="switchThumb(this, '${p.img}')">
      ${getRelatedImages(p).map(img => `<img class="detail-thumb" src="${img}" onclick="switchThumb(this, '${img}')">`).join('')}
    </div>
  </div>
  <div class="detail-info">
    <div class="detail-category">${getCategoryLabel(p.category)}</div>
    <h1 class="detail-name">${p.name}</h1>
    <div class="rating-row" style="margin-bottom:16px">
      <span class="stars" style="font-size:16px">${renderStars(p.rating)}</span>
      <span class="rating-count">${p.reviews} reviews</span>
    </div>
    <div class="detail-price-block">
      <span class="detail-price">$${p.price.toLocaleString()}</span>
      ${p.oldPrice ? `<span class="detail-price-old">$${p.oldPrice.toLocaleString()}</span>` : ''}
      ${p.oldPrice ? `<span class="badge badge-sale">-${Math.round((1-p.price/p.oldPrice)*100)}% OFF</span>` : ''}
    </div>
    <p class="detail-desc">${p.desc}</p>
    <div class="detail-meta">
      <div class="detail-meta-row"><span class="detail-meta-label">SKU:</span><span class="detail-meta-val">${p.sku}</span></div>
      <div class="detail-meta-row"><span class="detail-meta-label">Category:</span><span class="detail-meta-val">${getCategoryLabel(p.category)}</span></div>
      <div class="detail-meta-row"><span class="detail-meta-label">Stock:</span><span class="detail-meta-val" style="color:${p.stock < 3 ? 'var(--accent)' : '#4caf50'}">${p.stock < 3 ? '⚠ Only ' + p.stock + ' left' : p.stock + ' in stock'}</span></div>
      <div class="detail-meta-row"><span class="detail-meta-label">Tags:</span><span class="detail-meta-val">${(p.tags||[]).map(t => `<span class="tag" style="cursor:default">${t}</span>`).join(' ')}</span></div>
    </div>
    <div class="detail-add-cart">
      <div class="qty-control">
        <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
        <input type="number" class="qty-input" id="detail-qty" value="1" min="1" max="${p.stock}" onchange="validateQty()">
        <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
      </div>
      <button class="btn btn-primary" onclick="addDetailToCart(${p.id})"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
      <button class="btn btn-outline" onclick="showToast('<i class=\\'fa-solid fa-heart\\'></i> Added to wishlist')"><i class="fa-regular fa-heart"></i></button>
    </div>
    <div class="detail-tabs">
      <div class="tab-buttons">
        <button class="tab-btn active" onclick="switchTab(this,'desc-tab')">Description</button>
        <button class="tab-btn" onclick="switchTab(this,'specs-tab')">Specifications</button>
        <button class="tab-btn" onclick="switchTab(this,'reviews-tab')">Reviews (${p.reviews})</button>
      </div>
      <div class="tab-content active" id="desc-tab">
        <p>${p.desc}</p>
        <p style="margin-top:16px">All products on DEEP WEB are fictional collectibles, replicas, decorative props, and artworks for display purposes only. No actual contraband is sold.</p>
      </div>
      <div class="tab-content" id="specs-tab">
        <ul>${(p.specs||[]).map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="tab-content" id="reviews-tab">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px">
          <div style="font-size:48px;font-family:var(--heading-font);color:var(--accent)">${p.rating}</div>
          <div>
            <div class="stars" style="font-size:20px">${renderStars(p.rating)}</div>
            <div style="color:var(--text2);font-size:12px">Based on ${p.reviews} reviews</div>
          </div>
        </div>
        <div style="color:var(--text2);font-size:13px;padding:16px;background:var(--bg2);border:1px solid var(--border2);border-radius:var(--radius)">
          <i class="fa-solid fa-lock" style="color:var(--accent);margin-right:8px"></i>
          All reviews are anonymous. Customer identities are protected by our encryption protocols.
        </div>
      </div>
    </div>
  </div>`;

  // Related products
  const related = PRODUCTS.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 4);
  document.getElementById('related-grid').innerHTML = related.map(renderProductCard).join('');
}

function getRelatedImages(p) {
  return PRODUCTS.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 3).map(pr => pr.img);
}

function switchThumb(el, src) {
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('detail-main-img').src = src;
}

function switchTab(btn, tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function changeDetailQty(delta) {
  const input = document.getElementById('detail-qty');
  if (!input) return;
  input.value = Math.max(1, parseInt(input.value) + delta);
}

function validateQty() {
  const input = document.getElementById('detail-qty');
  if (!input) return;
  input.value = Math.max(1, parseInt(input.value) || 1);
}

function addDetailToCart(id) {
  const qty = parseInt(document.getElementById('detail-qty')?.value || 1);
  addToCart(id, qty);
}

/* ============================================================
   CART PAGE
   ============================================================ */
function renderCartPage() {
  const container = document.getElementById('cart-page-content');
  if (cart.length === 0) {
    container.innerHTML = `
    <div class="cart-empty" style="padding:100px 0">
      <i class="fa-solid fa-cart-shopping"></i>
      <p>Your cart is empty. Time to venture into the dark marketplace.</p>
      <button class="btn btn-primary btn-lg" onclick="navigateTo('shop')"><i class="fa-solid fa-skull-crossbones"></i> Browse Products</button>
    </div>`;
    return;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  container.innerHTML = `
  <div class="cart-layout">
    <div>
      <table class="cart-table">
        <thead>
          <tr>
            <th colspan="2">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="cart-tbody">
          ${cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `<tr>
      <td><img class="cart-item-img" src="${p.img}" alt="${p.name}"></td>
      <td>
        <div class="cart-item-name" onclick="navigateTo('detail',${p.id})" style="cursor:pointer">${p.name}</div>
        <div class="cart-item-cat">${getCategoryLabel(p.category)}</div>
      </td>
      <td class="cart-item-price">$${p.price.toLocaleString()}</td>
      <td>
        <div class="qty-control">
          <button class="qty-btn" onclick="updateQty(${p.id},-1);renderCartPage()">−</button>
          <input type="number" class="qty-input" value="${item.qty}" min="1" onchange="setQty(${p.id},this.value);renderCartPage()">
          <button class="qty-btn" onclick="updateQty(${p.id},1);renderCartPage()">+</button>
        </div>
      </td>
      <td class="cart-item-price">$${(p.price * item.qty).toLocaleString()}</td>
      <td><button class="cart-remove-btn" onclick="removeFromCart(${p.id})"><i class="fa-solid fa-xmark"></i></button></td>
    </tr>`;
  }).join('')}
        </tbody>
      </table>
      <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap">
        <button class="btn btn-outline" onclick="navigateTo('shop')"><i class="fa-solid fa-arrow-left"></i> Continue Shopping</button>
        <button class="btn btn-ghost" onclick="cart=[];saveCart();renderCartPage()"><i class="fa-solid fa-trash"></i> Clear Cart</button>
      </div>
    </div>
    <div class="cart-summary">
      <div class="summary-title">Order Summary</div>
      <div class="summary-row"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
      <div class="summary-row"><span>Shadow Shipping</span><span>${shipping === 0 ? '<span style="color:#4caf50">FREE</span>' : '$' + shipping}</span></div>
      <div class="summary-row"><span>Dark Tax (8%)</span><span>$${tax.toLocaleString()}</span></div>
      <div class="summary-row summary-total"><span>Total</span><span class="summary-val">$${total.toLocaleString()}</span></div>
      <div class="coupon-row">
        <input type="text" class="coupon-input" placeholder="Enter dark coupon code">
        <button class="coupon-btn" onclick="showToast('<i class=\\'fa-solid fa-tag\\'></i> Coupon applied!')">Apply</button>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="navigateTo('checkout')"><i class="fa-solid fa-lock"></i> Proceed to Checkout</button>
      <div style="margin-top:16px;text-align:center;font-size:11px;color:var(--text2)">
        <i class="fa-solid fa-shield-halved" style="color:var(--accent)"></i> 256-bit encrypted. Anonymous delivery guaranteed.
      </div>
    </div>
  </div>`;
}

/* ============================================================
   CHECKOUT PAGE
   ============================================================ */
function renderCheckoutPage() {
  const container = document.getElementById('checkout-content');
  if (cart.length === 0) {
    container.innerHTML = `
    <div class="checkout-success" style="padding:80px 0">
      <i class="fa-solid fa-cart-shopping" style="font-size:60px;color:var(--border);margin-bottom:20px"></i>
      <h2>Your cart is empty</h2>
      <p>Add items to your cart before checking out.</p>
      <button class="btn btn-primary btn-lg" onclick="navigateTo('shop')">Browse Products</button>
    </div>`;
    return;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  container.innerHTML = `
  <div class="checkout-layout">
    <div>
      <div class="checkout-form-card">
        <div class="form-section-title"><i class="fa-solid fa-user-secret" style="color:var(--accent);margin-right:8px"></i> Identity & Delivery</div>
        <form id="checkout-form" onsubmit="processCheckout(event)" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">First Name / Alias <span class="req">*</span></label>
              <input type="text" class="form-control" id="f-fname" placeholder="Alias or first name" required>
              <div class="form-error" id="e-fname"></div>
            </div>
            <div class="form-group">
              <label class="form-label">Last Name <span class="req">*</span></label>
              <input type="text" class="form-control" id="f-lname" placeholder="Last name or alias" required>
              <div class="form-error" id="e-lname"></div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Encrypted Email <span class="req">*</span></label>
            <input type="email" class="form-control" id="f-email" placeholder="encrypted@shadow.net" required>
            <div class="form-error" id="e-email"></div>
          </div>
          <div class="form-group">
            <label class="form-label">Phone (Encrypted VoIP only)</label>
            <input type="tel" class="form-control" id="f-phone" placeholder="+0 (000) 000-0000">
          </div>
          <div class="form-group">
            <label class="form-label">Shadow Drop Address <span class="req">*</span></label>
            <input type="text" class="form-control" id="f-address" placeholder="Anonymous drop address" required>
            <div class="form-error" id="e-address"></div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">City <span class="req">*</span></label>
              <input type="text" class="form-control" id="f-city" placeholder="City" required>
              <div class="form-error" id="e-city"></div>
            </div>
            <div class="form-group">
              <label class="form-label">Postal Code</label>
              <input type="text" class="form-control" id="f-zip" placeholder="00000">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Dark Zone (Country) <span class="req">*</span></label>
            <select class="form-control form-select" id="f-country" required>
              <option value="">— Select Dark Zone —</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>France</option>
              <option>Japan</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Undisclosed</option>
            </select>
            <div class="form-error" id="e-country"></div>
          </div>
          <div class="form-group" style="margin-top:8px">
            <label class="form-label">Order Notes</label>
            <textarea class="form-control form-textarea" placeholder="Special covert delivery instructions..."></textarea>
          </div>

          <div class="form-section-title" style="margin-top:32px"><i class="fa-solid fa-lock" style="color:var(--accent);margin-right:8px"></i> Dark Payment Method</div>
          <div class="payment-options">
            <label class="payment-option">
              <input type="radio" name="payment" value="crypto" checked>
              <div><div class="payment-option-label"><i class="fa-brands fa-bitcoin"></i> Cryptocurrency (BTC / ETH / XMR)</div><div class="payment-option-desc">Most anonymous. Recommended for large orders.</div></div>
            </label>
            <label class="payment-option">
              <input type="radio" name="payment" value="darkcard">
              <div><div class="payment-option-label"><i class="fa-solid fa-credit-card"></i> Shadow Card (Prepaid Only)</div><div class="payment-option-desc">Prepaid untraceable cards accepted.</div></div>
            </label>
            <label class="payment-option">
              <input type="radio" name="payment" value="wire">
              <div><div class="payment-option-label"><i class="fa-solid fa-building-columns"></i> Offshore Wire Transfer</div><div class="payment-option-desc">Cayman Islands & Switzerland routing available.</div></div>
            </label>
          </div>
          <div id="payment-details-area" style="margin-top:16px"></div>

          <div style="margin-top:32px">
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;font-size:14px">
              <i class="fa-solid fa-skull-crossbones"></i> Complete Dark Order — $${total.toLocaleString()}
            </button>
            <p style="margin-top:12px;text-align:center;font-size:11px;color:var(--text2)">
              <i class="fa-solid fa-shield-halved" style="color:var(--accent)"></i>
              All transactions are simulated. No real payment processed. For demonstration only.
            </p>
          </div>
        </form>
      </div>
    </div>
    <div class="order-summary-box">
      <div class="summary-title">Your Dark Order</div>
      <div class="order-items">
        ${cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `
    <div class="order-item">
      <img class="order-item-img" src="${p.img}" alt="${p.name}">
      <div class="order-item-name">${p.name.substring(0,35)}…</div>
      <div class="order-item-qty">×${item.qty}</div>
      <div class="order-item-price">$${(p.price*item.qty).toLocaleString()}</div>
    </div>`;
  }).join('')}
      </div>
      <div class="summary-row"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '$' + shipping}</span></div>
      <div class="summary-row"><span>Tax (8%)</span><span>$${tax.toLocaleString()}</span></div>
      <div class="summary-row summary-total"><span>Total</span><span class="summary-val">$${total.toLocaleString()}</span></div>
    </div>
  </div>`;
}

function processCheckout(e) {
  e.preventDefault();
  let valid = true;

  const fields = [
    ['f-fname', 'e-fname', 'First name is required'],
    ['f-lname', 'e-lname', 'Last name is required'],
    ['f-email', 'e-email', 'Valid email is required'],
    ['f-address', 'e-address', 'Address is required'],
    ['f-city', 'e-city', 'City is required'],
    ['f-country', 'e-country', 'Country is required']
  ];

  fields.forEach(([fId, eId, msg]) => {
    const f = document.getElementById(fId);
    const e = document.getElementById(eId);
    if (!f.value.trim()) {
      f.classList.add('error');
      e.textContent = msg;
      valid = false;
    } else {
      f.classList.remove('error');
      e.textContent = '';
    }
  });

  // Email validate
  const emailField = document.getElementById('f-email');
  if (emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    emailField.classList.add('error');
    document.getElementById('e-email').textContent = 'Please enter a valid email address';
    valid = false;
  }

  if (!valid) {
    showToast('<i class="fa-solid fa-triangle-exclamation"></i> Please fill all required fields');
    return;
  }

  // Success!
  const orderNum = 'DW-' + Date.now().toString().slice(-8);
  cart = [];
  saveCart();

  document.getElementById('checkout-content').innerHTML = `
  <div class="checkout-success">
    <div class="success-icon"><i class="fa-solid fa-circle-check"></i></div>
    <h2>Order Placed Successfully</h2>
    <p>Your dark acquisition has been processed. Our shadow couriers will dispatch your order through anonymous channels. Expect delivery within 3–7 shadow days.</p>
    <div class="order-number">Order Reference: <strong>${orderNum}</strong></div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary btn-lg" onclick="navigateTo('home')"><i class="fa-solid fa-house"></i> Return to Darkness</button>
      <button class="btn btn-outline btn-lg" onclick="navigateTo('shop')">Continue Shopping</button>
    </div>
  </div>`;
}

/* ============================================================
   BLOG PAGE
   ============================================================ */
function renderBlogPage() {
  document.getElementById('blog-list').innerHTML = BLOG_POSTS.map(b => `
  <div class="blog-list-card">
    <div class="blog-list-thumb">
      <img src="${b.img}" alt="${b.title}">
    </div>
    <div class="blog-list-body">
      <div class="blog-meta"><span><i class="fa-solid fa-tag" style="color:var(--accent)"></i> ${b.category}</span><span><i class="fa-regular fa-calendar"></i> ${b.date}</span><span><i class="fa-regular fa-clock"></i> ${b.readTime} read</span></div>
      <div class="blog-title" onclick="navigateTo('blog-detail',${b.id})">${b.title}</div>
      <p class="blog-excerpt">${b.excerpt.substring(0, 200)}…</p>
      <span class="blog-read-more" onclick="navigateTo('blog-detail',${b.id})">Read Full Article <i class="fa-solid fa-arrow-right"></i></span>
    </div>
  </div>`).join('');

  document.getElementById('recent-posts').innerHTML = BLOG_POSTS.slice(0, 4).map(b => `
  <div class="recent-post">
    <img src="${b.img}" alt="${b.title}">
    <div>
      <div class="recent-post-title" onclick="navigateTo('blog-detail',${b.id})">${b.title.substring(0,50)}…</div>
      <div class="recent-post-date">${b.date}</div>
    </div>
  </div>`).join('');
}

function renderBlogDetailPage(id) {
  const b = typeof id === 'number' && id > 0 ? BLOG_POSTS.find(p => p.id === id) : BLOG_POSTS[0];
  if (!b) return;

  document.getElementById('blog-detail-breadcrumb').textContent = b.title.substring(0,30) + '…';

  document.getElementById('blog-detail-content').innerHTML = `
  <div class="blog-meta" style="margin-bottom:16px">
    <span><i class="fa-solid fa-tag" style="color:var(--accent)"></i> ${b.category}</span>
    <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
    <span><i class="fa-regular fa-user"></i> ${b.author}</span>
    <span><i class="fa-regular fa-clock"></i> ${b.readTime} read</span>
  </div>
  <h1 class="blog-detail-title">${b.title}</h1>
  <img class="blog-detail-img" src="${b.img}" alt="${b.title}">
  <div class="blog-detail-body">${b.body}</div>
  <div style="margin-top:40px;padding-top:24px;border-top:1px solid var(--border)">
    <div class="blog-meta"><span>Tags:</span>
    ${(b.category.split(' ')).map(t => `<span class="tag" style="cursor:default">${t}</span>`).join('')}
    </div>
  </div>
  <div style="margin-top:40px;display:flex;gap:12px;flex-wrap:wrap">
    <button class="btn btn-outline" onclick="navigateTo('blog')"><i class="fa-solid fa-arrow-left"></i> Back to Archives</button>
    <button class="btn btn-ghost" onclick="showToast('<i class=\\'fa-regular fa-bookmark\\'></i> Article saved to dark archives')"><i class="fa-regular fa-bookmark"></i> Save Article</button>
  </div>`;

  // Sidebar recent posts
  document.getElementById('blog-detail-recent').innerHTML = BLOG_POSTS.filter(p => p.id !== b.id).slice(0, 4).map(post => `
  <div class="recent-post">
    <img src="${post.img}" alt="${post.title}">
    <div>
      <div class="recent-post-title" onclick="navigateTo('blog-detail',${post.id})">${post.title.substring(0,50)}…</div>
      <div class="recent-post-date">${post.date}</div>
    </div>
  </div>`).join('');
}

/* ============================================================
   NEWSLETTER & CONTACT
   ============================================================ */
function handleNewsletter(e) {
  e.preventDefault();
  showToast('<i class="fa-solid fa-envelope"></i> You\'ve joined the Shadow Network. Stay dark.');
  e.target.reset();
}

function handleContact(e) {
  e.preventDefault();
  showToast('<i class="fa-solid fa-paper-plane"></i> Message encrypted and transmitted. Response within 48 hours.');
  e.target.reset();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function toggleMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  toggle.classList.toggle('active');
  nav.classList.toggle('open');
}

/* ============================================================
   COUNTDOWN TIMER
   ============================================================ */
function startCountdown() {
  let h = 12, m = 48, s = 33;
  setInterval(() => {
    s--;
    if (s < 0) { s = 59; m--; }
    if (m < 0) { m = 59; h--; }
    if (h < 0) { h = 23; }
    const fh = document.getElementById('cd-hours');
    const fm = document.getElementById('cd-mins');
    const fs = document.getElementById('cd-secs');
    if (fh) fh.textContent = String(h).padStart(2, '0');
    if (fm) fm.textContent = String(m).padStart(2, '0');
    if (fs) fs.textContent = String(s).padStart(2, '0');
  }, 1000);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  const pageMap = {
    home: 'page-home', shop: 'page-shop', detail: 'page-detail',
    cart: 'page-cart', checkout: 'page-checkout', blog: 'page-blog', contact: 'page-contact'
  };
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  const activePage = document.getElementById(pageMap[page]);
  if (activePage) activePage.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeNav) activeNav.classList.add('active');

  if (page === 'home') { renderHomePage(); startSlider(); startCountdown(); }
  if (page === 'shop') renderShopPage();
  if (page === 'detail') {
    const productId = Number(new URLSearchParams(window.location.search).get('id')) || 1;
    renderDetailPage(productId);
  }
  if (page === 'cart') renderCartPage();
  if (page === 'checkout') renderCheckoutPage();
  if (page === 'blog') renderBlogPage();
  updateCartUI();
});
