import main.java.Calculator;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        int result = calculator.add(3, 5);
        assertEquals(8, result);
        result = calculator.add(5, 5);
        assertEquals(10,result);
    }
    @Test
    public void testzero(){
        Calculator c=new Calculator();
        assertEquals(10,c.add(5,5));
    }
}
