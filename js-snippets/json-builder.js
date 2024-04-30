const queryResponse = [
    {
        'vocabularyId': 'd42fa860-dd41-4ef5-9e09-5e00adbda504',
        'word': 'devil\'s advocate',
        'definitionId': '0a97c584-b37f-4f7c-934b-f00e55bb55ec',
        'meaning': 'a person who expresses a contentious opinion in order to provoke debate or test the strength of the opposing arguments',
        'examples': ['The schoolmaster often played devil\'s advocate with his students so that they could have an interesting discussion and look at other points of views.']
    },
    {
        'vocabularyId': 'e0e77e53-dccb-4f4f-84c9-920200dc5e25',
        'word': 'Guerrilla marketing',
        'definitionId': 'ca5f9e17-42f6-43a1-aa3c-4fe345583077',
        'meaning': 'creative, low cost, unconventional strategy to promote the products or services',
        'examples': ['A startup should use guerrilla marketing to promote their services.']
    },
    {
        'vocabularyId': 'fc655d2e-cfb6-49c7-b802-fdec0c38eee9',
        'word': 'Run round like a headless chicken',
        'definitionId': '31f8d729-9449-4215-bdd0-f41d3ee3abd4',
        'meaning': 'to be very busy doing a lot of things, but in a way that is not very effective',
        'examples': ['Instead of running round like a headless chicken use your efforts in a more productive way.']
    },
    {
        'vocabularyId': 'be487dde-3319-4dcb-86c1-66363c70477a',
        'word': 'Summon',
        'definitionId': 'ae76a6da-4e77-4c55-97ee-c23aa655c525',
        'meaning': 'order to be present',
        'examples': ['We were summoned to the headmaster\'s office.']
    },
    {
        'vocabularyId': 'be487dde-3319-4dcb-86c1-66363c70477a',
        'word': 'Summon',
        'definitionId': 'ad590930-9152-45a8-8d28-ac816cc9dd0b',
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
            definitions: [{
                id: currentQueryResponse.definitionId,
                meaning: currentQueryResponse.meaning,
                examples: currentQueryResponse.examples,
            }]
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
