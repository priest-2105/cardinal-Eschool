const cardinalConfig = {
    appName: "Cardinal E School",
    version: "1.0.0",
    description: "A modern e-learning platform for seamless school management.",
    apiBaseURL: "",
    contactInfo: {
      phone: "+234 01 2345 6789",
      email: "online@cardinalschools.com",
      address: "123 Cardinal Street, Lagos, Nigeria",
    },
    socialInfo: {
      facebook: "https://www.facebook.com/share/1A5tjqXiNN/",
      X: "https://x.com/@CardinalEschool",
      tikTok: "https://tiktok.com/@cardinal.eschool",
      youtube: "https://youtube.com/@cardinale-school?si=zGTvnW1KDIeM_CGt",
      whatsapp: "https://wa.link/bbt2vr",
      instagram: "https://www.instagram.com/cardinaleschool?igsh=eDd1ejdubXo5OWpt",
    },
    features: {
      enableNotifications: true,
      enableDarkMode: false,
      supportedLanguages: ["en", "fr", "es"],
    },
    developerInfo: {
      name: "Cardinal Tech Team", 
      website: "https://cardinaleschool.com",
      supportEmail: "support@cardinaleschool.com",
    },
    routes: {
        home: "/",
        login: "/login",
        signup: "/signup",
        aboutUs: "/about",
        contactUs: "/contact",
        testPrep: "/text-prep",
        careers: "/team",
        courses: "/courses",
        members: "/team/#ourteam",
        faq: "/faq", 
        dashboard: "/dashboard",
        privacyPolicy: "/privacy-policy", 
      },
  };
  
  export default cardinalConfig;
  