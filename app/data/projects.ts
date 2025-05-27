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
];
