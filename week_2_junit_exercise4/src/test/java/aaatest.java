import main.java.Calculator;
import org.junit.Assert;
import org.junit.*;
import java.util.*;

public class aaatest {
    @Test
    @After
    public void aaa1(){
        //input arrange
        int a=10;
        int b=5;
        //declaring class-act
        Calculator c=new Calculator();
        //testing-assert
        Assert.assertEquals(15,c.add(a,b));
        System.out.println("On aaa1 test");
    }
    @Test
    @Before
    public void aaa2(){
        //input arrange
        int a=5;
        int b=2;
        //declaring class-act
        Calculator c=new Calculator();
        //testing-assert
        Assert.assertEquals(7,c.add(a,b));
        System.out.println("On aaa2 test");
    }
}
