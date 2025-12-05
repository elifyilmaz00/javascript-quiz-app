//SORULAR
//Sorular dizi olarak dışarı aktaracağız, normalde bu verileri bir api'den veya veritabanından gelir.

export const questionsData = [
    {
        text: "JavaScript'te bir değişken tanımlamak için hangisi KULLANILMAZ?",
        options: ["let", "const", "var", "def"],
        answer: "def"

    },

    {
        text: "Hangi metot, bir dizinin her elemanı için bir fonksiyon çalıştırır ve YENİ bir dizi döndürür?",
        options: ["forEach", "map", "filter", "reduce"],
        answer: "map"

    },

    {
        text: "`async/await` neyin üzerine kurulmuş bir syntax şekeridir?",
        options: ["Callbacks", "Events", "Promises", "Prototypes"],
        answer: "Promises"
    },

    {
        text: "DOM'un açılımı nedir?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Markup", "Dynamic Object Method"],
        answer: "Document Object Model"
    }
];

