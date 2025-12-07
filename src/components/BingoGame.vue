<template>
  <div class="bingo-container">
    <header class="bingo-header">
      <h1>🎄 Hallmark Julefilm Bingo 🎄</h1>
      <p class="subtitle">Klik på felterne, når scenerne sker!</p>
    </header>
    
    <div class="bingo-grid">
      <div 
        v-for="(square, index) in bingoSquares" 
        :key="index"
        class="bingo-square"
        :class="{ marked: square.marked }"
        @click="toggleSquare(index)"
      >
        <div class="square-content">
          <div class="square-title">{{ square.title }}</div>
          <div class="square-description">{{ square.description }}</div>
          <div v-if="square.marked" class="checkmark">✓</div>
        </div>
      </div>
    </div>
    
    <footer class="bingo-footer">
      <button @click="resetGame" class="reset-button">
        🔄 Nulstil spil
      </button>
      <div class="score">
        {{ markedCount }} / {{ bingoSquares.length }} markeret
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const bingoSquares = ref([
  {
    title: "Hjembyens hjemkomst",
    description: "En travl storbykvinde vender modvilligt hjem til sin juleglade barndomsby – og møder naturligvis sin gamle flamme.",
    marked: false
  },
  {
    title: "Juletræ i fare",
    description: "Byens elskede juletræsfarm skal sælges eller lukkes – men måske kan kærlighed (og fundraising) redde den.",
    marked: false
  },
  {
    title: "Snevejr og skæbne",
    description: "Et uventet snefald fanger to personer sammen – og sneen smelter først, når deres hjerter gør det samme.",
    marked: false
  },
  {
    title: "Børns juleønske",
    description: "Et barn ønsker sig ikke legetøj, men at mor eller far skal finde kærligheden igen. Og det sker, selvfølgelig.",
    marked: false
  },
  {
    title: "Gamle breve, ny kærlighed",
    description: "Et arvet hus afslører kærlighedsbreve fra fortiden – og inspirerer til ny romance i nutiden.",
    marked: false
  },
  {
    title: "Mistelten-magi",
    description: "De skubber hinanden drillende under misteltenen – og det bliver til filmens første kys.",
    marked: false
  },
  {
    title: "Falsk forlovelse",
    description: "De lader som om de er et par til jul – men hvem bliver først klar over, at der er ægte følelser?",
    marked: false
  },
  {
    title: "Julens festival-fejde",
    description: "To rivaler tvinges til at planlægge byens julefestival sammen – og ender selvfølgelig med at forelske sig.",
    marked: false
  },
  {
    title: "Julehaderen",
    description: "En person, der hader alt ved jul, genfinder glæden (og kærligheden) via sne, peberkager og en ny partner.",
    marked: false
  },
  {
    title: "Prins incognito",
    description: "Den almindelige turist viser sig at være en royal – og det hele ender i slot, sne og kærlighed.",
    marked: false
  },
  {
    title: "Grinchen i jakkesæt",
    description: "En kold forretningsmand vil ødelægge julen – men bløder op takket ved byens charme og én bestemt person.",
    marked: false
  },
  {
    title: "Ex'en vender tilbage",
    description: "En gammel ungdomskæreste dukker uventet op – og gnisten springer stadig.",
    marked: false
  },
  {
    title: "Bagekonkurrence-kaos",
    description: "En bagedyst møder sabotage, misforståelser og flirten, men kærligheden vinder alligevel.",
    marked: false
  },
  {
    title: "Julens fortryllelse",
    description: "Et magisk sneglobe, ønskeseddel eller mystisk bedstemor hjælper kærligheden på vej.",
    marked: false
  },
  {
    title: "Juleaften-frieri",
    description: "Hele byen samles, sneen daler, og nogen går ned på knæ og spørger: \"Vil du gifte dig med mig?\"",
    marked: false
  }
])

const markedCount = computed(() => {
  return bingoSquares.value.filter(square => square.marked).length
})

function toggleSquare(index) {
  bingoSquares.value[index].marked = !bingoSquares.value[index].marked
}

function resetGame() {
  bingoSquares.value.forEach(square => {
    square.marked = false
  })
}
</script>

<style scoped>
.bingo-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.bingo-header {
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.bingo-header h1 {
  font-size: 2.5rem;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

.bingo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  flex: 1;
  margin-bottom: 30px;
}

.bingo-square {
  background: white;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bingo-square:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.bingo-square.marked {
  background: linear-gradient(135deg, #d42426 0%, #c41e3a 100%);
  color: white;
}

.bingo-square.marked:hover {
  background: linear-gradient(135deg, #c41e3a 0%, #a01829 100%);
}

.square-content {
  text-align: center;
  width: 100%;
  position: relative;
}

.square-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 1.3;
}

.square-description {
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.85;
}

.bingo-square.marked .square-description {
  opacity: 0.95;
}

.checkmark {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  color: #c41e3a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.bingo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.reset-button {
  background: #fff;
  color: #1a472a;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.reset-button:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.reset-button:active {
  transform: translateY(0);
}

.score {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Tablet and Desktop */
@media (min-width: 768px) {
  .bingo-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .bingo-header h1 {
    font-size: 3rem;
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .bingo-grid {
    grid-template-columns: repeat(5, 1fr);
  }
  
  .bingo-square {
    min-height: 180px;
  }
}

/* iPad specific */
@media (min-width: 768px) and (max-width: 1024px) {
  .bingo-container {
    padding: 30px;
  }
  
  .bingo-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .bingo-square {
    min-height: 160px;
    padding: 25px;
  }
}

/* Mobile optimizations */
@media (max-width: 767px) {
  .bingo-container {
    padding: 15px;
  }
  
  .bingo-header h1 {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .bingo-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .bingo-square {
    min-height: 120px;
    padding: 15px;
  }
  
  .square-title {
    font-size: 1rem;
  }
  
  .square-description {
    font-size: 0.8rem;
  }
  
  .checkmark {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
  
  .reset-button {
    padding: 12px 24px;
    font-size: 1rem;
  }
  
  .score {
    font-size: 1.1rem;
  }
}
</style>
