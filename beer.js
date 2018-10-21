var Beer = /** @class */ (function () {
    function Beer(name, style, ibu, abv) {
        this.name = name;
        this.style = style;
        this.ibu = ibu;
        this.abv = abv;
    }
    Object.defineProperty(Beer.prototype, "_name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Beer.prototype.about = function () {
        return "name " + this.name + ", style " + this.style + ", ibu " + this.ibu + ", abv " + this.abv;
    };
    return Beer;
}());
var ipa = new Beer("Truth", "IPA", 72, 7.2);
console.log(ipa.about());
console.log(ipa._name);
