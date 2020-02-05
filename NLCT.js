var natural = require('natural');

var tokenizer = new natural.WordTokenizer();

var classifier = new natural.BayesClassifier();

var distance = natural.BrillPOSTagger;

classifier.addDocument('arquivado os autos definitivamente', 'encerrado');
classifier.addDocument('arquivamento definitivo', 'encerrado');
classifier.addDocument('acordo homologado entre as partes', 'passivel');
classifier.addDocument('celebrado acordo entre as partes', 'passivel');
classifier.addDocument('autos arquivados', 'outros');
classifier.addDocument('arquivado os autos', 'outros');
classifier.train();
classifier.getClassifications();

//console.log(tokenizer.tokenize("your dog has fless."));

//['your','dog','has','flees']

//console.log(natural.JaroWinklerDistance("a lei nº 13.709/18", "lei 6.514"));

console.log(natural.JaroWinklerDistance("porto seguro", "porto alegre"));

//console.log(natural.PorterStemmer.stem("palavras"));

//console.log(classifier.classify("arquivado os autos definitivamente"));

//console.log(classifier.classify("autos arquivados temporariamente"));