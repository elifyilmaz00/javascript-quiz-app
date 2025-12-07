//Quiz Sınıfı

// Question sınıfını bu dosyada kullanabilmek için import ediyoruz.
import { Question } from './Question.js';

// Quiz sınıfını dışa aktarıyoruz.
export class Quiz {
    /**
     * Yeni bir Quiz nesnesi oluşturur.
     * @param {Object[]} questionsData - data.js'ten gelen soru verilerini içeren dizi.
     */
    constructor(questionsData) {
        // Gelen ham veriyi, Question sınıfından nesneler üreterek dönüştürüyoruz.
        // Bu, OOP'nin gücüdür. Artık dizimiz sadece veri değil, davranışları da olan nesneler içeriyor.
        this.questions = questionsData.map(q => new Question(q.text, q.options, q.answer));
        
        this.score = 0; // Başlangıç skoru
        this.questionIndex = 0; // Başlangıçta ilk sorudayız (indeks 0)
    }

    /**
     * Mevcut soru nesnesini döndürür.
     * @returns {Question} - Dizideki geçerli soru nesnesi.
     */
    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }

    /**
     * Kullanıcının tahminini işler, skoru günceller ve sonraki soruya geçer.
     * @param {string} userAnswer - Kullanıcının tıkladığı cevap.
     */
    guess(userAnswer) {
        const currentQuestion = this.getCurrentQuestion();
        
        // Mevcut sorunun kendi metodunu kullanarak cevabı kontrol ediyoruz.
        if (currentQuestion.isCorrectAnswer(userAnswer)) {
            this.score++; // Skor artır
        }
        
        this.questionIndex++; // Bir sonraki soruya geç
    }

    /**
     * Quiz'in bitip bitmediğini kontrol eder.
     * @returns {boolean} - Eğer son soruya gelindiyse true, değilse false.
     */
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}