export class KeyboardCharacters {
    static letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    static lowerCaseLetters = KeyboardCharacters.letters.toLowerCase()
    static numbers = '0123456789'
    static lettersAndNumbers =
        KeyboardCharacters.letters + KeyboardCharacters.numbers
    static specialCharacters = '!@#$%^&*()_+{}:"<>?|[];\',./`~'
}
