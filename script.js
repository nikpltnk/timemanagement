const questions = [
  {
    question: "Что такое тайм-менеджмент?",
    answers: [
      { 
          text: "Управление временем и задачами для достижения эффективности и продуктивности.", 
          correct: true,
          explanation: "Правильный ответ. Тайм-менеджмент включает в себя управление временем и задачами с целью достижения эффективности и продуктивности." 
      },
      { 
          text: "Это способность предсказывать будущее и контролировать его ход.", 
          correct: false,
          explanation: "Неправильный ответ. Тайм-менеджмент не связан с предсказанием будущего, а с управлением временем и задачами." 
      },
      { 
          text: "Это техника гипноза для ускорения работы.", 
          correct: false,
          explanation: "Неправильный ответ. Тайм-менеджмент не связан с гипнозом." 
      },
      { 
          text: "Это методика для управления чужим временем.", 
          correct: false,
          explanation: "Неправильный ответ. Тайм-менеджмент фокусируется на управлении собственным временем." 
      }
    ]
  },

  {
    question: "Какой подход к управлению временем использует метод 'SMART'?",
    answers: [
      { 
        text: "Установка максимально возможного времени для выполнения задач.", 
        correct: false,
        explanation: "Неправильный ответ. Метод 'SMART' не связан с установкой максимального времени."  },
      { 
          text: "Выполнение задач без оценки их важности и срочности.", 
          correct: false,
          explanation: "Неправильный ответ. Метод 'SMART' помогает определить приоритеты." 
      },
      { 
        text: "Определение конкретных, измеримых, достижимых, реалистичных и ограниченных по времени целей.", 
        correct: true,
        explanation: "Правильный ответ. Метод 'SMART' помогает определить приоритеты, устанавливая конкретные, измеримые, достижимые, реалистичные и ограниченные по времени цели." 
    
      },
      { 
          text: "Избегание постановки ясных целей для предотвращения стресса.", 
          correct: false,
          explanation: "Неправильный ответ. Метод 'SMART' нацелен на ясное определение целей." 
      }
    ]
  },

  {
    question: "Какие инструменты могут помочь в управлении временем?",
    answers: [
      { 
          text: "Ежедневник или планировщик задач.", 
          correct: true,
          explanation: "Правильный ответ. Ежедневник или планировщик задач помогают структурировать время и задачи." 
      },
      { 
          text: "Случайное выборочное решение о том, что делать.", 
          correct: false,
          explanation: "Неправильный ответ. Случайные решения не способствуют эффективному управлению временем." 
      },
      { 
          text: "Прокрастинирование.", 
          correct: false,
          explanation: "Неправильный ответ. Прокрастинация является препятствием для управления временем." 
      },
      { 
          text: "Отсутствие планирования.", 
          correct: false,
          explanation: "Неправильный ответ. Планирование помогает управлять временем." 
      }
    ]
  },

  {
    question: "Что такое матрица Эйзенхауэра?",
    answers: [
      { 
        text: "Математическая теорема о временных рядах.", 
        correct: false,
        explanation: "Неправильный ответ. Матрица Эйзенхауэра не связана с математическими теоремами." },
      { 
        text: "Методика приоритизации задач на основе их важности и срочности.", 
        correct: true,
        explanation: "Правильный ответ. Матрица Эйзенхауэра помогает приоритизировать задачи на основе их важности и срочности." 
  
      },
      { 
          text: "Система организации рабочего пространства.", 
          correct: false,
          explanation: "Неправильный ответ. Матрица Эйзенхауэра не касается организации пространства." 
      },
      { 
          text: "Методика управления конфликтами в коллективе.", 
          correct: false,
          explanation: "Неправильный ответ. Матрица Эйзенхауэра не связана с управлением конфликтами." 
      }
    ]
  },

  {
    question: "Какой принцип лежит в основе метода 'съесть лягушку' Брайана Трейси?",
    answers: [
      { 
        text: "Оставляйте важные задачи на потом.", 
        correct: false,
        explanation: "Неправильный ответ. Метод 'съедения лягушки' нацелен на решение важных задач в первую очередь." 
      },
      { 
          text: "Откладывайте выполнение задач до последнего момента.", 
          correct: false,
          explanation: "Неправильный ответ. Метод 'съедения лягушки' нацелен на решение самых трудных задач в первую очередь." 
      },
      { 
          text: "Делайте все задачи одновременно.", 
          correct: false,
          explanation: "Неправильный ответ. Метод 'съедения лягушки' рекомендует фокусироваться на одной задаче за раз." 
      },
      { 
        text: "Начинайте с самой трудной и неприятной задачи.", 
        correct: true,
        explanation: "Правильный ответ. Метод 'съедения лягушки' предполагает начало работы с самой сложной задачи." 
      }
    ]
  },

  {
    question: "Какая роль играет делегирование задач в управлении временем?",
    answers: [
      { 
        text: "Приводит к потере контроля над выполнением задач.", 
        correct: false,
        explanation: "Неправильный ответ. Правильно организованное делегирование не ведет к потере контроля."  },
      { 
        text: "Позволяет распределить нагрузку и сосредоточиться на более важных задачах.", 
        correct: true,
        explanation: "Правильный ответ. Делегирование задач позволяет эффективно распределить нагрузку и сконцентрироваться на важных задачах." 
      },
      { 
          text: "Увеличивает количество задач, требующих внимания.", 
          correct: false,
          explanation: "Неправильный ответ. Делегирование помогает снизить нагрузку." 
      },
      { 
          text: "Создает дополнительные сложности и препятствия в работе.", 
          correct: false,
          explanation: "Неправильный ответ. Делегирование задач направлено на облегчение работы." 
      }
    ]
  },

  {
    question: "Какие факторы могут привести к неэффективному управлению временем?",
    answers: [
      { 
          text: "Отсутствие четкой постановки задач.", 
          correct: true,
          explanation: "Правильный ответ. Неопределенные цели и задачи могут привести к неэффективному управлению временем." 
      },
      { 
          text: "Использование инструментов планирования.", 
          correct: false,
          explanation: "Неправильный ответ. Использование инструментов планирования обычно способствует эффективному управлению временем." 
      },
      { 
          text: "Недостаток сна и отдыха.", 
          correct: false,
          explanation: "Неправильный ответ. Недостаток сна и отдыха может отрицательно сказаться на управлении временем, но это не единственная причина неэффективности." 
      },
      { 
          text: "Определение четких целей и приоритетов.", 
          correct: false,
          explanation: "Неправильный ответ. Определение целей и приоритетов помогает управлять временем более эффективно." 
      }
    ]
  },

  {
    question: "Какие стратегии могут помочь бороться с прокрастинацией?",
    answers: [
      { 
          text: "Разбиение задач на более мелкие подзадачи.", 
          correct: true,
          explanation: "Правильный ответ. Разбиение задач на более мелкие подзадачи помогает справиться с прокрастинацией." 
      },
      { 
          text: "Откладывание задач на потом.", 
          correct: false,
          explanation: "Неправильный ответ. Откладывание задач является проявлением прокрастинации." 
      },
      { 
          text: "Увеличение объема работы для более быстрого выполнения.", 
          correct: false,
          explanation: "Неправильный ответ. Увеличение объема работы не поможет справиться с прокрастинацией." 
      },
      { 
          text: "Избегание постановки четких сроков выполнения задач.", 
          correct: false,
          explanation: "Неправильный ответ. Четкие сроки помогают бороться с прокрастинацией." 
      }
    ]
  },

  {
    question: "Каковы основные преимущества использования техник тайм-менеджмента?",
    answers: [
      { 
        text: "Увеличение объема рабочих задач.", 
        correct: false,
        explanation: "Неправильный ответ. Тайм-менеджмент направлен на эффективное управление временем, а не на увеличение объема рабочих задач." 
    },
      { 
          text: "Увеличение количества рабочих часов.", 
          correct: false,
          explanation: "Неправильный ответ. Техники тайм-менеджмента направлены на эффективное использование времени, а не на увеличение его количества." 
      },
      { 
          text: "Снижение уровня стресса.", 
          correct: false,
          explanation: "Неправильный ответ. Хотя тайм-менеджмент может помочь справиться со стрессом, это не его основное преимущество." 
      },
      { 
        text: "Повышение продуктивности и эффективности.", 
        correct: true,
        explanation: "Правильный ответ. Техники тайм-менеджмента способствуют повышению продуктивности и эффективности работы." 
     }
    ]
  },

  {
    question: "Какие методы могут помочь в планировании времени?",
    answers: [
      { 
        text: "Установка нечетких целей.", 
        correct: false,
        explanation: "Неправильный ответ. Четкие цели важны для эффективного планирования времени." 
      },
      { 
          text: "Случайный выбор задач для выполнения.", 
          correct: false,
          explanation: "Неправильный ответ. Случайный выбор задач не способствует эффективному планированию времени." 
      },
      { 
        text: "Приоритизация задач.", 
          correct: true,
          explanation: "Правильный ответ. Приоритизация задач помогает определить наиболее важные и срочные задачи." 
      },
      
      { 
        text: "Отсрочка выполнения задач до последнего момента.", 
        correct: false,
        explanation: "Неправильный ответ. Отсрочка выполнения задач является проявлением прокрастинации." 
      }
    ]
  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explanation = document.getElementById("explanation");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Далее";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.dataset.index = index; // Добавляем индекс ответа как data-атрибут
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    explanation.style.display = "none";
    explanation.innerText = ""; // Очищаем текст пояснения
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const answerIndex = selectedBtn.dataset.index; // Получаем индекс ответа
    const isCorrect = questions[currentQuestionIndex].answers[answerIndex].correct;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    explanation.innerText = questions[currentQuestionIndex].answers[answerIndex].explanation; // Получаем текст пояснения для выбранного ответа
    explanation.style.display = "block";
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Правильных ответов ${score} из ${questions.length}!`;
    nextButton.innerHTML = "Пройти снова";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();
