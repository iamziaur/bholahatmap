
export interface Union {
  id: string;
  name: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ContactLink {
  name: string;
  designation: string;
  phone: string;
  icon: string;
  iconColor: string;
  profileLink?: string;
}

export const BHOLAHAT_UNIONS: Union[] = [
  { id: '1', name: 'ভোলাহাট ইউনিয়ন', description: 'ভোলাহাট সদর ও তৎসংলগ্ন এলাকা।' },
  { id: '2', name: 'গোহালবাড়ী ইউনিয়ন', description: 'গোহালবাড়ী ও পার্শ্ববর্তী গ্রামসমূহ।' },
  { id: '3', name: 'দলদলী ইউনিয়ন', description: 'দলদলী (জলধারী) অঞ্চলের ভোটারদের জন্য।' },
  { id: '4', name: 'জামবাড়ীয়া ইউনিয়ন', description: 'জামবাড়ীয়া এলাকার সকল ভোটকেন্দ্র।' }
];

export const TOP_CONTACTS: ContactLink[] = [
  { 
    name: 'জেলা প্রশাসক, চাঁপাইনবাবগঞ্জ', 
    designation: 'জেলা রিটার্নিং অফিসার', 
    phone: '+8801318320100',
    icon: 'fa-solid fa-building-columns',
    iconColor: 'bg-blue-100 text-blue-700'
  },
  { 
    name: 'গৌতম কুমার বিশ্বাস', 
    designation: 'পুলিশ সুপার, চাঁপাইনবাবগঞ্জ', 
    phone: '+8801320125500',
    icon: 'fa-solid fa-award',
    iconColor: 'bg-indigo-100 text-indigo-700'
  },
  { 
    name: 'মোঃ ইয়াসির আরাফাত', 
    designation: 'অতিরিক্ত পুলিশ সুপার (সদর সার্কেল)', 
    phone: '+8801320125544',
    icon: 'fa-solid fa-user-shield',
    iconColor: 'bg-cyan-100 text-cyan-700'
  },
  { 
    name: 'মোঃ একরামুল হোসাইন', 
    designation: 'অফিসার ইনচার্জ, ভোলাহাট থানা', 
    phone: '+8801320125673',
    icon: 'fa-solid fa-user-tie',
    iconColor: 'bg-emerald-100 text-emerald-700'
  },
  { 
    name: 'কন্ট্রোল রুম', 
    designation: 'পুলিশ সুপার কার্যালয়, চাঁপাইনবাবগঞ্জ', 
    phone: '+8801320126498',
    icon: 'fa-solid fa-tower-broadcast',
    iconColor: 'bg-amber-100 text-amber-700'
  },
  { 
    name: 'ডিউটি অফিসার', 
    designation: 'ভোলাহাট থানা', 
    phone: '+8801320125678',
    icon: 'fa-solid fa-shield-halved',
    iconColor: 'bg-slate-200 text-slate-700'
  },
  { 
    name: 'ভোলাহাট ফায়ার সার্ভিস', 
    designation: 'জরুরি সেবা', 
    phone: '+8801901022311',
    icon: 'fa-solid fa-fire-extinguisher',
    iconColor: 'bg-red-100 text-red-700'
  },
];

export const GUIDANCE_CONTACTS: ContactLink[] = [
  { 
    name: 'গৌতম কুমার বিশ্বাস', 
    designation: 'পুলিশ সুপার, চাঁপাইনবাবগঞ্জ', 
    phone: '+8801320125500',
    icon: 'fa-solid fa-user-shield',
    iconColor: 'text-indigo-600',
    profileLink: 'https://police.chapainawabganj.gov.bd/bn/site/officer_list/xSCR-%E0%A6%9C%E0%A6%A8%E0%A6%BE%E0%A6%AC-%E0%A6%8F-%E0%A6%8F%E0%A6%87%E0%A6%9A-%E0%A6%8F%E0%A6%AE-%E0%A6%86%E0%A6%AB%E0%A6%AC%E0%A6%A6%E0%A7%81%E0%A6%B0-%E0%A6%B0%E0%A6%95%E0%A6%BF%E0%A6%AC-%E0%A6%AC%E0%A6%BF%E0%A6%AA%E0%A6%BF%E0%A6%8F%E0%A6%AE-%E0%A6%AA%E0%A6%BF%E0%A6%AA%E0%A6%BF%E0%A6%8F%E0%A6%AE-%E0%A6%AC%E0%A6%BE%E0%A6%B0'
  },
  { 
    name: 'মোঃ ইয়াসির আরাফাত', 
    designation: 'অতিরিক্ত পুলিশ সুপার (সদর সার্কেল)', 
    phone: '+8801320125544',
    icon: 'fa-solid fa-user-tie',
    iconColor: 'text-blue-600',
    profileLink: 'https://police.chapainawabganj.gov.bd/bn/site/officer_list/%E0%A6%AE%E0%A7%8B%E0%A6%83-%E0%A6%87%E0%A7%9F%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%B0-%E0%A6%86%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BE%E0%A6%A4'
  },
  { 
    name: 'মোঃ একরামুল হোসাইন', 
    designation: 'অফিসার ইনচার্জ, ভোলাহাট থানা', 
    phone: '+8801320125673',
    icon: 'fa-solid fa-user-check',
    iconColor: 'text-emerald-600',
    profileLink: 'https://police.chapainawabganj.gov.bd/bn/site/officer_list/%E0%A6%9C%E0%A6%A8%E0%A6%BE%E0%A6%AC-%E0%A6%AE%E0%A7%8B%E0%A6%83-%E0%A6%AE%E0%A6%A4%E0%A6%BF%E0%A6%89%E0%A6%B0-%E0%A6%B0%E0%A6%B9%E0%A6%AE%E0%A6%BE%E0%A6%A8'
  }
];
