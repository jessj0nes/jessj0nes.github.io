// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-work",
          title: "work",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV generated from site data; download the PDF for the full version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-awarded-the-hargrave-prize-for-best-final-year-bsc-thesis-and-the-nag-hpc-student-prize-at-the-university-of-bristol",
          title: 'Awarded the Hargrave Prize for best final-year BSc thesis and the NAG HPC...',
          description: "",
          section: "News",},{id: "news-started-phd-in-robotics-amp-amp-autonomous-systems-at-the-university-of-bristol-supervised-by-prof-sabine-hauert-obe-and-prof-raul-santos-rodriguez-through-the-farscope-cdt",
          title: 'Started PhD in Robotics &amp;amp;amp; Autonomous Systems at the University of Bristol, supervised...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-aamas-2026-assessing-vlm-driven-semantic-affordance-inference-for-non-humanoid-robot-morphologies-arxiv-preprint-doi",
          title: 'Paper accepted at AAMAS 2026: Assessing VLM-Driven Semantic Affordance Inference for Non-Humanoid Robot...',
          description: "",
          section: "News",},{id: "projects-vlm-affordance-inference",
          title: 'VLM Affordance Inference',
          description: "Assessing VLM-driven semantic affordance inference for non-humanoid robot morphologies (AAMAS 2026).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-marl-for-swarm-communication",
          title: 'MARL for Swarm Communication',
          description: "A multi-agent reinforcement learning framework for learning abstract communications with DOTS swarm robots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-3d-corallite-reconstruction",
          title: '3D Corallite Reconstruction',
          description: "Volumetric vision-transformers and topological loss for 3D individual corallite reconstruction (BSc thesis, Hargrave Prize).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-lattice-boltzmann-hpc",
          title: 'Lattice-Boltzmann HPC',
          description: "Distributed optimisations of the Lattice-Boltzmann method for computational fluid dynamics (NAG HPC Student Prize).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-casm-technology-generative-ai-detection-and-analysis",
          title: 'CASM Technology — Generative AI Detection and Analysis',
          description: "Research and development tools to support the surfacing, identification and analysis of misinformation and misrepresentation in social media content through the use of Generative AI tools.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-eco-explorer",
          title: 'Eco-Explorer',
          description: "Dual-purpose app providing an interactive educational experience for young people, and contributing to open scientific bio-diversity monitoring records.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-multi-robot-camera-control",
          title: 'Multi-Robot Camera Control',
          description: "Full-stack system for simultaneous control of multiple robotic camera dollies at Motion Impossible.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/jess-jones-cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%73%73.%6A%6F%6E%65%73@%62%72%69%73%74%6F%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jess-jones-b92b1b1a0", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jessj0nes", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
