
export class Berg{
    public id: string;
    public name: string;
    public elevation: number;
    public coordinates: {longitude: number; latitude: number};
    public srcPath: string;
    
    /**
     * Berg Konstruktor
     */
    constructor(
    id: string, 
    name: string, 
    elevation: number, 
    longitude: number,
    latitude: number, 
    srcPath: string) 
    {
        this.id = id;
        this.name = name;
        this.elevation = elevation;
        this.coordinates = {longitude: longitude, latitude: latitude};
        this.srcPath = srcPath;
    }
}