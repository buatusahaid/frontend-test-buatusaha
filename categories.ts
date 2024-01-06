interface Category {
  name: string;
  link: string;
}

interface TitleCategory {
  id: number;
  title: string;
  categories: Category[];
  link: string;
}

interface MainCategory {
  image: string;
  mainCategory: string;
  subCategory: TitleCategory[];
  link: string;
}

export const graphicDesign: MainCategory[] = [
  {
    mainCategory: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "Logo & Brand Identity",
        link: "/error",
        categories: [
          { name: "Logo Design", link: "/error" },
          { name: "Brand Guidelines", link: "/error" },
          { name: "Business Card & Stationery", link: "/error" },
          { name: "Company Profile", link: "/error" },
          { name: "Fonts & Typography", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "Illustration",
        link: "/error",
        categories: [
          { name: "Illustration", link: "/error" },
          { name: "Cartoon & Comics", link: "/error" },
          { name: "Storyboard", link: "/error" },
          { name: "Caricatures", link: "/error" },
          { name: "Pattern Design", link: "/error" },
          { name: "Tattoo Design", link: "/error" },
          { name: "Children Book", link: "/error" },
        ],
      },
      {
        id: 3,
        title: "Web & App Design",
        link: "/error",
        categories: [
          { name: "Website Design", link: "/error" },
          { name: "App Design", link: "/error" },
          { name: "UX Design", link: "/error" },
          { name: "Landing Page Design", link: "/error" },
        ],
      },
      {
        id: 4,
        title: "Gaming",
        link: "/error",
        categories: [
          { name: "Character Modelling", link: "/error" },
          { name: "Game Art", link: "/error" },
          { name: "Graphic for Streamers", link: "/error" },
        ],
      },
      {
        id: 5,
        title: "Visual Design",
        link: "/error",
        categories: [
          { name: "Presentation Design", link: "/error" },
          { name: "Infographic Design", link: "/error" },
          { name: "Image Editing", link: "/error" },
          { name: "Vector Tracing", link: "/error" },
          { name: "Resume Design", link: "/error" },
        ],
      },
      {
        id: 6,
        title: "Print Design",
        link: "/error",
        categories: [
          { name: "Flyer Design", link: "/error" },
          { name: "Brochure Design", link: "/error" },
          { name: "Poster Design", link: "/error" },
          { name: "Catalog Design", link: "/error" },
          { name: "Newsletter Layout", link: "/error" },
        ],
      },
      {
        id: 7,
        title: "Marketing Design",
        link: "/error",
        categories: [
          { name: "Social Media Design", link: "/error" },
          { name: "Web & Social Banner", link: "/error" },
          { name: "Email Design", link: "/error" },
          { name: "Billboard Design", link: "/error" },
          { name: "Newsletter Layout", link: "/error" },
        ],
      },
      {
        id: 8,
        title: "Packaging & Cover Design",
        link: "/error",
        categories: [
          { name: "Packaging Design", link: "/error" },
          { name: "Book Design", link: "/error" },
          { name: "Book Cover", link: "/error" },
          { name: "Album Cover Design", link: "/error" },
        ],
      },
      {
        id: 9,
        title: "Fashion & Merchandise Design",
        link: "/error",
        categories: [
          { name: "T-Shirt & Merchandise", link: "/error" },
          { name: "Jewelry Design", link: "/error" },
          { name: "Fashion Design", link: "/error" },
        ],
      },
      {
        id: 10,
        title: "3D Design",
        link: "/error",
        categories: [
          { name: "3D Architecture", link: "/error" },
          { name: "3D Industrial Design", link: "/error" },
          { name: "3D Fashion & Garment", link: "/error" },
          { name: "3D Printing Characters", link: "/error" },
          { name: "3D Landscape", link: "/error" },
          { name: "3D Game Art", link: "/error" },
          { name: "3D Jewelry Design", link: "/error" },
        ],
      },
      {
        id: 11,
        title: "Miscellaneous",
        link: "/error",
        categories: [{ name: "Design Advice", link: "/error" }],
      },
    ],
  },
];

export const techProgramming: MainCategory[] = [
  {
    mainCategory: "Tech & Programming",
    image:
      "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "Software Development",
        link: "/error",
        categories: [
          { name: "APIs & Integrations", link: "/error" },
          { name: "Desktop Applications", link: "/error" },
          { name: "Web Applications", link: "/error" },
          { name: "Browser Extensions", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "Website Development",
        link: "/error",
        categories: [
          { name: "Landing Page", link: "/error" },
          { name: "Sales Page", link: "/error" },
          { name: "Business Websites", link: "/error" },
          { name: "E-Commerce", link: "/error" },
          { name: "Blogs", link: "/error" },
        ],
      },
      {
        id: 3,
        title: "Website Platforms",
        link: "/error",
        categories: [
          { name: "WordPress", link: "/error" },
          { name: "Wix", link: "/error" },
          { name: "Shopify", link: "/error" },
          { name: "Custom Website", link: "/error" },
        ],
      },
      {
        id: 4,
        title: "Mobile App Development",
        link: "/error",
        categories: [
          { name: "Website to Apps", link: "/error" },
          { name: "Apps Maintenance", link: "/error" },
          { name: "Android Apps Development", link: "/error" },
          { name: "IOS Apps Development", link: "/error" },
        ],
      },
      {
        id: 5,
        title: "Chatbots",
        link: "/error",
        categories: [
          { name: "Telegram Bot", link: "/error" },
          { name: "Discord Bot", link: "/error" },
          { name: "Chatbot Development", link: "/error" },
        ],
      },
      {
        id: 6,
        title: "Data",
        link: "/error",
        categories: [
          { name: "Data Analytics", link: "/error" },
          { name: "Data Entry", link: "/error" },
          { name: "Dashboard", link: "/error" },
          { name: "Databases", link: "/error" },
        ],
      },
      {
        id: 7,
        title: "AI Development",
        link: "/error",
        categories: [
          { name: "ChatGPT Applications", link: "/error" },
          { name: "AI Integrations", link: "/error" },
          { name: "AI Websites", link: "/error" },
          { name: "AI Agents", link: "/error" },
        ],
      },
      {
        id: 8,
        title: "Support & Cybersecurity",
        link: "/error",
        categories: [
          { name: "DevOps & Cloud", link: "/error" },
          { name: "Cybersecuritys", link: "/error" },
          { name: "Convert Files", link: "/error" },
        ],
      },
      {
        id: 9,
        title: "Website Maintenance",
        link: "/error",
        categories: [
          { name: "Speed Optimization", link: "/error" },
          { name: "Bug Fixes", link: "/error" },
          { name: "Backup & Migration", link: "/error" },
        ],
      },
      {
        id: 10,
        title: "QA & Review",
        link: "/error",
        categories: [
          { name: "User testing", link: "/error" },
          { name: "Software Testing", link: "/error" },
          { name: "Code Review", link: "/error" },
          { name: "Design Review", link: "/error" },
        ],
      },
      {
        id: 11,
        title: "Game Development",
        link: "/error",
        categories: [
          { name: "PC Games", link: "/error" },
          { name: "Mobile Games", link: "/error" },
          { name: "Console Games", link: "/error" },
          { name: "VR Games", link: "/error" },
        ],
      },
      {
        id: 12,
        title: "Miscellaneous",
        link: "/error",
        categories: [
          { name: "Electronic Development", link: "/error" },
          { name: "Blockchain & Cryptocurrency", link: "/error" },
          { name: "Jockey Games", link: "/error" },
        ],
      },
    ],
  },
];

export const digitalMarketing: MainCategory[] = [
  {
    mainCategory: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "Search",
        link: "/error",
        categories: [
          { name: "Search Engine Optimization (SEO)", link: "/error" },
          { name: "Search Engine Marketing (SEM)", link: "/error" },
          { name: "SEO E-Commerce", link: "/error" },
          { name: "Video SEO", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "Sosial",
        link: "/error",
        categories: [
          { name: "Social Media Marketing", link: "/error" },
          { name: "Influencer Marketing", link: "/error" },
          { name: "Community Management", link: "/error" },
          { name: "Paid Marketing", link: "/error" },
        ],
      },
      {
        id: 3,
        title: "Methods & Strategy",
        link: "/error",
        categories: [
          { name: "Video Marketing", link: "/error" },
          { name: "E-Commerce Marketing", link: "/error" },
          { name: "Marketing Strategy", link: "/error" },
          { name: "Web Analytics", link: "/error" },
          { name: "Email Marketing", link: "/error" },
          { name: "Affiliate Marketing", link: "/error" },
          { name: "Public Relations", link: "/error" },
          { name: "Marketing Advice", link: "/error" },
        ],
      },
      {
        id: 4,
        title: "Industry Promotions",
        link: "/error",
        categories: [
          { name: "Music Promotions", link: "/error" },
          { name: "Mobile App Marketing", link: "/error" },
          { name: "Book & eBook Marketing", link: "/error" },
          { name: "Podcast Marketing", link: "/error" },
        ],
      },
      {
        id: 5,
        title: "Miscellaneous",
        link: "/error",
        categories: [
          { name: "Event Marketing", link: "/error" },
          { name: "Other", link: "/error" },
        ],
      },
    ],
  },
];

export const writerTranslation: MainCategory[] = [
  {
    mainCategory: "Writer & Translation",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "Content Writing",
        link: "/error",
        categories: [
          { name: "Articles & Blog", link: "/error" },
          { name: "Podcast Writing", link: "/error" },
          { name: "Podcast Writing", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "Business Marketing Copy",
        link: "/error",
        categories: [
          { name: "Business Tagline", link: "/error" },
          { name: "Email Copy", link: "/error" },
          { name: "Sales Copy", link: "/error" },
          { name: "Ads Copy", link: "/error" },
          { name: "UX Writing", link: "/error" },
          { name: "Social Media Copy", link: "/error" },
          { name: "Product Description", link: "/error" },
        ],
      },
      {
        id: 3,
        title: "Book & eBook Publishing",
        link: "/error",
        categories: [
          { name: "Book & eBook Writing", link: "/error" },
          { name: "Beta Reading", link: "/error" },
          { name: "Book Editing", link: "/error" },
        ],
      },
      {
        id: 4,
        title: "Translation & Transcription",
        link: "/error",
        categories: [
          { name: "Translation", link: "/error" },
          { name: "Transcription", link: "/error" },
        ],
      },
      {
        id: 5,
        title: "Miscellaneous",
        link: "/error",
        categories: [
          { name: "Technical Writing", link: "/error" },
          { name: "Songwriting", link: "/error" },
          { name: "Custom Prompt Writing", link: "/error" },
        ],
      },
    ],
  },
];

export const videoAnimation: MainCategory[] = [
  {
    mainCategory: "Video & Animation",
    image:
      "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "Editing & Post Productions",
        link: "/error",
        categories: [
          { name: "Video Editing", link: "/error" },
          { name: "Visual Effects", link: "/error" },
          { name: "Intro & Outro Videos", link: "/error" },
          { name: "Video Template Editing", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "Social & Marketing Videos",
        link: "/error",
        categories: [
          { name: "Video Ads & Commercial", link: "/error" },
          { name: "Slideshow Videos", link: "/error" },
          { name: "Music Videos", link: "/error" },
        ],
      },
      {
        id: 3,
        title: "Animation",
        link: "/error",
        categories: [
          { name: "Character Animation", link: "/error" },
          { name: "Animation for Kids", link: "/error" },
          { name: "Animation GIFs", link: "/error" },
        ],
      },
      {
        id: 4,
        title: "Motion Graphics",
        link: "/error",
        categories: [
          { name: "Logo Animation", link: "/error" },
          { name: "Web Animation", link: "/error" },
          { name: "Text Animation", link: "/error" },
        ],
      },
      {
        id: 5,
        title: "Product Videos",
        link: "/error",
        categories: [
          { name: "Videographers", link: "/error" },
          { name: "Filmed Video Production", link: "/error" },
          { name: "Corporate Videos", link: "/error" },
          { name: "E-Commerce Product Videos", link: "/error" },
          { name: "App & Web Preview", link: "/error" },
        ],
      },
      {
        id: 6,
        title: "Miscellaneous",
        link: "/error",
        categories: [
          { name: "Article to Video", link: "/error" },
          { name: "Game Trailers", link: "/error" },
          { name: "Video Promotions", link: "/error" },
          { name: "Video Advice", link: "/error" },
          { name: "Others", link: "/error" },
        ],
      },
    ],
  },
];

export const musicAudio: MainCategory[] = [
  {
    mainCategory: "Music & Audio",
    image:
      "https://images.unsplash.com/photo-1593697820980-a9d1a839aff7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "Music & Voice Over Production",
        link: "/error",
        categories: [
          { name: "Voice Over", link: "/error" },
          { name: "Singer & Vocalist", link: "/error" },
          { name: "Jingle Intro", link: "/error" },
          { name: "Beat Making", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "Streaming & Audio",
        link: "/error",
        categories: [
          { name: "Podcast Production", link: "/error" },
          { name: "Audiobook", link: "/error" },
          { name: "Audio Ads Production", link: "/error" },
        ],
      },
    ],
  },
];

export const business: MainCategory[] = [
  {
    mainCategory: "Business",
    image:
      "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "General Administrative",
        link: "/error",
        categories: [
          { name: "Business Consulting", link: "/error" },
          { name: "HR Consulting", link: "/error" },
          { name: "Supply Chain Management", link: "/error" },
          { name: "Business Registration", link: "/error" },
          { name: "Business Plans", link: "/error" },
          { name: "Market Research", link: "/error" },
          { name: "Presentation", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "Financial & Legal Consulting",
        link: "/error",
        categories: [
          { name: "Tax Consulting", link: "/error" },
          { name: "Accounting & Bookkeeping", link: "/error" },
          { name: "Financial Consulting", link: "/error" },
          { name: "Legal & Document Contracts", link: "/error" },
          { name: "Legal Consulting", link: "/error" },
        ],
      },
      {
        id: 3,
        title: "Sales & Customer Care",
        link: "/error",
        categories: [
          { name: "Sales", link: "/error" },
          { name: "Lead Generation", link: "/error" },
          { name: "Call Center & Calling", link: "/error" },
          { name: "CRM Management", link: "/error" },
        ],
      },
      {
        id: 4,
        title: "Miscellaneous",
        link: "/error",
        categories: [
          { name: "Fact Checking", link: "/error" },
          { name: "Other", link: "/error" },
        ],
      },
    ],
  },
];

export const photography: MainCategory[] = [
  {
    mainCategory: "Photography",
    image:
      "https://images.unsplash.com/photo-1568819107248-c5ebc8b62fad?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/error",
    subCategory: [
      {
        id: 1,
        title: "Products  & Lifestyle",
        link: "/error",
        categories: [
          { name: "Product Photographers", link: "/error" },
          { name: "Food Photographers", link: "/error" },
          { name: "Fashion Photographers", link: "/error" },
        ],
      },
      {
        id: 2,
        title: "People Photo",
        link: "/error",
        categories: [
          { name: "Portrait Photographers", link: "/error" },
          { name: "Event Photographers", link: "/error" },
          { name: "Real Estate Photographers", link: "/error" },
        ],
      },
      {
        id: 3,
        title: "Miscellaneous",
        link: "/error",
        categories: [
          { name: "Local Photographers", link: "/error" },
          { name: "Styling & Beauty", link: "/error" },
          { name: "Others", link: "/error" },
        ],
      },
    ],
  },
];
