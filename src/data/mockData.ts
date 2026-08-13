import { ChatSession, ChatMessage, Agent, CannedResponse, LiveVisitor, WidgetConfig } from '../types';

export const INITIAL_AGENTS: Agent[] = [
  {
    id: 'agent_1',
    name: 'আরিফ রহমান',
    email: 'arif@support.bd',
    role: 'লিড সাপোর্ট',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    status: 'online',
    department: 'গ্রাহক সহায়তা (Customer Support)',
    activeChatsCount: 2
  },
  {
    id: 'agent_2',
    name: 'তানভীর আহমেদ',
    email: 'tanvir@support.bd',
    role: 'সাপোর্ট এজেন্ট',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    status: 'online',
    department: 'কারিগরি সেলস (Technical Sales)',
    activeChatsCount: 1
  },
  {
    id: 'agent_3',
    name: 'ফারহানা ইসলাম',
    email: 'farhana@support.bd',
    role: 'সাপোর্ট এজেন্ট',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    status: 'away',
    department: 'বিলিং ও পেমেন্ট (Billing)',
    activeChatsCount: 0
  }
];

export const INITIAL_WIDGET_CONFIG: WidgetConfig = {
  primaryColor: '#2563eb', // Blue-600
  headerTitle: 'লাইভ সাপোর্ট চ্যাট',
  welcomeMessage: '👋 আসসালামু আলাইকুম! আপনাকে কীভাবে সাহায্য করতে পারি?',
  botName: 'নোভা এআই সহকারী',
  botAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
  position: 'bottom-right',
  requirePreChatForm: true,
  enableAiAutoReply: false,
  aiSystemPrompt: 'আপনি নোভা সাপোর্ট সেন্টারের একজন বিনয়ী ও সহায়ক এআই অ্যাসিস্ট্যান্ট। বাংলায় অত্যন্ত প্রাঞ্জল ও দ্রুত উত্তর প্রদান করুন।',
  departments: ['গ্রাহক সহায়তা (Customer Support)', 'কারিগরি সেলস (Technical Sales)', 'বিলিং ও পেমেন্ট (Billing)', 'সাধারণ জিজ্ঞাসা (General)'],
  appsScriptUrl: 'https://script.google.com/macros/s/AKfycbwc3JsSAxjiMaln2A713d9TT0NZ3YQGIebEXrXIu8AgeLUGOWNMoJar_PihP2laJvFr/exec'
};

export const INITIAL_CANNED_RESPONSES: CannedResponse[] = [
  {
    id: 'canned_1',
    shortcut: '/greeting',
    title: 'স্বাগতম বার্তা',
    content: 'আসসালামু আলাইকুম! আমাদের লাইভ চ্যাটে আপনাকে স্বাগতম। আমি কীভাবে আপনাকে সাহায্য করতে পারি?',
    category: 'সাধারণ'
  },
  {
    id: 'canned_2',
    shortcut: '/pricing',
    title: 'প্রাইসিং ও প্যাকেজ তথ্য',
    content: 'আমাদের সার্ভিস প্যাকেজ ও মূল্য তালিকা দেখার জন্য অনুগ্রহ করে এই লিংকে ক্লিক করুন: https://example.com/pricing। আপনার পছন্দমত প্যাকেজ বেছে নিতে পারেন।',
    category: 'সেলস'
  },
  {
    id: 'canned_3',
    shortcut: '/refund',
    title: 'রিফান্ড ও ফেরত নীতি',
    content: 'আমাদের ১৪ দিনের ক্যাশব্যাক গ্যারান্টি রয়েছে। আপনার অর্ডার নম্বর বা ট্রানজেকশন আইডি প্রদান করলে দ্রুত রিফান্ড রিকোয়েস্ট প্রসেস করা হবে।',
    category: 'বিলিং'
  },
  {
    id: 'canned_4',
    shortcut: '/closing',
    title: 'ধন্যবাদান্তে চ্যাট সমাপ্তি',
    content: 'আপনাকে ধন্যবাদ! আপনার অন্য যেকোনো প্রয়োজনে আমাদের আবার জানাতে পারেন। ভালো থাকবেন!',
    category: 'সাধারণ'
  }
];

export const INITIAL_LIVE_VISITORS: LiveVisitor[] = [
  {
    id: 'vis_101',
    name: 'রাশেদুল করিম',
    email: 'rashel@gmail.com',
    location: 'ঢাকা, বাংলাদেশ',
    currentPage: '/pricing',
    timeOnPage: '৪ মিনিট ১২ সেকেন্ড',
    device: 'Chrome / Windows',
    ip: '103.205.132.42',
    referrer: 'Google Search',
    status: 'browsing'
  },
  {
    id: 'vis_102',
    name: 'মেহেদী হাসান',
    email: 'mehedi@yahoo.com',
    location: 'চট্টগ্রাম, বাংলাদেশ',
    currentPage: '/contact',
    timeOnPage: '২ মিনিট ৩০ সেকেন্ড',
    device: 'Safari / iPhone 14 Pro',
    ip: '118.179.22.10',
    referrer: 'Direct Link',
    status: 'browsing'
  }
];

export const INITIAL_CHATS: ChatSession[] = [
  {
    id: 'CHAT-01712345678-103.205.132.10',
    customerId: 'cust_1',
    customer: {
      id: 'cust_1',
      name: 'সাবিহা সুলতানা',
      email: 'sabiha@gmail.com',
      phone: '01712345678',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      location: 'ঢাকা, বাংলাদেশ',
      ipAddress: '103.205.132.10',
      browser: 'Chrome 122.0 / Windows 11',
      currentPageUrl: 'https://example.com/pricing',
      timeOnSite: '১৪ মিনিট',
      visitsCount: 3,
      tags: ['গুরুত্বপূর্ণ লিড', 'নতুন গ্রাহক'],
      notes: 'গ্রাহক নতুন প্যাকেজের বিস্তারিত জানতে চেয়েছেন।'
    },
    assignedAgentId: 'agent_1',
    assignedAgentName: 'আরিফ রহমান',
    assignedAgentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    department: 'গ্রাহক সহায়তা (Customer Support)',
    status: 'active',
    priority: 'high',
    subject: 'নতুন প্যাকেজ ও গুগল শিট ড্যাশবোর্ড তথ্য',
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    lastMessage: 'এই লাইভ চ্যাটের মেসেজগুলো কি গুগল শিটে অটোমেটিক সেভ থাকবে?',
    lastMessageTime: '২ মিনিট আগে',
    unreadCountCustomer: 0,
    unreadCountAgent: 1,
    isStarred: true
  },
  {
    id: 'CHAT-01819876543-103.112.50.46',
    customerId: 'cust_2',
    customer: {
      id: 'cust_2',
      name: 'হাসান মাহমুদ',
      email: 'hasan.m@gmail.com',
      phone: '01819876543',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      location: 'সিলেট, বাংলাদেশ',
      ipAddress: '103.112.50.46',
      browser: 'Firefox / macOS',
      currentPageUrl: 'https://example.com/services',
      timeOnSite: '৬ মিনিট',
      visitsCount: 1,
      tags: ['বিলিং জিজ্ঞাসা']
    },
    assignedAgentId: 'agent_2',
    assignedAgentName: 'তানভীর আহমেদ',
    assignedAgentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    department: 'বিলিং ও পেমেন্ট (Billing)',
    status: 'active',
    priority: 'medium',
    subject: 'পেমেন্ট মেথড সুবিধা',
    createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    lastMessage: 'বিকাশ ও রকেটের মাধ্যমে কি পেমেন্ট দেওয়া যাবে?',
    lastMessageTime: '১২ মিনিট আগে',
    unreadCountCustomer: 0,
    unreadCountAgent: 0,
    isStarred: false
  }
];

export const INITIAL_MESSAGES: Record<string, ChatMessage[]> = {
  'CHAT-01712345678-103.205.132.10': [
    {
      id: 'msg_101',
      chatId: 'CHAT-01712345678-103.205.132.10',
      senderRole: 'customer',
      senderName: 'সাবিহা সুলতানা',
      senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      content: 'আসসালামু আলাইকুম! আপনাদের সার্ভিস নিতে চাই।',
      timestamp: '১১:৩৫ AM',
      readStatus: 'read'
    },
    {
      id: 'msg_102',
      chatId: 'CHAT-01712345678-103.205.132.10',
      senderRole: 'bot',
      senderName: 'নোভা এআই সহকারী',
      senderAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      content: 'ওয়ালাইকুম আসসালাম সাবিহা! 👋 আপনাকে আরিফ রহমানের সাথে যুক্ত করা হচ্ছে।',
      timestamp: '১১:৩৫ AM',
      readStatus: 'read'
    },
    {
      id: 'msg_103',
      chatId: 'CHAT-01712345678-103.205.132.10',
      senderRole: 'agent',
      senderName: 'আরিফ রহমান',
      senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      content: 'হ্যালো সাবিহা! কীভাবে সাহায্য করতে পারি বলুন?',
      timestamp: '১১:৩৭ AM',
      readStatus: 'read'
    },
    {
      id: 'msg_105',
      chatId: 'CHAT-01712345678-103.205.132.10',
      senderRole: 'customer',
      senderName: 'সাবিহা সুলতানা',
      senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      content: 'এই লাইভ চ্যাটের মেসেজগুলো কি গুগল শিটে অটোমেটিক সেভ থাকবে?',
      timestamp: '১১:৪০ AM',
      readStatus: 'delivered'
    }
  ],
  'CHAT-01819876543-103.112.50.46': [
    {
      id: 'msg_201',
      chatId: 'CHAT-01819876543-103.112.50.46',
      senderRole: 'customer',
      senderName: 'হাসান মাহমুদ',
      senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      content: 'বিকাশ ও রকেটের মাধ্যমে কি পেমেন্ট দেওয়া যাবে?',
      timestamp: '১০:৫৫ AM',
      readStatus: 'read'
    }
  ]
};
