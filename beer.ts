class Beer {
    private name: string;
    private style: string;
    private ibu: number;
    private abv: number;

    constructor(name: string, style: string, ibu: number, abv: number) {
        this.name = name;
        this.style = style;
        this.ibu = ibu;
        this.abv = abv;
    }
    get _name(): string {
        return this.name;
    }
    about(): string {
        return `name ${this.name}, style ${this.style}, ibu ${this.ibu}, abv ${this.abv}`;

    }

}
let ipa: Beer = new Beer("Truth", "IPA", 72, 7.2);
console.log(ipa.about());
console.log(ipa._name);
