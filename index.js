function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language) {
    if (name, language) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
    } else if (name) {
        return `Hi, my name is ${name} and I am learning to program in JavaScript.`
    }
}