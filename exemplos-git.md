# 📚 Exemplos Práticos de Git para TBD

Este arquivo contém exemplos práticos de comandos Git para demonstrar Trunk Based Development em sala de aula.

## 🚀 Configuração Inicial

### Primeiro Commit
```bash
# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "feat: implementação inicial do demo TBD

- Adiciona página HTML principal
- Implementa sistema de feature flags
- Cria interface para demonstração
- Adiciona documentação básica"
```

## 🎭 Simulação de Desenvolvimento em Equipe

### Sprint 1: Desenvolvedor A - Modo Escuro

```bash
# Desenvolvedor A implementa modo escuro
git add styles.css script.js
git commit -m "feat: adiciona modo escuro

- Implementa toggle de tema escuro
- Adiciona estilos para dark mode
- Feature flag: darkMode (desabilitada por padrão)"
```

### Sprint 1: Desenvolvedor B - Novo Cabeçalho

```bash
# Desenvolvedor B implementa novo cabeçalho
git add index.html styles.css script.js
git commit -m "feat: implementa novo cabeçalho

- Adiciona estilo gradiente para título
- Implementa animação de texto
- Feature flag: newHeader (desabilitada por padrão)"
```

### Sprint 2: Desenvolvedor C - Analytics

```bash
# Desenvolvedor C adiciona analytics
git add script.js index.html styles.css
git commit -m "feat: adiciona sistema de analytics

- Implementa tracking de eventos
- Adiciona seção de métricas
- Feature flag: analytics (desabilitada por padrão)
- Simula coleta de dados de uso"
```

### Sprint 3: Desenvolvedor D - Recursos Premium

```bash
# Desenvolvedor D implementa recursos premium
git add script.js index.html styles.css
git commit -m "feat: implementa recursos premium

- Adiciona card de funcionalidades premium
- Implementa controle de acesso
- Feature flag: premiumFeatures (desabilitada por padrão)
- Adiciona estilos especiais para premium"
```

## 🔧 Comandos Úteis para Demonstração

### Ver Histórico de Commits
```bash
# Ver commits em uma linha
git log --oneline

# Ver commits com gráfico
git log --oneline --graph

# Ver commits com detalhes
git log --stat

# Ver mudanças de um commit específico
git show <hash-do-commit>
```

### Trabalhar com Feature Flags

```bash
# Ver diferenças entre commits
git diff HEAD~1

# Ver mudanças em arquivo específico
git diff HEAD~1 -- script.js

# Ver histórico de um arquivo
git log --follow script.js
```

### Simular Problemas e Rollback

```bash
# Criar tag para versão estável
git tag -a v1.0.0 -m "Versão estável - todas features funcionando"

# Simular problema (desabilitar feature)
git commit -m "hotfix: desabilita analytics temporariamente

- Analytics causando problemas de performance
- Feature flag mantida para rollback rápido"

# Rollback usando feature flag (sem commit)
# Apenas desabilitar a flag no código
```

## 🎯 Cenários de Demonstração

### Cenário 1: Desenvolvimento Paralelo
```bash
# Simular que dois desenvolvedores trabalham simultaneamente
# Desenvolvedor A
git commit -m "feat: melhora responsividade mobile"

# Desenvolvedor B (simular conflito)
git commit -m "feat: adiciona validação de formulário"
```

### Cenário 2: Hotfix em Produção
```bash
# Problema crítico encontrado
git commit -m "hotfix: corrige bug crítico no modo escuro

- Corrige contraste de texto
- Feature flag permite rollback se necessário
- Deploy imediato para produção"
```

### Cenário 3: Feature Gradual
```bash
# Ativar feature para 10% dos usuários
git commit -m "feat: ativa analytics para 10% dos usuários

- Implementa rollout gradual
- Monitoramento de performance
- Pronto para rollback se necessário"
```

## 📊 Comandos para Análise

### Estatísticas do Projeto
```bash
# Ver contribuições por desenvolvedor
git shortlog -sn

# Ver arquivos mais modificados
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10

# Ver atividade por data
git log --pretty=format:"%ad" --date=short | sort | uniq -c
```

### Análise de Feature Flags
```bash
# Ver commits relacionados a feature flags
git log --grep="feature flag" --oneline

# Ver mudanças em arquivo de configuração
git log -p script.js | grep -A5 -B5 "feature"
```

## 🚀 Scripts de Demonstração

### Script para Simular Desenvolvimento
```bash
#!/bin/bash
# demo-tbd.sh

echo "🚀 Iniciando demonstração de TBD..."

# Commit inicial
git add .
git commit -m "feat: implementação inicial do demo TBD"

# Simular desenvolvimento em equipe
echo "👨‍💻 Desenvolvedor A implementa modo escuro..."
sleep 2
git commit -m "feat: adiciona modo escuro" --allow-empty

echo "👩‍💻 Desenvolvedor B implementa novo cabeçalho..."
sleep 2
git commit -m "feat: implementa novo cabeçalho" --allow-empty

echo "👨‍💻 Desenvolvedor C adiciona analytics..."
sleep 2
git commit -m "feat: adiciona sistema de analytics" --allow-empty

echo "👩‍💻 Desenvolvedor D implementa recursos premium..."
sleep 2
git commit -m "feat: implementa recursos premium" --allow-empty

echo "✅ Demonstração concluída!"
echo "📊 Ver histórico: git log --oneline --graph"
```

## 🎓 Exercícios para Alunos

### Exercício 1: Primeiro Commit
```bash
# Aluno deve fazer seu primeiro commit
git add .
git commit -m "feat: adiciona [sua funcionalidade]"
```

### Exercício 2: Feature Flag
```bash
# Implementar nova feature flag
# 1. Adicionar flag no JavaScript
# 2. Implementar funcionalidade
# 3. Fazer commit com flag desabilitada
git commit -m "feat: adiciona [nova funcionalidade] com feature flag"
```

### Exercício 3: Resolução de Conflito
```bash
# Simular conflito
# 1. Criar branch temporária
git checkout -b feature-temporaria

# 2. Fazer mudanças
# 3. Voltar para main e fazer mudanças conflitantes
git checkout main
# Fazer mudanças conflitantes

# 4. Tentar merge
git merge feature-temporaria
# Resolver conflitos
```

## 📝 Boas Práticas Demonstradas

### Mensagens de Commit
```bash
# Formato: tipo(escopo): descrição
git commit -m "feat(ui): adiciona modo escuro"
git commit -m "fix(analytics): corrige tracking de eventos"
git commit -m "docs(readme): atualiza documentação"
git commit -m "refactor(flags): melhora sistema de feature flags"
```

### Commits Atômicos
```bash
# ✅ Bom: um commit, uma funcionalidade
git commit -m "feat: adiciona modo escuro"

# ❌ Ruim: múltiplas funcionalidades em um commit
git commit -m "feat: adiciona modo escuro, analytics e premium"
```

### Feature Flags
```bash
# ✅ Sempre implementar com flag desabilitada
git commit -m "feat: adiciona funcionalidade X (flag desabilitada)"

# ✅ Ativar gradualmente
git commit -m "feat: ativa funcionalidade X para 10% dos usuários"
```

## 🎯 Conclusão

Este repositório demonstra como Trunk Based Development com Feature Flags permite:

1. **Desenvolvimento Paralelo**: Múltiplos desenvolvedores na mesma branch
2. **Deploy Seguro**: Código deployado com features desabilitadas
3. **Rollback Rápido**: Desabilitar features problemáticas instantaneamente
4. **Teste Gradual**: Ativar features para grupos específicos de usuários
5. **Integração Contínua**: Código sempre integrado e testável

Use estes exemplos para demonstrar os benefícios do TBD em suas aulas! 🚀
