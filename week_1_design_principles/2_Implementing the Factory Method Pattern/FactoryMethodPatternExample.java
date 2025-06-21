package design_principles.exercise2;
import java.util.*;
interface Document {
    String createDocument();
}

class WordDoc implements Document {
    public String createDocument() {
        return "Word Document Created";
    }
}
class PdfDoc implements Document{
    public String createDocument() {
        return "PDF Document Created";
    }
}
class ExcelDoc implements Document{
    public String createDocument(){
        return "Excel Document Created";
    }
}
abstract class DocumentFactory{
    abstract Document document();
    
}
class WordFactory extends DocumentFactory {
    public Document document() {
        return new WordDoc();
    }
}
class PDFfactory extends DocumentFactory{
    public Document document(){
        return new PdfDoc();
    }
}
class Excelfactory extends DocumentFactory{
    public Document document(){
        return new ExcelDoc();
    }
}

public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentFactory d1=new WordFactory();
        Document doc1=d1.document();
        System.out.println(doc1.createDocument());

        DocumentFactory d2=new PDFfactory();
        Document doc2=d2.document();
        System.out.println(doc2.createDocument());

        DocumentFactory d3=new Excelfactory();
        Document doc3=d3.document();
        System.out.println(doc3.createDocument());
    }
}
