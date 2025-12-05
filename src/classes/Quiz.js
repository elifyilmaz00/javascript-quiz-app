//Quiz Sınıfı

//question sınıfını bu dosyada kullabilmek için import ederiz

import {question} from "./Question.js";

//Quiz sınıfını dışa aktarıyoruz

export class Quiz{

    /**
     * yeni bir quiz nesnesi oluşturur
     * @param {object[]} questionsData - data.js'ten gelen soru verilerini içeren dizi.
     */

    consturctor (questionsData){
        //gelen ham veriyi, question sınıfından nesneler üreterek dönüştürüyoruz
        //bu, oop'nin gücüdür. artık dizimiz sadece veri değil, davranışları da olan nesneler içeriyor
        
        this.questions= questionDaata.map(q => new Question(q.text, q.options, q.answer));

        this.score = 0; // başlangıç skoru
        this.questionındex = 0; //başlagışta ilk soruda index = 0
    }

    /**
     * mevcut soru nesnesini döndürür
     * @returns {Question} - dizideki geçerli soru nesnesi.
     */

    getCurrentQuestion(){
        return this.questions[thid.questionIndex];
    }

    /**
     * kullanıcının tahminini işler, skoru günceller ve sonraki soruya geçer.
     * @param {string} userAnswer - kullanıcının tıkladığı cevap
     */

    guess(userAnswer){
        const currentQuestion = this.getCurrentQuestion();

        //mevcut sorunun kendi metodunu kullanarak cevabı kontrol ediyoruz
        if(currentQuestion.isCorrectAnswer(userAnswer)){
            this.score++; //skor artır
        }

        this.questionIndex++; //bir sonraki soruya geç
    }

    /**
     * quiz'in bitip bitmediğini kontrol eder
     * @returns {boolean} - eğer son soruya gelindiyse true, değilse false
     */

    isEnded(){
        return this.questionIndex === this.questions.length;
    }


}