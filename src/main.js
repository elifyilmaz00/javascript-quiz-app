// Gerekli tüm modülleri ve sınıfları import ediyoruz.
import { questionsData } from './modules/data.js';
import { Quiz } from './classes/Quiz.js';
import { UI } from './modules/ui.js';

/**
 * Uygulamayı başlatan ve yöneten ana fonksiyon.
 */
const startApp = () => {
    // 1. Gerekli nesneleri oluştur.
    const quiz = new Quiz(questionsData); // Quiz beynini oluştur.
    const ui = new UI();                   // Arayüz yöneticisini oluştur.

    // 2. Quiz'i yükleyen ve arayüzü güncelleyen fonksiyon.
    const loadQuiz = () => {
        if (quiz.isEnded()) {
            // Eğer quiz bittiyse, skoru göster.
            ui.displayScore(quiz.score, quiz.questions.length);
        } else {
            // Quiz devam ediyorsa:
            // a) Mevcut soruyu al.
            const currentQuestion = quiz.getCurrentQuestion();
            // b) Soruyu ekrana çiz.
            ui.displayQuestion(currentQuestion);
            // c) İlerlemeyi güncelle.
            ui.displayProgress(quiz.questionIndex, quiz.questions.length);
        }
    };

    // 3. Kullanıcının bir seçeneğe tıklamasını dinle.
    const handleOptionClick = (event) => {
        if (event.target.tagName === 'LI') {
            const userAnswer = event.target.textContent;
            quiz.guess(userAnswer); // Quiz beynine tahmini gönder.
            loadQuiz(); // Arayüzü yeni durumla (yeni soru veya sonuç) güncelle.
        }
    };

    // 4. Olay dinleyicisini seçenekler listesine bağla (Olay Delegasyonu).
    ui.optionsListEl.addEventListener('click', handleOptionClick);
    
    // 5. Uygulamayı ilk kez başlat.
    loadQuiz();
};

// Sayfanın tüm HTML'i yüklendiğinde uygulamayı başlat.
document.addEventListener('DOMContentLoaded', startApp);