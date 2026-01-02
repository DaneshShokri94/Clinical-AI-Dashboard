/**
 * ClinicalAI Dashboard - Main JavaScript
 * ======================================
 * Heart Disease Prediction Benchmark Dashboard
 */

// ========================================
// Tab Navigation
// ========================================
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
    
    // Initialize charts for the tab
    setTimeout(() => initCharts(tabId), 100);
}

// ========================================
// Chart Initialization Router
// ========================================
function initCharts(tabId) {
    switch(tabId) {
        case 'dashboard':
            initDashboard();
            break;
        case 'eda':
            initEDA();
            break;
        case 'models':
            initModels();
            break;
        case 'nlp':
            initNLP();
            break;
    }
}

// ========================================
// Dashboard Charts
// ========================================
function initDashboard() {
    // Age Distribution Chart
    const ageCtx = document.getElementById('ageChart');
    if (ageCtx && !ageCtx.chart) {
        ageCtx.chart = new Chart(ageCtx, {
            type: 'bar',
            data: {
                labels: ['29-39', '40-49', '50-59', '60-69', '70-77'],
                datasets: [
                    {
                        label: 'Healthy',
                        data: [52, 98, 186, 142, 31],
                        backgroundColor: '#10b981',
                        borderRadius: 4
                    },
                    {
                        label: 'Disease',
                        data: [28, 74, 158, 121, 30],
                        backgroundColor: '#ef4444',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // Institution Distribution Chart
    const instCtx = document.getElementById('instChart');
    if (instCtx && !instCtx.chart) {
        instCtx.chart = new Chart(instCtx, {
            type: 'doughnut',
            data: {
                labels: ['Cleveland (46%)', 'Hungary (36%)', 'Switzerland (8%)', 'VA (6%)'],
                datasets: [{
                    data: [139, 106, 10, 12],
                    backgroundColor: ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // Correlation Chart
    const corrCtx = document.getElementById('corrChart');
    if (corrCtx && !corrCtx.chart) {
        corrCtx.chart = new Chart(corrCtx, {
            type: 'bar',
            data: {
                labels: ['thal', 'ca', 'exang', 'cp', 'oldpeak', 'slope', 'sex', 'age', 'trestbps', 'chol', 'restecg', 'fbs', 'thalach'],
                datasets: [{
                    label: 'Correlation',
                    data: [0.52, 0.47, 0.44, 0.43, 0.43, 0.35, 0.28, 0.23, 0.15, 0.09, 0.14, 0.03, -0.42],
                    backgroundColor: (ctx) => ctx.raw >= 0 ? '#ef4444' : '#10b981',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { min: -0.5, max: 0.6 }
                }
            }
        });
    }
}

// ========================================
// EDA Charts
// ========================================
function initEDA() {
    const cpCtx = document.getElementById('cpChart');
    if (cpCtx && !cpCtx.chart) {
        cpCtx.chart = new Chart(cpCtx, {
            type: 'bar',
            data: {
                labels: ['Typical', 'Atypical', 'Non-Anginal', 'Asymptomatic'],
                datasets: [
                    {
                        label: 'Healthy',
                        data: [16, 41, 68, 384],
                        backgroundColor: '#10b981',
                        borderRadius: 4
                    },
                    {
                        label: 'Disease',
                        data: [7, 9, 18, 377],
                        backgroundColor: '#ef4444',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
}

// ========================================
// Model Comparison Charts
// ========================================
function initModels() {
    const cvCtx = document.getElementById('cvChart');
    if (cvCtx && !cvCtx.chart) {
        cvCtx.chart = new Chart(cvCtx, {
            type: 'bar',
            data: {
                labels: ['Random Forest', 'XGBoost', 'SVM', 'Neural Net', 'Log Reg', 'KNN'],
                datasets: [
                    {
                        label: 'Accuracy',
                        data: [0.852, 0.841, 0.836, 0.839, 0.820, 0.787],
                        backgroundColor: '#6366f1',
                        borderRadius: 4
                    },
                    {
                        label: 'AUC-ROC',
                        data: [0.918, 0.905, 0.891, 0.897, 0.879, 0.842],
                        backgroundColor: '#10b981',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                },
                scales: {
                    y: { min: 0.7, max: 1 }
                }
            }
        });
    }
}

// ========================================
// NLP Charts
// ========================================
function initNLP() {
    const nerCtx = document.getElementById('nerChart');
    if (nerCtx && !nerCtx.chart) {
        nerCtx.chart = new Chart(nerCtx, {
            type: 'bar',
            data: {
                labels: ['Problem', 'Treatment', 'Test', 'Drug', 'Anatomy', 'Symptom', 'Procedure'],
                datasets: [
                    {
                        label: 'Precision',
                        data: [91.2, 89.4, 88.1, 92.3, 86.7, 87.9, 90.1],
                        backgroundColor: '#6366f1',
                        borderRadius: 4
                    },
                    {
                        label: 'Recall',
                        data: [88.7, 87.2, 86.4, 90.8, 84.2, 85.6, 88.3],
                        backgroundColor: '#8b5cf6',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
}

// ========================================
// Initialize on DOM Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});
