const queryResponse = [
    {
        'vocabularyId': 'd2daf563-ee43-439e-a8c0-6cfa325206dc',
        'word': 'Cakewalk',
        'definitionId': null,
        'meaning': null,
        'examples': null
    },
    {
        'vocabularyId': '7b33f8c7-1648-40e3-80df-3faec587f773',
        'word': 'devil\'s advocate',
        'definitionId': '1a284263-c329-4876-bb66-14bb3b9e9a76',
        'meaning': 'a person who expresses a contentious opinion in order to provoke debate or test the strength of the opposing arguments',
        'examples': ['The schoolmaster often played devil\'s advocate with his students so that they could have an interesting discussion and look at other points of views.']
    },
    {
        'vocabularyId': 'ac7a758d-bebe-4f6c-8642-11b30260e9df',
        'word': 'Guerrilla marketing',
        'definitionId': '2bb85746-8915-4495-bff7-b63037a4ea09',
        'meaning': 'creative, low cost, unconventional strategy to promote the products or services',
        'examples': ['A startup should use guerrilla marketing to promote their services.']
    },
    {
        'vocabularyId': 'ed6df6e5-2580-4c61-a05f-f390851974b3',
        'word': 'Run round like a headless chicken',
        'definitionId': 'c89966db-ca3a-4ea2-b638-fde91834f00a',
        'meaning': 'to be very busy doing a lot of things, but in a way that is not very effective',
        'examples': ['Instead of running round like a headless chicken use your efforts in a more productive way.']
    },
    {
        'vocabularyId': 'bd5b5c91-5776-423c-8641-522110e98b29',
        'word': 'Summon',
        'definitionId': 'ce25ff39-c37f-426e-ba50-2311492184a1',
        'meaning': 'order to be present',
        'examples': ['We were summoned to the headmaster\'s office.']
    },
    {
        'vocabularyId': 'bd5b5c91-5776-423c-8641-522110e98b29',
        'word': 'Summon',
        'definitionId': '873cf807-3fe7-4322-8e61-465c87d66a40',
        'meaning': 'to make an effort to produce a particular quality in yourself, especially when you find it difficult',
        'examples': ['It took me six months to summon (up) the courage to ask him out for a drink.']
    }
];

const vocabularies = [];

queryResponse.forEach(currentQueryResponse => {
    const vocabularyIndex = vocabularies.findIndex((vocabulary) => vocabulary.id === currentQueryResponse.vocabularyId);
    if (vocabularyIndex === -1) {
        vocabularies.push({
            id: currentQueryResponse.vocabularyId,
            word: currentQueryResponse.word,
            definitions: currentQueryResponse.definitionId ? [{
                id: currentQueryResponse.definitionId,
                meaning: currentQueryResponse.meaning,
                examples: currentQueryResponse.examples,
            }] : []
        });
    } else {
        vocabularies[vocabularyIndex].definitions.push({
            id: currentQueryResponse.definitionId,
            meaning: currentQueryResponse.meaning,
            examples: currentQueryResponse.examples,
        });
    }
});


console.log('vocabularies', JSON.stringify(vocabularies));
