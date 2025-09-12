// Sistema de Feature Flags
class FeatureFlags {
    constructor() {
        this.flags = {
            darkMode: false,
            newHeader: false,
            analytics: false,
            premiumFeatures: false
        };
        
        this.loadFlags();
        this.applyFlags();
    }

    // Carrega flags do localStorage
    loadFlags() {
        const savedFlags = localStorage.getItem('featureFlags');
        if (savedFlags) {
            this.flags = { ...this.flags, ...JSON.parse(savedFlags) };
        }
    }

    // Salva flags no localStorage
    saveFlags() {
        localStorage.setItem('featureFlags', JSON.stringify(this.flags));
    }

    // Aplica todas as flags
    applyFlags() {
        Object.keys(this.flags).forEach(flag => {
            this.toggleFeature(flag, this.flags[flag]);
        });
    }

    // Alterna uma feature flag
    toggleFeature(flagName, enabled = null) {
        if (enabled === null) {
            this.flags[flagName] = !this.flags[flagName];
        } else {
            this.flags[flagName] = enabled;
        }

        this.saveFlags();
        this.applyFeature(flagName);
    }

    // Aplica uma feature específica
    applyFeature(flagName) {
        switch (flagName) {
            case 'darkMode':
                this.toggleDarkMode();
                break;
            case 'newHeader':
                this.toggleNewHeader();
                break;
            case 'analytics':
                this.toggleAnalytics();
                break;
            case 'premiumFeatures':
                this.togglePremiumFeatures();
                break;
        }
    }

    // Modo escuro
    toggleDarkMode() {
        const body = document.body;
        if (this.flags.darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Novo cabeçalho
    toggleNewHeader() {
        const title = document.getElementById('main-title');
        if (this.flags.newHeader) {
            title.classList.add('new-header');
            title.textContent = '🌟 Bem-vindo ao Futuro do Desenvolvimento!';
        } else {
            title.classList.remove('new-header');
            title.textContent = 'Bem-vindo ao Demo TBD';
        }
    }

    // Analytics
    toggleAnalytics() {
        const analyticsSection = document.getElementById('analytics-section');
        if (this.flags.analytics) {
            analyticsSection.style.display = 'block';
            this.trackEvent('analytics_enabled');
        } else {
            analyticsSection.style.display = 'none';
        }
    }

    // Recursos premium
    togglePremiumFeatures() {
        const premiumCard = document.getElementById('premium-card');
        if (this.flags.premiumFeatures) {
            premiumCard.style.display = 'block';
            this.trackEvent('premium_features_enabled');
        } else {
            premiumCard.style.display = 'none';
        }
    }

    // Simula tracking de eventos
    trackEvent(eventName) {
        console.log(`📊 Event tracked: ${eventName}`);
        // Em um projeto real, aqui seria enviado para um serviço de analytics
    }

    // Obtém o estado de uma flag
    isEnabled(flagName) {
        return this.flags[flagName] || false;
    }
}

// Inicializa o sistema de feature flags
const featureFlags = new FeatureFlags();

// Função global para alternar features (chamada pelos checkboxes)
function toggleFeature(flagName) {
    featureFlags.toggleFeature(flagName);
}

// Função para mostrar mensagens toast
function showMessage(message) {
    // Remove toast existente
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Cria novo toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Remove após 3 segundos
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Simula diferentes cenários de desenvolvimento
class DevelopmentScenarios {
    constructor() {
        this.scenarios = [
            {
                name: 'Desenvolvimento Inicial',
                description: 'Apenas recursos básicos disponíveis',
                flags: {
                    darkMode: false,
                    newHeader: false,
                    analytics: false,
                    premiumFeatures: false
                }
            },
            {
                name: 'Sprint 1 - Melhorias de UI',
                description: 'Modo escuro e novo cabeçalho implementados',
                flags: {
                    darkMode: true,
                    newHeader: true,
                    analytics: false,
                    premiumFeatures: false
                }
            },
            {
                name: 'Sprint 2 - Analytics',
                description: 'Sistema de analytics adicionado',
                flags: {
                    darkMode: true,
                    newHeader: true,
                    analytics: true,
                    premiumFeatures: false
                }
            },
            {
                name: 'Sprint 3 - Recursos Premium',
                description: 'Funcionalidades premium liberadas',
                flags: {
                    darkMode: true,
                    newHeader: true,
                    analytics: true,
                    premiumFeatures: true
                }
            }
        ];
    }

    // Aplica um cenário específico
    applyScenario(scenarioIndex) {
        if (scenarioIndex >= 0 && scenarioIndex < this.scenarios.length) {
            const scenario = this.scenarios[scenarioIndex];
            featureFlags.flags = { ...scenario.flags };
            featureFlags.saveFlags();
            featureFlags.applyFlags();
            this.updateCheckboxes();
            showMessage(`Cenário aplicado: ${scenario.name}`);
        }
    }

    // Atualiza os checkboxes baseado nas flags atuais
    updateCheckboxes() {
        Object.keys(featureFlags.flags).forEach(flagName => {
            const checkbox = document.getElementById(flagName);
            if (checkbox) {
                checkbox.checked = featureFlags.flags[flagName];
            }
        });
    }
}

// Inicializa cenários de desenvolvimento
const devScenarios = new DevelopmentScenarios();

// Adiciona controles de cenário ao DOM
document.addEventListener('DOMContentLoaded', function() {
    // Cria seção de cenários
    const scenariosSection = document.createElement('section');
    scenariosSection.className = 'scenarios';
    scenariosSection.innerHTML = `
        <h2>🎭 Cenários de Desenvolvimento</h2>
        <p>Simule diferentes fases do desenvolvimento com TBD:</p>
        <div class="scenario-buttons">
            <button onclick="devScenarios.applyScenario(0)">Sprint 0 - Inicial</button>
            <button onclick="devScenarios.applyScenario(1)">Sprint 1 - UI</button>
            <button onclick="devScenarios.applyScenario(2)">Sprint 2 - Analytics</button>
            <button onclick="devScenarios.applyScenario(3)">Sprint 3 - Premium</button>
        </div>
    `;

    // Adiciona estilos para os botões de cenário
    const style = document.createElement('style');
    style.textContent = `
        .scenarios {
            background: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        body.dark-mode .scenarios {
            background: #2d3748;
        }
        
        .scenario-buttons {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .scenario-buttons button {
            background: #48bb78;
            color: white;
            border: none;
            padding: 15px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .scenario-buttons button:hover {
            background: #38a169;
            transform: translateY(-2px);
        }
        
        .scenarios h2 {
            color: #2d3748;
            margin-bottom: 10px;
        }
        
        body.dark-mode .scenarios h2 {
            color: #e2e8f0;
        }
        
        .scenarios p {
            color: #4a5568;
            margin-bottom: 20px;
        }
        
        body.dark-mode .scenarios p {
            color: #a0aec0;
        }
    `;
    document.head.appendChild(style);

    // Insere a seção antes do footer
    const footer = document.querySelector('footer');
    footer.parentNode.insertBefore(scenariosSection, footer);

    // Atualiza checkboxes iniciais
    devScenarios.updateCheckboxes();
});

// Log de eventos para demonstração
console.log('🚀 Trunk Based Development Demo carregado!');
console.log('📋 Feature Flags disponíveis:', Object.keys(featureFlags.flags));
console.log('🎭 Cenários de desenvolvimento:', devScenarios.scenarios.length);
