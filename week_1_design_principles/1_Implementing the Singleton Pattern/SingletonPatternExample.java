package design_principles.exercise1;
import java.util.*;
// Singleton Pattern Example
class Logger{
    private static Logger instance;
    private Logger(){
        System.out.println("Logger initialized");
    }
    public static Logger getInstance(){
        if(instance==null){
            instance=new Logger();
        }
        return instance;
    }
}
public class SingletonPatternExample {

    public static void main(String[] args) {
        Logger l1=Logger.getInstance();
        Logger l2=Logger.getInstance();
        System.out.print(l1==l2);
    }
}