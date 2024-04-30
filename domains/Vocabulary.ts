interface Definition {
    id: string;
    meaning: string;
    examples:  string[];
}

interface Vocabulary {
    id: string;
    word: string;
    definitions: Definition[];
}
