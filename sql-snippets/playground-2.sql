-- 2.1
select "Vocabulary".id,
       "Vocabulary".word,
       json_agg(json_build_object(
               'id', "Definition".id,
               'meaning', "Definition".meaning,
               'examples', "Definition".examples)) as definitions
from "Vocabulary"
         left join "Definition" on "Vocabulary".id = "Definition"."vocabularyId"
group by "Vocabulary".id, "Vocabulary".word
order by "Vocabulary".word;
