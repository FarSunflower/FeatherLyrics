function translate_decorator(func) {
    function wrapper() {
        var text = func.apply(this, arguments);
        var words_to_translate = text.split(" ").filter(function(word) {
            return word.length > 5;
        });

        var promises = words_to_translate.map(function(word) {
            var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=uk&dt=t&q=" + encodeURI(word);
            return fetch(url).then(function(response) {
                return response.json();
            }).then(function(data) {
                var translated_word = data[0][0][0];
                text = text.replace(word, word + " (" + translated_word + ")");
            });
        });

        return Promise.all(promises).then(function() {
            return text;
        });
    }

    return wrapper;
}

function display_lyrics(song) {
    var lyrics = song.lyrics;
    var translated_lyrics = translate_decorator(function() { return lyrics; })();
    // застосування декоратора
    translated_lyrics.then(function(result) {
        console.log(result);
        document.getElementById("lyrics").innerHTML = result;
    });
}
console.log("Hach");