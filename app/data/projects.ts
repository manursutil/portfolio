export const projects = [
  {
    title: "Neural Network from Scratch",
    category: "Featured Projects",
    image: "/neuralnet.jpg",
    alt: "Neural Network",
    description:
      "A minimalist implementation of a fully connected feedforward neural network using only NumPy, built to understand the inner workings of deep learning at a low level.",
    techStack: "Python, NumPy",
    links: [
      { label: "GitHub", url: "https://github.com/manursutil/simple-nn-numpy" },
    ],
  },
  {
    title: "Brain MRI Classifier",
    category: "Featured Projects",
    image: "/brainMri.png",
    alt: "Brain MRI Classifier",
    description:
      "End-to-end MLOps pipeline for brain tumor MRI classification using FastAPI and Docker. Includes inference API, evaluation metrics, and health checks. ",
    techStack:
      "Python, FastAPI, PyTorch, Pandas, NumPy, Matplotlib, Docker, CI/CD",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/manursutil/brain-mri-classifier",
      },
    ],
  },
  {
    title: "Child Obesity Evaluation",
    category: "Featured Projects",
    image: "/childObesity.png",
    alt: "Child Obesity Evaluation",
    description:
      "Pediatric health tool using WHO standards and Gemini AI to assess growth and generate meal plans. Built with FastAPI and React. ",
    techStack: "Python, React, Gemini API, JavaScript",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/manursutil/obesity",
      },
      { label: "Live Site", url: "https://bmi-frontend-seven.vercel.app/" },
    ],
  },
  {
    title: "Health Risk Predictor",
    category: "Featured Projects",
    image: "/health_risk.png",
    alt: "Health Risk Predictor",
    description:
      "A Machine Learning App that predicts the risk of diabetes and heart disease based on user inputs using a trained Random Forest model.  ",
    techStack:
      "Python, Streamlit, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, SHAP",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/manursutil/health-risk",
      },
      { label: "Live Site", url: "https://health-risk.streamlit.app/" },
    ],
  },
  {
    title: "This Portfolio",
    category: "Web & UI Projects",
    image: "/portfolio.png",
    alt: "Portfolio Website",
    description:
      "This very site! Built with Next.js 14, Tailwind CSS and shadcn/ui. Includes dark/light mode toggle, Konami Code easter egg, and fully responsive layout.",
    techStack: "Next.js, Tailwind, Vercel, Shadcn UI, TypeScript",
    links: [
      { label: "GitHub", url: "https://github.com/manursutil/portfolio" },
    ],
  },
  {
    title: "Full-Stack Notes Web App",
    category: "Web & UI Projects",
    image: "/notes.png",
    alt: "Notes Web App",
    description:
      "A full-featured notes app built with MongoDB for database, Express.js and Node.js for REST API, React + Vite for the frontend. It also includes user sign-up and loging with JWT",
    techStack: "React, MongoDB, Express, Node.js, JavaScript",
    links: [
      { label: "GitHub", url: "https://github.com/manursutil/notes-app" },
    ],
  },
  {
    title: "Space Invaders",
    category: "Web & UI Projects",
    image: "/space.png",
    alt: "Space Invaders",
    description:
      "A fully playable Space Invaders–style game built from scratch with HTML5 Canvas + Vanilla JavaScript, featuring levels, power-ups, audio effects, and a persistent leaderboard.",
    techStack: "HTML, JavaScript, CSS",
    links: [
      { label: "GitHub", url: "https://github.com/manursutil/space-invaders" },
      {
        label: "Live Site",
        url: "https://manursutil.github.io/space-invaders/",
      },
    ],
  },
  {
    title: "El Punto Crítico",
    category: "Other Projects",
    image: "/politicalblog.png",
    alt: "Political Blog",
    description:
      "A platform to publish critical essays on politics and culture. Built with Next.js and Sanity CMS and deployed on Vercel. Includes a minimalist blog engine, theme toggling, and markdown rendering.",
    techStack: "Next.js, Tailwind, Vercel, TypeScript, Sanity CMS",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/manursutil/el-punto-critico-blog",
      },
      { label: "Live Site", url: "https://el-punto-critico-blog.vercel.app/" },
    ],
  },
  {
    title: "Sudoku Solver & Generator",
    category: "Other Projects",
    image: "/sudoku.png",
    alt: "Sudoku Solver",
    description:
      "A fully functional Sudoku solver and generator built in Python with a graphical user interface. Implements backtracking to solve puzzles and algorithmic random board generation.",
    techStack: "Python, tkinter (for GUI)",
    links: [
      { label: "GitHub", url: "https://github.com/manursutil/sudoku-solver" },
    ],
  },
  {
    title: "Snippetbox",
    category: "Other Projects",
    image: "/snippetbox.png",
    alt: "Snippetbox",
    description:
      "A minimalist web app for storing and sharing text snippets. Built with Go from scratch using only the standard library, it features custom routing, HTML templating, secure authentication, and CSRF protection. Based on Alex Edwards' Let's Go book. ",
    techStack: "Go, MySQL",
    links: [
      { label: "GitHub", url: "https://github.com/manursutil/snippetbox" },
    ],
  },
];
