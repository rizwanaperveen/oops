class Book {
    title : string;
    author : string;
    static numOfBook = 0;
    constructor(title:string,author:string){
        this.title = title;
        this.author = author;
        Book.numOfBook += 1;
        console.log(Book.numOfBook);
    }
     printbook(){
        console.log(`The title of book is : ${this.title} and the author is : ${this.author}`);
    }
    numofbook(){
        return Book.numOfBook;
    }
}
class Ebook extends Book{
    filesize : number;
    constructor(title:string,author:string,filesize:number){
        super(title,author)
        this.filesize = filesize;
    }
    printbook(){
        console.log(`The title of book is : ${this.title}, the author is : ${this.author} and the filesize is ${this.filesize}`);
        
    }
}

const book1 = new Book("Moth Smoke","Mohsin Hamid");
const book2 = new Book("A Case of Exploding Mangoes","Mohammad Hanif")
console.log(book1.title);
book1.printbook();
book2.printbook();

const ebook1 = new Ebook("Kartography","Kamila Shamsie",400);
const ebook2 = new Ebook("Urdu Ki Akhri Kitaab","Ibn e Insha",3500);
console.log(ebook1.filesize);
ebook1.printbook();
ebook2.printbook();
console.log(ebook1);
console.log(ebook2);
console.log(ebook1.numofbook());
console.log(book1.numofbook());
