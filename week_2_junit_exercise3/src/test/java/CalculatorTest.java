import main.java.Calculator;
import org.junit.Test;
import static org.junit.Assert.*;


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
    public void assertrue(){
        assertTrue(5>3);
    }
    @Test
    public void asserfalse(){
        assertFalse(5<3);
    }
    @Test
    public void assernull(){
        assertNull(null);
    }
    @Test
    public void assertnonull(){
        assertNotNull(new Object());
    }

}