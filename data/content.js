// ─────────────────────────────────────────────────────────────
//  EVERYTHING ABOUT TSELMEG LIVES HERE.
//  Every text has two versions: en (English) and mn (Mongolian).
//  Photos live in /public/gallery.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Tselmeg",
  nickname: { en: "Tseku", mn: "Цэкү" },
  photo: "/gallery/16.jpg",
  // First one is the main account ("Say hi" button goes there)
  socials: [
    {
      label: { en: "Instagram", mn: "Инстаграм" },
      handle: "@tskudere",
      href: "https://www.instagram.com/tskudere/",
    },
    {
      label: { en: "Priv Instagram", mn: "Прив инстаграм" },
      handle: "@huhtengerr",
      href: "https://www.instagram.com/huhtengerr/",
    },
  ],
  birthday: {
    label: { en: "Birthday", mn: "Төрсөн өдөр" },
    value: { en: "September 30, 2009", mn: "2009 оны 9-р сарын 30" },
  },
};

// Background song (file in /public/music). volume: 0 = silent, 1 = full
export const music = { src: "/music/song.mp3", volume: 0.6 };

// Small texts used around the site (menu, buttons, headings)
export const ui = {
  callMe: { en: "Call me", mn: "Намайг" },
  callMeAfter: { en: "", mn: "гэж дуудаж болно шүү" },
  menu: { en: "Menu", mn: "Цэс" },
  close: { en: "Close", mn: "Хаах" },
  scrollDown: { en: "Scroll down", mn: "Доош гүйлгэ" },
  chapter: { en: "Chapter", mn: "Бүлэг" },
  view: { en: "View", mn: "Харах" },
  hi: { en: "Hi!", mn: "Сайн уу!" },
  nav: {
    home: { en: "Home", mn: "Нүүр" },
    about: { en: "About me", mn: "Миний тухай" },
    gallery: { en: "Gallery", mn: "Зургууд" },
    hobbies: { en: "Hobbies", mn: "Хобби" },
    contact: { en: "Say hi", mn: "Холбогдох" },
  },
  chapters: {
    about: { en: ["Who", "I Am"], mn: ["Би", "Хэн бэ"] },
    gallery: { en: ["My", "Gallery"], mn: ["Миний", "Ертөнц"] },
    hobbies: { en: ["Things", "I Love"], mn: ["Дуртай", "Зүйлс"] },
  },
  portal: { en: ["Pictures of", "my little world"], mn: ["Миний бяцхан", "ертөнц"] },
  zoomEyebrow: { en: "Little moments", mn: "Бяцхан агшнууд" },
  galleryEyebrow: { en: "All my photos", mn: "Бүх зургууд" },
  galleryTitle: { en: ["The", "gallery"], mn: ["Зургийн", "цомог"] },
  hobbiesEyebrow: { en: "Hobbies & passions", mn: "Хобби ба сонирхол" },
  hobbiesTitle: { en: ["What makes me,", "me"], mn: ["Намайг бүрдүүлдэг", "зүйлс"] },
  thingsEyebrow: { en: "Keep scrolling →", mn: "Цааш гүйлгэ →" },
  thingsTitle: { en: ["Little things", "about me"], mn: ["Миний тухай", "бяцхан зүйлс"] },
  footerTitle: { en: ["Let's be", "friends!"], mn: ["Найзууд", "болъё!"] },
  sayHi: { en: "Say hi", mn: "Сайн уу" },
  musicPlay: { en: "Play music", mn: "Дуу тоглуулах" },
  musicPause: { en: "Pause", mn: "Зогсоох" },
};

// Big words in the first screen
export const heroLines = {
  en: ["ARTIST", "TSELMEG"],
  mn: ["ЗУРААЧ", "ЦЭЛМЭГ"],
};
export const heroText = {
  en: "Welcome to my little corner of the internet — my photos, the things I love, and a few pieces of me.",
  mn: "Миний бяцхан интернэт буланд тавтай морил — миний зургууд, дуртай зүйлс, мөн миний тухай бага зэрэг.",
};

export const about = {
  eyebrow: { en: "About me", mn: "Миний тухай" },
  introEyebrow: { en: "Nice to meet you", mn: "Танилцсандаа баяртай байна" },
  greeting: { en: "Hey, my name's Tselmeg!", mn: "Сайн уу, намайг Цэлмэг гэдэг!" },
  quote: {
    en: "I may not know much about you yet, but I hope that one day, I’ll get the chance to discover the person behind the things I’ve only begun to see.",
    mn: "Би чамайг одоохондоо сайн мэдэхгүй ч, хэзээ нэгэн өдөр чиний надад одоохондоо дөнгөж харагдаж эхэлж буй тэр дүрийн цаадах жинхэнэ чамайг илүү таньж мэдэх боломж надад олдоно гэж найдаж байна.",
  },
};

// Her photos: file number in /public/gallery + title in both languages
const photos = [
  [1, "Ready to go to school", "Сургуульдаа явахад бэлэн"],
  [2, "Rock mode: on", "Рок горимоо асаалаа"],
  [3, "Today's outfit", "Өнөөдрийн хувцаслалт"],
  [4, "Up close and quiet", "Ойроос, чимээгүйхэн"],
  [5, "Playing with my shadow haha", "Сүүдэртэйгээ тоглож байна хаха"],
  [6, "Night walk", "Шөнийн алхалт"],
  [7, "After dark", "Харанхуй болсны дараа"],
  [8, "Not quite ready for a photo", "Зураг авахуулахад арай бэлэн биш"],
  [9, "Stronger than I look", "Харагдаж байгаагаасаа илүү хүчтэй"],
  [10, "In the dark", "Харанхуйд"],
  [11, "From above", "Дээрээс харахад"],
  [12, "In class", "Хичээлийн үеэр"],
  [14, "Bear mode", "Баавгайн горим"],
  [15, "Winter evening", "Өвлийн орой"],
  [16, "Just naturally cute", "Угаасаа л хөөрхөн"],
  [17, "Maki Zenin", "Маки Зэнин"],
  [18, "In the elevator", "Лифтэн дотор"],
  [19, "Winter shopping", "Өвлийн дэлгүүр хэсэлт"],
  [20, "Stylish", "Stylish"],
  [21, "Mirror selfie", "Толины өмнөх сэлфи"],
  [22, "Like", "Like"],
  [23, "In the light", "Гэрлийн туяанд"],
  [24, "Before school / after school", "Хичээлдээ явахын өмнө / ирсний дараа"],
  [25, "Future engineer", "Ирээдүйн инженер"],
  [26, "Red sweater today", "Өнөөдөр улаан цамцтай"],
  [27, "In my checked shirt", "Дөрвөлжин хээтэй цамцтай"],
  [28, "Just cute", "Зүгээр л хөөрхөн"],
  [29, "Rock mode still on", "Рок горим асаалттай хэвээр"],
  [30, "Another mirror selfie", "Дахиад л толины сэлфи"],
  [31, "Look at my muscles", "Миний булчинг хараач"],
  [32, "Cold winter evening", "Өвлийн хүйтэн орой"],
  [33, "Sitting in a café", "Кафед сууж байна"],
  [34, "Fresh nails", "Шинэхэн хумс"],
  [35, "Just got in / about to head out", "Гаднаас орж ирээд / гадагш гарахын өмнө"],
  [36, "Green top today", "Өнөөдөр ногоон цамцтай"],
  [37, "Looking cozy", "Дулаахан харагдаж байна"],
  [38, "Posing a little haha", "Жаахан маяглаж байна хаха"],
  [39, "Before bed", "Унтахын өмнө"],
  [40, "Out in the evening", "Орой гадаа"],
  [41, "Smile", "Инээмсэглэл"],
  [42, "Green hoodie in the mirror", "Толины өмнө ногоон худитай"],
  [43, "I'm strong too, you know", "Би ч гэсэн хүчтэй шүү дээ"],
  [44, "Dressed in red", "Улаан өнгөөр гоёсон"],
  [45, "Ready to head out", "Гарахад бэлэн"],
  [46, "Alone in the evening", "Орой ганцаараа"],
  [47, "First snow", "Анхны цас"],
  [48, "After practice", "Бэлтгэлийн дараа"],
  [49, "Shh... it's a secret", "Шш... нууц шүү"],
  [50, "Lost in thought", "Бодолд автаад сууж байна"],
  [51, "Black top, black shorts", "Хар цамц, хар шорт"],
  [52, "Showing off that I'm cute", "Хөөрхөн гэдгээ гайхуулж байна"],
  [53, "Showing off that I'm cute — part 2", "Хөөрхөн гэдгээ гайхуулах — 2-р хэсэг"],
  [54, "Flower shirt", "Цэцэгтэй цамц"],
  [55, "Peace", "Энх тайван"],
  [56, "Braid and denim jacket", "Сүлжсэн үс, жинсэн хүрэм"],
  [57, "Innocent kid", "Гэм зэмгүй хүүхэд"],
  [58, "Cheeks red from the cold", "Хүйтэнд улайсан хацар"],
  [59, "Just another school day", "Зүгээр л нэг хичээлийн өдөр"],
  [60, "Sending a kiss", "Үнсэлт илгээе"],
  [61, "Got a ribbon mustache", "Туузан сахалтай болчихлоо"],
  [62, "Showing off my nails", "Хумсаа гайхуулъя"],
  [63, "Photo day", "Зураг авахуулах өдөр"],
  [64, "Cute even when bored", "Уйдаж байгаа нь ч хөөрхөн"],
  [65, "Made a new friend", "Шинэ найзтай боллоо"],
  [66, "Basically a cat", "Бараг л муур"],
];

export const gallery = photos.map(([n, en, mn]) => ({
  src: `/gallery/${n}.jpg`,
  thumb: `/gallery/thumbs/${n}.jpg`,
  title: { en, mn },
}));

// Which photos fly toward you in the zoom scene (first one fills the screen)
const byFile = (n) => gallery.find((g) => g.src === `/gallery/${n}.jpg`);
export const zoomPhotos = [16, 63, 12, 28, 19, 44, 48].map(byFile);
export const portalPhoto = byFile(63);

// Hobbies — shown as a big list, hover to see the photo
export const hobbies = [
  {
    name: { en: "Volleyball", mn: "Волейбол" },
    note: { en: "knee pads on, always", mn: "өвдөгний хамгаалалт үргэлж хамт" },
    image: "/gallery/thumbs/48.jpg",
  },
  {
    name: { en: "Being stylish", mn: "Загварлаг байх" },
    note: { en: "mirror selfie queen", mn: "толины сэлфиний хатан" },
    image: "/gallery/thumbs/20.jpg",
  },
  {
    name: { en: "Makeup", mn: "Будалт" },
    note: { en: "winged liner, glossy lips", mn: "нүдний зураас, гялгар уруул" },
    image: "/gallery/thumbs/28.jpg",
  },
  {
    name: { en: "Cats", mn: "Муур" },
    note: { en: "every street cat is a friend", mn: "гудамжны муур бүр найз" },
    image: "/gallery/thumbs/65.jpg",
  },
  // Shown as an "error" row with faint text
  {
    error: true,
    name: { en: "ERROR", mn: "ERROR" },
  },
];

// Small facts — scroll sideways cards.
// Leave "value" out to show a glitchy ERROR + "I think I'll know more soon".
export const knowSoon = {
  en: "I think I'll know more soon",
  mn: "Удахгүй илүү ихийг мэднэ гэж бодож байна",
};
export const littleThings = [
  { label: { en: "Favorite color", mn: "Дуртай өнгө" } },
  { label: { en: "Favorite food", mn: "Дуртай хоол" } },
  { label: { en: "Song on repeat", mn: "Давтаж сонсдог дуу" } },
  { label: { en: "Dream place", mn: "Мөрөөдлийн газар" } },
  { label: { en: "Comfort movie", mn: "Дуртай кино" } },
  { label: { en: "Fun fact", mn: "Сонирхолтой баримт" } },
];
