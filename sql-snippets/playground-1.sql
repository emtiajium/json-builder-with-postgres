-- 1
select "Vocabulary".id as "vocabularyId",
       "Vocabulary".word,
       "Definition".id as "definitionId",
       "Definition".meaning,
       "Definition".examples
from "Vocabulary"
         left join "Definition" on "Vocabulary".id = "Definition"."vocabularyId"
order by "Vocabulary".word;

-- then run js-snippets/json-builder.js with the query response
