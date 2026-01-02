# Clinical AI Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)

A modern, interactive dashboard for clinical AI benchmarking and healthcare analytics. Built with vanilla HTML, CSS, and JavaScript.

## 🖥️ Live Demo

[View Live Demo →](https://daneshshokri94.github.io/Clinical-AI-Dashboard/)

## 📸 Screenshots

![Dashboard Preview](assets/images/dashboard-preview.gif)

## ✨ Features

- **Interactive Dashboard** — Real-time visualization of clinical data
- **ML Model Comparison** — Side-by-side comparison of 6 classifiers
- **Exploratory Data Analysis** — Feature distributions and correlations
- **NLP & Clinical Notes** — Named Entity Recognition benchmarks
- **Bias & Fairness Analysis** — AI fairness metrics per NIST guidelines

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Charts** | Chart.js 3.9.1 |
| **Styling** | Custom CSS, Flexbox, Grid |
| **Icons** | SVG Icons |

## 📁 Project Structure

```
clinical-ai-dashboard/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript logic
├── data/
│   └── heart.csv       # UCI Heart Disease dataset
├── assets/
│   └── images/         # Screenshots & assets
├── docs/
│   └── API.md          # Documentation
├── .gitignore
├── LICENSE
└── README.md
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/clinical-ai-dashboard.git
   cd clinical-ai-dashboard
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct open
   open index.html
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Deploy to GitHub Pages**
   ```bash
   # Push to main branch, then:
   # Settings → Pages → Source: main branch
   ```

## 📊 Dataset

This dashboard uses the **UCI Heart Disease Dataset**:

- **Source**: [UCI ML Repository](https://archive.ics.uci.edu/ml/datasets/heart+disease)
- **Samples**: 920 patients
- **Features**: 13 clinical attributes
- **Institutions**: Cleveland, Hungary, Switzerland, VA Long Beach

## 🤖 Models Benchmarked

| Model | Accuracy | AUC-ROC |
|-------|----------|---------|
| Random Forest | 85.2% | 0.918 |
| XGBoost | 84.1% | 0.905 |
| Neural Network | 83.9% | 0.897 |
| SVM | 83.6% | 0.891 |
| Logistic Regression | 82.0% | 0.879 |
| KNN | 78.7% | 0.842 |

## 📚 References

- Detrano et al. (1989) - Original dataset, *American Journal of Cardiology*
- NIST AI Risk Management Framework (AI RMF 1.0)
- IBM AIF360: Fairness metrics toolkit

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Danesh Shokri**

- LinkedIn: [@danesh-shokri](https://linkedin.com/in/danesh-shokri)
- GitHub: [@danesh-shokri](https://github.com/danesh-shokri)

---

⭐ Star this repo if you find it useful!
