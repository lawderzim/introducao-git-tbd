# 🚀 Trunk Based Development - Demo Prático

Este repositório foi criado para demonstrar os conceitos de **Trunk Based Development (TBD)** com **Feature Flags** em uma aula prática de introdução ao Git.

## 📋 O que é Trunk Based Development?

Trunk Based Development é uma metodologia de desenvolvimento onde:

- Todos os desenvolvedores trabalham em uma única branch principal (trunk/main)
- Commits são pequenos e frequentes
- Feature flags permitem ativar/desativar funcionalidades sem deploy
- Reduz conflitos de merge e acelera o desenvolvimento

## 🎯 Objetivos da Demonstração

1. **Entender TBD**: Como funciona o desenvolvimento em uma única branch
2. **Feature Flags**: Como usar flags para controlar funcionalidades
3. **Deploy Seguro**: Como fazer releases sem quebrar o sistema
4. **Colaboração**: Como múltiplos desenvolvedores podem trabalhar juntos

## 🚀 PASSO A PASSO COMPLETO PARA A AULA

### 📋 Pré-requisitos
- Git instalado
- Editor de código (VS Code, Sublime, etc.)
- Navegador web

### 🎬 PARTE 1: Configuração Inicial

#### 1.1 Clonar o Repositório
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd introducao-git-tbd

# Verificar status inicial
git status
```

#### 1.2 Primeiro Commit (Professor)
```bash
# Adicionar todos os arquivos
git add .

# Verificar o que será commitado
git status

# Fazer o primeiro commit
git commit -m "feat: implementação inicial do demo TBD

- Adiciona página HTML principal
- Implementa sistema de feature flags
- Cria interface para demonstração
- Adiciona documentação básica"

# Ver o histórico
git log --oneline
```

#### 1.3 Abrir o Projeto
```bash
# Abrir no navegador (macOS)
open index.html

# Ou abrir no navegador (Linux/Windows)
# Navegue até o arquivo index.html e abra no navegador
```

### 🎭 PARTE 2: Demonstração de Feature Flags

#### 2.1 Explorar a Interface
- Abra o arquivo `index.html` no navegador
- Observe os checkboxes de Feature Flags
- Teste ativar/desativar cada funcionalidade:
  - ✅ Modo Escuro
  - ✅ Novo Cabeçalho
  - ✅ Analytics
  - ✅ Recursos Premium

#### 2.2 Simular Cenários de Desenvolvimento
Use os botões de cenário para simular diferentes fases:
- **Sprint 0**: Desenvolvimento inicial
- **Sprint 1**: Melhorias de UI (modo escuro, novo cabeçalho)
- **Sprint 2**: Adição de analytics
- **Sprint 3**: Recursos premium

### 👥 PARTE 3: Simulação de Desenvolvimento em Equipe

#### 3.1 Desenvolvedor A - Modo Escuro
```bash
# Simular que o Desenvolvedor A implementa modo escuro
# (O código já está implementado, vamos simular o commit)

git add styles.css script.js
git commit -m "feat: adiciona modo escuro

- Implementa toggle de tema escuro
- Adiciona estilos para dark mode
- Feature flag: darkMode (desabilitada por padrão)"

# Ver o histórico atualizado
git log --oneline --graph
```

#### 3.2 Desenvolvedor B - Novo Cabeçalho
```bash
# Simular que o Desenvolvedor B implementa novo cabeçalho
git add index.html styles.css script.js
git commit -m "feat: implementa novo cabeçalho

- Adiciona estilo gradiente para título
- Implementa animação de texto
- Feature flag: newHeader (desabilitada por padrão)"

# Ver o histórico
git log --oneline --graph
```

#### 3.3 Desenvolvedor C - Analytics
```bash
# Simular que o Desenvolvedor C adiciona analytics
git add script.js index.html styles.css
git commit -m "feat: adiciona sistema de analytics

- Implementa tracking de eventos
- Adiciona seção de métricas
- Feature flag: analytics (desabilitada por padrão)
- Simula coleta de dados de uso"

# Ver o histórico
git log --oneline --graph
```

#### 3.4 Desenvolvedor D - Recursos Premium
```bash
# Simular que o Desenvolvedor D implementa recursos premium
git add script.js index.html styles.css
git commit -m "feat: implementa recursos premium

- Adiciona card de funcionalidades premium
- Implementa controle de acesso
- Feature flag: premiumFeatures (desabilitada por padrão)
- Adiciona estilos especiais para premium"

# Ver o histórico final
git log --oneline --graph
```

### 🔧 PARTE 4: Comandos Git Essenciais

#### 4.1 Visualizar Histórico
```bash
# Ver commits em uma linha
git log --oneline

# Ver commits com gráfico
git log --oneline --graph

# Ver commits com detalhes
git log --stat

# Ver mudanças de um commit específico
git show HEAD
git show HEAD~1
git show HEAD~2
```

#### 4.2 Analisar Mudanças
```bash
# Ver diferenças entre commits
git diff HEAD~1

# Ver mudanças em arquivo específico
git diff HEAD~1 -- script.js

# Ver histórico de um arquivo
git log --follow script.js
```

#### 4.3 Trabalhar com Tags
```bash
# Criar tag para versão estável
git tag -a v1.0.0 -m "Versão estável - todas features funcionando"

# Ver todas as tags
git tag

# Ver detalhes de uma tag
git show v1.0.0
```

### 🚨 PARTE 5: Simulação de Problemas e Rollback

#### 5.1 Simular Problema em Produção
```bash
# Simular que analytics está causando problemas
git commit -m "hotfix: desabilita analytics temporariamente

- Analytics causando problemas de performance
- Feature flag mantida para rollback rápido
- Deploy imediato para produção"

# Ver o histórico
git log --oneline --graph
```

#### 5.2 Demonstrar Rollback com Feature Flag
- No navegador, desmarque a checkbox "Analytics"
- Observe como a funcionalidade é desabilitada instantaneamente
- **Vantagem**: Rollback sem necessidade de novo deploy!

#### 5.3 Corrigir o Problema
```bash
# Simular correção do problema
git commit -m "fix: corrige problema de performance no analytics

- Otimiza coleta de dados
- Melhora renderização de métricas
- Analytics pronto para reativação"

# Ver o histórico
git log --oneline --graph
```

### 🎯 PARTE 6: Exercícios Práticos para Alunos

#### 6.1 Exercício 1: Nova Feature Flag
```bash
# 1. Abrir script.js no editor
# 2. Adicionar nova feature flag (ex: notifications)
# 3. Implementar funcionalidade básica
# 4. Fazer commit

git add script.js
git commit -m "feat: adiciona sistema de notificações

- Implementa feature flag: notifications
- Adiciona função para mostrar notificações
- Flag desabilitada por padrão"
```

#### 6.2 Exercício 2: Melhorar Interface
```bash
# 1. Modificar styles.css para adicionar nova funcionalidade
# 2. Atualizar index.html se necessário
# 3. Fazer commit

git add styles.css index.html
git commit -m "feat: melhora interface de notificações

- Adiciona estilos para notificações
- Melhora responsividade
- Atualiza HTML para nova funcionalidade"
```

#### 6.3 Exercício 3: Documentação
```bash
# 1. Atualizar README.md com nova funcionalidade
# 2. Fazer commit

git add README.md
git commit -m "docs: atualiza documentação

- Adiciona informações sobre notificações
- Atualiza exemplos de uso
- Melhora instruções para alunos"
```

### 📊 PARTE 7: Análise e Estatísticas

#### 7.1 Ver Contribuições
```bash
# Ver contribuições por desenvolvedor
git shortlog -sn

# Ver arquivos mais modificados
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10

# Ver atividade por data
git log --pretty=format:"%ad" --date=short | sort | uniq -c
```

#### 7.2 Análise de Feature Flags
```bash
# Ver commits relacionados a feature flags
git log --grep="feature flag" --oneline

# Ver mudanças em arquivo de configuração
git log -p script.js | grep -A5 -B5 "feature"
```

### 🎓 PARTE 8: Conceitos Demonstrados

#### 8.1 Benefícios do TBD
- ✅ **Desenvolvimento Paralelo**: Múltiplos desenvolvedores na mesma branch
- ✅ **Deploy Seguro**: Código deployado com features desabilitadas
- ✅ **Rollback Rápido**: Desabilitar features problemáticas instantaneamente
- ✅ **Teste Gradual**: Ativar features para grupos específicos de usuários
- ✅ **Integração Contínua**: Código sempre integrado e testável

#### 8.2 Boas Práticas Demonstradas
- ✅ **Commits Atômicos**: Um commit, uma funcionalidade
- ✅ **Mensagens Descritivas**: Formato claro e informativo
- ✅ **Feature Flags**: Sempre implementar com flag desabilitada
- ✅ **Rollout Gradual**: Ativar features progressivamente
- ✅ **Documentação**: Manter README atualizado

### 🚀 PARTE 9: Próximos Passos

#### 9.1 Comandos para Continuar Estudando
```bash
# Ver todas as branches (se houver)
git branch -a

# Ver configuração do Git
git config --list

# Ver diferenças entre working directory e staging
git diff

# Ver diferenças entre staging e último commit
git diff --cached
```

#### 9.2 Recursos Adicionais
- 📚 [Documentação oficial do Git](https://git-scm.com/doc)
- 🎥 [Tutorial interativo do Git](https://learngitbranching.js.org/)
- 📖 [Pro Git Book](https://git-scm.com/book)
- 🛠️ [GitHub Desktop](https://desktop.github.com/) (interface gráfica)

## 🎯 Resumo da Aula

### O que Aprendemos:
1. **Trunk Based Development**: Desenvolvimento em uma única branch
2. **Feature Flags**: Controle granular de funcionalidades
3. **Comandos Git Essenciais**: log, diff, show, tag
4. **Boas Práticas**: Commits atômicos e mensagens descritivas
5. **Rollback Seguro**: Usando feature flags para rollback rápido

### Comandos Principais:
```bash
git init                    # Inicializar repositório
git add .                   # Adicionar arquivos
git commit -m "mensagem"    # Fazer commit
git log --oneline --graph   # Ver histórico
git diff HEAD~1             # Ver diferenças
git tag -a v1.0.0 -m "msg" # Criar tag
```

### Próximos Passos:
1. Praticar os comandos em projetos pessoais
2. Experimentar com branches (quando necessário)
3. Aprender sobre merge e rebase
4. Explorar ferramentas como GitHub, GitLab
5. Implementar TBD em projetos reais

---

**🎉 Parabéns! Você agora entende Trunk Based Development com Feature Flags!** 🚀
