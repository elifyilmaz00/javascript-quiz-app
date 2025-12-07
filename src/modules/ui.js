//DOM/Arayüz İşlemleri

export class UI{
    constructor(){
        this.questionEl=document.querySelector("#question");
        this.optionsListEl=document.querySelector("#options-list");
        this.progressEl=document.querySelector("#progress");
        this.quizContainerEl=document.querySelector("#quiz");
    }

    /**
     * ekrana soruyu ve seçenekleri yazar
     * @param {Question} question - gösterilecek olan Question nesnesi
     */

    displayQuestion(question){
        this.questionEl.textContent=question.text;
        this.optionsListEl.innerHTML=""; //önceki seçenekleri temizler

        question.options.forEach(option => {
            const li = document.createElement("li");
            li.textContent=option;
            this.optionsListEl.appendChild(li);
        });
    }

    /**
     * quiz bittiğinde sonuç ekranını gösterir
     * @param {number} score kullanıcının toplam doğru sayısı
     * @param {number} totalQuestions - toplam soru sayısı
     */

    displayScore(score, totalQuestions){
        const scoreHTML = `
        <h1> Quiz Bitti!</h1>
        <h2> Skorunuz: ${score} / ${totalQuestions}</h2>
        <button onclick ="location.reload()" style="padding: 10px 20px; curdor: pointer;">Tekrar Oyna</button>`;
        this.quizContainerEl.innerHTML=scoreHTML;

    }

    /**
     * ilerleme metnini günceller (örn: soru 2/5)
     * @param {number} currentIndex - mevcut sorunun indeksi
     * @param {number} totalQuestions - toplam soru sayısı
     */

    displayProgress(currentIndex, totalQuestions){
        this.progressEl.textContent=`Soru ${currentIndex +1} / ${totalQuestions}`;
    }
}
