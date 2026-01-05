# 🌍 Mapa de Viagens - Nossas Aventuras pelo Mundo

Um projeto pessoal criado por **Felipe e Vittorya** para documentar e compartilhar os lugares especiais que visitamos juntos! Cada ponto no mapa representa uma memória única e especial que criamos em nossas viagens.

## ✨ Funcionalidades

- 🗺️ **Mapa Mundial Interativo** - Visualize todas nossas viagens em um mapa global com vista de satélite
- 📍 **Marcadores Personalizados** - Pontos especiais com ícones de coração nos lugares que visitamos
- 📸 **Galeria de Fotos** - Adicione fotos reais de cada viagem nas pastas organizadas
- 📝 **Resumos de Viagens** - Descreva como foi cada aventura especial juntos
- 📊 **Estatísticas** - Veja quantas viagens, países e fotos temos
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em celulares e tablets
- 🎨 **Design Inspirado em Nuvens** - Interface bonita com fundo de nuvens simulando sonhos vividos

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** no seu navegador
2. O mapa carregará automaticamente com zoom mostrando todos os lugares que visitamos
3. Clique nos marcadores de coração para ver os detalhes de cada viagem
4. Adicione suas fotos reais nas pastas dentro de `fotos/` para cada lugar

## 📝 Como Adicionar Novas Viagens

Edite o arquivo `script.js` e adicione novas viagens no array `trips`:

```javascript
{
    id: 7, // Número único para cada viagem
    location: "Nome da Cidade, País",
    lat: -22.9068, // Latitude (use Google Maps para encontrar)
    lng: -43.1729, // Longitude
    date: "Mês Ano",
    title: "Título da Viagem",
    description: "Descreva como foi a viagem, o que vocês fizeram, momentos especiais...",
    photos: [
        { 
            url: "caminho/para/sua/foto1.jpg", 
            alt: "Descrição da foto" 
        },
        { 
            url: "caminho/para/sua/foto2.jpg", 
            alt: "Descrição da foto" 
        }
    ]
}
```

### 📌 Como Adicionar Fotos

1. **Organize suas fotos**: Coloque as fotos de cada viagem na pasta correspondente dentro de `fotos/`:
   - `fotos/01-campos-do-jordao/` - Fotos de Campos do Jordão
   - `fotos/02-monte-verde/` - Fotos de Monte Verde
   - `fotos/03-thermas-da-mata/` - Fotos do Thermas da Mata
   - `fotos/04-wet-n-wild/` - Fotos do Wet n Wild
   - `fotos/05-hopi-hari/` - Fotos do Hopi Hari
   - `fotos/06-bertioga/` - Fotos de Bertioga

2. **Atualize o código**: No arquivo `script.js`, atualize as URLs das fotos para usar os caminhos locais:
   ```javascript
   photos: [
       { url: "fotos/01-campos-do-jordao/foto1.jpg", alt: "Descrição" },
       { url: "fotos/01-campos-do-jordao/foto2.jpg", alt: "Descrição" }
   ]
   ```

3. **Encontrar Coordenadas**: 
   - Abra Google Maps
   - Clique com botão direito no local exato
   - Copie as coordenadas (latitude, longitude)

## 🎨 Personalização

### Cores
Edite as variáveis CSS no arquivo `style.css`:
```css
:root {
    --primary-color: #667eea;    /* Cor principal */
    --secondary-color: #764ba2;  /* Cor secundária */
    --accent-color: #f093fb;     /* Cor de destaque */
}
```

### Título e Subtítulo
Edite o arquivo `index.html`:
```html
<h1>🌍 Nossas Aventuras pelo Mundo</h1>
<p class="subtitle">Cada ponto no mapa é uma memória especial...</p>
```

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões recentes)
- ✅ Dispositivos móveis (iOS e Android)
- ✅ Tablets

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilização com animações
- **JavaScript** - Interatividade
- **Leaflet.js** - Biblioteca de mapas open-source

## 💡 Dicas

- Adicione pelo menos 2-4 fotos por viagem para uma galeria bonita
- Seja criativo nas descrições - conte histórias especiais!
- Organize as fotos em ordem cronológica ou por importância
- Use fotos de boa qualidade para melhor visualização

## 📄 Sobre o Projeto

Este é um projeto pessoal e fechado criado por **Felipe e Vittorya** para documentar os lugares especiais que visitamos juntos. Cada ponto no mapa representa uma memória única e especial que criamos em nossas viagens.

---

**Feito com ❤️ por Felipe e Vittorya para eternizar nossas aventuras juntas!**

