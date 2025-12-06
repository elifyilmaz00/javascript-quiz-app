//Soru Sınıfı
//Bu sınıfta başka dosyalarda kullanılabilmesi için export edilir

export class Question{
    /**
     * Yeni bir soru nesnesi oluşturur
     * @param {string} text - soru metni
     * @param {string[]} options - cevap seçeneklerinden oluşan bir dizi
     * @param {string} answer - doğru cevap metni
     */

    constructor(text, options, answer){
        this.text=text;
        this.options=options;
        this.answer=answer;
    }

    /**
     * verilen bir seçeneğin doğru cevap olup olmadığını kontrol eder
     * @param {string} choice - kullanıcının seçtiği cevap
     * @returns {boolean} - eğer cevap doğruysa true, yanlışsa false döndürür
     */

    isCorrectAnswer(choice){
        return this.answer=== choice;
    }
}