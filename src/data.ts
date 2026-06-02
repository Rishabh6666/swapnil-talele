import { InvestmentProduct, FinancialService, FAQItem, TestimonialItem } from './types';

export const BUSINESS_INFO = {
  name: "Swapnil Dhanraj Talele",
  designation: "AMFI Registered Mutual Fund Distributor",
  arn: "ARN-358795",
  phone: "+91 98336 74743",
  phoneRaw: "919833674743",
  email: "swapnil.talele@gmail.com",
  instagramUrl: "https://www.instagram.com/svpniltlele?igsh=cGc0d3Byc2pvdGtu",
  whatsappUrl: "https://wa.me/919833674743?text=Hello%20Swapnil%20ji%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20get%20a%20free%20financial%20consultation.",
  tagline: "An investment in knowledge pays the best interest.",
  taglineAuthor: "Benjamin Franklin"
};

export const PRODUCTS: InvestmentProduct[] = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    iconName: "TrendingUp",
    shortDesc: "Diversify your wealth across equity, debt, or hybrid funds powered by expert fund managers.",
    longDesc: "Mutual Funds are one of the most flexible and rewarding investment vehicles available to retail investors in India. By pooling capital, they offer diversification benefits and institutional-grade management even for micro-investments.",
    features: [
      "Systematic Investment Plan (SIP) starting at just ₹500/month",
      "Types: Equity (Growth), Debt (Stability), and Hybrid (Balanced)",
      "ELSS (Equity Linked Savings Schemes) for tax deductions under Sec 80C",
      "Highly regulated by SEBI and governed under strict investment mandates"
    ],
    suitability: "Ideal for long-term wealth creation, compounding benefits, and goal-oriented investment plans such as education, retirement, and buying a house."
  },
  {
    id: "fixed-deposits",
    title: "Fixed Deposits (FD)",
    iconName: "ShieldCheck",
    shortDesc: "Secure guaranteed returns with high-safety corporate or bank fixed deposit instruments.",
    longDesc: "Fixed Deposits are a classic choice for risk-averse investors needing regular interest or absolute capital preservation. We distribute high-tier corporate FDs that yield superior rates compared to ordinary savings accounts.",
    features: [
      "Guaranteed maturity payouts with fixed interest rates",
      "Flexible payout frequencies: Monthly, Quarterly, or Cumulative",
      "High creditworthiness ratings (AAA / AA+) from CRISIL and ICRA",
      "Emergency liquidity through easy premature withdrawal features"
    ],
    suitability: "Perfect for senior citizens, building emergency reserves, or storing short-term capital where preservation of absolute principal is paramount."
  },
  {
    id: "bonds",
    title: "Bonds & NCDs",
    iconName: "FileCheck",
    shortDesc: "Earn fixed, regular interest with capital security through Sovereign, Public Sector, or Corporate Bonds.",
    longDesc: "Debt securities or bonds allow investors to lend capital to premium enterprises or federal agencies in exchange for periodic interest (coupons). We distribute high-quality Non-Convertible Debentures (NCDs) and sovereign options.",
    features: [
      "Predictable income stream via monthly, semi-annual, or annual interest payments",
      "Sovereign Gold Bonds (SGB) or Capital Gain Tax-Saving Bonds (Sec 54EC)",
      "Diversification of risk away from standard equity market volatility",
      "Listed on major exchanges (NSE/BSE) for market exit opportunities"
    ],
    suitability: "Suited for moderate investors seeking steady streams of cash flow with significantly lower volatility than public equity markets."
  }
];

export const FINANCIAL_SERVICES: FinancialService[] = [
  {
    id: "financial-assessment",
    title: "Financial Assessment",
    iconName: "Compass",
    shortDesc: "A complete review of your current cash flow, liabilities, and assets to discover your net worth baseline.",
    longDesc: "We construct a comprehensive map of your active capital. By matching income schedules against debt obligations and passive savings, you get a clear look at your investable surplus and general financial health index.",
    checklist: [
      "Asset & Liability cataloging",
      "Cash surplus discovery analysis",
      "Emergency fund adequacy check",
      "Debt consolidation strategies"
    ]
  },
  {
    id: "tax-assessment",
    title: "Tax Planning Index",
    iconName: "Receipt",
    shortDesc: "Structure your personal and business wealth configurations to legal tax-minimizing advantages.",
    longDesc: "Investing is not just about raw returns, but net post-tax returns. We help you explore ELSS mutual funds, capital gains exemptions under Sec 54EC, and other legitimate avenues that protect your hard-earned profits from high tax tax-brackets.",
    checklist: [
      "ELSS allocation matching Sec 80C thresholds",
      "Capital gains tax mitigation planning",
      "Sovereign Gold Bond tax exemption guidelines",
      "Optimum asset location based on tax brackets"
    ]
  },
  {
    id: "child-future",
    title: "Child's Future Planning",
    iconName: "GraduationCap",
    shortDesc: "Build a dedicated, inflation-indexed corpus for your children's higher education and life milestones.",
    longDesc: "The cost of college and professional training is rising at double the rate of general retail inflation. We calculate target expenses and build a disciplined equity-SIP compounding plan mapped strictly to your children's future timelines.",
    checklist: [
      "In-depth education inflation modeling",
      "Staggered maturity goal schedules",
      "Goal-committed mutual fund selections",
      "Risk transition plans as academic key dates approach"
    ]
  },
  {
    id: "retirement-planning",
    title: "Retirement Security",
    iconName: "Palmtree",
    shortDesc: "Build a robust financial nest-egg that delivers predictable monthly earnings throughout your non-working years.",
    longDesc: "True financial independence means your money works so you do not have to. We help build a multi-asset corpus containing growth and yield instruments to cover healthcare, comfort, and general living inflation, tax-efficiently.",
    checklist: [
      "Retirement lifestyle cost modeling",
      "Post-retirement Systematic Withdrawal Plan (SWP) strategies",
      "Annuity vs. Compounding Mutual Fund allocations",
      "Protection against hyper-inflation scenarios"
    ]
  },
  {
    id: "portfolio-review",
    title: "Portfolio Health Review",
    iconName: "Activity",
    shortDesc: "Audit your current scattered investments for high fees, poor performers, and underperforming funds.",
    longDesc: "Many investors suffer from 'portfolio clutter'—owning dozen-plus mutual funds which often duplicate holdings and dial down returns. We consolidate, re-balance, and clean your portfolio for maximum cost-effectiveness and risk control.",
    checklist: [
      "Over-diversification & asset overlap analysis",
      "Expense ratio and performance efficiency test",
      "Re-balancing toward current optimal asset-allocation",
      "Exit strategy for legacy underperforming assets"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Personalized Investment Support",
    desc: "No cookie-cutter templates. Every selection, asset recommendation, and duration is tailored to your unique requirements.",
    iconName: "UserCheck"
  },
  {
    title: "Goal-Based Investment Guidance",
    desc: "We anchor your hard-earned money to tangible ambitions—education, houses, early retirement, not arbitrary tickers.",
    iconName: "Target"
  },
  {
    title: "Long-Term Wealth Creation",
    desc: "Emphasizing the magical power of compounding over speculative daily market rumors and quick gains.",
    iconName: "Sparkles"
  },
  {
    title: "Risk Assessment Protocols",
    desc: "We analyze your psychological risk elasticity to safeguard against selling assets in brief market downturns.",
    iconName: "AlertTriangle"
  },
  {
    title: "Transparent & Honest Guidance",
    desc: "Strict adherence to AMFI guidelines. Clear details about expense ratios, past performances, and exit clauses.",
    iconName: "Eye"
  },
  {
    title: "Dedicated Ongoing Support",
    desc: "Constant tracking, goal-matching adjustments, and instant availability via WhatsApp and call for continuous peace of mind.",
    iconName: "HeartHandshake"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Rajesh K. Mehta",
    role: "Senior IT Consultant, Mumbai",
    text: "Swapnil helped me de-clutter my mutual fund portfolio. I had overlapping funds costing me high fees. His systematic plan has set my retirement planning on autopilot. A distributor of immense integrity!",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Dr. Anjali Deshmukh",
    role: "Pediatrician, Pune",
    text: "I had zero time to manage savings due to my clinic schedule. Swapnil tailors everything to my goals. His Child Higher Education model is clear and easy to understand. I highly recommend him!",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Vikram R. Saini",
    role: "Business Owner, Thane",
    text: "Swapnil's tax-saving suggestions combined corporate Fixed Deposits and ELSS Mutual Funds perfectly. He is always highly responsive on WhatsApp whenever I require support. Highly professional!",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is an AMFI Registered Mutual Fund Distributor?",
    answer: "An Association of Mutual Funds in India (AMFI) Registered Mutual Fund Distributor is an authorized professional holding a valid ARN (AMFI Registration Number) who is licensed to distribute mutual fund schemes of various fund houses and advise investors on suitable options based on asset suitability and regulatory standards.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "What is the difference between Direct and Regular Mutual Fund plans?",
    answer: "Direct plans are bought directly from the AMC without agent commission. Regular plans are invested through Registered Distributors who provide personalized goal coaching, regular portfolio reviews, systematic manual transitions, and consolidated execution support. The small cost difference is often outstandingly offset by disciplined long-term goal enforcement.",
    category: "mutual_funds"
  },
  {
    id: "faq-3",
    question: "How do I choose between an SIP and a Lumpsum investment?",
    answer: "Systematic Investment Plans (SIP) are ideal for regular salaried people as they invest fixed cash monthly, benefiting from Rupee Cost Averaging (buying more units when markets are low). Lumpsum is suited when you receive sudden capital like bonuses, inheritances, or land sales, although it may require structured tactical allocation over time.",
    category: "mutual_funds"
  },
  {
    id: "faq-4",
    question: "Are Fixed Deposits and Corporate Bonds safe?",
    answer: "FDs distributed by regulated institutions and AA/AAA credit-rated corporate bonds offer strong safety margins and fixed yields. However, all corporate exposures carry minimal credit risk, which is why we strictly distribute options with the highest credit scores from agencies like CRISIL or ICRA.",
    category: "planning"
  },
  {
    id: "faq-5",
    question: "How do we start our journey together, and is the first call paid?",
    answer: "Our first conceptual consultation is completely free of charge! We will schedule a virtual or telephonic call to map your current net worth, understand your core objectives, and draft a high-level roadmap. Only when you're fully satisfied do we begin executions and allocations.",
    category: "planning"
  }
];
