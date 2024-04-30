delete
from "Definition"
where true;

delete
from "Vocabulary"
where true;

do
$$
    declare
        latestVocabularyId uuid;

    begin

        -- 1
        insert into "Vocabulary" (id, word)
        values (default, 'Guerrilla marketing')
        returning id
            into latestVocabularyId;

        insert into "Definition" (id, meaning, examples, "vocabularyId")
        values (default, 'creative, low cost, unconventional strategy to promote the products or services', '[
          "A startup should use guerrilla marketing to promote their services."
        ]', latestVocabularyId);

        -- 2
        insert into "Vocabulary" (id, word)
        values (default, 'Run round like a headless chicken')
        returning id
            into latestVocabularyId;

        insert into "Definition" (id, meaning, examples, "vocabularyId")
        values (default, 'to be very busy doing a lot of things, but in a way that is not very effective', '[
          "Instead of running round like a headless chicken use your efforts in a more productive way."
        ]', latestVocabularyId);

        -- 3
        insert into "Vocabulary" (id, word)
        values (default, 'Summon')
        returning id
            into latestVocabularyId;

        insert into "Definition" (id, meaning, examples, "vocabularyId")
        values (default,
                'order to be present',
                '[
                  "We were summoned to the headmaster''s office."
                ]', latestVocabularyId);
        insert into "Definition" (id, meaning, examples, "vocabularyId")
        values (default,
                'to make an effort to produce a particular quality in yourself, especially when you find it difficult',
                '[
                  "It took me six months to summon (up) the courage to ask him out for a drink."
                ]', latestVocabularyId);

        -- 4
        insert into "Vocabulary" (id, word)
        values (default, 'devil''s advocate')
        returning id
            into latestVocabularyId;

        insert into "Definition" (id, meaning, examples, "vocabularyId")
        values (default,
                'a person who expresses a contentious opinion in order to provoke debate or test the strength of the opposing arguments',
                '[
                  "The schoolmaster often played devil''s advocate with his students so that they could have an interesting discussion and look at other points of views."
                ]', latestVocabularyId);
    end;
$$;
