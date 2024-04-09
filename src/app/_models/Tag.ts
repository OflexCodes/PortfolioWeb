export class Tag{
    static readonly Angular = new Tag('Angular','red');
    static readonly TypeScript = new Tag('TypeScript','orange');
    static readonly JavaScript = new Tag('JavaScript','green');
    static readonly Java = new Tag('Java','purple');
    static readonly Python = new Tag('Python','pink');

    private constructor(private readonly key:string, public readonly color:string){

    }
    tostring(){
        return this.key;
    }
}